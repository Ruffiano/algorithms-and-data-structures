class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor (head = null) {
        this.head = head;
        this.size = 0;
    }

    add(element) {
        this.head = new Node(element);
        let current;

        current = this.head;

        while(current.next) {
            current = current.next;
        }
        current.next = this.head;
        this.size ++;
    }


    insertAt(element, index) {
        if(index < 0 || index > this.size)
            return console.log("Please enter valid index!")
        
        else {
            let node = new Node(element);
            let current, previus;
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
            current = this.head;
            let i = 0;

            while(i < index) {
                i ++;
                previus = current;
                current = current.next;
            }

            node.next = current;
            previus.next = node;
        }
            this.size ++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size)
            return console.log("Please Enter a valid index");

        else {
            let current, previus, i = 0;
            current = this.head;
            previus = current

            if(index === 0) {
                this.head = current.next;
            } else {
                while(i < index) {
                    i++;
                    previus = current;
                    current = current.next;
                }

                previus.next = current.next;
            }
            this.size --;
            return current.element;
        }
    }

    printList() {
        let current = this.head;
        let str = "";
        while (current) {
            str += current.data;
            current = this.next;
        }
        console.log(str);
        console.log('size: ', this.size);
    }
}

let list = new LinkedList();

list.add(3);
list.add(4);
list.insertAt(5, 1);
list.removeFrom(1);
list.printList();
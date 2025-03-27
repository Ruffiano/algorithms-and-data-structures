import LinkedList from '../../linked-list/advanced/linked.list';

export default class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return !this.linkedList.head;
    }

    /**
     * @return {*}
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.linkedList.head.value;
    }

    /**
     * @param {*} value
     */
    push(value) {
        this.linkedList.add(value);
    }

    /**
     * @return {*}
     */
    pop() {
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    }
}
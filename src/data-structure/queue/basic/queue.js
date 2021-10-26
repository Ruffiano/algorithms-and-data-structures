export default class Queue {
    constructor() {
        this.index = 0;
        this.queue = [];
    }
    add(queue) {
        this.queue.push(queue);
        this.index++;
    }
    removeLast() {
        this.queue.splice(this.index - 1, 1)
    }
    receive() {
        if (this.queue.length) {
            this.index--;
            return this.queue.shift();
        }
    }
}
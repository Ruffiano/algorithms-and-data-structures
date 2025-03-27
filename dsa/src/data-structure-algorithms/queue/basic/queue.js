export default class Queue {
    constructor() {
        this.index = 0;
        this.queue = [];
    }
    //put value on end of queue
    add(queue) {
        this.queue.push(queue);
        this.index++;
    }
    //Remove value from last queue
    removeLast() {
        this.queue.splice(this.index - 1, 1)
    }
    //Take first value from queue
    receive() {
        if (this.queue.length) {
            this.index--;
            return this.queue.shift();
        }
    }
}
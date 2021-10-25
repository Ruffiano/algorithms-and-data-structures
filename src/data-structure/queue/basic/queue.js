export default class Queue {
    constructor(simultaneously = 1) {
        this.simultaneously = simultaneously;
        this.index = 0;
        this.queue = [];
    }
    async queue(func) {
        if (++this.index > this.simultaneously) {
            await new Promise(resolve => this.queue.push(resolve));
        }
        try {
            return func();
        } catch (error) {
            throw error;
        } finally {
            this.index--;
            if (this.queue.length) {
                this.queue.shift()();
            }
        }
    }
}

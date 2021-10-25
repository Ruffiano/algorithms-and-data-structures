import { expect, it } from "@jest/globals";
import Queue from "../queue";

const printNumber = async (n) => {
    await new Promise(res => setTimeout(res, 5000));
    console.log(n);
    return n;
}

// async function start() {
//     console.log('starting...');
//     const order = Queue();
//     order.queue(() => printNumber(1));
//     order.queue(() => printNumber(2));
//     order.queue(() => printNumber(3));
//     order.queue(() => printNumber(4));
//     order.queue(() => printNumber(5));
//     order.queue(() => printNumber(6));
// }


describe('Queue', () => {
    it('1-test', () => {
        const order = new Queue();
        order.queue(() => printNumber(1));
        expect(1).toBe(1);
    })
})
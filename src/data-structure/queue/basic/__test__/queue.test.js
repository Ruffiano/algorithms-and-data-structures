import { expect, it } from "@jest/globals";
import Queue from "../queue";


describe('Queue', () => {
    it('1-test add', () => {
        const queue = new Queue();
        queue.add('1');
        queue.add('2');
        queue.add('3');
        expect(queue.receive()).toBe("1");
    })

    it('2-test add', () => {
        const queue = new Queue();
        queue.add(3);
        queue.add(5);
        queue.add(1);
        expect(queue.receive()).toBe(3);
    })
    it('3-test', () => {
        const queue = new Queue();
        expect(queue.receive()).toBe(undefined);
    })
    it('4-test removeLast', () => {
        const queue = new Queue();
        queue.add(1);
        queue.add(2);
        queue.add(3);
        queue.removeLast();
        queue.receive();
        queue.receive();
        expect(queue.receive()).toBe(undefined);
    })
})
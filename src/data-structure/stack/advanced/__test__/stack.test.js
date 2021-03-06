import { expect, it } from "@jest/globals";
import Stack from '../stack';


describe('Stack', () => {
    it('should create empty stack', () => {
        const stack = new Stack();
        expect(stack).not.toBeNull();
        expect(stack.linkedList).not.toBeNull();
    });

    // it('should stack data to stack', () => {
    //     const stack = new Stack();

    //     stack.push(1);
    //     stack.push(2);

    //     expect(stack.toString()).toBe('2,1');
    // });

    it('should peek data from stack', () => {
        const stack = new Stack();

        expect(stack.peek()).toBeNull();

        stack.push(1);
        stack.push(2);

        expect(stack.peek()).toBe(1);
        expect(stack.peek()).toBe(1);
    });

    it('should check if stack is empty', () => {
        const stack = new Stack();

        expect(stack.isEmpty()).toBe(true);

        stack.push(1);

        expect(stack.isEmpty()).toBe(false);
    });

    it('should pop data from stack', () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(2);

        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBeNull();
        expect(stack.isEmpty()).toBe(true);
    });
});
import { expect, it } from "@jest/globals";
import LinkedList from "../linked.list";

describe('LinkedList', () => {
    it('1-test', () => {
        const linkedList = new LinkedList();
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
    })

    it('2-test add', () => {
        const linkedList = new LinkedList();
        linkedList.add(1)
        linkedList.add(2)
        linkedList.add(3)
        linkedList.add(4)
        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(4);
    })

    it('2-test delete', () => {
        const linkedList = new LinkedList();
        linkedList.add(1)
        linkedList.add(2) 
        linkedList.add(3)
        linkedList.delete(1)
        expect(linkedList.head.value).toBe(2);
    })

    it('3-test find', () => {
        const linkedList = new LinkedList();
        linkedList
        .add({value: 1})
        .add({value: 2})
        .add({value: 3, customValue: 'test3'})
        .add({value: 4, customValue: 'test4'})

        let find = linkedList.find({
            value: 2
        })
        
        expect(find.value).toBe(2);
    })
})
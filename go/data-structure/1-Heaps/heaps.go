package main

import (
	"container/heap"
	"fmt"
)

// integerHeap a type
type IntegerHeap []int

// IntegerHeap method - gets the length of inegerHeap
func (iheap IntegerHeap) Len() int { return len(iheap) }

// IntegerHeap method - checks if element of i index is less than j index
func (iheap IntegerHeap) Less(i, j int) bool { return iheap[i] < iheap[j] }

// IntegerHeap method -swap the element of to j index
func (iheap IntegerHeap) Swap(i, j int) { iheap[i], iheap[j] = iheap[j], iheap[i] }

// InegerHeap method - pushes the item
func (iheap *IntegerHeap) Push(heapintf interface{}) {
	*iheap = append(*iheap, heapintf.(int))
}

// IntegerHeap method -pops the item from the heap
func (iheap *IntegerHeap) Pop() interface{} {
	var n int
	var x1 int
	var previous IntegerHeap = *iheap
	n = len(previous)
	x1 = previous[n-1]
	*iheap = previous[0 : n-1]
	return x1
}

func main() {
	var intHeap *IntegerHeap = &IntegerHeap{1, 4, 5}
	heap.Push(intHeap, 2)
	fmt.Printf("Minimum: %d\n ", (*intHeap)[0])
	for intHeap.Len() > 0 {
		fmt.Printf("%d \n ", heap.Pop(intHeap))
	}
}

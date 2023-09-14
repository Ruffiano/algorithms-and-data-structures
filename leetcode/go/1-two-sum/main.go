package main

import "fmt"
/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/


func twoSum(nums []int, target int) []int {
	count := 1
    for index, num := range nums {
		for i := count; i < len(nums); i++ {
			if num + nums[i] == target {
				return []int{index, i}
			}
		}
		count ++;
	}
	return []int{0,0}
}


func main() {
	nums := []int{2,5,5,11}
	target := 10
	res := twoSum(nums, target)
	fmt.Print("res: ", res)
}
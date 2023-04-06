package main

import (
	"fmt"
)

func checkPalindrome(num int) bool {
	_num := num
	var remainder int
	res := 0
	for num > 0 {
		remainder = num % 10
		res = (res * 10) + remainder
		num = num / 10
	}
	if _num == res {
		return true
	} else {
		return false
	}
}

func main() {
	fmt.Println(checkPalindrome(121))
	fmt.Println(checkPalindrome(123))
	fmt.Println(checkPalindrome(1331))
	fmt.Println(checkPalindrome(1231))
}

package main

import (
	"fmt"
)

func romanToInt(roman string) int {
	romanToInt := map[byte]int{'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
	var result int
	var prev int
	for i := len(roman) - 1; i >= 0; i-- {
		current := romanToInt[roman[i]]
		if current >= prev {
			result += current
		} else {
			result -= current
		}
		prev = current
	}
	return result
}

func main() {
	var rn = romanToInt("XVIII")
	fmt.Println(rn) // Output: 18
}

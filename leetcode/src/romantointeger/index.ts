function longestCommonPrefix(strs: string[]): string {
  strs.forEach((element) => {
      for(let i = 0; i < element.length; i++) {
          console.log(element[i])
      }
  })
  return strs[0]
};

console.log(longestCommonPrefix(["flower","flow","flight"]))

/*
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/
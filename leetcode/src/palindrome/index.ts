function isPalindrome(x: number): boolean {
    if(x < 0) return false
    let str = x.toString();
    let left = 0;
    let right = str.length-1;
    while(left < right) {
        if(str[left] !== str[right]) return false
        left++
        right--
    }
    return true
}

console.log(isPalindrome(121))
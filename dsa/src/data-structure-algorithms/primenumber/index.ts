function isPrimeNumber(n: number) {
    if(n < 2) {
        return false
    }
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false
        } 
    }
    return true
}


console.log(isPrimeNumber(3)) // true
console.log(isPrimeNumber(5)) // true
console.log(isPrimeNumber(4)) // false
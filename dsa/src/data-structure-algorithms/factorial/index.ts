function factorial(n: number) {
    let f = 1;
    for(let i = 2; i <= n; i++) {
        f = f * i;
    }
    return f;
}

console.log(factorial(4)); // 4*3*2*1 = 24
console.log(factorial(5)); // 5*4*3*2*1 = 120


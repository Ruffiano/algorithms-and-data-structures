function fibonacci(n: number) {
    const f = [0, 1];
    for (let i = 2; i<n; i++) {
        f[i] = f[i-1] + f[i-2];
    }
    return f;
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))
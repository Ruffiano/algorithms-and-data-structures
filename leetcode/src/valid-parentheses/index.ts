function isValid(s: string): boolean {
    const stack: string[] = [];
    const mapping: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for(let char of s) {
        console.log(char)
        if(char in mapping) {
            const topElement = stack.length > 0 ? stack.pop()! : '#';
            if (mapping[char] !== topElement) {
                return false
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0 // return true
}

console.log(isValid("{[]}"))
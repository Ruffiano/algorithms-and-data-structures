// Vazifa 1: Juft sonlarni chiqaruvchi funksiya 
// odiy usul
export function getEvenNumbers1(arr: number[]): number[] {
    const result: number[] = [];
    for(let num of arr) {
        if (num % 2 === 0) {
            result.push(num)
        }
    }
    return result;
}

// optimal usul
export function getEvenNumbers2(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers2([1, 2, 3, 4, 5, 6]));



// Vazifa 2: Ikki massivni birlashtirish va tartiblash
// odiy usul
export function mergeAndSort1(arr1: number[], arr2: number[]): number[] {
    const temp: number[] = [];
    arr1.forEach(num => temp.push(num));
    arr2.forEach(num => temp.push(num));
    temp.sort((a, b) => a - b);
    return temp
}

// optimal usul
export function mergeAndSort2(arr1: number[], arr2: number[]): number[] {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    return merged
}
console.log(mergeAndSort2([3, 1, 4], [5, 2]));

// Vazifa 3: Takrorlanadigan qiymatlarni hisoblash
// odiy usuli
export function countOccurrences1(arr: number[]): { [key: number]: number } {
    let count = {};
    for(let num of arr) {
        if(count[num]) {
            count[num]++;
        }else {
            count[num] = 1
        }
    }
    return count
}
console.log(countOccurrences1([1, 2, 2, 3, 3, 3, 4]));

export function countOccurrences2(arr: number[]): Map<number, number> {
    const count = new Map<number, number>();
    for (let num of arr) {
        if (count.has(num)) {
            count.set(num, count.get(num)! + 1);
        } else {
            count.set(num, 1);
        }
    }
    return count;
}

console.log([...countOccurrences2([1, 2, 2, 3, 3, 3, 4])]);
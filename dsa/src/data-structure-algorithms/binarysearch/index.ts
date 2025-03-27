function binarySearch(arr: number[], target: number): number {
    let leftIndex = 0;
    let rightIndex = arr.length;
    
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2) 
        if (target === arr[middleIndex]) {
            return middleIndex
        }
        if(target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        }
        else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}


// console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
// console.log(binarySearch([-1, 3, 5, 6, 1], 5)); // 2


function recursiveBinarySearch(arr: number[], target: number) {
    return search(arr, target, 0, arr.length - 1);
}

function search(arr: number[], target: number, leftIndex: number, rightIndex: number) {
    if (leftIndex > rightIndex) {
        return - 1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
        return middleIndex
    }
    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1)
    }
    else {
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-1, 3, 5, 6, 1], 5)); // 2
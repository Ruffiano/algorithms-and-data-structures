function linerSearch(arr: number[], target: number) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}


console.log(linerSearch([-5, 2, 20, 4, 5], 5)) //4
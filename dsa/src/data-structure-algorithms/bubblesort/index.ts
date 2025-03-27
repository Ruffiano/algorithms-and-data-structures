// function bubbleSort(arr: number[]) {
//     let swapped: boolean;
//     do {
//         swapped = false;
//         for(let i = 0; i < arr.length -1; i++) {
//             if(arr[i] > arr[i+1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     } while(swapped)
// }

// const arr = [8, 20, -2, 4, -6]
// bubbleSort(arr)
// console.log(arr) //[-6, -2, 4, 8, 20]

// function twoSum(nums: number[], target: number): number[] {
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return [];
// };

// console.log(twoSum([2, 7, 11, 15], 11))

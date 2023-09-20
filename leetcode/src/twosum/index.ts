function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i <= nums.length; i++) {
        for(let j = i + 1; j <= nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
};

console.log(twoSum([2,5,5,3], 10)); // [ 1, 2 ]
console.log(twoSum([2,3,7,5,3,8,9,1,4,6], 12)); // [ 1, 6 ]
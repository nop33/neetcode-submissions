class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const previousIndexesMap = new Map()

        for(let i = 0; i < nums.length; i++) {
            const num = nums[i]
            const diff = target - num
            if (previousIndexesMap.has(diff)) {
                return [previousIndexesMap.get(diff), i]
            }

            previousIndexesMap.set(num, i)
        }
    }
}

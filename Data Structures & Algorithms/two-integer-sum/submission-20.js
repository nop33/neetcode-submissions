class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for (let j = 0; j <= nums.length; j++) {
            const diff = target - nums[j]
            const i = map.get(diff)
            if (i !== undefined) {
                return [i, j]
            }
            map.set(nums[j], j)
        }
    }
}

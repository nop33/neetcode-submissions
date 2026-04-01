class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = {}
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]
            const di = m[diff]
            if (di !== undefined && di !== i) return [di, i]
            m[nums[i]] = i
        }
    }
}

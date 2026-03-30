class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const results = []
        for (let i = 0; i < nums.length; i++) {
            results[i] = i === 0 ? 1 : results[i-1] * nums[i-1]
        }
        let lastPostfix = 1
        for (let i = nums.length - 1; i >= 0; i--) {
            const postfix = i === nums.length - 1 ? 1 : lastPostfix * nums[i+1]
            lastPostfix = postfix
            results[i] = results[i] * postfix
        }
        return results
    }
}

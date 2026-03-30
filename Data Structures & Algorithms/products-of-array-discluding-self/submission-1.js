class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixes = []
        const postfixes = []
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                prefixes[0] = 1
            } else {
                prefixes[i] = prefixes[i-1] * nums[i-1]
            }
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                postfixes[nums.length - 1] = 1
            } else {
                postfixes[i] = postfixes[i+1] * nums[i+1]
            }
        }
        console.log({prefixes,postfixes})

        const results = []
        for (let i = 0; i < nums.length; i++) {
            results[i] = prefixes[i] * postfixes[i]
        }
        console.log({results})
        return results
    }
}

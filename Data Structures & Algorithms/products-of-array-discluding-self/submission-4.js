class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // const prefixes = []
        const postfixes = []
        const results = []
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                results[0] = 1
            } else {
                results[i] = results[i-1] * nums[i-1]
            }
        }
        let lastPostfix = 1
        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                postfixes[nums.length - 1] = 1
            } else {
                postfixes[i] = lastPostfix * nums[i+1]
                lastPostfix = postfixes[i]
            }


        }
        console.log({results,postfixes})

        for (let i = nums.length - 1; i >= 0; i--) {
            results[i] = results[i] * postfixes[i]
        }
        console.log({results})
        return results
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)
        const uniq = new Set()
        for (let i = 0; i < nums.length; i++) {
            // if (i > 0 && nums[i] === nums[i - 1]) continue
            let target = -1 * nums[i]
            let j = i + 1
            let k = nums.length - 1
            const sum = nums[j] + nums[k]
            while (j < k) {
                const sum = nums[j] + nums[k]
                if (sum === target) {
                    uniq.add(JSON.stringify([nums[i], nums[j], nums[k]]))
                    j++
                } else if (sum > target) {
                    k--
                } else {
                    j++
                }
            }
        }
        return Array.from(uniq).map(JSON.parse)
    }
}

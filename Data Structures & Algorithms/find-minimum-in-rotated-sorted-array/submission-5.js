class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length - 1
        if (nums[l] < nums[r] || nums.length === 1) return nums[0]
        while (l !== r) {
            let m = Math.floor((r - l) / 2) + l
            if (nums[m] < nums[l]) {
                r = m
            } else if (nums[m] > nums[l]) {
                l = m
            } else {
                return nums[r]
            }
        }
    }
}
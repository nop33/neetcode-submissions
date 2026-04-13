class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // [6,7,0,1,2,4,5]
        // target: 0
        if (!nums.length) return -1
        if (nums.length === 1 && nums[0] === target) return 0
        let l = 0, r = nums.length -1, m
        while (l <= r) {
            m = Math.floor((r - l) / 2) + l
            if (nums[m] === target) return m
            // We are on left portion
            if (nums[l] <= nums[m]) {
                if (target > nums[m] || target < nums[l]) {
                    l = m + 1
                } else {
                    r = m - 1
                }
            //  We are on right portion
            } else {
                if (target < nums[m] || target > nums[r]) {
                    r = m - 1
                } else {
                    l = m + 1
                }
            }
        }
        return nums[l] === target ? l : -1
    }
}

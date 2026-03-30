class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0
        let end = nums.length - 1

        if (nums.length === 1) return nums[0] === target ? 0 : -1

        while (start <= end) {
        // for (let x = 0; x <=10; x++) {
            let mid = Math.floor((end - start) / 2) + start

            console.log({start, mid, end})

            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] > target) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }

        return -1
    }
}

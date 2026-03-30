class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const h = new Set(nums)
        const l = [0]
        for (const num of nums) {
            if (!h.has(num - 1)) {
                let count = 1
                let nextNum = num
                while (h.has(++nextNum)) {
                    count++
                }
                l.push(count)
            }
        }

        return Math.max(...l)
    }
}

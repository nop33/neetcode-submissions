class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0
        const h = new Set(nums)
        const s = {}
        for (const num of nums) {
            if (!h.has(num - 1)) {
                s[num] = 1
            }
        }
        for (const b in s) {
            let num = Number(b)
            let nextNum = num + 1
            while (h.has(nextNum)) {
                s[b] = s[b] + 1
                nextNum += 1
            }
        }
        console.log('Object.values(s)', Object.values(s))
        return Math.max(...Object.values(s))
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0
        const h = new Set(nums)
        const s = {}
        const l = []
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
        // for (const b in s) {
        //     let num = Number(b)
        //     let nextNum = num + 1
        //     while (h.has(nextNum)) {
        //         s[b] = s[b] + 1
        //         nextNum += 1
        //     }
        // }

        return Math.max(...l)
    }
}

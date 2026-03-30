class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seq = new Map()
        let max = 0
        for (let num of nums) {
            if (!seq.has(num)) {
                seq.set(
                    num,
                    (seq.get(num - 1) ?? 0) + (seq.get(num + 1) ?? 0) + 1
                )
                seq.set(num - (seq.get(num - 1) ?? 0), seq.get(num))
                seq.set(num + (seq.get(num + 1) ?? 0), seq.get(num))
                max = Math.max(max, seq.get(num))
            }
        }
        return max
    }
}

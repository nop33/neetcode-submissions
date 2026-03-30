class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seq = new Map()
        let max = 0
        for (let num of nums) {
            if (seq.has(num)) continue
            const prevLength = seq.get(num - 1) ?? 0
            const nextLength = seq.get(num + 1) ?? 0
            const newLength = prevLength + nextLength + 1
            const seqStart = num - prevLength
            const seqEnd = num + nextLength
            seq.set(num, newLength)
            seq.set(seqStart, newLength)
            seq.set(seqEnd, newLength)
            max = Math.max(max, newLength)
        }

        return max
    }
}

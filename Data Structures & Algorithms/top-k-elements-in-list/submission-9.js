class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        for (const num of nums) {
            count[num] = (count[num] ?? 0) + 1
        }
        const freq = Array.from({ length: nums.length + 1}, ()=>[])
        for (const num in count) {
            const f = count[num]
            freq[f].push(parseInt(num))
        }
        console.log('freq', freq)
        const r = []
        for (let i = freq.length - 1; i>0; i--) {
            for (const num of freq[i]) {
                r.push(num)
                if (r.length === k) {
                    return r
                }
            }
        }
    }
}

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
        const res = Object.entries(count).sort(([key1, val1], [key2, val2]) => val2 - val1)
        const ret = []
        for (let i = 0; i < k; i++) {
            ret.push(res[i][0])
        }
        return ret
    }
}

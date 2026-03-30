class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = {}
        for (const num of nums) {
            frequency[num] = (frequency[num] ?? 0) + 1
        }
        const sorted = Object.entries(frequency).toSorted((a, b) => b[1] - a[1])
        return sorted.slice(0, k).map(([key]) => key)
    }
}

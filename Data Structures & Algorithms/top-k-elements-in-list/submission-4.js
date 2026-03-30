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
        const countArray = new Array(nums.length + 1)

        for (const [num, count] of Object.entries(frequency)) {
            countArray[count] = [...(countArray[count] ?? []), num]
        }

        const topK = []
        for (let i = nums.length + 1; i >= 0; i--) {
            if (countArray[i]) {
                topK.push(...countArray[i])
            }

            if (topK.length === k) {
                return topK
            }
        }
    }
}

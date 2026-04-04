class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let h = heights, max = 0, i = 0, j = h.length - 1
        while (i < j) {
            const newMax = Math.min(h[i], h[j]) * (j - i)
            if (newMax > max) max = newMax
            if (h[i] < h[j]) i++
            else if (h[i] > h[j]) j--
            else i++
        }
        return max
    }
}

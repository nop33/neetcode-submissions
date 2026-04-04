class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const h = heights
        // max amount of container means max(min(h[i],[j]) * (j - i) )
        // brute force would to try all pairs
        let max = 0
        for (let i = 0; i < h.length; i++) {
            for (let j = i; j < h.length; j++) {
                const newMax = Math.min(h[i], h[j]) * (j - i)
                if (newMax > max) max = newMax
            }
        }
        return max
    }
}

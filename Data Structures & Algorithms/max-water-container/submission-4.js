class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const h = heights
        // max amount of container means max(min(h[i],[j]) * (j - i) )
        let max = 0
        // brute force would to try all pairs
        // for (let i = 0; i < h.length; i++) {
        //     for (let j = i; j < h.length; j++) {
        //         const newMax = Math.min(h[i], h[j]) * (j - i)
        //         if (newMax > max) max = newMax
        //     }
        // }
        let i = 0, j = h.length - 1
        while (i < j) {
            // while (h[i + 1] > h[i] + 1) i++
            // while (h[j - 1] > j[j] + 1) j--
            const newMax = Math.min(h[i], h[j]) * (j - i)
            if (newMax > max) max = newMax
            if (h[i] < h[j]) i++
            else if (h[i] > h[j]) j--
            else i++
        }
        return max
    }
}

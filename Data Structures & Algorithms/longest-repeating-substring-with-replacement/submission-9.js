class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let max = 0, l = 0, highestFreq = 0
        const c = {}

        for (let r = 0; r < s.length; r++) {
            c[s[r]] = (c[s[r]] ?? 0) + 1
            highestFreq = Math.max(highestFreq, c[s[r]])
            let windowLength = r - l + 1
            while (windowLength - highestFreq > k) {
                c[s[l]]--
                l++
                windowLength = r - l + 1
            }
            if (windowLength - highestFreq <= k) {
                max = Math.max(windowLength, max)
            }
        }

        return max
    }
}

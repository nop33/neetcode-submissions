class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let max = 0, l = 0
        const c = {}


        const findHighestFreq = () => {
            let localMax = 0
            for (const char in c) {
                localMax = Math.max(localMax, c[char])
            }
            return localMax
        }

        for (let r = 0; r < s.length; r++) {
            c[s[r]] = (c[s[r]] ?? 0) + 1
            let windowLength = r - l + 1
            if (windowLength - findHighestFreq() <= k) {
                max = Math.max(windowLength, max)
            } else {
                while (windowLength - findHighestFreq() > k) {
                    c[s[l]]--
                    l++
                    windowLength = r - l + 1
                }
            }
        }

        return max
    }
}

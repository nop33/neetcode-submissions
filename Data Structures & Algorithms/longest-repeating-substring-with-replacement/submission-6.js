class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let max = 0, l = 0
        const c = {}


        const findMostFreq = () => {
            let mostFreq
            let localMax = 0
            for (const char in c) {
                if (c[char] > localMax) {
                    localMax = c[char]
                    mostFreq = char
                }
            }
            return mostFreq
        }

        for (let r = 0; r < s.length; r++) {
            c[s[r]] = (c[s[r]] ?? 0) + 1
            let windowLength = r - l + 1
            if (windowLength - c[findMostFreq()] <= k) {
                max = Math.max(windowLength, max)
            } else {
                while (windowLength - c[findMostFreq()] > k) {
                    c[s[l]]--
                    l++
                    windowLength = r - l + 1
                }
            }
        }

        return max
    }
}

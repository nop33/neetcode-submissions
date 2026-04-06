class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0
        let subs = ''
        let uniqSubSet
        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                if (s[j + 1] === s[i]) break
                subs = s.substring(i, j + 1)
                uniqSubSet = new Set(subs)
                if (subs.length === uniqSubSet.size) {
                    max = Math.max(max, subs.length)
                }
            }
        }
        return max
    }
}

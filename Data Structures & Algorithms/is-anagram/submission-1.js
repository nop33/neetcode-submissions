class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const sortedS = s.split('').sort()
        const sortedT = t.split('').sort()
        return sortedS.every((char, index) => char === sortedT[index])
    }
}

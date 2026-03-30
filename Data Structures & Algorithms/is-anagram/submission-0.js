class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const newS = s.split('').sort().toString()
        const newT = t.split('').sort().toString()

        return newS === newT
    }
}

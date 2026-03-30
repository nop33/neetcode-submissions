class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const ss = {}
        const tt = {}
        for (let i = 0; i < s.length; i++) {
            const char1 = s[i]
            const char2 = t[i]
            ss[char1] = (ss[char1] ?? 0) + 1
            tt[char2] = (tt[char2] ?? 0) + 1
        }
        for (const key in ss) {
            if(ss[key] !== tt[key]) return false
        }
        return true
    }
}

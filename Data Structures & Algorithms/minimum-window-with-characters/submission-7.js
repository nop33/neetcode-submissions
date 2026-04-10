class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const f = {}
        const additional = {}
        const set = new Set()
        let l, r, min = '', have = 0, need = t.length
        
        for (const c of t) {
            f[c] = (f[c] ?? 0) + 1
            set.add(c)
        }

        const checkCondition = () => {
            if (have >= need) {
                const str = s.substring(l, r + 1)
                min = !min.length ? str : str.length < min.length ? str : min
                if (additional[s[l]]) additional[s[l]]--
                else have--
                
                f[s[l]]++
                l++
                
                while (!set.has(s[l])) {
                    l++
                    if (l >= s.length) return
                }
                checkCondition()
            }
        }

        for (let i = 0; i < s.length; i++) {
            f[s[i]] = (f[s[i]] ?? 0) - 1
            if (set.has(s[i])) {
                if (f[s[i]] < 0) additional[s[i]] = (additional[s[i]] ?? 0) + 1
                else have++
                
                if (l === undefined) l = i
                r = i
                checkCondition()
            }
        }

        return min
    }
}

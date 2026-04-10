class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const count = {}
        const additional = {}
        const tSet = new Set()
        let l, r, min = '', have = 0, need = t.length
        
        for (const c of t) {
            count[c] = (count[c] ?? 0) + 1
            tSet.add(c)
        }

        const checkCondition = () => {
            if (have === need) {
                const str = s.substring(l, r + 1)
                min = !min.length ? str : str.length < min.length ? str : min
                if (additional[s[l]]) additional[s[l]]--
                else have--

                count[s[l]]++
                l++
                
                while (!tSet.has(s[l])) {
                    l++
                    if (l >= r) return
                }
                checkCondition()
            }
        }

        for (let i = 0; i < s.length; i++) {
            count[s[i]] = (count[s[i]] ?? 0) - 1
            if (tSet.has(s[i])) {
                if (count[s[i]] < 0) additional[s[i]] = (additional[s[i]] ?? 0) + 1
                else have++
                
                if (l === undefined) l = i
                r = i
                checkCondition()
            }
        }

        return min
    }
}

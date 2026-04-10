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
        for (const c of t) {
            f[c] = (f[c] ?? 0) + 1
            set.add(c)
        }

        let l, r, min = '', have = 0, need = t.length

        const checkCondition = () => {
            // if (Object.values(f).every((v) => v <= 0)) {
            if (have >= need) {
                const str = s.substring(l, r + 1)
                min = !min.length ? str : str.length < min.length ? str : min
                console.log({have,need,str,min})
                f[s[l]]++
                l++
                if (additional[s[l-1]]) {
                    additional[s[l-1]]--
                } else {
                    have--
                }
                while (!set.has(s[l])) {
                    l++
                    if (l >= s.length) return
                }
                checkCondition()
            }
        }

        for (let i = 0; i < s.length; i++) {
            console.log({i,'i:': s[i],l,r,min,have})
            f[s[i]] = (f[s[i]] ?? 0) - 1
            if (set.has(s[i])) {
                if (f[s[i]] < 0) {
                    additional[s[i]] = (additional[s[i]] ?? 0) + 1
                } else {
                    have++
                }
                console.log({i,have, additional})
                if (l === undefined) l = i
                r = i
                checkCondition()
            }
        }

        return min
    }
}

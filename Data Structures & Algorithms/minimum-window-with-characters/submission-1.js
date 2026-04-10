class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const f = {}
        const set = new Set()
        for (const c of t) {
            f[c] = (f[c] ?? 0) + 1
            set.add(c)
        }
        console.log({f})
        let l, r, min = ''

        const checkCondition = () => {
            if (Object.values(f).every((v) => v <= 0)) {
                const str = s.substring(l, r + 1)
                min = !min.length ? str : str.length < min.length ? str : min
                console.log({str, min})
                f[s[l]]++
                l++
                while (!set.has(s[l])) {
                    l++
                    if (l >= s.length) return
                }
                console.log({f})
                checkCondition()
            }
        }

        for (let i = 0; i < s.length; i++) {
            console.log({ i, l, r, min})
            f[s[i]] = (f[s[i]] ?? 0) - 1
            if (set.has(s[i])) {
                if (l === undefined) l = i
                r = i
                checkCondition()
            }
        }



        return min
    }
}

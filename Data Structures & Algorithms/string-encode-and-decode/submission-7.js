class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let r = ''
        for (const str of strs) {
            r += `${str.length}|${str}`
        }
        return r
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let l = 0
        let r = 1
        const res = []

        while (r < str.length) {
            while (str[r] !== '|') r++
            const num = Number(str.substring(l, r))
            const s = str.substring(r + 1, r + num + 1)
            res.push(s)
            l = r + num + 1
            r = l + 1
        }
        return res
    }
}

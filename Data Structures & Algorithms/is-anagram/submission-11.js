class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const mapS = new Map()
        const mapT = new Map()
        for (let i = 0; i < s.length; i++) {
            mapS.set(s[i], (mapS.get(s[i]) ?? 0) + 1)
            mapT.set(t[i], (mapT.get(t[i]) ?? 0) + 1)
        }
        return mapS.entries().every(([key, value]) => mapT.get(key) === value)
        // const res2 = mapT.entries().every(([key, value]) => mapS.get(key) === value)

        // return res1 && res2
    }
}

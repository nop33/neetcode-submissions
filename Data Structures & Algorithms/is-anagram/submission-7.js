class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // O(nlogn + mlogm)
        // return s.split('').sort().toString() === t.split('').sort().toString()

        // O(n + m) time, O(1) space (only 26 letters)
        const mapS = new Map()
        const mapT = new Map()
        for (const char of s) {
            mapS.set(char, (mapS.get(char) ?? 0) + 1)
        }
        for (const char of t) {
            mapT.set(char, (mapT.get(char) ?? 0) + 1)
        }

        console.log(mapS)
        console.log(mapT)

        return mapS.size === mapT.size && mapS.entries().every(([key, val]) => {
            return mapT.get(key) === val
        })

 
    }
}

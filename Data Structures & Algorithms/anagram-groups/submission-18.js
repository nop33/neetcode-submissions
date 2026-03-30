class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}
        const aCharCode = 'a'.charCodeAt()
        for (const str of strs) {
            const idArray = Array(26).fill(0)
            for (const char of str) {
                const idx = char.charCodeAt() - aCharCode
                // console.log('idx', idx)
                idArray[idx] = (idArray[idx] ?? 0) + 1
                // console.log('idArray', idArray)
            }
            if (map[idArray]) {
                map[idArray].push(str)
            } else {
                map[idArray] = [str]
            }
        }
        return Object.values(map)
    }
}

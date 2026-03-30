class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const aCharCode = 'a'.charCodeAt()
        const hashmap = {}
        for (const str of strs) {
            const x = Array(26).fill(0)
            for (const char of str) {
                const index = char.charCodeAt() - aCharCode
                x[index] = x[index] + 1
            }
            if (!hashmap[x]) {
                hashmap[x] = [str]
            } else {
                hashmap[x].push(str)
            }
        }
        return Object.values(hashmap)
    }
}

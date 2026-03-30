class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const aCharCode = 'a'.charCodeAt(0)
        const results = {}
        for (const str of strs) {
            const arr = new Array(26).fill(0)
            for (const char of str) {
                const index = char.charCodeAt(0) - aCharCode
                arr[index]+=1
            }
            const key = arr.join()
            if (results[key]) {
                results[key].push(str)
            } else {
                results[key] = [str]
            }
        }

        return Object.values(results)
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const lengths = []
        for (const str of strs) {
            lengths.push(str.length)
        }
        return `${lengths.join(',')}|${strs.join('')}`
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const delimeterIndex = str.indexOf('|')
        if (delimeterIndex === 0) return []
        const lengths = str.substring(0, delimeterIndex).split(',').map(Number)
        let startIndex = delimeterIndex + 1
        const result = []
        for (const length of lengths) {
            result.push(str.substring(startIndex, startIndex + length))
            startIndex += length
        }
        return result
    }
}

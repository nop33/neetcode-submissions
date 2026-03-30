class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // All array items need to be concatinated to a string
        // What delimeter do I use so I can split it again?
        // I need to make sure I don't confuse a string char for a delimeter
        // Can I use numbers?
        // Maybe I can start the string with a list of indexes where the strings should be split
        // Or with the length of each string
        const strLengths = []
        for(let i = 0; i < strs.length; i++) {
            const str = strs[i]
            strLengths.push(str.length)
        }
        const lengthsPrefix = `[${strLengths.join(',')}]`
        const encodedStr = `${lengthsPrefix}${strs.join('')}`
        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // We look for the lengths prefix
        // and then we split the string
        if (str.length === 2 ) return []
        console.log({str})
        const prefixEnd = str.indexOf(']')
        const prefix = str.substring(1, prefixEnd)
        const lengths = prefix.split(',').map(Number)
        console.log({ prefix })
        const encodedStr = str.substring(prefixEnd + 1)
        const decodedStrs = []
        console.log({encodedStr})
        let startPointer = 0
        for (const length of lengths) {
            const nextWord = encodedStr.substring(startPointer, startPointer+length)
            console.log({ startPointer, length, nextWord })
            // if (nextWord) 
            decodedStrs.push(nextWord)
            startPointer += length
        }
        console.log({decodedStrs})
        return decodedStrs
    }
}

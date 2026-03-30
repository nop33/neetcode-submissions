class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // I'll iterate over the string with 2 points, on in the beginning and one at the end
        // If I find a space or number, I'll move the pointer further
        // As long as the pointers have the same value, I move both of them one step
        // If the pointers point to the same item, I've reached the center
        const cleanS = s.split('').filter(this.isAlphanumeric)
        if (!cleanS.length) return true

        console.log({cleanS})
        let end = cleanS.length - 1
        for (let start = 0; start < cleanS.length; start++) {
            if (start >= end) return true
            if (cleanS[start].toLowerCase() !== cleanS[end].toLowerCase()) {
                return false
            }
            end--
        }
    }

    isAlphanumeric(c) {
        const lowerC = c.toLowerCase()
        const cCode = lowerC.charCodeAt()
        return (cCode >= 'a'.charCodeAt() && cCode <= 'z'.charCodeAt()) || (cCode >= '0'.charCodeAt() && cCode <= '9'.charCodeAt())
    }
}

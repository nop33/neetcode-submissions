class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanS = s.split('').filter(this.isAlphanumeric)
        if (!cleanS.length) return true
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
        
        return (cCode >= 'a'.charCodeAt() && cCode <= 'z'.charCodeAt()) ||
               (cCode >= '0'.charCodeAt() && cCode <= '9'.charCodeAt())
    }
}

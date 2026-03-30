class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length - 1
        while (l < r) {
            if (!this.isAlphanumeric(s[l])) {
                l++
                continue
            }
            if (!this.isAlphanumeric(s[r])) {
                r--
                continue
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false
            l++
            r--
        }
        return true
    }

    isAlphanumeric(c) {
        return c.match(/^[a-z0-1]+$/i)
    }
}

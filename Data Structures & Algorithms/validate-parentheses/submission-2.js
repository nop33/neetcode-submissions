class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        for (const char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char)
            } else if (char === ')' || char === '}' || char === ']') {
                const opening = stack.pop()
                if (char === ')' && opening !== '(') return false
                if (char === '}' && opening !== '{') return false
                if (char === ']' && opening !== '[') return false
            }
        }
        return stack.length === 0
    }
}

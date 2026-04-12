class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        for (const c of s) {
            if (c == '(' || c == '{' || c == '[') stack.push(c)
            else {
                const top = stack.pop()
                if (c === ')' && top !== '(') return false
                if (c === '}' && top !== '{') return false
                if (c === ']' && top !== '[') return false
            }
        }
        return stack.length === 0
    }
}

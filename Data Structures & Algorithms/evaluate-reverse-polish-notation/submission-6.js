class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        for (const token of tokens) {
            if (token === '+') {
                stack.push(stack.pop() + stack.pop())
            } else if (token === '-') {
                const second = stack.pop()
                const first = stack.pop()
                stack.push(first - second)
            } else if (token === '*') {
                stack.push(stack.pop() * stack.pop())
            } else if (token === '/') {
                const second = stack.pop()
                const first = stack.pop()
                stack.push(parseInt(first / second))
            } else {
                stack.push(parseInt(token))
            }
        }
        return stack[0]
    }
}

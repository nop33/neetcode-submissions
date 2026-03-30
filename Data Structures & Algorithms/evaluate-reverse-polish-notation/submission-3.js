class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        tokens.reverse()

        while (tokens.length > 1) {
            console.log({tokens})
            let item
            const opStack = []
            while (item !== '+' && item !== '-' && item !== '*' && item !== '/') {
                item = tokens.pop()
                opStack.push(item)
            }

            let op = opStack.pop()
            const second = parseInt(opStack.pop())
            const first = parseInt(opStack.pop())

            console.log({op,first,second})

            let opResult
            switch (op) {
                case '+':
                    opResult = first + second
                    break
                case '-':
                    opResult = first - second
                    break
                case '*':
                    opResult = first * second
                    break
                case '/':
                    opResult = parseInt(first / second)
                    break
            }
            
            opStack.push(opResult)
            tokens.push(...opStack.reverse())

            console.log({opStack})
            console.log({tokens})

        }

        return tokens[0]
    }
}

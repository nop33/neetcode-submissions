class MinStack {
    constructor() {
        this.stack = []
        this.min = undefined
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if (this.min === undefined) {
            this.min = { val, prev: undefined }
        } else if (val <= this.min.val) {
            this.min = { val, prev: this.min }
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const last = this.stack.pop()
        if (last === undefined) return
        if (this.min?.val === last) {
            this.min = this.min.prev ? this.min.prev : undefined
        }
        return last
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min.val
    }
}

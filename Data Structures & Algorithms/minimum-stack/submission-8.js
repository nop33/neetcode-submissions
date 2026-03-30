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
            this.min = { prev: undefined, value: val }
        } else if (val <= this.min.value) {
            this.min = { prev: {...this.min}, value: val }
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const last = this.stack.pop()
        if (last === undefined) return
        if (this.min?.value === last) {
            this.min = this.min.prev ? {
                prev: this.min.prev.prev,
                value: this.min.prev.value
            } : undefined
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
        return this.min.value
    }
}

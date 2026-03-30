class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map()
        this.capacity = capacity
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const value = this.cache.get(key)
        if (!value) return -1

        // Reorder
        this.cache.delete(key)
        this.cache.set(key, value)

        return value
    }

    // #updateLatestUsed(key) {
    //     const itemIndex = this.latestUsed.findIndex((k) => k === key)

    //     if (itemIndex > -1) {
    //         this.latestUsed.splice(itemIndex, 1)
    //     }

    //     this.latestUsed.push(key)
    // }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            // Reorder
            this.cache.delete(key)
            this.cache.set(key, value)
        } else {
            if (this.cache.size === this.capacity) {
                const oldestKey = this.cache.keys().next().value
                this.cache.delete(oldestKey)
            }

            this.cache.set(key, value)
        }
    }
}

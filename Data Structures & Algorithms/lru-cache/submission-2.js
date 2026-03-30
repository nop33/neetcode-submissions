class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map()
        this.capacity = capacity
        this.latestUsed = []

    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {


        const cacheItem = this.cache.get(key)
        if (!cacheItem) return -1

        this.#updateLatestUsed(key)
        
        return cacheItem
    }

    #updateLatestUsed(key) {
        const itemIndex = this.latestUsed.findIndex((k) => k === key)

        if (itemIndex > -1) {
            this.latestUsed.splice(itemIndex, 1)
        }

        this.latestUsed.push(key)
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.set(key, value)
            this.#updateLatestUsed(key)
        } else {
            if (this.cache.size === this.capacity) {
                const oldestKey = this.latestUsed[0]
                this.cache.delete(oldestKey)
                this.latestUsed.splice(0, 1)
            }

            this.cache.set(key, value)
            this.#updateLatestUsed(key)
        }
    }
}

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min = 1
        let max = Math.max(...piles)

        while (min <= max) {
            const mid = Math.trunc((max + min) / 2)
            const validMid = this.canEathAllBananas(piles, mid, h)
            const prevValidMid = this.canEathAllBananas(piles, mid - 1, h)

            if (validMid && !prevValidMid) {
                return mid
            } else if (!validMid) {
                min = mid + 1
            } else if (validMid) {
                max = mid - 1
            }
        }
    }

    canEathAllBananas(piles, k, h) {
        return k === 0 ? false : piles.reduce((acc, pile) => acc + Math.ceil(pile/k), 0) <= h
    }
}

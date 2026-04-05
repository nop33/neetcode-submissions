class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // let max = 0
        // for (let i = 0; i < prices.length; i++) {
        //     for (let j = i; j < prices.length; j++) {
        //         const profit = prices[j] - prices[i]
        //         if (profit > max) max = profit
        //     }
        // }
        // return max

        let maxProfit = 0
        let minBuyPrice = prices[0]
        for (let i = 1; i < prices.length; i++) {
            const sellPrice = prices[i]
            const profit =  sellPrice - minBuyPrice
            if (profit > maxProfit) maxProfit = profit
            if (prices[i] < minBuyPrice) minBuyPrice = prices[i]
        }
        return maxProfit
    }
}

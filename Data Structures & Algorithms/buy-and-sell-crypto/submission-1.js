class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        let min = prices[0]

        for(const price of prices){
            const temp = price - min
            profit = Math.max(profit, temp)

            min = Math.min(min, price)
        }

        return profit
    }
}

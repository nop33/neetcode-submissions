class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0)
        const stack = []
        let i = 0
        for (const temp of temperatures) {
            while (stack.length && temp > stack[stack.length - 1].temp) {
                const { i: index } = stack.pop()
                res[index] = i - index
            }
            stack.push({temp, i})
            i++
        }

        return res
    }
}

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0,
            j = numbers.length - 1
        
        let sum = numbers[i] + numbers[j]
        while (i < j && sum !== target) {
            sum = numbers[i] + numbers[j]

            if (sum > target) {
                j--
            } else if (sum < target) {
                i++
            }
        }

        return [i + 1,j + 1]
    }
}

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // since it's sorted, I could eliminate many with a binary search to find the target number
        // and only look before that.
        // I could then take the first smallest number before the target, and with another
        // binary search look for the diff. If I find it, problem solved, else I take the 
        // next smallest number and do the same
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

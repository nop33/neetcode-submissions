class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexes = {}
        for (let i = 0; i < nums.length; i++) {
            indexes[nums[i]] = [...(indexes[nums[i]] ?? []), i]
        }
console.log(indexes)
        for (const num in indexes) {
            console.log(num)
            const numIndexes = indexes[num]
            if (numIndexes.length > 1) {
                console.log('double numbers')
                const firstNum = nums[numIndexes[0]]
                const secondNum = nums[numIndexes[1]]
                if (firstNum + secondNum === target) return [numIndexes[0], numIndexes[1]]
            }
            const remainingNum = target - num
            console.log('remaining', remainingNum)
            let index2Array = indexes[remainingNum]
            console.log('index2', index2Array)

            if (index2Array !== undefined) {
                const index1 = indexes[num][0]
                const index2 = index2Array[0]

                if (index1 < index2) return [index1, index2]
                return [index2, index1]
            }
        }
    }
}

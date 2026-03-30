class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const size = nums.length
        if (!size) return []
        const r = new Array(size)
        const l = new Array(size)
        for (let i = 0; i < size; i++) {
            if (i === 0) {
                r[i] = nums[i]
            } else {
                r[i] = r[i - 1] * nums[i]
            }
        }
        for (let i = size - 1; i >=0; i--) {
            if (i === size - 1) {
                l[i] = nums[i]
            } else {
                l[i] = l[i + 1] * nums[i]
            }
        }
        const res = []
        // r [  1,  2,  8, 48 ]
        // l [ 48, 48, 24,  6 ]
        console.log('r', r)
        console.log('l', l)
        for (let i = 0; i < size; i++) {
            const prevIndex = i - 1
            const nextIndex = i + 1

            let lSide = prevIndex < 0 ? 1 : r[prevIndex]
            let rSide = nextIndex >= size ? 1 : l[nextIndex] 
            console.log({ prevIndex, nextIndex, lSide, rSide})
            res.push(lSide * rSide)
        }
        return res
    }
}

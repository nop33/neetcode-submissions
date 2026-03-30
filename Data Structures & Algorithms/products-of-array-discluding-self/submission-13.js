class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const res = []
        if (!n) return res
        const r = new Array(n), l = new Array(n)
        r[0] = nums[0]
        l[n - 1] = nums[n - 1]
        for (let i = 1; i < n; i++) {
            r[i] = r[i - 1] * nums[i]
        }
        for (let i = n - 2; i >= 0; i--) {
            l[i] = l[i + 1] * nums[i]
        }
        for (let i = 0; i < n; i++) {
            const prevIndex = i - 1
            const nextIndex = i + 1
            let lSide = prevIndex < 0 ? 1 : r[prevIndex]
            let rSide = nextIndex >= n ? 1 : l[nextIndex] 
            res.push(lSide * rSide)
        }
        return res
    }
}

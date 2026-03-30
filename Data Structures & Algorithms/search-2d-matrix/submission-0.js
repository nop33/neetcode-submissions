class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let start = 0
        let end = matrix.reduce((acc, cur) => acc + cur.length , 0) - 1
        let cols = matrix[0].length

        while (start <= end) {
            const mid = Math.floor((end - start) / 2) + start
            const row = parseInt(mid / cols)
            const col = mid - (row * cols)
            const midNum = matrix[row][col]
            console.log({start, mid, end, row, col, midNum})

            if (midNum === target) {
                return true
            } else if (midNum > target) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }

        return false
    }
}

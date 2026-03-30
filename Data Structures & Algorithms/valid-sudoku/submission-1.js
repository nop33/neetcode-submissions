class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = {}
        const columns = {}
        const squares = {}
        for (let i = 0; i < board.length; i++) {
            const rowItems = board[i]

            rows[i] = {}
            for (let j = 0; j < rowItems.length; j++) {
                const cell = rowItems[j]
                if (cell === '.') continue
                
                if (!columns[j]) {
                    columns[j] = {}
                }
                
                rows[i][cell] = (rows[i][cell] ?? 0) + 1
                columns[j][cell] = (columns[j][cell] ?? 0) + 1
                const squaresKey = `${Math.floor(i/3)}${Math.floor(j/3)}`
                if (!squares[squaresKey]) {
                    squares[squaresKey] = {}
                }
                squares[squaresKey][cell] = (squares[squaresKey][cell] ?? 0) + 1

                if (rows[i][cell] > 1 || columns[j][cell] > 1 || squares[squaresKey][cell] > 1) {
                    return false
                }
                
            }
        }
        return true
    }
}

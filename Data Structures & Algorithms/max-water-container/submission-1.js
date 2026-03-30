class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // The wider container and the taller container will contain the most water
        // since volume is calculated by width*height
        // I can start with 2 pointers at the far ends (max width) and check the 
        // shortest of the 2 heights (since that will be the max level of the water)
        // Calculate volume and store it in a var
        // Continue for every pair. Complexity: n^2
        // What if I move inwards towards the side where the next column is taller
        // by more than 2 points (since moving inwards 1 step would require 1 step 
        // taller height to match the same vol)
        let i = 0, j = heights.length -1, maxVol = 0
        
        while (i < j) {
            let newMaxVol = (j - i) * Math.min(heights[i], heights[j])
            if (newMaxVol > maxVol) {
                maxVol = newMaxVol
            }
            console.log({i,j,newMaxVol,maxVol})

            if (heights[i] <= heights[j]) {
                i++
            } else {
                j--
            }
            // const currStart = i
            // i++
            // let step = 2

            // let nextHeight = heights[i] + step
            // while (heights[currStart] >= nextHeight && i < j) {
            //     i++
            //     step++
            //     nextHeight = heights[i] + step
            // }
            // newMaxVol = (j - i) * Math.min(heights[i], heights[j])
            // if (newMaxVol > maxVol) {
            //     maxVol = newMaxVol
            // }
            // console.log({i,j,newMaxVol,maxVol})

            // const currEnd = j
            // step = 2
            // nextHeight = heights[j] + step
            // while (heights[currEnd] >= (heights[j] + step) && i < j && nextHeight <= heights[i]) {
            //     j--
            //     step++
            //     nextHeight = heights[j] + step
            // }
        }

        return maxVol
    }
}

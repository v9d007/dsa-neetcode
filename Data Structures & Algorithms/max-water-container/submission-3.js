class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = 0
        let l = 0
        let r = heights.length-1

        while(r>l){
            result = Math.max(result, (r-l)*Math.min(heights[r],heights[l]))

            if(heights[r]>heights[l]){
                l++
            }else{
                r--
            }

        }

        return result
    }
}

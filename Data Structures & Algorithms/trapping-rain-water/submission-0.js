class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftArr = new Array(height.length-1).fill(0)
        let leftMax = 0
        let rightMax = 0
        let result = 0

        for(let i=0; i<height.length; i++){
            leftArr[i] = leftMax
            leftMax = Math.max(leftMax, height[i])
        }

        for(let j=height.length-1; j>0; j--){
            const water = Math.min(rightMax,leftArr[j]) - height[j]
            if(water>0) result += water
            rightMax = Math.max(rightMax, height[j])
        }

        return result
    }
}

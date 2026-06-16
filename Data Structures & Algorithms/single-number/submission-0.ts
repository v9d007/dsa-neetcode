class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        //need to implement XOR operation
        let output = 0
        for(const num of nums){
            output = output ^ num
        }

        return output
    }
}

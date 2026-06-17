class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        // 1. sort the array and then check the adjacent numbers is asam or not
        // 2. Use Hash Set to add or remove the numbers based on their repitation

        //3. Bit 
        let number = 0
        for(const num of nums){
            number = number ^ num
        }
        return number
    }
}

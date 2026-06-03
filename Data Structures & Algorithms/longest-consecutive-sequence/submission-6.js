class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let result = 0

        for(const num of nums){
            if(!set.has(num-1)){
                let current = num
                let tempLn = 1
                while(set.has(current+1)){
                    tempLn += 1
                    current += 1
                }

                result = Math.max(result, tempLn)
            }
        }

        return result
    }
}

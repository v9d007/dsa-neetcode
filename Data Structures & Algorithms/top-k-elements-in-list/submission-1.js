class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()

        for(const num of nums){
            map.set(num, (map.get(num) ?? 0) + 1)
        }
        //return [...map.entries()].sort((a,b) => b[1] - a[1]).slice(0,k).map((num)=>num[0])
    
        let bucket = Array(nums.length+1).fill().map(() => [])

        for (const [num, count] of map) {
            bucket[count].push(num);
        }

        let result = []

        for(let i=bucket.length-1; i>=0; i--){
            for (const num of bucket[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}

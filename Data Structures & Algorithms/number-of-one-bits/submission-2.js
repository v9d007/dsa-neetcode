class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        //Bit mask 

        let res = 0

        // for(let i=0; i<32; i++){
        //     let mask = 1 << i

        //     if ((mask & n) != 0) res++
        // }

        while (n !== 0) {
            res += (n & 1) === 1 ? 1 : 0;
            n >>= 1;
        }

        return res

        //Brian Kernigham's algorithm 
        // let count = 0
        // while(n != 0){
        //     n = n & (n-1)
        //     count++
        // }

        // return count
    }
}

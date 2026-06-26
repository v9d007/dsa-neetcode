class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        // let res = 0
        // let mask = 0
        // for(let i=0; i<32; i++){
        //     if(a & (1 << i)){
        //         res ^= (1 << i)
        //     }

        //     if(b & (1 << i)){
        //         res ^= (1 << i)
        //     }

        //     res ^= mask

        //     if(((a & (1 << i)) && (b & (1 << i))) 
        //         || ((a & (1 << i)) && (mask & (1 << i))) 
        //         || ((mask & (1 << i)) && (b & (1 << i))))
        //     {
        //         mask = 1 << (i+1)
        //     }else{
        //         mask = 0
        //     }
        // }

        // return res

        while(b != 0){
            const carry = (a & b) << 1
            a = a ^ b
            b = carry
        }

        return a
    }
}

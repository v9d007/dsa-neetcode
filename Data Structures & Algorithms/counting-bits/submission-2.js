class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let result = new Array(n+1).fill(0)
        let offset = 1

        for(let i=1; i<=n; i++){
        //     let count = 0
        //     let current = i

        //     while(current != 0){
        //         current = current & (current-1)
        //         count++
        // //     }
        //     const count = i.toString(2).split("0").join("").length

        //     result.push(count)
            if((offset*2) === i) offset = i 

            result[i] = 1 + result[i-offset]


        }
        return result

    }
}

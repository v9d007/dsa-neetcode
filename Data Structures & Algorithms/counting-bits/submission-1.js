class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let result = []

        for(let i=0; i<=n; i++){
        //     let count = 0
        //     let current = i

        //     while(current != 0){
        //         current = current & (current-1)
        //         count++
        //     }
            const count = i.toString(2).split("0").join("").length

            result.push(count)
        }
        return result

    }
}

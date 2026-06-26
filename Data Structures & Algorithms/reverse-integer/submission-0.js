class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let res = 0

        while(x != 0){
            let digit = x%10
            x = Math.trunc(x/10)
            res = (res*10) + digit
        }

        if((res >= -(2**31)) && (res <= (2**31 - 1))){
            return res
        }

        return 0
    }
}

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Ln = s1.length
        const s1Sorted = s1.split("").sort().join("")

        console.log(s1Sorted)
        for(let i=0; i <= s2.length-s1Ln; i++){
            const substr = s2.slice(i, i + s1Ln)
            console.log(substr)
            const sorted = substr.split("").sort().join("")

            if(sorted === s1Sorted) return true
        }

        return false
    }
}

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    mapsAreEqual(map1, map2) {
        // 1. Check size
        if (map1.size !== map2.size) return false;

        // 2. Check keys and values
        for (let [key, val] of map1) {
            if (!map2.has(key) || map2.get(key) !== val) {
                return false;
            }
        }
        
        return true;
    }
    checkInclusion(s1, s2) {
        // const s1Ln = s1.length
        // const s1Sorted = s1.split("").sort().join("")

        // for(let i=0; i <= s2.length-s1Ln; i++){
        //     const substr = s2.slice(i, i + s1Ln)
        //     const sorted = substr.split("").sort().join("")

        //     if(sorted === s1Sorted) return true
        // }

        // return false

        let s1CharCount = new Map()
        for(const char of s1){
            s1CharCount.set(char, (s1CharCount.get(char) || 0) + 1)
        }

        for(let i=0; i<=s2.length-s1.length; i++){
            const substr = s2.slice(i, i + s1.length)

            let subCharCount = new Map()
            for(const char of substr){
                subCharCount.set(char, (subCharCount.get(char) || 0) + 1)
            }

            if(this.mapsAreEqual(s1CharCount,subCharCount)) return true
        }

        return false
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // brute force


        if(s.length != t.length){
            return false;
        }

        let sSplit = s.split("");
        let tSplit = t.split("");

        for(let i = 0 ; i < sSplit.length ; i++){

            for(let j = 0 ; j < tSplit.length ; j++){
                
                if(sSplit[i] == tSplit[j]){
                    tSplit.splice(j,1)
                    break;
                }
            }
        }


        if(tSplit.length){
            return false
        }else{
            return true
        }
    }
}

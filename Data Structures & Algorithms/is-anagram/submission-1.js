class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // brute force


        // if(s.length != t.length){
        //     return false;
        // }

        // let sSplit = s.split("");
        // let tSplit = t.split("");

        // for(let i = 0 ; i < sSplit.length ; i++){

        //     for(let j = 0 ; j < tSplit.length ; j++){
                
        //         if(sSplit[i] == tSplit[j]){
        //             tSplit.splice(j,1)
        //             break;
        //         }
        //     }
        // }


        // if(tSplit.length){
        //     return false
        // }else{
        //     return true
        // }



         if(s.length != t.length){
            return false;
        }

        let sHasHMap  = new Map();
        let tHasHMap  = new Map();

        for(let key in s){

            if(sHasHMap.has(s[key])){
                sHasHMap.set(s[key], sHasHMap.get(s[key]) + 1)    
            }else{
                sHasHMap.set(s[key],1);
            }
        }

         for(let key in t){

            if(tHasHMap.has(t[key])){
                tHasHMap.set(t[key], tHasHMap.get(t[key]) + 1)    
            }else{
                tHasHMap.set(t[key],1);
            }
        }

        for (const [key, val] of sHasHMap) {
            if (!tHasHMap.has(key) || tHasHMap.get(key) !== val) {
                return false;
            }
        }
        return true
    }
}

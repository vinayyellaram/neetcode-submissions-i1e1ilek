class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let anagrams = new Map();

        for(let i = 0 ; i < strs.length ; i++){

            let newString = strs[i].split("").sort().join(); 

      
            if(anagrams.has(newString)){
                
                let indexes = anagrams.get(newString) + "," + i;

                anagrams.set(newString, indexes );
            }else{
                anagrams.set(newString, i )
            }
           
        }
        let ans = []
        anagrams.forEach((indexValues, key) => {
            
            let indexes = String(indexValues).split(",");

            console.log(indexes)
            let group = [];

            indexes.forEach((element,keys) => {
                console.log(strs[element],element)
                group.push(strs[element]);
            })

            ans.push(group)

        });

        return ans;
    }
}

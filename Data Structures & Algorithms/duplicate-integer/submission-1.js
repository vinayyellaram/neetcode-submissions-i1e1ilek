class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        // brute force 

        // check each element with other element 

        // for(let i = 0;i < nums.length ; i++){

        //     for(let j = i +1; j < nums.length ; j++){
        //         if(nums[i] == nums[j]){
        //             return true;
        //         }
        //     }

        // }    
        // return false;


        // using set 

        let numsSet = new Set();

        for(let i = 0 ; i< nums.length ; i++){

            if(numsSet.has(nums[i])){
                return true;
            }

            numsSet.add(nums[i]);
        }
        return false;
    }
}

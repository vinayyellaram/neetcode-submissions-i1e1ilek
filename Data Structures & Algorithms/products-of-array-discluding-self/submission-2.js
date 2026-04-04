class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        //brute force approach 
        // let ans = [];
        // for(let i = 0;i < nums.length ; i++){
        //     let mul = 1;
        //     for(let j = 0 ; j < nums.length ; j++){
        //         if(j != i){
        //             mul = mul * nums[j];
        //         }  
        //     }
        //     ans.push(mul)
        // }

        // return ans 
    let n = nums.length;
    let output = Array(n).fill(1);

    // prefix pass
    let prefix = 1;
    for(let i=0;i<n;i++){
        output[i] = prefix;
        prefix *= nums[i];
    }

    // suffix pass
    let suffix = 1;
    for(let i=n-1;i>=0;i--){
        output[i] *= suffix;
        suffix *= nums[i];
    }

        return output;
    }
}

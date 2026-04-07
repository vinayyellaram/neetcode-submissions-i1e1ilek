class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let maxHeight = 0;
        let right = heights.length - 1;
        let left = 0;

        while(left < right){

            let newLen = right - left;

            let min = Math.min(heights[left],heights[right])
            
            maxHeight = Math.max(maxHeight , min * newLen);

            if(heights[left] < heights[right]){
                left++;
            }else if (heights[left] == heights[right]){
                right--;
            }else{
                right--;
            }

        }

        return maxHeight;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("");
        let len = str.length - 1;
        for(let i = 0 ; i < len / 2 ; i++){
            if(str[i] != str[len - i]){
                console.log(str[i],str[len - i])
                return false
            }
        }
        return true;

    }
}

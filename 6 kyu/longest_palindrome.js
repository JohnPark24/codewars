// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

function longestPalindrome(s){
    let maxLength = 0;
    for (let i = 0; i < s.length; i++){
        let len1 = expand(s, i, i);
        let len2 = expand(s, i, i+1)

        maxLength = Math.max(maxLength, len1, len2);
    }
    return maxLength
}

function expand(s,left,right){
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--;
        right++;
    }
    return right - left - 1
}


var longestPalindrome=function(s){
    if (!s) return 0;
    for (let c = s.length; c > 0; c--) {
      for (let i = 0; i <= s.length - c; i++) {
        var check = s.substr(i, c);
        if (check === check.split("").reverse().join("")) return c;
      }
    }
  }
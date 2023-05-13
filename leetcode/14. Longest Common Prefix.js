// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return ''

    let prefix = '';
    let maxPrefixLength = Math.min(...strs.map(str => str.length))
    for(let i = 0; i < maxPrefixLength; i++){
        let char = strs[0][i]
        if(strs.every(str => str[i] === char)){
            prefix += char
        }else{
            break
        }
    }
    return prefix
};


var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
  let prefix = strs[0]; 
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) { 
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};
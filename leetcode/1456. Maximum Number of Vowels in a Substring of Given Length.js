// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.
// 1 <= k <= s.length


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let mostVowels = 0;
    const substrings = [];
    for(let i = 0; i < s.length - k + 1; i++){
        const substring = s.substring(i, i + k);
        substrings.push(substring)
    }

    for(let i = 0; i < substrings.length; i++){
        let vowelCount = 0;
        let substring = substrings[i];

        for(let j = 0; j < substring.length; j++){
            let letter = substring[j];
            if('aeiou'.indexOf(letter) !== -1){
                vowelCount++;
            }
        }
        if(vowelCount > mostVowels){
            mostVowels = vowelCount;
        }
    }
    return mostVowels;
};


var maxVowels = function(s, k) {
    let maxCount = 0;
    const substrings = [];
    for(let i = 0; i < s.length - k + 1; i++){
        const substring = s.substring(i, i + k);
        substrings.push(substring)
    }

    for(const substring of substrings){
        const vowelCount = (substring.match(/[aeiou]/gi) || []).length;
        maxCount = Math.max(maxCount, vowelCount);
    }
    return maxCount;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let maxCount=0,count=0;
    const vowel=['a',"e", "i", "o", "u"]
    for(let i=0;i<s.length;i++)
    {
        if(vowel.includes(s[i]))   count++

        if(i>=k && vowel.includes(s[i-k])) count--

        if(count==k)
        return k;

        if(maxCount<count)
        maxCount=count
    }
    return maxCount;
};
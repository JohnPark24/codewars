// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

// Alternate capitalization

// Vowel consonant lexicon

function dup(s) {
    return s.map(word => word.split('').filter((element, index, array) => element !== array[index - 1]).join(''));
};

function dup(array) {
    return array.map(word => word.split('').filter( (letter, index) => letter !== word[index + 1]).join(''))
};

// Hint: map through the arrays, each return in the map should be the string split and filtering 
// for each letter that does not equal the one before it then join them up - we had this pattern before! 
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.replace(/\S+/g, word => [...word].reverse().join(""));
}

//\S matches any character that isn't a whitespace, adding the plus makes it greedy, matching a set of characters



let reverseWords = (str) => str.replace(/\S+/g, word => [...word].reverse().join(""));
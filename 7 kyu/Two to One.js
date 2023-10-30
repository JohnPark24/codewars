// Take 2 strings s1 and s2 including only letters from ato z. 
// Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
    let newString = (s1 + s2).split('').sort();
    let unique = [...new Set(newString)];

    return unique.join('');
}

// let unique = newString.filter((v, i, a) => a.indexOf(v) === i);
// return Array.from(new Set(s1 + s2)).sort().join('');
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// This kata is part of the Simple Encryption Series:

// Simple Encryption #1 - Alternating Split
// Simple Encryption #2 - Index-Difference
// Simple Encryption #3 - Turn The Bits Around
// Simple Encryption #4 - Qwerty
// Have fun coding it and please don't forget to vote and rank this kata! :-)

function encrypt(text, n) {
    if(n <= 0 || !text){
        return text;
    }
    let even = text.split("").filter((char, i) => i % 2 === 1);
    let odd = text.split("").filter((char, i) => i % 2 === 0);
    return encrypt(even.concat(odd).join(""), n-1);
}

function decrypt(encryptedText, n) {
    if(n <= 0 || !encryptedText){
        return encryptedText;
    }
    let mid = encryptedText.length/2
    let first = encryptedText.split("").slice(mid)
    let second = encryptedText.split("").slice(0, mid)
    let z = []
    for (i = 0; i < encryptedText.length; i++){
        if(i % 2 === i - 1){
            z.push(second[i])
            z.push(first[i])
        }else{
            z.push(first[i])
            z.push(second[i])
        }
    }
    return decrypt(z.join(""), n - 1);
}
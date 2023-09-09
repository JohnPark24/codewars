// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let currA = a.length - 1;
    let currB = b.length - 1;
    let carryValue = 0;
    let result = "";

    while (currA >= 0 || currB >= 0){
        const digitA = currA >= 0 ? parseInt(a[currA]) : 0;
        const digitB = currB >= 0 ? parseInt(b[currB]) : 0;

        const sum = digitA + digitB + carryValue;

        const currentBit = sum % 2;
        carryValue = Math.floor(sum / 2);

        result = currentBit + result;

        currA--;
        currB--;
    }

    if(carryValue > 0){
        result = carryValue + result;
    }

    return result;
};

var addBinary = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2)
};
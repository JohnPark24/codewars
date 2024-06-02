// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. 
// For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
    let dashed = '';
    let numStr = num.toString();

    for (let i = 0; i < numStr.length; i++) {
        dashed += numStr[i];

        if (i < numStr.length - 1 && numStr[i] % 2 === 1 && numStr[i + 1] % 2 === 1) {
            dashed += '-';
        }
    }
    return dashed;
}
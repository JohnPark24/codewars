// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// function XO(str) {
//     let arr = str.toLowerCase();
//     const x = arr.match(/[x]/g);
//     const o = arr.match(/[o]/g);
//     return x.length === o.length;
// }

function XO(str) {
    str = str.toLowerCase();
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'x'){
            countX++;
        }else if (str[i] === 'o'){
            countO++;
        }
    }
    return countX === countO;
}

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
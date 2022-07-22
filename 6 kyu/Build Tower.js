// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

function towerBuilder(nFloors) {
    let arr = [];
    for(let i = 1; i <= nFloors; i++){
        let space = ' '.repeat(nFloors - i);
        let star = '*'.repeat(i * 2 - 1);
        arr.push(space + star + space);
    }
    return arr;
}
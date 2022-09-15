// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
    return a.filter((item,
        index) => a.indexOf(item) === index);
}

// function distinct(a) {
//     return [...new Set(a)];
// }

// function distinct(a) {
//     return Array.from(new Set(a));
//  }
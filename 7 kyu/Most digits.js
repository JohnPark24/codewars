// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let largest = 0;

    array.forEach((element) => {
        if(largest.toString().length < element.toString().length){
            largest = element;
        }
    })
    return largest;
}


const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);
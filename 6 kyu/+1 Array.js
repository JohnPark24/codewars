// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer


function upArray(arr){
    if(arr.length < 1){
        return null
    }
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        if(typeof element !== 'number' || element < 0 || element > 9){
            return null
        }
    }
    return addCarry(arr)
}

function addCarry(arr){
    const result = [...arr]

    let carry = 1;

    for (let i = result.length - 1; i >= 0; i--){
        const sum = result[i] + carry;
        if(sum > 9){
            result[i] = 0;
            carry = 1
        }else{
            result[i] = sum
            carry = 0
        }
    }
    if(carry === 1){
        result.unshift(1)
    }
    return result
}
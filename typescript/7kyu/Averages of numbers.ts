// #Get the averages of these numbers

// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

// Example:

// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null, your method should return an empty array.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

export function averages(numbers: number[] | null): number[] {
    if(numbers === null || numbers.length <= 1) return [];
    let averages = [];
    for(let i = 1; i < numbers.length; i++){
        averages.push((numbers[i] + numbers[i-1]) / 2)
    }
    return averages;
}


export function averages(numbers:number[]):number[] {
	let avrgs: number[] = [];
  if (!numbers || numbers.length <= 1) {
    return avrgs;
  }

  numbers.reduce((a, b) => {
  	avrgs.push((a + b) / 2);
    return b;
  });
  
  return avrgs;
}
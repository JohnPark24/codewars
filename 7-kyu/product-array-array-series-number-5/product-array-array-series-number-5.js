function productArray(numbers){
  let result = [];
  
  let total = numbers.reduce((acc, curr) => acc * curr, 1);
  return numbers.map(num => num === 0 ?
    numbers.reduce((acc, curr) => acc * curr, 1) : total / num
  );
}
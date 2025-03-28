function sumDigPow(a, b) {
  let result = [];
  for(let num = a; num <= b; num++){
    const sum = String(num)
    .split('')
    .reduce((total, digit, index) => total + Math.pow(+digit, index + 1), 0);
    if(sum === num){
      result.push(num)
    }
  }
  return result;
}
​
function evenLast(numbers) {
  if(numbers.length === 0) return 0;
  
  let total = 0;
  for(let i = 0; i < numbers.length; i += 2){
    total += numbers[i];
  }
  return total * numbers[numbers.length -1];
}
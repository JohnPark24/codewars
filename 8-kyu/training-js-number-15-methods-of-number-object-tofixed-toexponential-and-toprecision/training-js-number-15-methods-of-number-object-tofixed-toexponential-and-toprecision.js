function howManySmaller(arr,n){
  const round = arr.map(num => parseFloat(num.toFixed(2)));
  
  return round.filter(num => num < n).length;
}
​
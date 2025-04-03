function elevatorDistance(array) {
  let total = 0;
  
  for(let i = 0; i < array.length - 1; i++){
    if(array[i] > array[i+1]){
      total += array[i] - array[i+1];
    }else{
      total += array[i+1] - array[i];
    }
  }
  return total;
}
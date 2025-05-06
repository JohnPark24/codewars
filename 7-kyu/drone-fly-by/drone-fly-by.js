function flyBy(lamps, drone){
  let lampArr = lamps.split('');
  
  for(let i = 0; i < lamps.length && i < drone.length; i++){
    lampArr[i] = 'o';
  }
  return lampArr.join('');
}
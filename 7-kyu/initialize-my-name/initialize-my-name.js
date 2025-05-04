function initializeNames(name){
  let nameSplit = name.split(' ');
  
  if (nameSplit.length <= 1) return name;
  let result = [nameSplit[0]];
  
  for(let i = 1; i < nameSplit.length-1; i++){
    result.push(nameSplit[i][0] + '.');
  }
  result.push(nameSplit[nameSplit.length-1]);
  return result.join(' ');
}
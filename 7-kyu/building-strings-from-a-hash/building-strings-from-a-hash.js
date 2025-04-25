 
function solution(pairs){
  return Object.keys(pairs)
    .map(([key,value]) => `${key} = ${value}`)
    .join(',');
}
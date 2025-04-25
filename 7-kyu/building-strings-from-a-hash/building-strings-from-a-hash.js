function solution(pairs){
  let result = '';
  
  for(const [key, value] of Object.entries(pairs)){
    result += `${key} = ${value},`;
  }
  return result.slice(0,-1);
}
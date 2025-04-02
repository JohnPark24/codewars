function solve(s){
  const vowels = new Set(['a','e','i','o','u']);
  let maxLen = 0, currLen = 0;
  
  for(let char of s){
    if(vowels.has(char)){
      currLen++;
      maxLen = Math.max(maxLen, currLen);
    }else{
      currLen = 0;
    }
  }
  return maxLen;
}
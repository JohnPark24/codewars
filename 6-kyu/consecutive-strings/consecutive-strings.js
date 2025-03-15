function longestConsec(strarr, k) {
  if(strarr.length === 0 || strarr.length < k || k <= 0){
    return "";
  };
  
  let longestWord = "";
  let longestLen = 0;
  
  for(let i = 0; i <= strarr.length - k; i++){
    let current = strarr.slice(i, i+k).join("");
    
    if(current.length > longestLen){
      longestLen = current.length;
      longestWord = current;
    }
  }
  return longestWord;
}
​
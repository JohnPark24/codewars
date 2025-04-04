function alphabetWar(fight){
  let alphabet = {
    w:4, p:3, b:2, s:1, 
    m:4, q:3, d:2, z:1
  };
  
  let result = 0;
  
  for(let i = 0; i < fight.length; i++){
    const char = fight[i];
    if(char in alphabet){
      if(fight[i] == 'w' || fight[i] == 'p' || fight[i] == 'b' || fight[i] == 's'){
        result -= alphabet[fight[i]];
      }else{
        result += alphabet[fight[i]];
      }
    }
  }
  
  return result < 0 ? 'Left side wins!' : result > 0 ? 'Right side wins!' : 'Let\'s fight again!';
}
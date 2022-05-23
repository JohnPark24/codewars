function getMiddle(s){
    let output
    if(s.length % 2 == 0){
        output = s.slice(s.length / 2 - 1, s.length / 2 + 1);
    }else{
        output = s.slice(s.length / 2, s.length / 2 + 1);
    }
    return output;
  }
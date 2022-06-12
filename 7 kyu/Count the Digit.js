function nbDig(n, d) {
    let squared;    
    let k = 0;
    let count = 0;
    
    while(k <= n){
      squared += (k*k).toString();
      k++;
    }
    
    for(let i = 1; i < squared.length; i++){
      if(squared[i] == d){
        count++;
      }
    }
    
    return count;
  }
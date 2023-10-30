function SeriesSum(n){
    let x = 1;
    
    if(n === 0){
      x = 0;
    }
    
    while(n > 1){
      x += 1/(n * 3 -2);
      n--;
    }
    return x.toFixed(2);
  }
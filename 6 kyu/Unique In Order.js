var uniqueInOrder=function(iterable){
    let arr = [];
//     let itArray = iterable.split(''); 
    
    for(let i = 0; i < iterable.length; i++){
      if(iterable[i] !== iterable[i+1]){
        arr.push(iterable[i]);
      }
    }
    return arr;
  }

//check index 0 and check index 1
//if index 0 and index 1 do not match push index 0 to new array
//return new array
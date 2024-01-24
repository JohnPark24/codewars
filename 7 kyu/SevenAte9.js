// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"


function sevenAte9(str) {
    let result = [];
    let strArray = str.split('');

    for(let i = 0; i < strArray.length; i++){
        if(strArray[i] === '7' && strArray[i+1] === '9' && strArray[i+2] === '7'){
            strArray;
        }else{
            result.push(strArray[i]);
        }
    }
    return result.join('');
}


function sevenAte9(str) {
    while (str.includes('797')) {
      str = str.replaceAll('797', '77'); 
    }
    return str;
}


function sevenAte9(str){
    var strArray = str.split('');
    for (var i = strArray.length - 2; i >= 1; i--) {
      if (strArray[i - 1] === '7' && strArray[i] === '9' && strArray[i + 1] === '7')
        strArray.splice(i , 1);
    }
    return strArray.join('');
}

function sevenAte9(str){
    return str.replace(/79(?=7)/g, '7');
}
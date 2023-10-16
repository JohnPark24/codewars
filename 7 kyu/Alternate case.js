// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
    let result = s.split('').map(char => {
        if (char === char.toLowerCase()){
            return char.toUpperCase()
        }else{
            return char.toLowerCase()
        }
    })
    return result.join('')
}

function alternateCase(s) {
    return s.split('').map(function(el) {
      return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
    }).join('');
}
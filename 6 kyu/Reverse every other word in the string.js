// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str){
    let result = '';
    let arr = str.split(' ');
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0) result += ` ${arr[i]}`;
        else if(i % 2 !== 0){
            result += ` ${arr[i].split('').reverse().join('')}`;
        }
    }
    return result.trim();
}

function reverse(str){
    let arr = str.split(" "); 
  
    for(var i = 1; i<arr.length; i+=2){
        arr[i] = arr[i].split('').reverse().join(""); 
    }
    
    return arr.join(" ").trim(); 
    
}
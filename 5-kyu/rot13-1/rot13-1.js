function rot13(message){
  let result = '';
  
  for (let i = 0; i < message.length; i++){
    let char = message[i];
    let code = message.charCodeAt(i);
    
    if (code >= 65 && code <= 90){
      result += String.fromCharCode((code - 65 + 13) % 26 + 65);
    }
    else if (code >= 97 && code <= 122){
      result += String.fromCharCode((code - 97 + 13) % 26 + 97);
    }
    else {
      result += char;
    }
  }
  return result;
}
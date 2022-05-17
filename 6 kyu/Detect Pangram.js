function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
    
    let newString = string.toLowerCase();
    return alphabet.every(x => newString.includes(x));
  }
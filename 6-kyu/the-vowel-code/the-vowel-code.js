function encode(string) {
  const vowelMap = { a:1, e:2, i:3, o:4, u:5 }
  let result = [];
  
  for (const char of string){
    result.push(vowelMap[char] || char);
  }
  return result.join('');
}
​
function decode(string) {
  const vowelMap = { 1:'a', 2:'e', 3:'i', 4:'o', 5:'u' }
  let result = [];
  
  for (const char of string){
    result.push(vowelMap[char] || char);
  }
  return result.join('');
}
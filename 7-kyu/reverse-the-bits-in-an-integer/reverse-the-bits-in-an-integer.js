function reverseBits (n) {
  let binary = n.toString(2);
  
  let reversedBinary = binary.split('').reverse().join('');
  
  return parseInt(reversedBinary,2)
}
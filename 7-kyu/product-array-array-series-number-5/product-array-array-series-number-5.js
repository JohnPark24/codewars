 
function productArray(numbers){
  return numbers.map(num => numbers.reduce((acc, curr) => (acc * curr)) / num)
}
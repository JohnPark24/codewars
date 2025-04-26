function solution(pairs){
  return Object.keys(pairs)
  .map(function(k) {return k + ' = ' + pairs[k] })
  .join(',');
}
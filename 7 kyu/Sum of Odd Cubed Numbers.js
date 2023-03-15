// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    var sum = 0;
    for (let i = 0; i <arr.length; i++){
      let cubed = (arr[i]*arr[i]*arr[i]);
      if (isNaN(cubed)) return undefined;
      if(cubed % 2 != 0 )sum += cubed;
    }
    return sum;
}

let cubeOdd = a => {
    var isNumeric = a.every(x=>!isNaN(x))
    return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
}
// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n){
    let result = ''
    let factors = {};
    for (let i = 2; i<= n; i++){
        while(n % i === 0){
            if(factors[i] === undefined){
                factors[i] = 1
            }else{
                factors[i]++
            }
            n /= i;
        }
    }
    for(const [factor, count] of Object.entries(factors)){
        result += `(${factor}${count === 1 ? "" : `**${count}`})`
    }
    return result;
}


function primeFactors(n){
    for (var i=2, res="", f; i <= n; i++) {
      f=0;
      while (n%i == 0) { f++; n/=i }
      res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
    }
    return res || "("+n+")"
}
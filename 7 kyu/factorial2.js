// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n) {
    var ans=1;
     
    for (var i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}
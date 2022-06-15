function isPalindrome(x) {
    let reverse = x.toLowerCase().split("").reverse().join("");
    return x.toLowerCase() == reverse;
  }
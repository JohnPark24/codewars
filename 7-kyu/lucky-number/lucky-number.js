function isLucky(n) {
  return n.toString().split('').reduce((acc, digit) => acc + Number(digit), 0) % 9 === 0;
}
function isPythagoreanTriple(integers) {
  let intSort = integers.sort((a,b) => a-b);
  return intSort[0]**2 + intSort[1]**2 == intSort[2]**2;
}
function average(scores) {
  let avg = scores.reduce((a,b) => a + b) / scores.length;
  return Math.round(avg);
}
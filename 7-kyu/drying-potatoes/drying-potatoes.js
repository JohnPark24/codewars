function potatoes(p0, w0, p1) {
  let dryMatter = w0 * (100 - p0) / 100;
  let w1 = dryMatter * 100 / (100 - p1);
  return Math.trunc(w1);
}
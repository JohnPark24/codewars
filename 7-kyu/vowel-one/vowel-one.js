function vowelOne(s){
  const vowel = new Set(['a','e','i','o','u']);
  
  return Array.from(s).map(char => vowel.has(char.toLowerCase()) ? 1 : 0).join('');
}
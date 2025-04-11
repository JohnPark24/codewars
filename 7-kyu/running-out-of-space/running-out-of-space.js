function spacey(array) {
  return array.reduce((result, word) => {
    const cumulative = result.length > 0 ? result[result.length -1] + word : word;
    return [...result, cumulative];
  }, []);
}
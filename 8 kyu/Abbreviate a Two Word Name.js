function abbrevName(name){
    let firstLetter = name
    .toUpperCase()
    .split(' ')
    .map(word => word[0])
    .join('.');

    return firstLetter;
}

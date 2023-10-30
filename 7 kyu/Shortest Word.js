// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let sSplit = s.split(' ');
    let shortestWord = sSplit[0].length;

    for(let i = 0; i < sSplit.length; i++){
        if(shortestWord > sSplit[i].length){
            shortestWord = sSplit[i].length;
        }
    }
    return shortestWord;
}
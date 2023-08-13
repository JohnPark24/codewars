// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
    let list = [];
    let textSplit = text.split('');

    for(let i = 0; i < textSplit.length; i++){
        let character = textSplit[i];
        let found = false;

        for(let j = 0; j < list.length; j++){
            if(list[j][0] === character){
                list[j][1]++;
                found = true;
                break;
            }
        }

        if(!found){
            list.push([character, 1]);
        }
    }
    return list;
}

const orderedCount = function (text) {
    const charCount = new Map();

    for (const char of text){
        if (charCount.has(char)){
            charCount.set(char, charCount.get(char) + 1);
        }else{
            charCount.set(char, 1);
        }
    }
    return Array.from(charCount)
}

const orderedCount = s =>
  Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));
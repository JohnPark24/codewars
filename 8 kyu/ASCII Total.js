// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

function uniTotal(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      count += str.charCodeAt(i);
    }
    return count;
}


const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);

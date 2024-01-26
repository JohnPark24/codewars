// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
    const vowels = {
        'a': 'A',
        'e': 'E',
        'i': 'I',
        'o': 'O',
        'u': 'U',
    }

    let result = '';

    for (let char of string){
        if (char in vowels){
            result += vowels[char];
        }else{
            result += char;
        }
    }
    return result;
}


function swap(st){
    return st.replace(/[aeiou]/g, v => v.toUpperCase() )
}


const vowels = ["a", "e", "i", "o", "u"];
const swap = s => s.split('').map(x => vowels.includes(x) ? x.toUpperCase() : x).join('');
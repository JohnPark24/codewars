// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    let count = 0;
    let lowerT = text.toLowerCase();
    
    for(let i = 0; i < text.length; i++){
      if(lowerT[i] == lowerT[i+1]){
        count++;
      }
    }
    return count;
}

//NOT COMPLETE

// function duplicateCount(text) {
//     var nText = text.toLowerCase(); //this changes every character to lower case 
//     var myObj = {}; // Declaring an empty object
//     var counter = 0;
//     for (var i = 0; i < nText.length; i++) {
//     // assigning character as property and giving value 1 
//         if (!myObj[nText[i]]){
//             myObj[nText[i]] = 1;
//         }//checking if character already added
//         else if (myObj[nText[i]] < 2) {
//             myObj[nText[i]] += 1;
//             counter++;
//         }
//     }
//     return counter;
// }
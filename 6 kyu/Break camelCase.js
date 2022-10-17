// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


// complete the function
function solution(string) {
    let newString = "";

    for (i in string){
        if (string[i] == string[i].toUpperCase()){
            newString += " ";
        }
        newString += string[i]
    }
    return newString;
}

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
}
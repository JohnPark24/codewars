// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
    let numStr = num.toString();
    let result = [];
    for(let i = 0; i < numStr.length; i++){
        if(numStr[i] == 0) continue;
        else result.push(numStr[i] + '0'.repeat(numStr.length -i -1))
    }
    return result.join(' + ')
}


function expandedForm(num) {
    return String(num)
            .split("")
            .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
            .filter((num) => Number(num) != 0)
            .join(" + ")
}

var expandedForm = (num) => {
    var arr = num.toString().split('').reverse();
    var result = [];
    for(var i = 0; i < arr.length; i++){
      arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
    }
    return result.reverse().join(' + ')
}

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
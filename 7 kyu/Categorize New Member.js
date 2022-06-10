//input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
    let output = [];

    for(let i = 0; i < data.length; i++){
        output[i] = (data[i][0] >= 55 && data[i][1] > 7) ? 'Senior' : 'Open';
    }
    return output;
  }

//return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');

//Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
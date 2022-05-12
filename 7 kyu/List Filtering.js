//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    // Return a new array with the strings filtered out
    let num = (val) => {
        if(typeof(val) === 'number'){
            return val;
        }
    }
    let numbers = l.filter(num);
    return numbers;
  }
  filter_list([1,2,'a','b'])
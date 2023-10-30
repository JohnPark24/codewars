// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters


function kebabize(str) {
    return str.replace(/[^a-z]/ig, '').
           replace(/^[A-Z]/, c => c.toLowerCase()).
           replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}




function kebabize(str) {
    let arr = str.split("");
   
    for (let i = arr.length - 1; i >= 0; i--) {
      if (Number(arr[i]) || arr[i] === "0") {
        arr.splice(i, 1);
      }
      else if (arr[i] === arr[i].toUpperCase() && !Number.isInteger(arr[i]) && i !== 0) {
        arr.splice(i, 0, "-");
      }
    }
    if (arr[0] === "-") {
      arr.splice(0, 1);
    }
    return arr.join("").toLowerCase();
  }

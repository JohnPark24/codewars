// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"


// function diamond(n){
//     let col = n * 2 - 1;
//     n = Math.ceil(n / 2);
//     for (let i = 1; i <= n; i++) {
//         let s = "";
//         for (let j = 1; j <= col; j++) {
//             if (j >= n + 1 - i && j <= n - 1 + i) {
//                 s += "*";
//             } else {
//                 s += " ";
//             }
//         }
//         return s;
//     }
//     for (let i = n - 1; i >= 1; i--) {
//         let s = "";
//         for (let j = 1; j <= col; j++) {
//             if (j >= n + 1 - i && j <= n - 1 + i) {
//                 s += "*";
//             } else {
//                 s += " ";
//             }
//         }
//         return s;
//     }
// }
// diamond(5)


// function diamond(n){
//     n = Math.ceil(n/2);
//     let str = '';

//     if(n % 2 == 0 || n < 0){
//         return null;
//     }
//     // Upside pyramid
//     for (let i = 1; i <= n; i++) {
//       // printing spaces
//       for (let j = 1; j <= n - i; j++) {
//         str += ' ';
//       }
//       // printing star
//       for (let k = 0; k < 2 * i - 1; k++) {
//         str += '*';
//       }
//       str += '\n'
//     }
    
//     // downside pyramid
//     let str2 = '';
//     for (let i = 1; i <= n - 1; i++) {
//       // printing spaces
//       for (let j = 0; j < i; j++) {
//         str += ' ';
//       }
//       // printing star
//       for (let k = (n - i) * 2 - 1; k > 0; k--) {
//         str += '*';
//       }
//       str2 += '\n'
//     }
//     return str + str2
// }
// diamond(5)
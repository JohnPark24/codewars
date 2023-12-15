// Given an m x n binary matrix mat, return the number of special positions in mat.

// A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

 

// Example 1:


// Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
// Output: 1
// Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.
// Example 2:


// Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3
// Explanation: (0, 0), (1, 1) and (2, 2) are special positions.
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// mat[i][j] is either 0 or 1.

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let count = 0;

    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            if(mat[i][j] === 1){
                if (isValidRow(i) && isValidCol(j)){
                    count++;
                }
            }
        }
    }

    function isValidRow(index){
        let count = 0;
        let row = mat[index];
        for(let i = 0; i < row.length; i++){
            if(row[i] === 1){
                count++;
            }
        }
        return count > 1 ? false : true;
    }

    function isValidCol(index){
        let count = 0;
        for(let i = 0; i < mat.length; i++){
            let row = mat[i]
            if(row[index] === 1){
                count++;
            }
        }
        return count > 1 ? false : true;
    }

    return count;
};


var numSpecial = function(mat) {
    let count = 0;

    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            if(mat[i][j] === 1){
                if(isValidRow(i) && isValidCol(j)){
                    count++;
                }
            }
        }
    }

    function isValidRow(index){
        let count = 0;
        for(let i = 0; i < mat[index].length; i++){
            if(mat[index][i] === 1){
                count++;
            }
        }
        return count > 1 ? false : true;
    }

    function isValidCol(index){
        let count = 0;
        for(let j = 0; j < mat.length; j++){
            if(mat[j][index] === 1){
                count++;
            }
        }
        return count > 1 ? false : true;
    }

    return count;
};
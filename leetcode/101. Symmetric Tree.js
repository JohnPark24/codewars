// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return symmetryCheck(root.left, root.right);
};
function symmetryCheck(left, right){
    if(left === null && right === null) return true;
    if(left === null || right === null) return false;
    if(left.val !== right.val) return false;

    return symmetryCheck(left.left, right.right) && symmetryCheck(left.right, right.left);
}


var isSymmetric = function(node1, node2) {
    if(node2 === undefined){
        node2 = node1.right;
        node1 = node1.left;
    }
    if(node1 === null && node2 === null) return true;
    if(node1 === null || node2 === null || node1.val !== node2.val) return false;
    return isSymmetric(node1.left, node2.right) && isSymmetric(node1.right, node2.left);
};
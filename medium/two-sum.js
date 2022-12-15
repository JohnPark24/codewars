// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

// Hint:  Create an array to hold winning pairs and  create an object to store each number looped through. 
// See if the sum - current number exists in the object, if so push current and stored value to your pairs array

function twoSum(arr, sum){
    const pairs = []
    const nums = {}

    for(const num1 of arr){
        const num2 = sum - num1
        if(nums[num2]){
            pairs.push([num1,num2])
        }else{
            nums[num1] = 1
        }
    }
    return pairs
}
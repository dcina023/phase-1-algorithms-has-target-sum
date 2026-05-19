function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
   for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true
    }
   } return false 
  }



/* 
  Write the Big O time complexity of your function here

The Big 0 time complexity of hasTargetSum is Quadratic, 0(n^2)

Space complexity is Constant, 0(1).

/* 
  Add your pseudocode here
// Declare function hasTargetSum with two parameters array and target
// Need to iterate through the array twice
// Two inputs the array (list of numbers), and target (the sum we want to find)
// Need to calculate the time and space complexity 
// We know we have 2 loops, loop in a loop aka nested loops...aka quadractic 0(n^2)


/*
  Add written explanation of your solution here
// hasTargetSum(array, target) {
// This function checks whether two numberes in the array add up to the target
// The outer loop picks one number to start with.
// Then we figure out what number we would need to add it to reach the target.

//The inner loop checks the rest of the array for that needed number.
//If it finds a match, the function returns true.

// If no match is found, the outer loop moves to the next number and tries again.

// If every pair is checked, and none add up to the target, the function will return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(array)
  console.log(target)
  console.log(complement)
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

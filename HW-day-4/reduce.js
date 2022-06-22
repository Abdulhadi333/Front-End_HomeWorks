const nums = [25, 6, 100, 3];
// let sum = nums.reduce(function(acc, num) {
//   return acc + num;
// }, 0);

// sum equals 134

/*--- using an arrow function for the callback ---*/
let sum = nums.reduce((acc, num) => acc + num);

console.log(sum);


// Q.4  Given the array nums try to count the number of even numbers using reduce() and put it in the variable evenNumbers:

var nums1 = [25, 6, 8, 3];
let evenNumbers = 0;
nums1.reduce((num1, num2) => {
  if (num1 % 2 == 0 || num2 % 2 == 0) {
    evenNumbers++;
  }
});
console.log("even is: ", evenNumbers)
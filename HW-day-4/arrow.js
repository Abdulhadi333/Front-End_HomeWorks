// Create a function to get the average of a group of numbers avg([8, 2, 2, 4]) // should return 4
arr = [8, 2, 2, 4]
let average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average(arr));


// Create a function to reverse the letters in a word reverse("caterpillar") // should return "rallipretac"
const reverse =(word => word.split("").reverse().join(""));
console.log(reverse("caterpillar"));


const numbers=[1,2,3];
const timeTwo= numbers.map(num => num*2);
console.log(timeTwo);

// Q.2 reate an array that has the numbers of the array numbers squared

const securenumber= numbers.map(num=> num*num);
console.log(securenumber);

// Q.3 Use map to create a new array that adds the string " is awesome" to each element in the array


const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];

const strr= instructors.map(x => x+" is awesome")
console.log(strr);
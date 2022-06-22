const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend);
});

// logs out "I have a friend named <friend's name>" for each friend
// Q1.  Using forEach log out each of my friends but with their name all lower-cased. Use the <str>.toLowerCase() method.

lower=[];

friends.forEach(x =>{
    lower.push(x.toLocaleLowerCase());
});
console.log(lower);

/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/

var face0=new Image()
face0.src="/HW-day-3/dice/img/1.png"
var face1=new Image()
face1.src="/HW-day-3/dice/img/2.png"
var face2=new Image()
face2.src="/HW-day-3/dice/img/3.png"
var face3=new Image()
face3.src="/HW-day-3/dice/img/4.png"
var face4=new Image()
face4.src="/HW-day-3/dice/img/5.png"
var face5=new Image()
face5.src="/HW-day-3/dice/img/6.png"
function throwdice(){
    //create a random integer between 0 and 5
    var randomdice=Math.round(Math.random()*5)
    document.images["mydice"].src=eval("face"+randomdice+".src")

    var randomdice=Math.round(Math.random()*5)
    document.images["mydice1"].src=eval("face"+randomdice+".src")
}


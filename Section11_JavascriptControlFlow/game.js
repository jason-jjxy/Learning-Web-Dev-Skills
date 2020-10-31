//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Enter a number");
var guess = Number(stringGuess);


//check guess
if (guess === secretNumber) {       //similar to int cast in java
    alert("YOU GOT IT RIGHT!");
}
//otherwise, check if guess is higher
else if(guess > secretNumber)
{
    alert("Too high. Guess Again!");
}
//otherwise, check if guess is lower
else
{
    alert("Too low. Guess again!");
}



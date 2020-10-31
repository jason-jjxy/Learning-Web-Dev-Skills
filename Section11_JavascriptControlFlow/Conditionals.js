var userAge = prompt("Enter your age");
var perfSquare = Math.sqrt(userAge);

if(userAge < 0)
{
    throw "Negative number - Please reenter your age";
}else if(userAge == 21)
{
    console.log("Happy 21st birthday!!!");
}else if(((perfSquare * perfSquare) == userAge) && ((userAge%2) == 1))
{
    console.log("Your age is a perfect square & odd!");
}else if((userAge % 2) == 1)
{
    console.log("Your age is odd!"); 
}else if((perfSquare * perfSquare) == userAge)
{
    console.log("Perfect Square!");
}else{
    console.log("Here is your age "+userAge);
}
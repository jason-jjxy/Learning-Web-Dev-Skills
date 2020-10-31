//question 1
var question1 = -10;

console.log("Print all numbers between -10 and 19");
while(question1 != 20){
    console.log(question1);
    question1++;
}

//question 2
var question2 = 10;
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
while(question2 <= 40){
    console.log(question2); 
    question2+=2;
}

//question 3
var question3 = 301;
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");

while(question3 <= 333){
    console.log(question3);
    question3+=2;
}

//question4
var question4 = 5;
console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
while(question4 <= 50){
    var divisible5 = question4 % 5;
    var divisible3 = question4 % 3;
    if((divisible5 == 0) && (divisible3 == 0)){
        console.log(question4);
        question4++;
    }
    question4++; 
    //infinitely repeating at 6 because no incrementation of question4 variable
}
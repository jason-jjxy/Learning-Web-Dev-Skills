//Question 1
console.log("PRINT ALL NUBMERS BETWEEN -10 AND 19")
for(var i = -10; i <= 19; i++){
    console.log(i);

}

//Question 2
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
for(var question2 = 10; question2 <= 40; question2+=2){
    console.log(question2);
}

//Question 3
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
for(var question3 = 301; question3 <= 333; question3+=2){
    console.log(question3); 
}

//Question 4
console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
for(var question4 = 5; question4 <= 50; question4++){
    if(((question4%5) == 0) && ((question4%3)==0)){
        console.log(question4);
    }
    continue;
}
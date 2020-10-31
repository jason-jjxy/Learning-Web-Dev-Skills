function average(arrayOfTestScores){
    var sum = 0;
    arrayOfTestScores.forEach(function(score){
        sum += score;
    });
    var avg = sum/arrayOfTestScores.length;

    return Math.round(avg);
}

console.log("Average score for environment science");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

console.log("Average score for organic chemistry");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));

//by only return math.round(avg), we arent printing anything out
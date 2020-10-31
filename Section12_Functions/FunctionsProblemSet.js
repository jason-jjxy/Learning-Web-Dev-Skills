//Question 1 - isEven()
function isEven(isEvenEntry){
    var result;

    if(isEvenEntry % 2 == 0){
        return true;
    }else{
        return false;
    }
}

//Question 2 - factorial()
function factorial(fact){
    var result = 1;
    if((fact === 0) || (fact === 1)){
        result = 1;
    }else{
        for(var i = 1; i <= fact; i++){
            result = result * i;
        }
    }
    return result;
}

//Question 3 - kebabToSnake()
function kebabToSnake(kebab){

    var result = kebab.replace(/-/g, "_");
    return result;
}
// window.setTimeout(function() {
// var todos = [];

// while(1){
//     var userEntry = prompt("What would you like to do?");

//     if(userEntry == "new"){
//         var newItem = prompt("Enter a new Todo item?");
//         list.push('newItem');
//         console.log()
        
//     }
// }

// }, 500);

window.setTimeout(function(){
var todos = [];
var input = prompt("What would you like to do?");


while(input !== "quit"){
    if (input === "list"){
        todos.forEach(function(todo){
            console.log(todo);
        });
    }else if(input === "new"){
        //ask for new todo
        var newTodo = prompt("Enter new todo");
        //add to todos array
        todos.push(newTodo);
    }
    //ask again for new input
    input = prompt("What would you like to do?");

}
console.log("Ok, you quit the app");

}, 500);
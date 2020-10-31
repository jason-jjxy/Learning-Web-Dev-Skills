var userEntry = prompt("Are we there yet?");


while((userEntry.indexOf("yes") === -1) && (userEntry.indexOf("yeah") === -1)){
    var userEntry = prompt("Are we there yet?");
}
alert("YAY, WE MADE IT!");
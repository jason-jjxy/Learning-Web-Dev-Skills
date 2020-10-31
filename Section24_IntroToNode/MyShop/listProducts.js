var faker = require('faker');                       //dont know what this does yet

var randomProduct = faker.commerce.product();       //this initializes randomProduct to be an object in the commerce folder type product
var randomPrice = faker.commerce.price();           //this initializes randomPrice from commerce file type price

var i = 0                                           //i can use var or let to initalize this object

for (i = 0; i <= 10; i++){
    console.log(faker.fake("{{commerce.product}}, ${{commerce.price}}"));
}
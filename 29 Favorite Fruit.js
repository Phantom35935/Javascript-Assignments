/* Favorite Fruit: Make a array of your favorite fruits, 
and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas! */

var favorite_fruits = ["Mango","Orange","Grape"];


if(favorite_fruits.find(function(i){ return i == "Mango"})== "Mango"){
    console.log("You really like mangos!");
}

if(favorite_fruits.find(function(i){ return i == "Apple"})== "Apple"){
    console.log("You really like mangos!");
}

if(favorite_fruits.find(function(i){ return i == "Water Melon"})== "Water Melon"){
    console.log("You really like mangos!");
}

if(favorite_fruits.find(function(i){ return i == "Orange"}) == "Orange"){
    console.log("You really like oranges!");
}

if(favorite_fruits.find(function(i){ return i == "Grape"}) == "Grape"){
    console.log("You really like Grapes!");
}
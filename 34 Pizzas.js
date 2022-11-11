/* Pizzas: Think of at least three kinds of your favorite pizza. 
Store these pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
such as I really love pizza! */


//Think of at least three kinds of your favorite pizza. 
//Store these pizza names in a array, and then use a for loop to print the name of each pizza

var pizza = ["Cheese Pizza","Chicken Pizza","Mutton Pizza"];

for(i=0; i<pizza.length; i++){
    console.log(pizza[i]);
} 

/* Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza. */

for(i=0; i<pizza.length; i++){
    if(pizza[i] == "Cheese Pizza"){
        console.log("Yesterday I eat Cheese Pizza ");

    } else if (pizza[i] == "Chicken Pizza"){
        console.log("Today I eat Chicken Pizza");

    } else if(pizza[i] == "Mutton Pizza"){
        console.log("Tomorow I will eat Mutton Pizza");

    }
} 


/* Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
such as I really love pizza! */


console.log("\nI like ckicken, Cheese and mutton pizza. \nI also eat pizzas every day. \nBecasue pizzas taste so good thats why I really like Pizza ")



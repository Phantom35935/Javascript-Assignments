/* Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 

• Modify your program to print a statement about each animal, such as A dog would make a great pet. 

• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet! */


/* Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. */

var animals = ["Lion","Wolf","Puma"];
for(i=0; i<animals.length ; i++){
    console.log(animals[i])
}

/* Modify your program to print a statement about each animal, such as A dog would make a great pet. */

var animals = ["Lion","Wolf","Puma"];
for(i=0; i<animals.length ; i++){
    if(animals[i] == "Lion"){
        console.log("Lion is the King of the jungle")
    } else if (animals[i] == "Wolf"){
        console.log("Wolf is a bueatiful animal but also Scary!")
    } else if (animals[i] == "Puma"){
        console.log("Puma can run at the speed 50miles/80Km per Hours isn't it Amazing");
    }
}



/* Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet! */


console.log("\nThese animals are Carnivores and rare in the world")


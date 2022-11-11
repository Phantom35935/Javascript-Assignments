/* 16 More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list. */

var guest
guest = ["Harry","Zack","James","Willson"];

console.log("I found a bigger dinner table");

guest.unshift("Ray");

guest.splice(3,0,"Amy");

guest.push("Tessa");

//console.log(guest);

for (i=0; i<guest.length; i++){
    console.log((i+1)+") "+guest[i]+" You are been invited for dinner")
}
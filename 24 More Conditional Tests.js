/* 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */


var number = 4 
console.log("1) Is number == 4? I predict true"); // checking equlity
console.log(number == 4);

console.log("is number == 8? I predict false");
console.log(number == 8);

var day = "friday";
console.log("\n2) Is day ==\"Friday\"? I predict False."); // checking .toLowerCase
console.log(day == "Friday");

console.log("Is day == \"Friday\".toLowerCase? I predict true.");
console.log(day == "Friday".toLowerCase());

var x = 5;
var y = 7;
var z = 9;

console.log("\n3) Is x > y? I predict false."); // Checking Greather then
console.log(x > y);

console.log("Is y > x? I predict true.");
console.log(y > x);

console.log("\n4) Is z < y? I predict false."); // Cheching Less Then
console.log(z < y);

console.log("Is y < z? I predict true.");
console.log(y < z);
 
console.log("Is x < y && y > z? I predict false"); // Checking AND
console.log(x < y && y > z);   

console.log("Is x < y && y < z? I predict true"); 
console.log(x < y && y < z);

console.log("Is z < y || y < x? I predict false."); // Checking OR
console.log(z < y || y < x);

console.log("is z > y || y > z? I predict true");
console.log(z > y || y > X);

var lower_Case = "apple"

console.log("is lower_Case != \"apple\". I predict false "); // Checking Inequality
console.log(lower_Case != "apple");

console.log("Is lower_Case != \"APPLE\". I predict true");
console.log(lower_Case != "APPLE");

var list1 = [10,11,12,13,14,15];

console.log("is list1.find(function (a){ return a == 20}) == 20? I predict true ");// Checking if 20 is in Array
console.log(list1.find(function (a){ return a == 20}) == 20);

console.log("Is list1.find(function (a){ return a == 10}) == 10? I predict false")// Checking if 10 is in Array
console.log(list1.find(function (a){ return a == 10}) == 10)
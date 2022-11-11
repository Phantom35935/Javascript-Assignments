/* 12 Greetings: Start with the array you used in Exercise 11, 
but instead of just printing each person’s name, print a message to them. 
The text of each message should be the same, 
but each message should be personalized with the person’s name.

 */

var names = ["Harry","Zack","James","Willson","Stella","Aisha","Zeenat"];

for(i=0; i<names.length ;i++){
    console.log((i+1)+") "+names[i]+", Have a Nice Day!");
}
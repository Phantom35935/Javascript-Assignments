/* 14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner. */

var guest = ["Harry","Zack","James","Willson","Stella","Aisha","Zeenat"];

for(i=0; i<guest.length ;i++){
    console.log((i+1)+") Hy, "+guest[i]+" You receved an invitation for the Dinner");
}
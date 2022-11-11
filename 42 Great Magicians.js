/* Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified. */

var magician = ["Harry","Jorden","Zack","Fred"];

function make_great(){
    magician = magician.map(i=>"Great "+i)
    for(i=0;i<magician.length;i++){
        console.log(magician[i]);
    }
}

make_great();
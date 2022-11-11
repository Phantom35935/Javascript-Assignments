/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */

function make_shirt(text,size="Large"){
    console.log("T-Shirt\nSize: "+size+"\nText: "+text);
}

make_shirt("I Love Javascript");
make_shirt("I Love Fortnite","Medium")
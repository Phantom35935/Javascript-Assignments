/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

var usernames = []

for(i=0; i<1; i++){
    if(usernames[i] == "Admin"){
        console.log("Hello admin, would you like to see a status report?")

    } else if(usernames[i] == undefined){
        console.log("We need to find some users")
    }else{console.log("Hello "+usernames[i])}
}
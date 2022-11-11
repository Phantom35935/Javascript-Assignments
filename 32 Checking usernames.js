/* Checking Usernames: Do the following to create a program that simulates 
how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. 
Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. 
If it has, print a message that the person will need to enter a new username. If a username has not been used, 
print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

var current_users = ["sophia","Rayan","Jhon","Charlotte","Lukas","Karmen","Chloe"];
var new_users = ["Anne","Jhon","Willom","Kate","Lukas","CHLOE"];

current_users = current_users.map(i => i.toLocaleLowerCase());
new_users = new_users.map(i => i.toLocaleLowerCase());

var check

for (i=0 ; i < new_users.length; i++ ){

    check = (current_users.find(function (a){ return a.toLowerCase() == new_users[i] }) == new_users[i])
    if(check == true){
        console.log(new_users[i]+" already exist you will need to enter a new username")
    } else if(check == false) {
        console.log(new_users[i]+" is available")
    }
    

} 






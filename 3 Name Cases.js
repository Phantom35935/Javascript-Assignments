/* 3 Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.
*/

var name = "Harry Potter";



console.log("Upper Case: " + name.toUpperCase());
console.log("Lower Case: " + name.toLowerCase());
function titleCase(st) {
  return st.split(" ").reduce( (s, c) => s +""+(c.charAt(0).toUpperCase() + c.slice(1) +" "), '');
}
console.log(titleCase("Title Case: " + name));



/* Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly. */


function make_car(manufacturer, model,{...allArgs}){
    return {
        ...allArgs,
        manufacturer,
        model,
    };
}

var car = make_car("Honda","Accord",{color: "blue", speed: "230"});
console.log(car);

var car = make_car("subaru","RXT456",{color: "Red", date: "24", condiction: "Front mirror broken"});
console.log(car);
/*Step: 1
Creating a function
*/
function objectWithOneProperty(){
    return { time : 12};
}

//Creating variable and assigning it to the result of calling the previous function
let timeObject = objectWithOneProperty(); 
console.log(timeObject);
 
/*Step:2
Creating a function that returns an array with 3 objects.
*/
function functionOfArrayWithObjects( color1, color2, color3 ){
    let arrayOfObjects = [{
        color : color1
    }, {
        color: color2
    }, {
        color: color3
    }];
    return arrayOfObjects;
}

//calling function and passing arguments to assign values to object keys.
let colorObjects = functionOfArrayWithObjects( "red", "blue", "orange" );
console.log(colorObjects);

//For every object in the array logging out the color of the object.
for(let i = 0; i < colorObjects.length; i++){
    console.log(colorObjects[i].color);
}
//Found another cool function to print without loop. :D
colorObjects.forEach( function( item, index){
    console.log(item.color);
});
//Calculating meeting Day

//Creating Object for days of week as value and number of day as keys.
let calculatingDay = { 
    0 : "Sunday",
    1 : "Monday",
    2 : "Tuesday",
    3 : "Wednesday",
    4 : "Thursday",
    5 : "Friday",
    6 : "Saturday"
};
let dayToday = calculatingDay[0];
let meetInNoOfDays = 9;
let meetingDay;

//Calculating day of week fom object using forloop.
for( let i = 0; i <= meetInNoOfDays; i++){
    if( i <= 6){
        meetingDay = calculatingDay[i];
    }
    else{
        meetingDay = calculatingDay[meetInNoOfDays - 7];
    }
}
console.log("Today is: " + dayToday);
console.log("How many days to meet : " + meetInNoOfDays);
console.log("We are meeting on : " + meetingDay);


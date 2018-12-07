/*Exercise:1 
Hello World*/
console.log("Hello,World! // English \nHej, Verden // Danish \nSalaam, Dunia // Urdu " )

//Exercise:2 Rounding a float number to integer.
let a = Math.round(9.25);
console.log("Nearest integer to 9.25 is: " + a);

//Exercise:3 Arrays
let emptyArray = [];
console.log("Undefined Array!");
console.log("The output of emptyArray is: " + emptyArray);

let myFavoriteAnimals = ["Horse", "Deer", "Zabra"];
console.log("My favorite animals are: " + myFavoriteAnimals);

myFavoriteAnimals.push("kitten");
console.log("My favorite animals are: " + myFavoriteAnimals);

//Exercise:4 Strings
let myString = "this is a test";
let stringLength = myString.length;
console.log("The length of \'" + myString + "\' is: " + stringLength);

//Exercise:5 Working with variable types
let rollNo = 12;
const gravity = 10;
let boolean = true;
let myName = "Sana";
let visitedCountries = ["Norway", "Sweden", "Austria"]; 

console.log ('The value of my variable rollNo is: ' + rollNo);
console.log ('The value of my variable gravity is: ' + gravity);
console.log ('The value of my variable boolean is: ' + boolean);
console.log ('The value of my variable myName is: ' + myName);
console.log ('The value of my variable visitedCountries is: ' + visitedCountries);


//Exercise:6 TypeOf
console.log("Types of my variables are number, constant, boolean, string and array respectively");
console.log("Types of variables are:/n rollNo: " + typeof rollNo );
console.log("gravity: " + typeof gravity );
console.log("boolean: " + typeof boolean);
console.log("myName: " + typeof myName);
console.log("visitedCountries: " + typeof visitedCountries);
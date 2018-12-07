//Age-ify (A future age calculator)
let yearOfBirh = 1992;
let yearFuture = 2050;
let age = yearFuture - yearOfBirh;
console.log("You will be " + age + " years old in " + yearFuture +".");

//Goodboy-Oldboy (A dog age calculator) (Optional)
let dogYearOfBirth =2017 ;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth ;
let shouldShowResultInDogYears = true;
if(shouldShowResultInDogYears){
    console.log("Your dog will be " + dogYear*7 + " dog years old in 2027.");
}
else{
    console.log("Your dog will be 10 human years old in 2027.");
}

//Housey pricey (A house price estimator)
//Estimator for Peter:
let widthInMeters = 8 ;
let depthInMeters = 10;
let heightInMeters = 10;
let gardenSizeInM2 = 100;
let volumeInMeters = widthInMeters * depthInMeters * heightInMeters;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if(housePrice < 2500000){
    console.log("Oops! Peter spent " + (2500000-housePrice) + " extra on house!");
}
else{
    console.log("Peter saved " + (housePrice-2500000) + ". And its a great deal!");
}

//Estimator for Julia:
widthInMeters = 5;
depthInMeters = 11;
heightInMeters = 8;
gardenSizeInM2 = 70;
volumeInMeters = widthInMeters * depthInMeters * heightInMeters;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if(housePrice < 100000){
    console.log("Oops! Julia spent " + (100000-housePrice) + " extra on house!");
}
else{
    console.log("Julia  saved " + (housePrice-100000) + ". And its a great deal!");
}

//Ez Namey (Startup name generator) (Optional)
let firstWords = ["awesome","amazing","fun","shining","free","sunny","helping","greener","digital","girls"]; 
let secondWords = ["humanity","gathering","meeting","walks","hobbies","learners","friends","group","corporation","camp"];
let startupName = firstWords[Math.floor(Math.random() * 10) + 0] + " " + secondWords[Math.floor(Math.random() * 10) + 0];
console.log("The startup: \"" + startupName + "\" contains " + startupName.length + " characters.");
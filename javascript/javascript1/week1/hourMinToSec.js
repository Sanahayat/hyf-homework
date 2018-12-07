//Converting X hours and Y minutes into minutes:
let xHours = 4;
let yMin = 30;
let zSeconds = 40; 

//converting hours to minutes, and adding it to yMin:
let convertHourstoMin = xHours * 60;
let finalMin = yMin + convertHourstoMin;

//converting minutes to seconds and adding to zSeconds:
let finalSeconds = (finalMin * 60) + zSeconds;
console.log(xHours + " Hours " + yMin + " minutes " + zSeconds + " to seconds are: " + finalSeconds);
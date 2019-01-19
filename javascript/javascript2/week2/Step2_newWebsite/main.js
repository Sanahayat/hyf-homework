let calculatedArray = [];
let arrayOfDividentsOfThree = [];
let arrayOfDividentsOfFive = [];
let arrayOfDividentsOfThreeAndFive = [];

let resultField =  document.querySelector('.resultField');
//adding event listener to the button.
document.querySelector('.dividentChecking').addEventListener('click', () => {

    //getting the value from input field
    const inputValue = document.querySelector('input').value;
    if (inputValue) {
        if (isNaN(inputValue)) {
            resultField.innerHTML = 'Please insert only number value!';
            alert("Must input numbers");
        } else {
           resultField.innerHTML = inputValue;
            threeFive(inputValue, threeCallBlue, fiveCallYellow, threeAndFiveCallRed); //Using call back functions to change color of result d´field according to number!
        }
    } else {
        resultField.innerHTML = 'Please insert value in text field!';
    }

})


function threeFive(startValue, endValue, threeCallBack, fiveCallBack) {
    for (let i = startValue; i <= endValue; i++) {
        calculatedArray.push(i);
        if (i % 3 == 0 && i % 5 == 0) {
            resultField.innerHTML = startValue + "<br> is a divident of both 3 and 5.";
            threeAndFiveCallRed();      //if input number is divided by both 3 and 5 set background-color red
        } else if (i % 3 == 0) {
            resultField.innerHTML = startValue + "<br> is a divident of 3.";
            threeCallBlue();            //if input number is divided by 3 set background-color blue
        } else if (i % 5 == 0) {
            resultField.innerHTML = startValue + "<br> is a divident of 5.";
            fiveCallYellow();           //if input number is divided by 5 set background-color yellow
        } else {
            resultField.style.backgroundColor = 'transparent';
            resultField.innerHTML = startValue + '<br> is not divident of either 3 or 5!';
        }
    }
};
//making background blue
function threeCallBlue() {
    resultField.style.backgroundColor = 'blue';
};
//making background blue
function fiveCallYellow() {
    resultField.style.backgroundColor = 'yellow';
};
//making background red
function threeAndFiveCallRed() {
    resultField.style.backgroundColor = 'red';
}


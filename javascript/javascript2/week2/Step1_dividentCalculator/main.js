let calculatedArray = [];
let arrayOfDividentsOfThree = [];
let arrayOfDividentsOfFive = [];
let arrayOfDividentsOfThreeAndFive = [];

//Creating function to calculate array from startvalue to endValue...
function threeFive(startValue, endValue, threeCallBack, fiveCallBack) {

    for (let i = startValue; i <= endValue; i++) {
        calculatedArray.push(i);
        if (i % 3 == 0 && i % 5 == 0) {
            dividentOfThreeAndFive(i);
        } else if (i % 3 == 0) {
            threeCallBack(i);
        } else if (i % 5 == 0) {
            fiveCallBack(i);
        }
    }
}

function dividentOfThree(number) {
    arrayOfDividentsOfThree.push(number);
}

function dividentOfFive(number) {
    arrayOfDividentsOfFive.push(number);
}

function dividentOfThreeAndFive(number) {
    arrayOfDividentsOfThreeAndFive.push(number);
}

threeFive(20, 30, dividentOfThree, dividentOfFive);
console.log(calculatedArray);
console.log(arrayOfDividentsOfFive);
console.log(arrayOfDividentsOfThree);
console.log(arrayOfDividentsOfThreeAndFive);

//Printing multidimensional Array..
let multiDimensionalArray = [[['a'], ['b'], ['c']],
                            [['d'], ['e'], ['f']],
                            [['g'], ['h'], ['i']],
                            [['j'], ['k'], ['l']]];
for (let i = 0; i < multiDimensionalArray.length; i++) {
    for (let j = 0; j < multiDimensionalArray[i].length; j++) {
        for (let k = 0; k < multiDimensionalArray[i][j].length; k++) {
            console.log(multiDimensionalArray[i][j][k]);
        }
    }

}

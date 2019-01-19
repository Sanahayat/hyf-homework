//creating array of three functions
const arrayOfFunctions = [() => console.log('function # 1'),
                          () => console.log('function # 2'),
                          () => console.log('function # 3')];

arrayOfFunctions.forEach(function (func) {                    //Calling all function of arrayOfFunctions
    func();
});

const constFunction = () => {                                 // A const function.
        console.log('This is a const function.');
}

function normalFunction(){                                   //Creating function normal way.
    console.log('This function is created normal way.');
}

//Calling both functions.
constFunction();
normalFunction();
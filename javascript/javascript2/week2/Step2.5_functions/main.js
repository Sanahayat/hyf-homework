//creating array of three functions
const arrayOfFunctions = [() => console.log('function # 1'),
                          () => console.log('function # 2'),
                          () => console.log('function # 3')];

//Calling all function of arrayOfFunctions
arrayOfFunctions.forEach(function (func) {
    func();
});

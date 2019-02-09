 // ----Exercise 1----

function promiseReturningFunction(millisecondsToResolve, inputString) {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(inputString);
        }, millisecondsToResolve);
    })
};

//function will return a promise that resolves after 3000 milliseconds!
promiseReturningFunction(3000)
    .then(someResult => {
        console.log('This promise is resolved after 3 seconds!');
    })

//Using same function to log out the string I am called asynchronously after 6000 milliseconds!
promiseReturningFunction(6000, 'I am called asynchronously!')
    .then(resultFromFunction => {
        console.log(resultFromFunction);
    })
 

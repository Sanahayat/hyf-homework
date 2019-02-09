/* function setTimeoutPromise(timeDelay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, timeDelay)
    })
}

setTimeoutPromise(3000)
    .then(() => console.log('Called after 3 seconds!')); */

//Position
let myposition = navigator.geolocation.getCurrentPosition(position => {
    return (position) ;
 })

/* function getCurrentLocation() {
    return new Promise(function (resolve, reject) {
       
        resolve();
        reject('Could not get the positon!');
    })
}

getCurrentLocation()
    .then((position) => {
        console.log(position);
    }).catch((error) => {
        console.log(error);
    }) */
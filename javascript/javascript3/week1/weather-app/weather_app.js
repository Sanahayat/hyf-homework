//Units variable to check tempreture in metric system!
let units = 'metric';
//function for API call
function searchWeather(searchInput) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=${units}&appid=d62d43f576894249f4b6fec44b536f48`)
        .then(response => response.json())
        .then((result) => {
            console.log('gotit')
            showWeather(result);

        })
}

//to show/print the fetched data.
function showWeather(serverResult) {
    console.log(serverResult);
    console.log(serverResult.weather[0].main);

    //selecting all the HTML elements
    let cityNameElement = document.getElementById('cityName');
    let temperatureElement = document.getElementById('temperature');
    let weatherDescriptionElement = document.getElementById('weatherDescription');
    let iconImg = document.getElementById('iconImg');

    //assigning innerHTML with the data from server
    cityNameElement.innerHTML = serverResult.name;
    temperatureElement.innerHTML = Math.floor(serverResult.main.temp) + ' &#176' + 'C';
    weatherDescriptionElement.innerHTML = serverResult.weather[0].description;
    iconImg.src = 'http://openweathermap.org/img/w/' + serverResult.weather[0].icon + '.png';

}

//Eventlistener for the button check Weather.
document.getElementById('submitLocationButton').addEventListener('click', () => {
    //getting the input value fom input field
    let searchInput = document.querySelector('#location').value;
    if (searchInput)
        searchWeather(searchInput);
    else
        document.getElementById('weatherContainer').innerHTML = "Please insert City name!";

});

//event listener for current Location button
document.getElementById('currentLocationButton').addEventListener('click', () => {

    //getting current location
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude, position.coords.longitude);

        let lati = position.coords.latitude
        let longi = position.coords.longitude

        //this code here is DRY. couldn't figure out how not to repeat it.????
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&units=${units}&appid=d62d43f576894249f4b6fec44b536f48`)
            .then(response => response.json())
            .then((result) => {
                console.log('gotit')
                showWeather(result);

            });
    })
})


//using getData() to fetch giphy API for string given by use,
function getData(string) {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${string}&api_key=nsSDZwIUEeGm9tmsr1HS5Xgd21B2jSX2&limit=10`)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            showResult(result);
        })
}

//Showing fetched result gif:
function showResult(result) {
    //taking the array of data to access multiple gifs:
    const dataArray = result.data;
    console.log(dataArray);

    dataArray.forEach(data => {
        let gifImage = document.createElement('img');
        gifImage.src = data.images.preview_webp.url;
        document.querySelector('.gifContainer').appendChild(gifImage);
    });
    //document.getElementById('giphyGIF').src = result.data[1].images.preview_webp.url;
}

document.querySelector('button').addEventListener('click', () => {
    let inputString = document.querySelector('input').value;
    console.log(inputString);

    //passing user input to getData,
    if (inputString)
        getData(inputString);
    else
       alert('Please enter some text!');

})

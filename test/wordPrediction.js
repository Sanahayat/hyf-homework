function getWordPredictions() {
  return fetch(
    "https://services.lingapps.dk/misc/getPredictions?locale=en-GB&text=I%20like%20ca HTTP/1.1 200 OK ",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer MjAxOS0wNS0yMA==.SGFja1lvdXJGdXR1cmVASGFja1lvdXJGdXR1cmUubmV0.M2JhOGRiYjRlYzQ3OTM5M2Q2NmRiYTAzN2MzM2VjYTI=",
        Connection: "close",
        Host: "services.lingapps.dk"
      }
    }
  ).then(response => response.json());
}
getWordPredictions().then(predictions => {
  console.log(predictions);
  let unorderedList = document.getElementById("wordPredictionList");

  predictions.forEach(prediction => {
    let li = document.createElement("li");
    li.innerText = prediction;
    unorderedList.appendChild(li);
  });
});

function getInput() {
  document.getElementById("inputText").addEventListener("input", () => {});
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.body.classList.add(`gradient-${getRandomInt(1, 4)}`);

const allListElements = document.querySelectorAll('li');
console.log(allListElements);
const lengthOfallListElements = allListElements.length;
let indexOfallListElements = 0;

function giveAnimationToLi(index, request) {
    return new Promise((resolve, reject) => {
        if (index < lengthOfallListElements) {
            if (request == 'thumbsUp')
                allListElements[index].style = "transform:translateX(1000px)";

            else if (request == 'thumbsDown' && index <= lengthOfallListElements)
                allListElements[index].style = "transform:translateX(-1000px)";

        } else if (index > lengthOfallListElements) {
            document.querySelector('ul').innerHTML = "Thanks for FeedBack";
        }
        // wait for the transitionend event
        allListElements[index].addEventListener('transitionend', function (e) {
            // event is fired on both transform and opacity ending - we only want one event
            if ( e.propertyName == "transform" ) {
                resolve();
            }
            
        })
       
    })

}
function animateNextLiToView(nextLi) {
    if (nextLi < lengthOfallListElements - 2)
        allListElements[nextLi].style = 'opacity: 1; transform: scale(1)';
    else
        document.querySelector('ul').innerHTML = "Thanks for FeedBack";
}

var pending = false;
var buttons = document.querySelectorAll('button');


document.querySelector('.interaction-container').addEventListener('click', (event) => {

    // loop through elements clicked under mouse in the e.path array
    var button = event.path.find(e => e.className == "accept") ? 'thumbsUp' : 'thumbsDown';
    // if animating/pending - return;
    if (pending) return;
    pending = true;
    giveAnimationToLi(indexOfallListElements, button)
        .then(() => {
            pending = false;
            animateNextLiToView(indexOfallListElements + 1);
            indexOfallListElements++;
            console.log(indexOfallListElements)
        });
})


function createImageTags() {
    allListElements.forEach(listElement => {

        const imageInsideLi = document.createElement('img');
        listElement.appendChild(imageInsideLi);
    })
}
createImageTags();
console.log(allListElements[0]);

function getImagesFromApi() {
    fetch('https://picsum.photos/list')
        .then(response => response.json())
        .then(photos => {
            console.log(photos)
            return new Promise((resolve, reject) => {
                resolve(photos);
                reject('Oops! Something went wrong!')
            });
        })
}
getImagesFromApi();
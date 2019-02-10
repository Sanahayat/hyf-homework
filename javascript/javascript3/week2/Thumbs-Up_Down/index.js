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

        resolve();
    })

}
function animateNextLiToView(nextLi) {
    if (nextLi < lengthOfallListElements - 2)
        allListElements[nextLi].style = 'opacity: 1; transform: scale(1)';
    else
        document.querySelector('ul').innerHTML = "Thanks for FeedBack";
}


document.querySelector('.accept').addEventListener('click', () => {
    giveAnimationToLi(indexOfallListElements, 'thumbsUp')
        .then(() => {
            animateNextLiToView(indexOfallListElements + 1);
            indexOfallListElements++;
            console.log(indexOfallListElements)
        });
})

document.querySelector('.reject').addEventListener('click', () => {
    giveAnimationToLi(indexOfallListElements, 'thumbsDown')
        .then(() => {
            animateNextLiToView(indexOfallListElements + 1);
            indexOfallListElements++;
            console.log(indexOfallListElements)
        })
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
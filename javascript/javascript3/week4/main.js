console.log('Script loaded');
let totalScore = 0;
class Quiz {
    constructor(name) {
        this.name = name;
    }
    getQuestions() {
        return fetch('https://gist.githubusercontent.com/benna100/c9c38faebea1526fb4e6b6b896a1dc94/raw/9468c385bfb422620676b3669509b0a59b326c42/quiz-questions.json')
            .then(responseQuestions => responseQuestions.json());

    }
    renderQuestions(questions) {

        const QuizUl = document.querySelector('.questions > ul');
        questions.forEach(question => {
            const questionLi = document.createElement('li');

            const questionTitle = document.createElement('h3');
            questionTitle.innerHTML = question.title;
            questionLi.appendChild(questionTitle);

            const questionContent = document.createElement('h4');
            questionContent.innerHTML = question.content;
            questionLi.appendChild(questionContent);

            const selectOptiosForQuestion = document.createElement('select');
            question.options.forEach(option => {
                const answerOption = document.createElement('option');
                answerOption.innerHTML = option.content;
                if (option.correct) {
                    answerOption.setAttribute('data-is-answer', 'true');
                    console.log(answerOption)
                } else {
                    answerOption.setAttribute('data-is-answer', 'false');
                    console.log(answerOption)
                }

                selectOptiosForQuestion.appendChild(answerOption)
            })
            questionLi.appendChild(selectOptiosForQuestion);

            QuizUl.appendChild(questionLi);

        });

    }
    getScore() {
        return document.querySelectorAll('option:checked[data-is-answer=true]').length;
    }

    renderScore(score) {
        document.querySelector('.result').innerHTML = score;
        if (score > 0) {
            var confettiSettings = { target: 'confetti' };
            var confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
            var audio = new Audio('careless-whisper.mp3');
            audio.play();
        }
    }

}
const firstQuiz = new Quiz('firstQuiz');
console.log(firstQuiz)

firstQuiz.getQuestions()
    .then((questions) => {
        document.querySelector('.loading').remove();
        firstQuiz.renderQuestions(questions);
    })

document.querySelector('button').addEventListener('click', () => {
    console.log(firstQuiz.getScore());
    const resultScore = firstQuiz.getScore();
    firstQuiz.renderScore(resultScore);
})
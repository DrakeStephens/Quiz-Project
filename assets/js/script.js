var startBtnEl = document.querySelector('#start-btn')
var questionContainer = document.querySelector("#questions")
var questionEl = document.querySelector("#question")
var answerBtnsEl = document.querySelector("#answerButtons")
var nextBtn = document.querySelector("#next-btn")
var scoreEl = document.querySelector("#score")

let shuffledQuestions,  currentQuestionsIndex
var score = 0;

startBtnEl.addEventListener('click', startGame)
nextBtn.addEventListener('click', () => {
    currentQuestionsIndex++;
    setNextQuestion()
}) 

function startGame() {
    score = 0
    scoreEl.classList.remove("hide")
    startBtnEl.classList.add("hide");
    scoreEl.textContent = (score + "/5");
    shuffledQuestions = questions.sort();
    currentQuestionsIndex = 0
    questionContainer.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}



function showQuestion(question) {
    questionEl.textContent = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.textContent = answer.text
        button.className = ('btn')
            if(answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener('click', selectAnswer)
            answerBtnsEl.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answerBtnsEl.firstChild) {
        answerBtnsEl.removeChild
        (answerBtnsEl.firstChild)
    }
}

function selectAnswer(e) {
    var selectedBtn = e.target
    var correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(selectedBtn.dataset=correct){
        score++
        scoreEl.textContent = (score + "/5");
    }
    if(shuffledQuestions.length > currentQuestionsIndex + 1){
    nextBtn.classList.remove('hide')
    }else {
        startBtnEl.textContent=("restart")
        startBtnEl.classList.remove('hide')
        var initials = prompt("Congrats! Enter Initials.")
        localStorage.setItem("initials", initials)
        localStorage.setItem("score", score)
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')

    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')    

}
var questions = [
    {
        question: "filler1",
        answers: [
            {text: "filler1", correct: true},
            {text: "filler1", correct: false},
            {text: "filler1", correct: false},
            {text: "filler1", correct: false}

        ]
    },
    {
        question: "filler2",
        answers: [
            {text: "filler2", correct: true},
            {text: "filler2", correct: false},
            {text: "filler2", correct: false},
            {text: "filler2", correct: false}

        ]
    },
    {
        question: "filler3",
        answers: [
            {text: "filler3", correct: true},
            {text: "filler3", correct: false},
            {text: "filler3", correct: false},
            {text: "filler3", correct: false}

        ]
    },
    {
        question: "filler4",
        answers: [
            {text: "filler4", correct: true},
            {text: "filler4", correct: false},
            {text: "filler4", correct: false},
            {text: "filler4", correct: false}

        ]
    },
    {
        question: "filler5",
        answers: [
            {text: "filler5", correct: true},
            {text: "filler5", correct: false},
            {text: "filler5", correct: false},
            {text: "filler5", correct: false}

        ]
    },  
    {
        question: "Good Job!!!!!!!!!",
            answers:[
                {text: "Finish!!!!!"}
            ] 
    }
]
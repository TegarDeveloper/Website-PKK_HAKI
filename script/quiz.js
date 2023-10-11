const questions = [
    {
        question: "Apa singkatan dari OOP?",
        answer: [
            {text: "Object Organzation Programming", correct: false},
            {text: "Object Oriented Programming", correct: true},
            {text: "Object Original Programming", correct: false},
            {text: "Object Oriented Pro Player", correct: false},
        ],
    },
    {
        question: "Apa singkatan dari OOP?",
        answer: [
            {text: "Object Organzation Programming", correct: false},
            {text: "Object Oriented Programming", correct: true},
            {text: "Object Original Programming", correct: false},
            {text: "Object Oriented Pro Player", correct: false},
        ],
    },
    {
        question: "Apa singkatan dari OOP?",
        answer: [
            {text: "Object Organzation Programming", correct: false},
            {text: "Object Oriented Programming", correct: true},
            {text: "Object Original Programming", correct: false},
            {text: "Object Oriented Pro Player", correct: false},
        ],
    },
    {
        question: "Apa singkatan dari OOP?",
        answer: [
            {text: "Object Organzation Programming", correct: false},
            {text: "Object Oriented Programming", correct: true},
            {text: "Object Original Programming", correct: false},
            {text: "Object Oriented Pro Player", correct: false},
        ],
    },
    {
        question: "Apa singkatan dari OOP?",
        answer: [
            {text: "Object Organzation Programming", correct: false},
            {text: "Object Oriented Programming", correct: true},
            {text: "Object Original Programming", correct: false},
            {text: "Object Oriented Pro Player", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.fotEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
}


startQuiz();
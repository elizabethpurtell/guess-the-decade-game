// *** Global Variables ***
const playerArray = [];
let answersCorrect = 0;

// *** Constructor functions ***
// todo: need const for the questions
function Game(playerName, correctAnswer) {
  this.playerName = playerName;
  this.correctAnswer = correctAnswer;
  this.songQuestions = [];
  this.correctAnswerTotal = 0;
}

// *** Prototype Methods ***



// *** Regular Functions ***
// todo: to start the game, the player needs to give their name, it will be used in the end for displaying score on popup, then being ported over to the home.html scoreboard chart to go along with their scores and level

// todo: once all 5 questions are done, display a popup message with their score and a button to view their score on the scoreboard on the home.html page
// todo: give ratings for each level of correct answers, i.e. 1/5 you suck and really need to broaden your tastes, your level is "Novice"

// done: function with 5 questions to ask the player
// todo: make up questions to add
// done: each question will have 3 possible answers as images to click
// todo: add messages for choosing wrong answer
// todo: each correct answer gets added to a counter out of 5 possible correct

// method 2 function for questions
function songQuestions(){
  let question = 'none';
  
  let songAnswers = [img1, img2, img3];
  let correctAnswer = 'none';
  let incorrectAnswer = 0;
  let userAnswers = 'none';
  let answersCorrect = 0;

  while(questions === 5){
    let 
  }
}



      // img1: "img/80smusic.png"
      // img2: "img/90smusic.png"
      // img3: "img/00smusic.png"

// method one to make function for questions
const songQuestions = [
  {
    question: 'enter song question here',
    options: ['img1', 'img2', 'img3'],
    correctAnswer: 'img1',
  },
  {
    question: 'enter song question here',
    options: ['img1', 'img2', 'img3'],
    correctAnswer: 'img1',
  },
  {
    question: 'enter song question here',
    options: ['img1', 'img2', 'img3'],
    correctAnswer: 'img1',
  },
  {
    question: 'enter song question here',
    options: ['img1', 'img2', 'img3'],
    correctAnswer: 'img1',
  },
  {
    question: 'enter song question here',
    options: ['img1', 'img2', 'img3'],
    correctAnswer: 'img1',
  },    
  
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');


let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];


// todo: function to generate the quiz and its reset

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('img');
    option.className = 'imgOption';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(img);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}




// *** Event Listeners ***
// todo: event listener for click to start game
// todo: event listener for click on answer choice image (3 choices)
// todo: event listener for end of game message with button click to get results that transfers to home page scoreboard
// 


// *** Call Functions ***
//  todo: call the questions function
// event.target go look in odd duck
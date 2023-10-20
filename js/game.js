'use strict';


// *** Global Variables ***

let currentQuestion = -1;
let score = 0;
let playerName = '';
let players = [];
let questions = [];


// *** DOM Windows ***

const playerNameElement = document.getElementById('playerName');
const startButton = document.getElementById('startButton');
const startScreen = document.getElementById('start');
const quizScreen = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerElements = [];
for (let i = 1; i < 3; i++) {
  answerElements.push(document.getElementById(`answers${i}`));
}
// const answerElements = [document.getElementById('answer1'), document.getElementById('answer2'), document.getElementById('answer3')];
const resultElement = document.getElementById('result');
const messageElement = document.getElementById('message');
const nextButton = document.getElementById('nextButton');


// *** Constructor functions ***
function QuizQuestion(question, correctAnswer) {
  this.question = question;
  this.correctAnswer = correctAnswer;
}




// *** Event Handlers ***

// *** Event Listener ***

// document.addEventListener('DOMContentLoaded', function () {
//   const startButton = document.getElementById('startButton');

//   startButton.addEventListener('click', function () {
//     const playerNameElement = document.getElementById('playerName');
//     const playerName = playerNameElement.value;

//     if (playerName.trim() === '') {
//       alert('Enter a name to play the game');
//     } else {
//       // const quiz = new QuizGame(playerName); 
//       // Create a new instance of QuizGame for the player
//       quiz.startGame();
//     }
//   });
// });


// *** Helper Functions / Utilities ***
// to start the game, the player needs to give their name, it will be used in the end for displaying score on popup, then is ported over to the home.html scoreboard via localStorage use on the home.js file. Player can then see score along with other players scores.
function startGame() {

  playerName = playerNameElement.value;
  if (playerName.trim() === '') {
    alert('Enter name to play game');
  } else {
    playerNameElement.disabled = true;
    startScreen.disabled = true;
    quizScreen.disabled = false;
    nextQuestion();
  }

}


function nextQuestion() {
  if (currentQuestion < questions.length) {
    currentQuestion++;
    messageElement.textContent = '';
    questionElement.textContent = questions[currentQuestion - 1].question;
    for (let i = 0; i < 3; i++) {
      answerElements[i].addEventListener('click', answerClickHandler);
    }
  } else {
    showScore();
  }
}


function checkAnswer(selectedAnswer) {
  const correctAnswer = questions[currentQuestion - 1].correctAnswer;
  if (selectedAnswer === correctAnswer) {
    score++;
    messageElement.textContent = 'Nailed it! Your music knowledge is on point!';
    // nextQuestion();
  } else {
    messageElement.textContent = 'Not quite, but you\'re still a rockstar in our hearts!';
    // nextQuestion();
  }
  resultElement.style.display = 'block';
  resultElement.disabled = false;
  // Disable click events for answer images
  for (let i = 0; i < 3; i++) {
    answerElements[i].removeEventListener('click', answerClickHandler);
  }
}


// Add this function to handle click events on answer elements
function answerClickHandler(event) {
  const selectedAnswer = parseInt(event.target.dataset.answer);
  checkAnswer(selectedAnswer);
}

function showScore() {
  questionElement.textContent = 'Game Over, ' + playerName + '!';
  const playerScore = score;
  const rank = assignRank(playerScore);

  const playerData = {
    name: playerName,
    score: playerScore,
    rank: rank,
  };

  players.push(playerData);
  localStorage.setItem('players', JSON.stringify(players));

  const popupWindow = window.open('', '_blank', 'width=400,height=200');
  popupWindow.document.write(
    `<h1>Game Over, ${playerName}!</h1>
    <p>Your Score: ${playerScore} / ${questions.length}</p>
    <p>Your Rank: ${rank}</p>
    <a href="../index.html" target="_blank">View Scoreboard</a>`
  );
}

// Function to assign rank names based on score ranges
function assignRank(score) {
  if (score >= 0 && score <= 1) {
    return 'Silent Listener';
  } else if (score >= 2 && score <= 3) {
    return 'Novice Note-Taker';
  } else if (score >= 4 && score <= 5) {
    return 'Melody Explorer';
  } else if (score >= 6 && score <= 7) {
    return 'Hit Harmony Hunter';
  } else if (score >= 8 && score <= 9) {
    return 'Lyric Luminary';
  } else if (score >= 10) {
    return 'Rockstar Virtuoso';
  } else {
    return 'Undefined Rank';
  }
}
//  *** Executable code on page load ***

let q1 = new QuizQuestion('1/10: Which decade did the song "Bille Jean" by Michael Jackson come from?', 1);
let q2 = new QuizQuestion('2/10: Which decade did the song "Sweet Child-o-Mine" by Guns N Roses come from?', 1);
let q3 = new QuizQuestion('3/10: Which decade did the song "Wannabe" by Spice Girls come from?', 2);
let q4 = new QuizQuestion('4/10: Which decade did the song "Clocks" by Coldplay come from?', 3);
let q5 = new QuizQuestion('5/10: Which decade did the song "Smells Like Teen Spirit" by Nirvana come from?', 2);
let q6 = new QuizQuestion('6/10: Which decade did the song "I Want It That Way" by Backstreet Boys come from?', 2);
let q7 = new QuizQuestion('7/10: Which decade did the song "Halo" by Beyoncé come from?', 3);
let q8 = new QuizQuestion('8/10: Which decade did the song "Livin on a Prayer" by Bon Jovi come from?', 1);
let q9 = new QuizQuestion('9/10: Which decade did the song "Rolling in the Deep" by Adele come from?', 3);
let q10 = new QuizQuestion('10/10: Which decade did the song "Like a Prayer" by Madonna come from?', 1);

questions.push(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10);


// Set up the initial click event for the startButton
startButton.onclick = startGame;
// QuizQuestion();

// *** LOCAL STORAGE CONTINUES HERE ***

// local storage retrieval is pointed towards the table which is located on the index.html page and the home.js files




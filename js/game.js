'use strict';


// *** Global Variables ***

let currentQuestion = 0;
let score = 0;
let playerName = '';

// *** DOM Windows ***

const playerNameElement = document.getElementById('playerName');
const startButton = document.getElementById('startButton');
const startScreen = document.getElementById('start');
const quizScreen = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerElements = [null, document.getElementById('answer1'), document.getElementById('answer2'), document.getElementById('answer3')];
const resultElement = document.getElementById('result');
const messageElement = document.getElementById('message');
const nextButton = document.getElementById('nextButton');


// *** Constructor functions ***



// *** Event Handlers ***


// Add event listeners to answer images
for (let i = 1; i <= 3; i++) {
  answerElements[i].addEventListener('click', () => checkAnswer(i));
}

document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('startButton');

  startButton.addEventListener('click', function () {
    const playerNameElement = document.getElementById('playerName');
    const playerName = playerNameElement.value;

    if (playerName.trim() === '') {
      alert('Enter a name to play the game');
    } else {
      const quiz = new QuizGame(playerName); // Create a new instance of QuizGame for the player
      quiz.startGame();
    }
  });
});


// *** Helper Functions / Utilities ***

const questions = [
  {
    question: '1/10: Which decade did the song "Bille Jean" by Michael Jackson come from?',
    correctAnswer: 1,
  },
  {
    question: '2/10: Which decade did the song "Sweet Child-o-Mine" by Guns N Roses come from?',
    correctAnswer: 1,
  },
  {
    question: '3/10: Which decade did the song "Wannabe" by Spice Girls come from?',
    correctAnswer: 2,
  },
  {
    question: '4/10: Which decade did the song "Clocks" by Coldplay come from?',
    correctAnswer: 3,
  },
  {
    question: '5/10: Which decade did the song "Smells Like Teen Spirit" by Nirvana come from?',
    correctAnswer: 2,
  },
  {
    question: '6/10: Which decade did the song "I Want It That Way" by Backstreet Boys come from?',
    correctAnswer: 2,
  },
  {
    question: '7/10: Which decade did the song "Halo" by Beyoncé come from?',
    correctAnswer: 3,
  },
  {
    question: '8/10: Which decade did the song "Livin on a Prayer" by Bon Jovi come from?',
    correctAnswer: 1,
  },
  {
    question: '9/10: Which decade did the song "Rolling in the Deep" by Adele come from?',
    correctAnswer: 3,
  },
  {
    question: '10/10: Which decade did the song "Like a Prayer" by Madonna come from?',
    correctAnswer: 1,
  },
];

// to start the game, the player needs to give their name, it will be used in the end for displaying score on popup, then is ported over to the home.html scoreboard via localStorage use on the home.js file. Player can then see score along with other players scores.

function startGame() {
  playerName = playerNameElement.value;
  if (playerName.trim() === '') {
    alert('Enter name to play game');
  } else {
    playerNameElement.disabled = true;
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    nextQuestion();
  }
}

function nextQuestion() {
  if (currentQuestion < questions.length) {
    resultElement.style.display = 'none';
    currentQuestion++;
    questionElement.textContent = questions[currentQuestion - 1].question;
    for (let i = 1; i <= 3; i++) {
      answerElements[i].style.pointerEvents = 'auto'; // Enable click events for answer images
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
  } else {
    messageElement.textContent = 'Not quite, but you\'re still a rockstar in our hearts!';
  }
  resultElement.style.display = 'block';
  for (let i = 1; i <= 3; i++) {
    answerElements[i].style.pointerEvents = 'none'; // Disable click events for answer images
  }
}
showScore = function () {
  resultElement.style.display = 'none';
  questionElement.textContent = 'Game Over, ' + playerName + '!';
  const playerScore = score;
  const rank = assignRank(playerScore);

  // Create a new object for player data
  const playerData = {
    name: playerName,
    score: playerScore,
    rank: rank,
  };

  // Add the player data to the players array
  players.push(playerData);

  // Save the players array to localStorage
  localStorage.setItem('players', JSON.stringify(players));

  // Create a popup window with the score and a link to the scoreboard/home page
  const popupWindow = window.open('', '_blank', 'width=400,height=200');
  popupWindow.document.write(
    `<h1>Game Over, ${playerName}!</h1>
    <p>Your Score: ${playerScore} / ${questions.length}</p>
    <p>Your Rank: ${rank}</p>
    <a href="index.html" target="_blank">View Scoreboard</a>`
  );
};


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



// **** EXECUTABLE CODE *****

startButton.onclick = startGame;


// *** LOCAL STORAGE CONTINUES HERE ***

// local storage retrieval is pointed towards the table which is located on the index.html page and the home.js files




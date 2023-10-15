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

let currentQuestion = 0;
let score = 0;
let playerName = '';

const playerNameElement = document.getElementById('playerName');
const startButton = document.getElementById('startButton');
const startScreen = document.getElementById('start');
const quizScreen = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerElements = [null, document.getElementById('answer1'), document.getElementById('answer2'), document.getElementById('answer3')];
const resultElement = document.getElementById('result');
const messageElement = document.getElementById('message');
const nextButton = document.getElementById('nextButton');

// Add event listeners to answer images
for (let i = 1; i <= 3; i++) {
  answerElements[i].addEventListener('click', () => checkAnswer(i));
}

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
    messageElement.textContent = 'Correct!';
  } else {
    messageElement.textContent = 'Incorrect!';
  }
  resultElement.style.display = 'block';
  for (let i = 1; i <= 3; i++) {
    answerElements[i].style.pointerEvents = 'none'; // Disable click events for answer images
  }
}


function showScore() {
  resultElement.style.display = 'none';
  questionElement.textContent = 'Game Over, ' + playerName + '!';
  const playerScore = score;
  const rank = assignRank(playerScore);

  // Save player data, including rank, to localStorage
  const playerData = {
    name: playerName,
    score: playerScore,
    rank: rank,
  };
  localStorage.setItem('playerData', JSON.stringify(playerData));

  // Create a popup window with the score and a link to the chart page
  const popupWindow = window.open('', '_blank', 'width=400,height=200');
  popupWindow.document.write(
    `<h1>Game Over, ${playerName}!</h1>
      <p>Your Score: ${playerScore} / ${questions.length}</p>
      <p>Your Rank: ${rank}</p>
      <a href="index.html" target="_blank">View Scoreboard</a>`
  );
}

// Function to assign rank based on score
function assignRank(score) {
  if (score === 0) {
    return 'Novice';
  } else if (score === 1) {
    return 'Loser';
  } else if (score === 2) {
    return 'You\'re Okay';
  } else if (score === 3) {
    return 'Awesome';
  } else {
    return 'Undefined Rank';
  }
}



startButton.onclick = startGame;


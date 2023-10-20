'use strict';


// assigning a meaningful name to the function
// in order to make future maintenance easier:
// function changeBackgroundColor(chosenColor) {
  // caching the <body> element:
  // const body = document.querySelector('body');
  
  // updating the background-color via the
  // 'style' interface:
  // body.style.backgroundColor = chosenColor;
// }

// retrieving the <input> element with a type-attribute
// equal to "color":
// const input = document.querySelector('input[type=color]');

// using EventTarget.addEventListener() to use the anonymous
// function to call the setBackgroundColor() function, passing
// the value of the evt.currentTarget node (the color <input>)
// as the argument:
// input.addEventListener('change', (evt)=> changeBackgroundColor(evt.currentTarget.value));



document.addEventListener('DOMContentLoaded', function () {
  // Retrieve player data from localStorage
  const playerData = JSON.parse(localStorage.getItem('playerData'));

  if (playerData) {
      const playerName = playerData.name;
      const playerScore = playerData.score;
      const rank = playerData.rank;

      // Append the player data to the table
      const scoreTableBody = document.getElementById('scoreTableBody');

      // Create a new table row
      const newRow = document.createElement('tr');

      // Create and populate table cells for player data
      const playerNameCell = document.createElement('td');
      playerNameCell.textContent = playerName;
      const playerScoreCell = document.createElement('td');
      playerScoreCell.textContent = playerScore;
      const rankCell = document.createElement('td');
      rankCell.textContent = rank;

      // Append cells to the new row
      newRow.appendChild(playerNameCell);
      newRow.appendChild(playerScoreCell);
      newRow.appendChild(rankCell);

      // Append the row to the table body
      scoreTableBody.appendChild(newRow);
      // newRow.appendChild(scoreTableBody);
  }
});

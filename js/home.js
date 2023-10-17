'use strict';

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

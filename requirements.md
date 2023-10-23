# Software Requirements

## Vision

I wanted to make something fun that also used a good collection of what I have learned in the last few months.

It solves burnout and gives the brain something different to focus on. This is a fun game to relax and blow off steam. It tests the user's knowledge of when certain songs came out. They can play against friends and return to see their scores.

### Scope (In/Out)

IN - What will your product do

The web app will provide entertainment to play a fun game.

The web app will provide a way to see your score at any time as it stays with the scoreboard.

It will have 10 questions using 3 possible answers for each of them.

It will have a scoreboard that will house the player data.

OUT - What will your product not do.

My web app will not be an iOS or Android game.

It won't dig for data as it only deals in what you give it.

### Minimum Viable Product vs What will your MVP functionality be?

My MVP was a functional game that could make it through all the questions and relay the playerData into the scoreboard.

### What are your stretch goals?

My stretch goals were to add additional info to the game and scoreboard pages that included tables with all the different ranks. I had also wanted to add a theme color changer.

### Functional Requirements

An admin can change up the questions or the answers, the answer images all very easily.

The users can play the game repeatedly and against others to see all their results on the scoreboard.

### Data Flow

The user starts by playing the game. They enter their name and hit "Start Game". The first question of ten pops up on the screen and they answer by choosing between 3 possible image answers.

After each choice the user will see a response that tells them if they were correct or not. Each answer is recorded for later use.

Once they answer all 10 questions a pop-up window will appear with their name, their score and the rank. This player data is also sent through JSON and local storage to be used on the scoreboard table in the index.html page. The user then clicks the button to see the scoreboard. They are taken to the home page which houses the scoreboard for all who play.

At the scoreboard they will see their name, score and rank on a table that is populated via JSON local storage.

There is a button on the scoreboard page that will take them back to play the game again. In the header menu they could also choose to check out the about me page or play the game from there.

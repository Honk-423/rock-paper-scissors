/* 
*  Randomly generates a number between 0 and 1 in decimal form.
*  If the random number is less than 0.01 or higher than 0.99, a loop
*  runs until a number in between that range is provided. 
*  The number is then used to randomly pick whether the computer plays 
*  rock, paper, or scissors. 
*/

function getComputerChoice(computerChoice) {

    randomNumber = Math.random();

    while (randomNumber < 0.01 || randomNumber > 0.99) {
            randomNumber = Math.random();
            console.log(randomNumber);
        }
    // A number below 0.01 isn't desired because counting begins with 
    // one.
    // A number above 0.99 isn't desired because it would make one 
    // choice more likely to be picked than the others, since 1 doesn't
    // split evenly into 3 parts.

    if (randomNumber >= 0.67 && randomNumber < 0.99) {
        computerChoice = "Scissors";
    } else if (randomNumber <= 0.66 && randomNumber > 0.33) {
        computerChoice = "Paper";
    } else if (randomNumber <= 0.33 && randomNumber > 0.01) {
        computerChoice = "Rock";
    }

    return computerChoice;
}

function getHumanChoice(humanChoice) {
    if (playerSelection === 0) {
        humanChoice = "Rock";
        return humanChoice;
    };

    if (playerSelection === 1) {
        humanChoice = "Paper";
        return humanChoice;
    };

    if (playerSelection === 2) {
        humanChoice = "Scissors";
        return humanChoice;
    };
};

let computerScore = 0;

let humanScore = 0;

function playRound(computerChoice, humanChoice) {

    computerChoice = getComputerChoice();
    
    humanChoice = getHumanChoice();
        
        if (humanChoice == "Rock" || 
            humanChoice == "Paper" || 
            humanChoice == "Scissors") {
                console.log(`Computer: ${computerChoice}`);
                console.log(`Human: ${humanChoice}`);
            }

            if (humanChoice == "Rock" && computerChoice == "Paper" ||
                humanChoice == "Paper" && computerChoice == "Scissors" ||
                humanChoice == "Scissors" && computerChoice == "Rock"
            ) {
                // COMBINE all player loss if statements
                
                let choice = document.createElement("p");
                choice.textContent = `Player: ${humanChoice} | Computer: ${computerChoice}`
                output.appendChild(choice);

                computerScore++;
                let score = document.createElement("p");
                score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
                output.appendChild(score);
                // INIT score
                // MAKE score's text content keep track of humanScore
                // and computerScore
                // APPEND score to output

                // INIT  and create a paragraph element with 
                // it
                // MAKE  display a relevant and accurate 
                // outcome message
                // APPEND  to output

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
                // INIT lineBreak and create a linebreak element with
                // it
                // APPEND lineBreak to output

                // REPEAT these steps for all if statements related to
                // displaying the score and outcome
            } else if (humanChoice == "Rock" && computerChoice == "Scissors" ||
                       humanChoice == "Paper" && computerChoice == "Rock" ||
                       humanChoice == "Scissors" && computerChoice == "Paper"
            ) {
                // COMBINE all player victory if statements
                let choice = document.createElement("p");
                choice.textContent = `Player: ${humanChoice} | Computer: ${computerChoice}`
                output.appendChild(choice);

                humanScore++;
                score = document.createElement("p");
                score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
                output.appendChild(score);

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
            } else if (humanChoice === computerChoice) {
                let choice = document.createElement("p");
                choice.textContent = `Player: ${humanChoice} | Computer: ${computerChoice}`
                output.appendChild(choice);

                score = document.createElement("p");
                score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
                output.appendChild(score);

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);

            } else {
                score = document.createElement("p");
                score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
                output.appendChild(score);

                let choice = document.createElement("p");
                choice.textContent = `Invalid input`;
                output.appendChild(choice);
                
                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
            };

            if (humanScore === 5) {
                const gameOutcome = document.createElement("h3");
                gameOutcome.textContent = "Player wins the game!";
                output.appendChild(gameOutcome);

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
            } else if (computerScore === 5) {
                const gameOutcome = document.createElement("h3");
                gameOutcome.textContent = "Player loses the game...";
                output.appendChild(gameOutcome);

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
            }

            if (humanScore === 5 || computerScore === 5) {
                humanScore = 0;
                computerScore = 0;
            };


    };
    
let playerSelection;
// INIT variable named playerSelection

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
    playerSelection = 0;
    playRound();
});
// INIT btnRock
// ADD event listener on click for all buttons
    // GIVE playerSelection a unique value to use with humanChoice
    // CALL playRound func every time a button is clicked

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
    playerSelection = 1;
    playRound();
});
// INIT btnPaper
// ADD event listener on click for all buttons
    // GIVE playerSelection a unique value to use with humanChoice
    // CALL playRound func every time a button is clicked

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
    playerSelection = 2;
    playRound();
});
// INIT btnScissors
// ADD event listener on click for all buttons
    // GIVE playerSelection a unique value to use with humanChoice
    // CALL playRound func every time a button is clicked

const output = document.querySelector("#output");
// INIT div

// IMPROVE computerChoice generation because every 500 or so uses, it 
// returns as undefined.

// REWRITE pseudocode to make it explain what everything does instead
// basically being a guide on what to do next

// CLEAN up old pseudocode
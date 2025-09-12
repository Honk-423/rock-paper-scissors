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

            if (humanChoice == "Rock" && computerChoice == "Paper") {
                computerScore++;
                let score = document.createElement("p");
                score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
                output.appendChild(score);
                // INIT score
                // MAKE score's text content keep track of humanScore
                // and computerScore
                // APPEND score to output

                let outcomeMsg = document.createElement("p");
                outcomeMsg.textContent = "You lose! Paper beats rock.";
                output.appendChild(outcomeMsg);
                // INIT outcomeMsg and create a paragraph element with 
                // it
                // MAKE outcomeMsg display a relevant and accurate 
                // outcome message
                // APPEND outcomeMsg to output

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
                // INIT lineBreak and create a linebreak element with
                // it
                // APPEND lineBreak to output

                // REPEAT these steps for all if statements related to
                // displaying the score and outcome
            } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
                computerScore++;
                score = document.createElement("p");
                score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
                output.appendChild(score);

                outcomeMsg = document.createElement("p");
                outcomeMsg.textContent = "You lose! Scissors beats paper.";
                output.appendChild(outcomeMsg);

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
            } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
                computerScore++;
                score = document.createElement("p");
                score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
                output.appendChild(score);

                outcomeMsg = document.createElement("p");
                outcomeMsg.textContent = "You lose! Rock beats scissors.";
                output.appendChild(outcomeMsg);

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
            } else if (humanChoice == "Paper" && computerChoice == "Rock") {
                humanScore++;
                score = document.createElement("p");
                score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
                output.appendChild(score);

                outcomeMsg = document.createElement("p");
                outcomeMsg.textContent = "You win! Paper beats rock.";
                output.appendChild(outcomeMsg); 

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
            } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
                humanScore++;
                score = document.createElement("p");
                score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
                output.appendChild(score);

                outcomeMsg = document.createElement("p");
                outcomeMsg.textContent = "You win! Rock beats scissors.";
                output.appendChild(outcomeMsg);

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak); 
            } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
                humanScore++;
                score = document.createElement("p");
                score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
                output.appendChild(score);

                outcomeMsg = document.createElement("p");
                outcomeMsg.textContent = "You win! Scissors beats paper.";
                output.appendChild(outcomeMsg);

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
            } else if (!(humanChoice == "Rock" || 
                        humanChoice == "Paper" || 
                        humanChoice == "Scissors")) {
                outcomeMsg = document.createElement("p");
                outcomeMsg.textContent = "Invalid input. Nothing happens.";
                output.appendChild(outcomeMsg);

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
            } else {
                score = document.createElement("p");
                score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
                output.appendChild(score);

                outcomeMsg = document.createElement("p");
                outcomeMsg.textContent = "It's a draw!";
                output.appendChild(outcomeMsg);

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
            };

            if (humanScore === 5) {
                const gameOutcome = document.createElement("h3");
                gameOutcome.textContent = "You win the game!";
                output.appendChild(gameOutcome);

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
            } else if (computerScore === 5) {
                const gameOutcome = document.createElement("h3");
                gameOutcome.textContent = "You lose the game!";
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
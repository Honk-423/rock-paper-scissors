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

function playRound(computerChoice, humanChoice) {
    let computerScore = 0;
    
    let humanScore = 0;

    computerChoice = getComputerChoice();
    
    humanChoice = getHumanChoice();
        
        if (humanChoice == "Rock" || 
            humanChoice == "Paper" || 
            humanChoice == "Scissors") {
                console.log(`Computer: ${computerChoice}`);
                console.log(`Human: ${humanChoice}`);
            }

            if (humanChoice == "Rock" && computerChoice == "Paper") {
                console.log("You lose! Paper beats rock.");
                computerScore++;
                console.log(`Human: ${humanScore} | Computer: ${computerScore} `);
            } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
                console.log("You lose! Scissors beats paper.");
                computerScore++;
                console.log(`Human: ${humanScore} | Computer: ${computerScore} `);
            } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
                console.log("You lose! Rock beats scissors."); 
                computerScore++;
                console.log(`Human: ${humanScore} | Computer: ${computerScore} `);
            } else if (humanChoice == "Paper" && computerChoice == "Rock") {
                console.log("You win! Paper beats rock.");
                humanScore++;
                console.log(`Human: ${humanScore} | Computer: ${computerScore} `);
            } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
                console.log("You win! Rock beats scissors.");
                humanScore++;
                console.log(`Human: ${humanScore} | Computer: ${computerScore} `);
            } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
                console.log("You win! Scissors beats paper.");
                humanScore++;
                console.log(`Human: ${humanScore} | Computer: ${computerScore} `);
            } else if (!(humanChoice == "Rock" || 
                        humanChoice == "Paper" || 
                        humanChoice == "Scissors")) {
                console.log("Invalid input. Nothing happens.");
            } else {
                console.log("It's a draw!");
                console.log(`Human: ${humanScore} | Computer: ${computerScore} `);
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

// INIT div

// INIT para
// SET para's text content to display current score for Human
// and Computer

// INIT para2
// SET para2's text content to display a victory, loss, or draw message
let computerScore = 0;
// INIT computerScore global variable with a default value of 0

let humanScore = 0;
// INIT humanScore global variable with a default value of 0

// INIT a function called getComputerChoice
function getComputerChoice(computerChoice) {
    // INIT a variable called computerChoice

    randomNumber = Math.random()
    console.log(`randomNumber is ${randomNumber}.`);
    // GENERATE a random number with Math.random

    while (randomNumber < 0.01 || randomNumber > 0.99) {
            randomNumber = Math.random();
            console.log(randomNumber);
        }
    // WHILE randomNumber is less than 0.01 and more than 0.99
    // loop until another number is provided

    if (randomNumber >= 0.67 && randomNumber < 0.99) {
        computerChoice = "Scissors";
        // IF 0.67 or more make computerChoice "scissors"
    } else if (randomNumber <= 0.66 && randomNumber > 0.33) {
        computerChoice = "Paper";
        // IF 0.34 or more make computerChoice "paper"
    } else if (randomNumber <= 0.33 && randomNumber > 0.01) {
        computerChoice = "Rock";
        // IF 0.01 or more make computerChoice "rock"
    }

    return computerChoice;
}

// INIT function named getHumanChoice
// DECLARE parameter named humanChoice
function getHumanChoice(humanChoice) {
    humanChoice = prompt("Rock, Paper, Scissors, SHOOT!", "");
    // INIT humanChoice by prompting for it

    return humanChoice;
}

// INIT function called playRound
// DECLARE parameters named computerChoice and humanChoice
function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    if (humanChoice > "") {
        humanChoice = humanChoice.toLowerCase();
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    }
    // MAKE parameter humanChoice case insensitve

    if (humanChoice == "Rock" 
        || humanChoice == "Paper" 
        || humanChoice == "Scissors") {
            console.log(computerChoice);
            console.log(humanChoice);
        }

    if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Paper beats rock.");
        computerScore++;
        console.log(`Computer: ${computerScore} | Human: ${humanScore}`)
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
        console.log(`Computer: ${computerScore} | Human: ${humanScore}`)
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Rock beats scissors."); 
        computerScore++;
        console.log(`Computer: ${computerScore} | Human: ${humanScore}`)
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats rock.");
        humanScore++;
        console.log(`Computer: ${computerScore} | Human: ${humanScore}`)
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
        console.log(`Computer: ${computerScore} | Human: ${humanScore}`)
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
        console.log(`Computer: ${computerScore} | Human: ${humanScore}`)
    } else if (!(humanChoice == "Rock" 
        || humanChoice == "Paper" 
        || humanChoice == "Scissors")) {
        console.log("Invalid input. Nothing happens.");
    } else {
        console.log("It's a draw!");
        console.log(`Computer: ${computerScore} | Human: ${humanScore}`)
    } 
    // LOG the a victory and defeat string to console.log
    // Make a console.log output for invalid input
    
} 

playRound();
// INCREMENT computerScore or humanScore depending on which one won

// INIT function called playGame
// MOVE playRound function inside of playGame
// CALL playRound function five times to play five rounds

// Add a semicolon after almost every parentheses to mark the end of a
// statememt.
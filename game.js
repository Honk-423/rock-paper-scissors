let computerScore = 0;
// INIT computerScore global variable with a default value of 0

let humanScore = 0;
// INIT humanScore global variable with a default value of 0

// INIT a function called getComputerChoice
function getComputerChoice() {
    let computerChoice;
    // INIT a variable called computerChoice

    randomNumber = Math.random()
    console.log(`randomNumber is ${randomNumber}.`)
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

    console.log(`computerChoice is ${computerChoice}.`)

}

getComputerChoice();

// INIT function named getHumanChoice
// DECLARE parameter named humanChoice
function getHumanChoice(humanChoice) {
    humanChoice = prompt("Rock, Paper, Scissors, SHOOT!", "")
    // INIT humanChoice by prompting for it
}

getHumanChoice();

// INIT function called playRound
// DECLARE parameters named computerChoice and humanChoice
// MAKE parameter humanChoice case insensitve
// LOG the a victory and defeat string to console.log
// INCREMENT computerScore or humanScore depending on which one won

// INIT function called playGame
// MOVE playRound function inside of playGame
// CALL playRound function five times to play five rounds
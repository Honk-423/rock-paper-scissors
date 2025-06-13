// INIT a function called getComputerChoice
function getComputerChoice() {
    let computerChoice;
    // INIT a variable called computerChoice

    randomNumber = Math.random()
    console.log(`randomNumber is ${randomNumber}.`)
    // GENERATE a random number with Math.random

    if (randomNumber >= 0.67) {
        computerChoice = "Scissors";
    } else if (randomNumber <= 0.66 && randomNumber > 0.33) {
        computerChoice = "Paper";
    } else if (randomNumber <= 0.33 && randomNumber > 0.01) {
        computerChoice = "Rock";
    }

    console.log(`computerChoice is ${computerChoice}.`)
        // IF 0.01 or more make computerChoice "rock"
        // IF 0.34 or more make computerChoice "paper"
        // IF 0.67 or more make computerChoice "scissors"

}

getComputerChoice();


// ELSE loop until another number is provided
// RETURN computerChoice
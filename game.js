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
    humanChoice = humanChoice.toLowerCase();
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    console.log(humanChoice);
    // MAKE humanChoice input always convert string to lowercase, then
    // capitalize the first letter. This makes it to where the input is
    // always output in the same way.
}

getHumanChoice();
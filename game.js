/* 
*  Randomly generates a number between 0 and 1 in decimal form.
*  If the random number is less than 0.01 or higher than 0.99, a loop
*  runs until a number in between that range is provided. 
*  The number is then used to randomly pick whether the computer plays 
*  rock, paper, or scissors. 
*/

function getComputerChoice(computerChoice) {

    randomNumber = Math.random()

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


/* 
*  Prompts the user for a choice between rock, paper, and scissors. 
*  Assigns the input of that prompt as the user's choice, then returns
*  the value so it can be used inside of other functions later.
*/
function getHumanChoice(humanChoice) {
    if (btnRock) {
    humanChoice = "Rock";
    return humanChoice;
    };

    if (btnPaper) {
        humanChoice = "Paper";
        return humanChoice;
    };

    if (btnScissors) {
        humanChoice = "Scissors";
        return humanChoice;
    };
};


/* 
* Makes the user's input case insensitive. 
* Uses every possible combination of the user and computer's input
* to log semi-unique victory, loss, and draw messages to the 
* console, as well as a message for invalid input. 
* The user and computer's respective score variables are 
* incremented when they win.
* If the input from the user is valid, the user and computer's 
* choices will also be logged.
*/

function playRound(computerChoice, humanChoice) {
    let computerScore = 0;
    
    let humanScore = 0;

    computerChoice = getComputerChoice();
    
    humanChoice = getHumanChoice();
        
        if (humanChoice > "") {
            humanChoice = humanChoice.toLowerCase();
            humanChoice = humanChoice.charAt(0).toUpperCase() + 
            humanChoice.slice(1);
        }
        // Checks if the user input anything earlier, because if they 
        // didn't there is no need for the code to run. If they did 
        // input something, their input is converted to all lowercase
        // then the first letter is capitalized so that they can spell
        // rock, paper, and scissors with varying capitalization and the
        // function will still work because the input will always output
        // the same way.
        
        
        if (humanChoice == "Rock" 
            || humanChoice == "Paper" 
            || humanChoice == "Scissors") {
                console.log(`Computer: ${computerChoice}`);
                console.log(`Human: ${humanChoice}`);
            }

            if (humanChoice == "Rock" && computerChoice == "Paper") {
                console.log("You lose! Paper beats rock.");
                computerScore++;
                console.log(`Human: ${humanScore} | Computer: ${computerScore} `)
            } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
                console.log("You lose! Scissors beats paper.");
                computerScore++;
                console.log(`Human: ${humanScore} | Computer: ${computerScore} `)
            } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
                console.log("You lose! Rock beats scissors."); 
                computerScore++;
                console.log(`Human: ${humanScore} | Computer: ${computerScore} `)
            } else if (humanChoice == "Paper" && computerChoice == "Rock") {
                console.log("You win! Paper beats rock.");
                humanScore++;
                console.log(`Human: ${humanScore} | Computer: ${computerScore} `)
            } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
                console.log("You win! Rock beats scissors.");
                humanScore++;
                console.log(`Human: ${humanScore} | Computer: ${computerScore} `)
            } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
                console.log("You win! Scissors beats paper.");
            humanScore++;
            console.log(`Human: ${humanScore} | Computer: ${computerScore} `)
            } else if (!(humanChoice == "Rock" 
            || humanChoice == "Paper" 
            || humanChoice == "Scissors")) {
                console.log("Invalid input. Nothing happens.");
            } else {
                console.log("It's a draw!");
                console.log(`Human: ${humanScore} | Computer: ${computerScore} `)
            } 

    } 

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
    playRound();
});
// INIT btnRock
// ADD event listener on click for all buttons
    // CALL playRound func every time a button is clicked
    // MAKE humanChoice equal event's value??

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
    playRound();
});
// INIT btnPaper
// ADD event listener on click for all buttons
    // CALL playRound func every time a button is clicked
    // MAKE humanChoice equal event's value??

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
    playRound();
});
// INIT btnScissors
// ADD event listener on click for all buttons
    // CALL playRound func every time a button is clicked
    // MAKE humanChoice equal event's value??

// INIT div

// INIT para
// SET para's text content to display current score for Human
// and Computer

// INIT para2
// SET para2's text content to display a victory, loss, or draw message
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getComputerChoice(computerChoice) {

    randomNumber = getRandomInt(0, 2);

    if (randomNumber === 0) {
        computerChoice = "Rock";
    } else if (randomNumber === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    };

    return computerChoice;
};

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

            if (humanChoice === "Rock" && computerChoice === "Paper" ||
                humanChoice === "Paper" && computerChoice === "Scissors" ||
                humanChoice === "Scissors" && computerChoice === "Rock"
            ) {
                let choice = document.createElement("p");
                choice.textContent = `Player: ${humanChoice} | Computer: ${computerChoice}`
                output.appendChild(choice);

                computerScore++;
                let score = document.createElement("p");
                score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
                output.appendChild(score);

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
            } else if (humanChoice === "Rock" && computerChoice === "Scissors" ||
                       humanChoice === "Paper" && computerChoice === "Rock" ||
                       humanChoice === "Scissors" && computerChoice === "Paper"
            ) {
                let choice = document.createElement("p");
                choice.textContent = `Player: ${humanChoice} | Computer: ${computerChoice}`
                output.appendChild(choice);

                humanScore++;
                let score = document.createElement("p");
                score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
                output.appendChild(score);

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
            } else if (humanChoice === computerChoice) {
                let choice = document.createElement("p");
                choice.textContent = `Player: ${humanChoice} | Computer: ${computerChoice}`
                output.appendChild(choice);

                let score = document.createElement("p");
                score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
                output.appendChild(score);

                const lineBreak = document.createElement("br");
                output.appendChild(lineBreak);
            } else {
                let score = document.createElement("p");
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
                
            // Resets humanScore and computerScore when either reaches 
            // five so that a new round can begin.
            if (humanScore === 5 || computerScore === 5) {
                humanScore = 0;
                computerScore = 0;
            };


    };
    
let playerSelection;

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
    playerSelection = 0;
    playRound();
});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
    playerSelection = 1;
    playRound();
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
    playerSelection = 2;
    playRound();
});

const output = document.querySelector("#output");
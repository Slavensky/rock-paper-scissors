
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    let computerChoice;

    if (randomNumber === 0) {
        computerChoice = "Rock";
    } else if (randomNumber === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    let result;
    let verb;

    if (playerSelection === computerSelection) {
        result = "Tie";
        verb = "is";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"||
                (playerSelection === "Scissors" && computerSelection === "Paper") ||
                (playerSelection === "Paper" && computerSelection === "Rock")) {
        result = "Win";
        verb = "beats"
    } else {
        result = "Lose";
        verb = "does not beat";
    }

    return `You ${result}! ${playerSelection} ${verb} ${computerSelection}`;

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Make a choice:")
        console.log(playRound(playerChoice, computerChoice))
    }
}

playGame()
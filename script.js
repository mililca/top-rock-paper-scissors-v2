function getCompChoice() {
    const options = ["rock", "paper", "scissors"]
    const compChoice = Math.floor(Math.random() * options.length)
    return options[compChoice]
}

var playerChoice = ""
var compChoice = ""

function playRound(playerChoice, compChoice) {
    playerChoice = prompt("Pick rock, paper or scissors: ")
    playerChoice = playerChoice.toLowerCase()
    compChoice = getCompChoice()
    if (playerChoice === compChoice) {
        return "draw"
    }
    else if (playerChoice === "rock") {
        if (compChoice === "scissors") {
            return "win"
        }
        else if (compChoice === "paper") {
            return "loss"
        }
    }
    else if (playerChoice === "scissors") {
        if (compChoice === "paper") {
            return "win"
        }
        else if (compChoice === "rock") {
            return "loss"
        }
    }
    else if (playerChoice === "paper") {
        if (compChoice === "rock") {
            return "win"
        }
        else if (compChoice === "scissors") {
            return "loss"
        }
    }
    else if (playerChoice !== "paper" || playerChoice !== "rock" || 
    playerChoice !== "scissors") {
        return "Pick form paper, rock or scissor next time!"
    }
}

// console.log(playRound(playerChoice, getCompChoice()))

function game(playRound, n) {
    for (let i = 1; i <= n; i++) {
        console.log(playRound())
    }
}

game(playRound, 5)
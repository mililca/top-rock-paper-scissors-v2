function getCompChoice() {
    const options = ["rock", "paper", "scissors"]
    const compChoice = Math.floor(Math.random() * options.length)
    return options[compChoice]
}

var playerChoice = ""
var compChoice = ""
var playerScore = 0
var compScore = 0

function playRound(playerChoice, compChoice) {
    playerChoice = prompt("Pick rock, paper or scissors: ")
    playerChoice = playerChoice.toLowerCase()
    compChoice = getCompChoice()
    if (playerChoice === compChoice) {
        return "draw"
    }
    else if (playerChoice === "rock") {
        if (compChoice === "scissors") {
            playerScore++
            return "win"
        }
        else if (compChoice === "paper") {
            compScore++
            return "loss"
        }
    }
    else if (playerChoice === "scissors") {
        if (compChoice === "paper") {
            playerScore++
            return "win"
        }
        else if (compChoice === "rock") {
            compScore++
            return "loss"
        }
    }
    else if (playerChoice === "paper") {
        if (compChoice === "rock") {
            playerScore++
            return "win"
        }
        else if (compChoice === "scissors") {
            compScore++
            return "loss"
        }
    }
    else if (playerChoice !== "paper" || playerChoice !== "rock" || 
    playerChoice !== "scissors") {
        return "Pick form paper, rock or scissor next time!"
    }
}

function game(playRound, n) {
    for (let i = 1; i <= n; i++) {
        console.log(playRound())
        console.log(playerScore + "-" + compScore)
    }
    console.log(getWinner(playerScore, compScore))
}

function getWinner(playerScore, compScore) {
    if (playerScore > compScore) {
        return `Player won with the score ${playerScore + "-" + compScore}`
    }
    else if (playerScore === compScore) {
        return `It's a draw with the score ${playerScore + "-" + compScore}`
    }
    else {
        return `Computer won with the score ${playerScore + "-" + compScore}`
    }
}

game(playRound, 5)
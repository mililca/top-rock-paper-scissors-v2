var playerScore = 0
var compScore = 0

const result = document.querySelector('#result')
const score = document.querySelector('#score')

const btnRock = document.querySelector('#rock')
btnRock.addEventListener('click', function(){
    result.textContent = playRound("rock")
    score.textContent = `${playerScore} - ${compScore}`
    if (playerScore == 5 || compScore == 5){
        score.textContent = "Game over, refresh to play again"
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
})

const btnPaper = document.querySelector('#paper')
btnPaper.addEventListener('click', function(){
    result.textContent = playRound("paper")
    score.textContent = `${playerScore} - ${compScore}`
    if (playerScore == 5 || compScore == 5){
        score.textContent = "Game over, refresh to play again"
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
})

const btnScissors = document.querySelector('#scissors')
btnScissors.addEventListener('click', function(){
    result.textContent = playRound("scissors")
    score.textContent = `${playerScore} - ${compScore}`
    if (playerScore == 5 || compScore == 5){
        score.textContent = "Game over, refresh to play again"
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
})

function getCompChoice() {
    const options = ["rock", "paper", "scissors"]
    const compChoice = Math.floor(Math.random() * options.length)
    return options[compChoice]
}

function checkGameScore(playerScore, compScore){
    if (playerScore == 5 || compScore == 5){
        result = "Game over, refresh to play again"
    }
}

function playRound(playerChoice) {
    let compChoice = getCompChoice()
    let result = ""

    if (playerChoice === compChoice) {
        result = "It's a draw"
    }
    else if (playerChoice === "rock") {
        if (compChoice === "scissors") {
            playerScore++
            result = "W"
        }
        else if (compChoice === "paper") {
            compScore++
            result = "L"
        }
    }
    else if (playerChoice === "scissors") {
        if (compChoice === "paper") {
            playerScore++
            result = "W"
        }
        else if (compChoice === "rock") {
            compScore++
            result = "L"
        }
    }
    else if (playerChoice === "paper") {
        if (compChoice === "rock") {
            playerScore++
            result = "W"
        }
        else if (compChoice === "scissors") {
            compScore++
            result = "L"
        }
    }
    else if (playerChoice !== "paper" || playerChoice !== "rock" || 
    playerChoice !== "scissors") {
        return "Pick form paper, rock or scissor next time!"
    };
    return result
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
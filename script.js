function getCompChoice() {
    const options = ["rock", "paper", "scissors"]
    const compChoice = Math.floor(Math.random() * options.length)
    return options[compChoice]
}
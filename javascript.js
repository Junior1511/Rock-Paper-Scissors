const computerOptions = ["rock", "paper" , "scissors"]


function getComputerChoice(array){
    const randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
}

let compSel = getComputerChoice(computerOptions)
let tie = "It's a Tie!"
let win = "You Win!"
let lose = "You Lose!"

function oneRound (playerSelection,computerSelection){
    computerSelection = compSel;
    playerSelection= playerSelection.toLowerCase()
    if (playerSelection === computerSelection){
        return tie
    } else if ((playerSelection === "rock") && (computerSelection === "paper")){
        return lose + " Paper beats Rock."
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")){
        return win + " Rock beats Scissors."
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")){
        return lose + " Scissors beats Paper."
    } else if ((playerSelection === "paper") && (computerSelection === "rock")){
        return win + " Paper beats Rock."
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")){
        return lose + " Rock beats Scissors."
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")){
        return win + " Scissors beats Paper."
    }}
const computerOptions = ["rock", "paper" , "scissors"]


function getComputerChoice(array){
    const randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
}

let tie = "It's a Tie!";
let winRBS = "You Win! Rock beats Scissors.";
let winSBP = "You Win! Scissors beats Paper.";
let winPBR = "You Win! Paper beats Rock.";
let loseRBS = "You lose! Rock beats Scissors.";
let loseSBP = "You lose! Scissors beats Paper.";
let losePBR = "You lose! Paper beats Rock.";
let wins = 0;
let loses = 0;
let ties = 0;


function playRound (playerSelection,computerSelection){
    computerSelection = getComputerChoice(computerOptions);
    if (playerSelection === computerSelection){
        console.log(tie)
        ties++
    } else if ((playerSelection === "rock") && (computerSelection === "paper")){
        console.log(losePBR)
        loses++
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")){
        console.log(winRBS)
        wins++
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")){
        console.log(loseSBP)
        loses++
    } else if ((playerSelection === "paper") && (computerSelection === "rock")){
        console.log(winPBR)
        wins++
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")){
        console.log(loseRBS)
        loses++
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")){
        console.log(winSBP)
        wins++
    }}
    // function playGame(){
    //     for (i = 1; i <= 5; i++){
    //         playRound()
    //     }
    //     if (wins >= 3){
    //         console.log( "Player wins against Computer")
    //     } else if (loses >= 3){
    //         console.log( "Computer wins against Player")
    //     } else if (ties >=3){
    //         console.log( "It's a tie! bro")
    //     }
    // }

    // playGame()

    // Query Selectors 

    const rock = document.querySelector("#rock")
    const paper = document.querySelector("#paper")
    const scissors = document.querySelector("#scissors")

    // Buttons
    rock.addEventListener("click", function(){
        playRound("rock")
    })

    paper.addEventListener("click", function(){
        playRound("paper")
    })

    scissors.addEventListener("click", function(){
        playRound("scissors")
    })
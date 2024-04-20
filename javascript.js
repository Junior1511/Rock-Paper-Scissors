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
        ties++
        paragraph.innerText = tie
        results.appendChild(paragraph)
        p.innerText = `Wins = ${wins}       Loses = ${loses}     Ties = ${ties}`
        results.appendChild(p)
        playGame()
    } else if ((playerSelection === "rock") && (computerSelection === "paper")){
        loses++
        paragraph.innerText = losePBR
        results.appendChild(paragraph)
        p.innerText = `Wins = ${wins}       Loses = ${loses}     Ties = ${ties}`
        results.appendChild(p)
        playGame()
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")){
        wins++
        paragraph.innerText = winRBS
        results.appendChild(paragraph)
        p.innerText = `Wins = ${wins}       Loses = ${loses}     Ties = ${ties}`
        results.appendChild(p)
        playGame()
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")){
        loses++
        paragraph.innerText = loseSBP
        results.appendChild(paragraph)
        p.innerText = `Wins = ${wins}       Loses = ${loses}     Ties = ${ties}`
        results.appendChild(p)
        playGame()
    } else if ((playerSelection === "paper") && (computerSelection === "rock")){
        wins++
        paragraph.innerText = winPBR
        results.appendChild(paragraph)
            p.innerText = `Wins = ${wins}       Loses = ${loses}     Ties = ${ties}`
            results.appendChild(p)
        playGame()
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")){
        loses++
        paragraph.innerText = loseRBS
        results.appendChild(paragraph)
            p.innerText = `Wins = ${wins}       Loses = ${loses}     Ties = ${ties}`
            results.appendChild(p)
        playGame()
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")){
        wins++
        paragraph.innerText = winSBP
        results.appendChild(paragraph)
            p.innerText = `Wins = ${wins}       Loses = ${loses}     Ties = ${ties}`
            results.appendChild(p)
        playGame()
    }}
    function playGame(){
        if (wins >= 5){
            h2.innerText =  "Player wins against Computer"
            results.appendChild(h2)
        } else if (loses >= 5){
            h2.innerText =  "Computer wins against Player"
            results.appendChild(h2)
        } else if (ties >= 5){
            h2.innerText =  "It's a tie!"
            results.appendChild(h2)
        }
    }
    
    // Query Selectors 

    const rock = document.querySelector("#rock")
    const paper = document.querySelector("#paper")
    const scissors = document.querySelector("#scissors")
    const results = document.querySelector("#results")
    const paragraph = document.createElement("p")
    const p = document.createElement("p")
    const h2 = document.createElement("h2")
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
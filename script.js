let playerScore = 0;
let botScore = 0;

function playRound(playerHand, computerHand){
    console.log(`Computer player ${computerHand}`);
    if (playerHand == computerHand){
        console.log("It's a draw!");
    }else if ((playerHand == "rock" && computerHand == "paper") || (playerHand == "paper" && computerHand == "scissors") || (playerHand == "scissors" && computerHand == "rock")){
        console.log(`You lose! ${computerHand} beats ${playerHand}`);
        updateScore("bot");
    }else if ((computerHand == "rock" && playerHand == "paper") || (computerHand == "paper" && playerHand == "scissors") || (computerHand == "scissors" && playerHand == "rock")){
        console.log(`You win! ${playerHand} beats ${computerHand}`);
        updateScore("player");
    }
}

function updateScore(winner){
    const playerScore = document.querySelector("#playerScore");
    const botScore = document.querySelector("#botScore");

    if (winner === "player"){
        playerScore.textContent = parseInt(playerScore.innerHTML) + 1;
    }else {
        botScore.textContent = parseInt(botScore.innerHTML) + 1;
    }

    let playerScoreNum = playerScore.textContent;
    let botScoreNum = botScore.textContent;

    if (botScoreNum == 5){
        botScore.textContent = 0;
        playerScore.textContent = 0;
        alert("The computer won!");
    }
    if (playerScoreNum == 5){
        botScore.textContent = 0;
        playerScore.textContent = 0;
        alert("You won!");
    }
}

function generateComputerHand(){
    let randHand = Math.floor(Math.random() * 3);
    switch (randHand){
        case 0:
            return ("rock");
            break;
        case 1:
            return ("paper");
            break;
        case 2:
            return ("scissors");
    }
}

const options = document.querySelectorAll("button");
options.forEach(button => button.addEventListener('click', function(e){
    playRound(this.id, generateComputerHand());
}));
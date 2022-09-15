function playRound(playerHand, computerHand){
    console.log(`Computer player ${computerHand}`);
    if (playerHand == computerHand){
        return ("It's a draw!");
    }else if ((playerHand == "rock" && computerHand == "paper") || (playerHand == "paper" && computerHand == "scissors") || (playerHand == "scissors" && computerHand == "rock")){
        return (`You lose! ${computerHand} beats ${playerHand}`);
    }else if ((computerHand == "rock" && playerHand == "paper") || (computerHand == "paper" && playerHand == "scissors") || (computerHand == "scissors" && playerHand == "rock")){
        return (`You win! ${playerHand} beats ${computerHand}`);
    }else {
        return (`${playerHand} is an invalid input`);
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

function game(){
    for (let i = 0; i < 5; i++){
        let playerHand = prompt(`Round ${i + 1}.\nYour hand?`).toLowerCase();
        let result = playRound(playerHand, generateComputerHand());
        console.log(result);
    }
}

game();
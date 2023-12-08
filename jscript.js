let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
// Generate a random computer move
function pickComputerMove(){
    const randomNumber = Math.random();

    let computerMove = "";

    if (randomNumber >=0 && randomNumber < 1/3){
       computerMove = "Rock";
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = "Paper";
    } else if (randomMove >= 2/3 && randomNumber < 1){
        computerMove = "Scissors";
    }

    return computerMove;

}

// Compare computer move with players move
function playGame(playersMove){
    const computerMove = pickComputerMove();

    let result = "";

    if (playersMove === "Rock"){
        if (computerMove === "Rock"){
            result = "You Tie";
        } else if (computerMove === "Paper"){
            result = "You Lose";
        } else if (computerMove === "Scissors"){
             result = "You Win";
        }

    } else if (playersMove === "Paper"){
        if (computerMove === "Rock"){
           result = "You Win";
        } else if (computerMove === "Paper"){
           result = "You Tie";
        } else if (computerMove === "Scissors"){
            result = "You Lose";
        }
    } else if (playersMove === "Scissors"){
        if (computerMove === "Rock"){
            result = "You Lose";
        } else if (computerMove === "Paper"){
            result = "You Win";
        } else if (computerMove === "Scissors"){
            result = "You Tie"
        }
    }

    if (result === 'You Win'){
        score.wins += 1;
    } else if (result === 'You Lose'){
        score.losses += 1;
    } else if (result === 'You Tie'){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = `${result}`

    document.querySelector('.js-move').innerHTML = `Your picked <img src="images/${playersMove}-emoji.png" class="move-icon">, The computer picked <img src="images/${computerMove}-emoji.png" class="move-icon">`
}

function updateScoreElement(){
    document.querySelector('.js-score')
       .innerHTML = `Wins: ${score.wins}, Ties:${score.ties}, Losses: ${score.losses}`
       
}
 
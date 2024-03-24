// 'use strict';
// const hidenNumber = document.querySelector('.number');
let hiddenNumber = Math.trunc(Math.random() * 20)+1;
document.querySelector('.number').textContent = '?';
const displayScore = document.querySelector('.score')
let score = 20;
const highestScore = document.querySelector('.highscore')
let highScoreValue = Number(highestScore.textContent);

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
fdf
document.querySelector('.check').addEventListener('click', function(){
    const guess =Number(document.querySelector('.guess').value);
    // const displayMessage =document.querySelector('.message');
    if(score > 1){
        if(!guess){
            // displayMessage.textContent = 'No number';
            displayMessage('No Number');
        }

        else if(guess !== hiddenNumber){
            displayMessage(guess > hiddenNumber ? 'Too high...!' : 'Too low...!');
            score--;
            displayScore.textContent = score;
        }

    // else if(guess > hiddenNumber){
    //     displayMessage.textContent = "Too high...!"
    //     score--;
    //     displayScore.textContent = score;
    // }

    // else if(guess < hiddenNumber){
    //     displayMessage.textContent = "Too low...!"
    //     score--;
    //     displayScore.textContent = score;
    // }

    else{
        document.querySelector('.number').textContent = hiddenNumber;
        // displayMessage.textContent = "You Won $$"
        displayMessage("You Won $$");
        document.querySelector('body').style.backgroundColor='green';
        if(highScoreValue < score){
            highestScore.textContent = score;
            highScoreValue = score;
        }
       
    }
}

else{
    displayScore.textContent = 0;
    // displayMessage.textContent = "You Lost !";
    displayMessage("You Lost !");
    document.querySelector('body').style.backgroundColor='red';
}
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    displayScore.textContent = score;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing....')
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor='';
    hiddenNumber = Math.trunc(Math.random() * 20)+1;
    document.querySelector('.number').textContent = '?';
});

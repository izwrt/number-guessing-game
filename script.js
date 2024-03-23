// 'use strict';
// const hidenNumber = document.querySelector('.number');
let hiddenNumber = Math.trunc(Math.random() * 20)+1;
document.querySelector('.number').textContent = hiddenNumber;
const displayScore = document.querySelector('.score')
let score = 20;
const highestScore = document.querySelector('.highscore')
let highScoreValue = Number(highestScore.textContent);

document.querySelector('.check').addEventListener('click', function(){
    const guess =document.querySelector('.guess').value;
    const displayMessage =document.querySelector('.message');
    if(score > 1){
    if(!guess){
        displayMessage.textContent = 'No number';
    }

    else if(guess > hiddenNumber){
        displayMessage.textContent = "Too high...!"
        score--;
        displayScore.textContent = score;
    }

    else if(guess < hiddenNumber){
        displayMessage.textContent = "Too low...!"
        score--;
        displayScore.textContent = score;
    }

    else{
        document.querySelector('.number').textContent = hiddenNumber;
        displayMessage.textContent = "You Won $$"
        document.querySelector('body').style.backgroundColor='green';
        if(highScoreValue < score){
            highestScore.textContent = score;
            highScoreValue = score;
        }
       
    }
}

else{
    displayScore.textContent = 0;
    displayMessage.textContent = "You Lost !"
    document.querySelector('body').style.backgroundColor='red';
}
}); 

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    displayScore.textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor='';
    hiddenNumber = Math.trunc(Math.random() * 20)+1;
    document.querySelector('.number').textContent = hiddenNumber;
});

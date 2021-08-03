'use strict';
/*
console.log(document.querySelector(".message").textContent );
 document.querySelector(".message").textContent = "🎉🎉correct Number" ;
document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector('.guess').value);
*/


const secretNumber =Math.trunc(Math.random()*20)+1;

let score = 20;
document.querySelector('.number').textContent = secretNumber;
//---------resoring 
document.querySelector(".again").addEventListener("click",function(){
    document.querySelector(".message").textContent ="start guessing..."

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width =" 15rem";
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value=
    '';
})

document.querySelector(".check").addEventListener("click",function(){
    const guess =Number(document.querySelector('.guess').value);
// ------------no number--------------------------------

    if(!guess){
        document.querySelector(".message").textContent = "🚫 No number";

// ---------correct number--------------------------------
    }else if(guess === secretNumber){
        document.querySelector(".message").textContent = "🎉🎉correct Number!"; 
        document.querySelector('.number').textContent = secretNumber;

        
        document.querySelector("body").style.backgroundColor = " #60b347";
        document.querySelector(".number").style.width =" 30rem";
// --------low number--------------------------------  
    }else if(guess < secretNumber){
        if(score >0){
            document.querySelector(".message").textContent = "..Too low";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector(".message").textContent = "..You lost the game";
        }
// --------high number-------------------------------- 
    }else{
        if(score >0){
            document.querySelector(".message").textContent = "..Too high";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector(".message").textContent = "..You lost the game";
        }
    }
})

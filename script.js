'use strict';
const PlayerOne=document.querySelector(".player--0")
const PlayerTwo=document.querySelector(".player--1")
const scoreOne=document.querySelector("#score--0")
const scoreTwo=document.querySelector("#score--1")
const dicePic=document.querySelector(".dice")
const btnNew=document.querySelector(".btn--new")
const btnHold=document.querySelector(".btn--hold")
const btnRoll=document.querySelector(".btn--roll")
const currentScore1=document.querySelector("#current--0")
const currentScore2=document.querySelector("#current--1")
let currentScore,activePlayer,score,play
const initilaization=function(){
    scoreOne.textContent=0;
    scoreTwo.textContent=0;
    PlayerOne.classList.add("player--active")
    PlayerTwo.classList.remove("player--active")
    currentScore2.textContent=0;
    currentScore1.textContent=0;
    play=true
    score=[0,0]
    activePlayer=0
    currentScore=0
    document.querySelector(`.player--0`).classList.remove("player--winner")
    document.querySelector(`.player--1`).classList.remove("player--winner")
    dicePic.classList.add("hidden")

}
initilaization()
let changePlayer=function(){
    document.querySelector(`#current--${activePlayer}`).textContent=0
    activePlayer = activePlayer === 0 ? 1 : 0 ;
    currentScore=0
    PlayerTwo.classList.toggle("player--active")
    PlayerOne.classList.toggle("player--active")
    dicePic.classList.add("hidden")
}
btnRoll.addEventListener("click",function(){
    if(play){
        const dice=Math.trunc(Math.random()*6)+1
        dicePic.classList.remove("hidden")
    
        dicePic.setAttribute("src",`dice-${dice}.png`)
        if(dice!==1){
            currentScore+=dice
            document.querySelector(`#current--${activePlayer}`).textContent=currentScore
        }else{
           
            changePlayer()
        }
    }

})
btnHold.addEventListener("click",function(){
    if(play){
        score[activePlayer]+=currentScore
        document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer]
        if(score[activePlayer]>=20){
            document.querySelector(`.player--${[activePlayer]}`).classList.add("player--winner")
            document.querySelector(`.player--${[activePlayer]}`).classList.remove("player--active")
            play=false
            dicePic.classList.add("hidden")
        }
        else(
        changePlayer())
    }

})
btnNew.addEventListener("click",initilaization)

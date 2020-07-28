var score,rounScore,activePlayer,gameOn=true;
init();
function init(){
    score=[0,0];
    roundScore=0;
    activePlayer=0;
    gameOn=true;
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.querySelector('#dice-1').style.display='none';
    document.querySelector('#dice-2').style.display='none';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('#name-0').textContent='Player-1';
    document.querySelector('#name-1').textContent='Player-1';
    }
function nextPlayer(){
    activePlayer===0 ? activePlayer=1 : activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('#dice-1').style.display='none';
    document.querySelector('#dice-2').style.display='none';
}

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gameOn){
    var dice1= Math.floor(Math.random()*6)+1;
    var dice2= Math.floor(Math.random()*6)+1;
    var diceImg1= document.querySelector('#dice-1');
    var diceImg2= document.querySelector('#dice-2');
    diceImg1.style.display='block';
    diceImg2.style.display='block';
    diceImg1.src='dice-'+dice1+'.png';
    diceImg2.src='dice-'+dice2+'.png';
    if(dice1!==6 && dice2!==6){
        var dTotal=dice1+dice2;
        roundScore+=dTotal;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }else{
        nextPlayer();
    }
    }
    }
);
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameOn){
     score[activePlayer]+=roundScore;
     document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];
        var input=document.querySelector('.final-score').value;
        var winScore;
        if(input){
            winScore=input;
        }else{
            winScore=100;
        }
     if(score[activePlayer]>=winScore){
         document.querySelector('#name-'+activePlayer).textContent='Winner!';
         document.querySelector('#dice-1').style.display='none';
         document.querySelector('#dice-2').style.display='none';
         document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
         gameOn=false;
     }else{
         nextPlayer();
     }
    }
});

document.querySelector('.btn-new').addEventListener('click',init);
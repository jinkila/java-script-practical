let dices = 6;
let firstPlayerRandomDice = Math.floor(Math.random()* dices + 1 );
let firstPlayerRandomImage = 'media/DICE' +firstPlayerRandomDice + '.jpeg';
let Winner = document.getElementById('winner');

document.querySelectorAll('img')[0].setAttribute('src', firstPlayerRandomImage);

let secondPlayerRandomDice = Math.floor(Math.random() * dices + 1 );
let secondPlayerRandomimage = 'media/DICE' + secondPlayerRandomDice + '.jpeg';
 
document.querySelectorAll('img')[1].setAttribute('src', secondPlayerRandomimage);

if (firstPlayerRandomDice > secondPlayerRandomDice){
    Winner.innerHTML = "first player wins";
    
}
else if (firstPlayerRandomDice < secondPlayerRandomDice){
    Winner.innerHTML = "second player wins";
}
else{
    Winner.innerHTML = "its a draw";
}

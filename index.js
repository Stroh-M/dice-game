
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var player1Image = document.querySelector(".img1");

    if (randomNumber1 === 1) {
        player1Image.setAttribute("src", "./images/dice1.png");
    } else if (randomNumber1 === 2) {
        player1Image.setAttribute("src", "./images/dice2.png");
    } else if (randomNumber1 === 3) {
        player1Image.setAttribute("src", "./images/dice3.png");
    } else if (randomNumber1 === 4) {
        player1Image.setAttribute("src", "./images/dice4.png");
    } else if (randomNumber1 === 5) {
        player1Image.setAttribute("src", "./images/dice5.png");
    } else {
        player1Image.setAttribute("src", "./images/dice6.png");
    }

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var player2Image = document.querySelector(".img2");
    if (randomNumber2 === 1) {
        player2Image.setAttribute("src", "./images/dice1.png");
    } else if (randomNumber2 === 2) {
        player2Image.setAttribute("src", "./images/dice2.png");
    } else if (randomNumber2 === 3) {
        player2Image.setAttribute("src", "./images/dice3.png");
    } else if (randomNumber2 === 4) {
        player2Image.setAttribute("src", "./images/dice4.png");
    } else if (randomNumber2 === 5) {
        player2Image.setAttribute("src", "./images/dice5.png");
    } else {
        player2Image.setAttribute("src", "./images/dice6.png");
    }
    var heading = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        heading.textContent = "🚩Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        heading.textContent = "player 2 wins! 🚩";
    } else {
        heading.textContent = "draw!";
    }

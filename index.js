
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var player1Image = document.querySelector(".img1");
var imageSource1 = "./images/dice" + randomNumber1 + ".png";

player1Image.setAttribute("src", imageSource1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var player2Image = document.querySelector(".img2");
var imageSource2 = "./images/dice" + randomNumber2 + ".png";

player2Image.setAttribute("src", imageSource2);
    
    var heading = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        heading.textContent = "🚩Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        heading.textContent = "player 2 wins! 🚩";
    } else {
        heading.textContent = "draw!";
    }

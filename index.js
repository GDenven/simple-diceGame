//dice game challenge function
function diceGame() {

    //Dice1 for player number 1

    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //generate a random number from 1 to 6

    var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png"; // generate a link between dice1 to dice6 image
    var image1 = document.querySelectorAll("img")[0]; //targeting the image number 1
    image1.setAttribute("src", randomDiceImage1);  //changing the attribute for the image number 1


    //Dice2 for player number 2

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[2];
    image2.setAttribute("src", randomDiceImage2);

    //photo display depends on who win or draw
    var winnerImage1 = "./images/player-1-won.png";
    var winnerImage2 = "./images/player-2-won.png";
    var noWinner = "./images/player-draw.png";
    var image3 = document.getElementById("img-center");

    //Display the winner

    if (randomNumber1 > randomNumber2) {
        document.getElementById("result").innerHTML = "Player 1 Won !";
        image3.setAttribute("src", winnerImage1);
    } else if (randomNumber1 < randomNumber2) {
        document.getElementById("result").innerHTML = "Player 2 Won !";
        image3.setAttribute("src", winnerImage2);
    } else if (randomNumber1 == randomNumber2) {
        document.getElementById("result").innerHTML = "Draw !";
        image3.setAttribute("src", noWinner);
    }
}
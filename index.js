//dice game challenge

function diceGame() {

    //Dice1 for player number 1

    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //generate a random number from 1 to 6

    var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png"; // generate a link between dice1 to dice6 image
    var image1 = document.querySelectorAll("img")[0]; //targeting the image number 1
    image1.setAttribute("src", randomDiceImage1);  //changing the attribute for the image number 1


    //Dice2 for player number 2

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomDiceImage2);

    //Display the winner

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Won !";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Won !";
    } else if (randomNumber1 == randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw !";
    }
}
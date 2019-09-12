$(document).ready(function () {

    var random = Math.floor(Math.random() * 101 + 19)

    $("#total-score").text(random);


    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);

    var userScore = 0;
    var wins = 0;
    var losses = 0;

    $("#wins").text = wins;
    $("#losses").text = losses;

    function reset() {
        random = Math.floor(Math.random() * 101 + 19);
        console.log(random)
        $("#total-score").text(random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userScore = 0;
        $("#user-score").text(userScore);
    }

    function win() {
        alert("You're gnarly!");
        wins++;
        $("#wins").text(wins);
        reset();
    }
    function lose() {
        alert("Not so gnarly");
        losses++;
        $("#losses").text(losses);
        reset();
    }

    $("#image1").on("click", function () {
        userScore = userScore + num1;
        console.log(userScore);
        $("#user-score").text(userScore);
        if (userScore === random) {
            win();
        } else if (userScore > random) {
            lose();
        }
    })
    $("#image2").on("click", function () {
        userScore = userScore + num2;
        console.log(userScore);
        $("#user-score").text(userScore);
        if (userScore === random) {
            win();
        } else if (userScore > random) {
            lose();
        }
    })
    $("#image3").on("click", function () {
        userScore = userScore + num3;
        console.log(userScore);
        $("#user-score").text(userScore);
        if (userScore === random) {
            win();
        } else if (userScore > random) {
            lose();
        }
    })
    $("#image4").on("click", function () {
        userScore = userScore + num4;
        console.log(userScore);
        $("#user-score").text(userScore);
        if (userScore === random) {
            win();
        } else if (userScore > random) {
            lose();
        }
    })








})
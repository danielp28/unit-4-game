

    var random = Math.floor(Math.random() * 101 + 19)

    $("#total-score").text(random);

    var userScore;
    var wins = 0;
    var losses = 0;

    $("#wins").text = wins;
    $("#losses").text = losses;

    function startNewGame() {
        random = Math.floor(Math.random() * 101 + 19);
        for (i = 0; i < 4; i++) {
            $("#image" + (i + 1)).attr("data-num", Math.floor(Math.random() * 11 + 1))
        }
        $("#total-score").text(random);
        userScore = 0;
        $("#user-score").text(userScore);
    }

    startNewGame();

    function win() {
        alert("You're gnarly!");
        wins++;
        $("#wins").text(wins);
        startNewGame();
    }
    function lose() {
        alert("Not so gnarly");
        losses++;
        $("#losses").text(losses);
        startNewGame();
    }

    $(".crystal").on("click", function () {
        userScore += parseInt($(this).attr("data-num"));
        var userWins = userScore === random
        $("#user-score").text(userScore);
        if (userWins) {
            win();
        } else if (userScore > random) {
            lose();
        }
    })
 

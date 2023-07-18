let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let level = 0;

// If game has not started show this
$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// Use jQuery to detect when any of the buttons are clicked and trigger a handler function

    $(".btn").click(function() {

        let userChosenColour = $(this).attr("id");
    
        userClickedPattern.push(userChosenColour);

        playSound(userChosenColour);
        animatePress(userChosenColour);

        checkAnswer(userClickedPattern.length-1);
});

// Applying the css for when a yser gets the answers wrong

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}


// creating a random number and link it with the colour, then putting a fade on the buttin so that it flashes
function nextSequence() {

    // Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    userClickedPattern = [];
    level++;

    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4); 

    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

     $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

     playSound(randomChosenColour);
   
     }

     function animatePress(currentColour) {
    
        $("#" + currentColour).addClass("pressed");
    
        setTimeout(function () {
            $("#" + currentColour).removeClass("pressed");
        }, 100);
    }

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}



function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}


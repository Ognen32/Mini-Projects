var buttonColours = ["red","blue","green","yellow"];
var gamePatern = [];
var player_GamePatern = [];
var stage_Level = 0;
var started = false;
var gameOver = false;
var repeat =0;

$(document).keydown(function (e) { 
    if (!started)
    {
        started = true;
        stage_Level = 0;
         $("body").css("background-color", "#011F3F");
        $("#level-title").text("Stage Level "+stage_Level);
        repeatPattern();
    }
});



function nextSequence() {
    stage_Level++;
    $("#level-title").text("Stage Level "+stage_Level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePatern.push(randomChosenColour);
}

$(".btn").click(function (e) { 
    if (started){
    $(this).fadeOut(50).fadeIn(50);
    let clicked_Button = ($(this).attr("id"));
    playSound(clicked_Button);
    player_GamePatern.push(clicked_Button);
    console.log(player_GamePatern);
    patternCheck();

    }

});

function repeatPattern () {
    nextSequence();
    for (let i = 0; i<gamePatern.length; i++) {
        setTimeout(function(){
            
            $("#" + gamePatern[i]).fadeOut(100).fadeIn(100);
            playSound(gamePatern[i]);

        },800 * i);
        repeat = i;
    }
}

function playSound (name) {
    var audio = new Audio("./sounds/" + name+".mp3");
        audio.play();
  }



  function patternCheck() {
    
    if (player_GamePatern[player_GamePatern.length-1] !== gamePatern[player_GamePatern.length-1]) {
        $("body").css("background-color", "red");
        playSound ("wrong");
        started = false;
        document.querySelector("h1").textContent = "Game Over! Refresh to start over";
        
        
    }
    else if (gamePatern.length ===  player_GamePatern.length ) { 
        player_GamePatern.length = 0;
        setTimeout(repeatPattern, 1000);
    

}

  }

  
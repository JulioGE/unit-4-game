
startGame(); 

$("#gameStatus").click(function() {
	startGame();
})

$("#redRuby").click(function() {
	addValues(crystals.redRuby);
});

$("#blueSapphire").click(function() {
	addValues(crystals.blueSapphire);
});

$("#yellowDiamond").click(function() {
	addValues(crystals.yellowDiamond);
});

$("#greenEmerald").click(function() {
	addValues(crystals.greenEmerald);
});


var userNumber = 0;
var targetNumber = 0;



var wins = 0;
$("#wins").html("<h3>Wins: " + wins + "</h3>");

var losses = 0;
$("#losses").html("<h3>Losses: " + losses + "</h3>");

var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var crystals = {
  redRuby:
  {
    name: "redRuby",
    value: 0
  },
  blueSapphire:
  {
    name: "blueSapphire",
    value: 0
  },
  yellowDiamond:
  {
    name: "yellowDiamond",
    value: 0
  },
  greenEmerald:
  {
    name: "greenEmerald",
    value: 0
  },
}

  var startGame = function() {

    userNumber = 0;
    targetNumber = getRandom(19,120);
    
    crystals.redRuby.value = getRandom(1, 12);
    crystals.blueSapphire.value = getRandom(1, 12);
    crystals.yellowDiamond.value = getRandom(1, 12);
    crystals.greenEmerald.value = getRandom(1, 12);

    $("#totalScore").html("<h3>Total Score: " + totalScore + "</h3>");
    $("#randomNumber").html("<h3>Random Number: " + randomNumber + "</h3>");
    
  }







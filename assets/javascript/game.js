$(document).ready(function(){


var computerPick = function crystalGenerator() {
    var gem = Math.floor(Math.random() * (120 - 19 +1)) + 19;
    return gem;
}

console.log(crystalGenerator());

var counter = 0;
var wins = 0;
var losses = 0;
var numberSoFar = 0;
var randomNum = 0;

$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

$("#randomNum").text(crystalGenerator());

gem1 = Math.floor((Math.random()*12)+1);
    console.log(gem1);
gem2 = Math.floor((Math.random()*12)+1); 
    console.log(gem2);
gem3 = Math.floor((Math.random()*12)+1);
    console.log(gem3);
gem4 = Math.floor((Math.random()*12)+1);
    console.log(gem4);

$("#gem1").html("<img src=" + "assets/images/gem1.png" + " value=" + gem1 + " class='container'" + ">");
$("#gem2").html("<img src=" + "assets/images/gem2.png" + " value=" + gem2 + " class='container'" + ">");
$("#gem3").html("<img src=" + "assets/images/gem3.png" + " value=" + gem3 + " class='container'" + ">");
$("#gem4").html("<img src=" + "assets/images/gem4.png" + " value=" + gem4 + " class='container'" + ">");

$("gem").on("click", function(){
    var newNumbSoFar = numberSoFar += parseInt($(this).attr("value"));
    $("#currentScore").html("Current Score: " + newNumbSoFar);

    if (newNumbSoFar === computerPick) {
        wins++ ;
        $("#wins").html("Wins: " + wins);
    }

    else if (newNumbSoFar > computerPick) {
        losses++ ;
        $("#losses").html("Losses: " + losses);
    }
    
})






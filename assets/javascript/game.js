$(document).ready(function(){


function crystalGenerator() {
    var gem = Math.floor(Math.random() * (120 - 19 +1)) + 19;
    return gem;
}

function gemGenerator() {
    var gem1 = Math.floor((Math.random()*12)+1);
    return gem1;
}

function gem2Generator() {
    var gem2 = Math.floor((Math.random()*12)+1);
    return gem2;
}

function gem3Generator() {
    var gem3 = Math.floor((Math.random()*12)+1);
    return gem3;
}

function gem4Generator() {
    var gem4 = Math.floor((Math.random()*12)+1);
    return gem4;
}

//console.log(gem1Generator());
//console.log(gem2Generator());
//console.log(gem3Generator());
//console.log(gem4Generator());

var counter = 0;
var wins = 0;
var losses = 0;
var numberSoFar = 0;
var randomNum = 0;
$("#wins").text(wins);
$("#losses").text(losses);

$("#randomNum").text(crystalGenerator());


$("#gem1").html("<img src=" + "assets/images/gem1.png" + " value=" + gemGenerator + " class='container'" + ">");
$("#gem2").html("<img src=" + "assets/images/gem2.png" + " value=" + gemGenerator + " class='container'" + ">");
$("#gem3").html("<img src=" + "assets/images/gem3.png" + " value=" + gemGenerator + " class='container'" + ">");
$("#gem4").html("<img src=" + "assets/images/gem4.png" + " value=" + gemGenerator + " class='container'" + ">");


})




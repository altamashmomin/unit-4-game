var crystalGen  = function crystalGenerator(min, max) {
    var gem = Math.floor(Math.random() * (120 - 19 +1)) + 19;
    return gem;
}

for (var i = 0; i < 120; i++) {
    console.log(crystalGenerator());
}

 var gem1Gen = function gem1Generator() {
    var gem1 = Math.floor((Math.random()*12)+1);
    return gem1;
}

var gem2Gen = function gem2Generator() {
    var gem2 = Math.floor((Math.random()*12)+1);
    return gem2;
}

var gem3Gen = function gem3Generator() {
    var gem3 = Math.floor((Math.random()*12)+1);
    return gem3;
}

var gem4Gen = function gem4Generator() {
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
var score = 0;

$(document).ready(function(){

$("#game").html("hello world");

var crys1 = $("#crystal1").attr("data", gem1Generator());
var crys2 = $("#crystal2").attr("data", gem2Generator());
var crys3 = $("#crystal3").attr("data", gem3Generator());
var crys4 = $("#crystal4").attr("data", gem4Generator());

$("#randomNum").html("crystalGen");



})




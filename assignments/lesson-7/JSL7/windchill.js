window.onload = function() {

var w = parseFloat(document.getElementById("wind").innerHTML);
var h = parseFloat(document.getElementById("high").innerHTML);
var l = parseFloat(document.getElementById("low").innerHTML);
var t = (h + l) / 2;
var a = Math.pow(speed, 0.16);
var re = 35.74 + 0.6215 * tempF - 35.75 * a + 0.4275 * tempF * a;
document.getElementById("chill").innerHTML = re;

}
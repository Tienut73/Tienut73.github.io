function calcWind() {
    let tempf = parseFloat(document.getElementById("high").textContent);
    let speed = parseFloat(document.getElementById("wind").textContent);
    let result = windchill(temp,wind);

    document.getElementById("windchill").innerHTML = "result";

}
function windChill(tempF,speed) {
    if (tempF <= 50 && speed > 3){
        let f = 35.74 + (0.6215*tempF) - 35.75* Math.pow(speed, 0.16) + 0.4275*tempF*Math.pow(speed, 0.16);
        return Math.round(f * 10)/10;   
        }
        else {
             let f = "n/a";
             return f;
    }
}
calcWind()
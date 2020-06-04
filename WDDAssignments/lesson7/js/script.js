var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET','http://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=1346ae4b000772369927f7abc662cda4&units=imperial', 'true= ".png";');

weatherRequest.send();

weatherRequest.onload = function(){
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
}
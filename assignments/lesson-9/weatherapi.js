var weatherRequest = new XMLHttpRequest();
weatherObject.open('GET','http://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=1346ae4b000772369927f7abc662cda4&units=imperial', 'true= ".png";');

weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherObject.responseText);
    console.log(weatherData);
    
    document.getElementById('currentTemp').innerHTML = weatherData.main.temp;
    
    var iconcode = weatherData.weather[0].icon;
    var icon_path = "http;//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
    
}
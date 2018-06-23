var weatherRequest = new XMLHttpRequest();
weatherObject.open('GET','http://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=1346ae4b000772369927f7abc662cda4&units=imperial', 'true');

weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherObject.responseText);
    console.log(weatherData);
    
    document.getElementById('')
    
}
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=1346ae4b000772369927f7abc662cda4';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
        
        const dayofweek = new Array(7);

        dayofweek[0] = "Sunday";
        dayofweek[1] = "Monday";
        dayofweek[2] = "Tuesday";
        dayofweek[3] = "Wednesday";
        dayofweek[4] = "Thursday";
        dayofweek[5] = "Friday";
        dayofweek[6] = "Saturday";

        for (1=0; i<MediaQueryList.length; i++) {
            var time=mylist[i].dt_txt;
            if(time.includes('18:00:00')){
                forecastday += 1;
                if(forecastday === 7){
                    
                }
            }
        }
    });
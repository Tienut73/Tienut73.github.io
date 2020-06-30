function toggleMenu() {

    document.getElementById("primeNav").classList.toggle("hide");
}

try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById(
        "currentdate"
        ).textContent = new Date().toLocaleDateString("en-gb", options);
} catch (e) {
    alert ("error")
}



    var date = new Date();
    var dayOfWeek = date.getDay();
  
    if (dayOfWeek == 5) {
      var plannedEvent = document.getElementById("plannedEvent");
      plannedEvent.style.display = "block";
    }
  
    function adjustRating(rating) {
        document.getElementById("ratingvalue").innerHTML = rating;
    }


    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const cities = jsonObject['towns'];
    
    for (let i = 0; i < cities.length; i++) {
    let place = cities[i]
    let townname = ["Fish Haven", "Preston", "Soda Springs"]
        if (townname.includes(place.name)) {

            let section = document.createElement('article');
        section.classList.add('maincontainer')

        let containtext = document.createElement('div');
        containtext.classList.add('textcol');
        let h2 = document.createElement('h2');
        let motto = document.createElement('h3');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
          
        h2.textContent = place.name;
        motto.textContent = place.motto;
        year.textContent = 'Year Founded: ' + place.yearFounded;
        population.textContent = 'Population: ' + place.currentPopulation;
        rainfall.textContent = 'Annual Rain Fall: ' + place.averageRainfall;

        containtext.appendChild(h2);
        containtext.appendChild(motto);
        containtext.appendChild(year);
        containtext.appendChild(population);
        containtext.appendChild(rainfall);

          let picture = document.createElement('div');
          picture.classList.add('homepic')
          let image = document.createElement('img');
          let alt = document.createElement('alt');
          alt.setAttribute('alt', place.name);
          image.setAttribute('src', "images/" + place.photo);
          picture.appendChild(image)

          
          section.appendChild(containtext)
          section.appendChild(picture)
          

        document.querySelector('div.townname').appendChild(section);
      }
    }
  });
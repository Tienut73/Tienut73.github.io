const requestEventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestEventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    const special = towns.filter(town => (town.name == 'Preston')); //this line is in addition to const prophets line
    special.forEach(town => {
      let townDiv = document.createElement('div');
      let h6 = document.createElement('h6');
      let events = document.createElement('p');

      h6.textContent = 'Upcoming Events ';           + town.events;
      events.innerHTML = town.events[0] + '<br>' + town.events[1] + '<br>' + town.events[2];

      townDiv.appendChild(h6);
      townDiv.appendChild(events);

      document.querySelector('div.towns').appendChild(townDiv);
    });
  });
const requestEventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestEventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['townData'];

    const special = towns.filter(town => (town.name == 'preston'));
    special.forEach(town => {
      let townDiv = document.createElement('div');
      let h6 = document.createElement('h6');
      let events = document.createElement('p');

      h6.textContent = 'Upcoming Events ';           + townData.events;
      events.innerHTML = townData.events[0] + '<br>' + townData.events[1] + '<br>' + townData.events[2];

      townDiv.appendChild(h6);
      townDiv.appendChild(events);

      document.querySelector('div.townData').appendChild(townDiv);
    });
  });
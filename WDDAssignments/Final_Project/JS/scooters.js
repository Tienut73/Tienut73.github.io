const requestURL = 'https://github.com/Tienut73/Tienut73.github.io/blame/master/WDDAssignments/Final_Project/JS/scoots.json';
fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const scooters = jsonObject['scooters'];

    for (let i = 0; i < scooters.length; i++)  {
        let card =document.createElement('section');
        let h2 = document.createElement('h2');
        let bDay = document.createElement('p');
        let bPlace = document.createElement('p');
        let image = document.createElement('img');
        let alt = document.createElement('alt');

        alt.setAttribute('alt', scooters[i].name + scooters[i].lastname + ' - ' + scooters[i].order);
            image.setAttribute('src', scooters[i].imageurl);
            h2.textContent = scooters[i].name + ' ' + scooters[i].lastname;
            bDay.textContent = 'Date of Birth: ' + scooters[i].birthdate;
            bPlace.textContent = 'Place of Birth: ' + scooters[i].birthplace;

            card.appendChild(h2);
            card.appendChild(alt);
            card.appendChild(bDay);
            card.appendChild(bPlace);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
    }
});
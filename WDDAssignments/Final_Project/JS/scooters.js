const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const scooter = jsonObject['scooter'];

    for (let i = 0; i < scooter.length; i++)  {
        let card =document.createElement('section');
        let h2 = document.createElement('h2');
        let bDay = document.createElement('p');
        let bPlace = document.createElement('p');
        let image = document.createElement('img');
        let alt = document.createElement('alt');

        alt.setAttribute('alt', scooter[i].name + scooter[i].lastname + ' - ' + scooter[i].order);
            image.setAttribute('src', scooter[i].imageurl);
            h2.textContent = scooter[i].name + ' ' + scooter[i].lastname;
            bDay.textContent = 'Date of Birth: ' + scooter[i].birthdate;
            bPlace.textContent = 'Place of Birth: ' + scooter[i].birthplace;

            card.appendChild(h2);
            card.appendChild(alt);
            card.appendChild(bDay);
            card.appendChild(bPlace);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
    }
});
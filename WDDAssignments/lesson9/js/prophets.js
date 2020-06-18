const requestURL =
fetch(requestURL)
.then(function (response) {
    return response.json();
})
,then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    const utah = prophets.filter(prophet => (prophet.birthplace == 'Utah'));

    utah.forEach(prophet => {
        let card =document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');

        h2.textContext = prophets[i].name + ' ' + prophets[i].lastname;
        p1.innerHTML = "<strong>" + prophets[i].birthdate + "</strong>";
        
        card.appendChild(h2);

        document.querySelector('div.cards').appendChild(card);
    })
})
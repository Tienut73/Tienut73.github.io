var pageCounter = 1;
var gpResults = document.getElementById("gp-results");
var btn = document.getElemenById("btn");

btn.addEventListner("click", function(){
var ourSearch = new XMLHttpRequest();
ourSearch.open('GET', 'https://raw.githubusercontent.com/Tienut73/Tienut73.github.io/57b0e3ee3dc9112e5addf0c9321be7b8daa06c91/JSON%20Data' + pageCounter + '.json)
ourSearch.onload = function(){
var ourResults = JSON.parse(ourSearch.responseText);
renderHTML(ourResults);
};
    ourSearch.send();
    pageCounter++;
    if (pageCounter > 3){
        btn.classlist.add("hide- me")
    }
});

function renderHTML(results){
    var htmlString = "";
    for (i=0; i < results.length; i++) {
        htmlString += "<p>" + results[i].deck + "is a" results[i].type + "deck that placed" + results[i].place +"."
        
        for(ii = 0; ii < results[i]place.length; ii++);
        htmlString += '.</p>'
    }
gpResults.insertAdjacentHTML('beforeend, htmlString);
                    
}
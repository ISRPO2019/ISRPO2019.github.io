include("localStorage.js");

function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}


function cardCreator(id)
{
    var cardlist = document.getElementById("card-list");

    let card = document.getElementById('card-1');
    if(id != 1)
    {
        let newCard = document.createElement('a');
        newCard.setAttribute('id', 'card-' + (id + 1));
        console.log(card.firstElementChild, id);
        newCard.appendChild(card.firstElementChild.cloneNode(true));
        console.log(newCard);

        newCard.getElementsByClassName("title")[0].textContent = catalog[id].name;
        newCard.getElementsByClassName("price")[0].textContent = catalog[id].price;
        newCard.getElementsByClassName("img")[0].setAttribute("src", catalog[id].url);
        cardlist.appendChild(newCard);
        return 0;
    }

    card.getElementsByClassName("title")[0].textContent = catalog[id].name;
    card.getElementsByClassName("price")[0].textContent = catalog[id].price;
    card.getElementsByClassName("img")[0].setAttribute("src", catalog[id].url);
    return 0;
}

let i = 0;

while(i<catalog.length)
{
    
    var card1 = document.getElementById("card-1");
    console.log(card1);
    cardCreator(i);
    i++;
    //console.log(card.children);
}

catalogDOM.appendChild()
var card = document.createElement('a');
var product = document.createElement('div');

card.setAttribute('href', '#');
card.appendChild()


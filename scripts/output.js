function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

include("./scripts/localStorage.js");

function cardCreator(id, products) {
    var cardlist = document.getElementById("card-list");
    let card = document.getElementById('card-0');
    let newCard = document.createElement('a');
    newCard.setAttribute('id', 'card-' + (id + 1));
    newCard.appendChild(card.firstElementChild.cloneNode(true));

    newCard.getElementsByClassName("title")[0].textContent = products[id].brand + ' ' + products[id].name;
    newCard.getElementsByClassName("price")[0].textContent = products[id].price;
    newCard.getElementsByClassName("img")[0].setAttribute("src", products[id].url);
    cardlist.appendChild(newCard);
    return 0;
}

function listRemove() {
    let main_block = document.getElementById("card-list");
    let blocks = main_block.children;
    for (i = blocks.length - 1; i >= 0; i--) {
        if (i <= 1) break;
        main_block.removeChild(blocks[i]);
    }
}

function cardList(catal) {
    listRemove();
    let i = 0;
    while (i < catal.length) {
        cardCreator(i, catal);
        i++;
    }
    var card = document.createElement('a');

    card.setAttribute('href', '#');
}
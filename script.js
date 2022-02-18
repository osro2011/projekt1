async function showContent() {

    cards = (await (await fetch("./cards.json")).json());
    console.log(cards);
    
    for (card of cards) {
        console.log(card);

        newCard = `
        <li>
            <a href="${card.link}" class="card"> 
                <div class="image">
                    <img src="${card.imgPath}" alt="${card.imgAlt}">
                </div>
                <h3>${card.title}</h3>
                <p>${card.text}</p>
            </a>
        </li>
        `;

        tempWrapper = document.createElement('div');
        tempWrapper.innerHTML = newCard;

        document.getElementById(card.category).innerHTML += newCard;
    }
}
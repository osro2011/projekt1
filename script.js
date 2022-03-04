window.onload = showContent();

async function showContent() {

    lists = (await (await fetch("./lists.json")).json());
    console.log(lists);
    
    for (list of lists) {
        console.log(list);

        newList = `
            <section>
                <h1>${list.title}</h1>
                <ul class="content" id=${list.category}></ul>
            </section>
        `;

        tempWrapper = document.createElement('div');
        tempWrapper.id = list.category;
        tempWrapper.innerHTML = newList;

        document.getElementById("bottom").innerHTML += newList;

        for (card of list.children) {
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

            document.getElementById(list.category).innerHTML += newCard;
        }
    }
}
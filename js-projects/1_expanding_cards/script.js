let activeCard;

function onLoad() {
    const cards = Array.from(document.getElementsByClassName('card'));

    console.log(cards);

    cards.forEach(card => {
        card.addEventListener('click', () => {
            if(activeCard)
                activeCard.classList.toggle('active');
            card.classList.toggle('active');
            activeCard = card;
        })
    });
}
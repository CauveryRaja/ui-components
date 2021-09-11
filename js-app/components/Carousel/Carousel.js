const cardsQ = [{
    title: 'Card 1',
    bgColor: 'red'
}, 
{
    title: 'Card 2',
    bgColor: 'lightpink'
}, 
{
    title: 'Card 3',
    bgColor: 'lightblue'
}, 
{
    title: 'Card 4',
    bgColor: 'lightgreen'
}, 
{
    title: 'Card 5',
    bgColor: 'gold'
}];

function renderCarousel() {
    const cardNodes = document.querySelector('.carousel').children;
    Array.from(cardNodes).forEach((elm, index) => {
        const { title, bgColor } = cardsQ[index];
        elm.textContent = title;
        elm.style.backgroundColor = bgColor;
    });
}

function swipeCard(direction) {
    document.querySelector('.carousel').children[0].style.animation = `slide-${direction} 1s linear`;
    const firstCard = cardsQ.shift();
    cardsQ.push(firstCard);
    setTimeout(() => {
        renderCarousel();
        document.querySelector('.carousel').children[0].style.animation = '';
    }, 900);
}

renderCarousel();
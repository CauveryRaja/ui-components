const cardsInRow = 8;
let cardWidth = Math.ceil(window.innerWidth/cardsInRow);
cardWidth -= 10;
const gap = 7;
let sortedCards = [];

let cards = Array.from(document.getElementsByClassName('card'));
cards.forEach((elm, index) => {
    elm.style.width = cardWidth + 'px';
    elm.getElementsByClassName('indicator')[0].textContent = index;

    let firstRow = (index-8) < 0 ? true : false;
    if(!firstRow) {
        sortedCards.sort((a, b) => a.bottom - b.bottom);
        let prevElm = sortedCards.shift();
        elm.style.left = `${prevElm.left}px`;
        elm.style.top = `${prevElm.bottom + gap}px`;
        let elmRect =  elm.getClientRects()[0];
        sortedCards.push({
            index,
            left: elmRect.left,
            bottom: elmRect.bottom
        });
    }
    else {
        elm.style.left = index > 0 ? `${(index*cardWidth) + ((index+1)*gap)}px` : `${gap}px`;
        let currElm =  elm.getClientRects()[0];
        sortedCards.push({
            index,
            left: currElm.left,
            bottom: currElm.bottom
        });
    }
});
let currIndex = 0;

const indicators = document.getElementsByClassName('screen-indicator');
const progressElm = document.getElementsByClassName('progress')[0];

function previous() {
    indicators[currIndex].classList.remove('completed');
    --currIndex;
    progressElm.style.width = `${currIndex/(indicators.length-1)*100}%`;
    console.log('width', progressElm.style.width);
}

function next() {
    ++currIndex;
    indicators[currIndex].classList.add('completed');
    progressElm.style.width = `${currIndex/(indicators.length-1)*100}%`;
    console.log('width', progressElm.style.width);
}

let currIndex = 0;

const indicators = document.getElementsByClassName('screen-indicator');
const progressElm = document.getElementsByClassName('progress')[0];
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

disableControls();

function previous() {
    // Delay should not be applied when removing class
    indicators[currIndex].style.transitionDelay = '0s';
    indicators[currIndex].classList.remove('completed');
    --currIndex;
    progressElm.style.width = `${currIndex/(indicators.length-1)*100}%`;
    disableControls();
}

function next() {
    ++currIndex;
    // Delay should be applied when adding class
    indicators[currIndex].style.transitionDelay = '0.6s';
    indicators[currIndex].classList.add('completed');
    progressElm.style.width = `${currIndex/(indicators.length-1)*100}%`;
    disableControls();
}

function disableControls() {
    if(currIndex <= 0) {
        prevBtn.disabled = true;
    }
    else if(currIndex >= indicators.length-1) {
        nextBtn.disabled = true;
    }
    else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}
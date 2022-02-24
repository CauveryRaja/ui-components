let container = document.getElementsByClassName('container')[0];

let removedFromTop = [];
let removedFromBottom = [];

init();

window.addEventListener('scroll', (event) => {
    // let windowRect = document.getElementsByClassName('bar-top')[0].getBoundingClientRect();
    // console.log(event.scrollTop, windowRect.left);

    // checkFirstElement();
});

function removeFirstElement() {
    let entries = Array.from(container.children);
    if(entries[0].getBoundingClientRect().bottom < -20) {
        container.removeChild(entries[0]);
        removedFromTop.push(entries[0]);
    }
}

function removeLastElement() {
    let entries = Array.from(container.children);
    let lastIndex = entries.length-1;
    if(entries[lastIndex].getBoundingClientRect().bottom > window.innerHeight + 20) {
        container.removeChild(entries[lastIndex]);
        removedFromBottom.push(entries[lastIndex]);
    }
}

function insertElementToTop() {
    let elmToInsert = removedFromTop.pop();
    if(elmToInsert)
        container.insertAdjacentElement('afterbegin', elmToInsert);
}

function init() {
    for(let i=0; i<5; i++) {
        let elmStr = getElementWithIndex(i);
        container.insertAdjacentHTML('beforeend', elmStr);
    }
}

function getElementWithIndex(index) {
    return `<div class="entry" id="entry-${index}">
                <header>
                    <span class="avatar"></span>
                    Entry ${index}
                </header>
                <div class="image"></div>
                <footer></footer>
            </div>`;
}


var lastScrollTop = 0;

document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
        console.log('Scrolling down...', window.pageYOffset, document.documentElement.scrollTop);
        removeFirstElement();
   } else {
        console.log('Scrolling up...', window.pageYOffset, document.documentElement.scrollTop);
        if(st < 100) {
            insertElementToTop();
        }
        // removeLastElement();
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
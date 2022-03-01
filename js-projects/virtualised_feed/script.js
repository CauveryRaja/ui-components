let container = document.getElementsByClassName('container')[0];

let removedFromTop = [];
let removedFromBottom = [];

init();

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
    if(entries[lastIndex].getBoundingClientRect().top > window.innerHeight + 200) {
        console.log('removing last element', lastIndex, entries[lastIndex].getBoundingClientRect().bottom, window.innerHeight + 100);
        container.removeChild(entries[lastIndex]);
        removedFromBottom.push(entries[lastIndex]);
    }
}

function insertElementAtTop() {
    let elmToInsert = removedFromTop.pop();
    if(elmToInsert)
        container.insertAdjacentElement('afterbegin', elmToInsert);
}

function insertElementAtBottom() {
    let elmToInsert = removedFromBottom.pop();
    if(elmToInsert)
        container.insertAdjacentElement('beforeend', elmToInsert);
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

document.addEventListener("scroll", function() {
   let currScrollTop = window.pageYOffset || document.documentElement.scrollTop;
   let diff = Math.abs(currScrollTop - lastScrollTop);
   if(diff < 10)
    return;
   if (currScrollTop > lastScrollTop){
        console.log('Scrolling down...', currScrollTop, lastScrollTop, window.innerHeight);
        removeFirstElement();
        if(window.innerHeight - currScrollTop < 300) { // Check this - innerHeight is just view port height, not document height
            insertElementAtBottom();
        }
   } else {
        console.log('Scrolling up...', currScrollTop, lastScrollTop);
        if(currScrollTop < 100) {
            insertElementAtTop();
        }
        removeLastElement();
   }
   lastScrollTop = currScrollTop <= 0 ? 0 : currScrollTop; // For Mobile or negative scrolling
}, false);
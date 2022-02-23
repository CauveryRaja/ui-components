let container = document.getElementsByClassName('container')[0];

init();

let entries = Array.from(container.children);

window.addEventListener('scroll', (event) => {
    // let entryRect = document.getElementById('entry-0').getBoundingClientRect();
    // console.log(event, entryRect.top);

    let windowRect = document.getElementsByClassName('bar-top')[0].getBoundingClientRect();
    console.log(event.scrollTop, windowRect.left);

    checkFirstElement();
});

function checkFirstElement() {
    console.log(entries, container.children);
    if(entries[0].getBoundingClientRect().bottom < -20) {
        container.removeChild(entries[0]);
    }
}

function init() {
    for(let i=0; i<3; i++) {
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


// Detecting Scroll direction - yet to use

var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
element.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      // downscroll code
   } else {
      // upscroll code
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
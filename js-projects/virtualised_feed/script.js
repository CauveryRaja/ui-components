let container = document.getElementsByClassName('container')[0];

init();

let entries = Array.from(container.children);

document.addEventListener('scroll', (event) => {
    // let entryRect = document.getElementById('entry-0').getBoundingClientRect();
    // console.log(event, entryRect.top);
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
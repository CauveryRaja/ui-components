let indicators = Array.from(document.getElementsByClassName('indicator'));
let contents = Array.from(document.getElementsByClassName('content'));

indicators.forEach((elm, index) => {
    elm.style.top = `${15 * (index + 1)}%`; 
});

contents.forEach((elm, index) => {
    elm.style.top = `${15 * (index + 1)}%`;
})
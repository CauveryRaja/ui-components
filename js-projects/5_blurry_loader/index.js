const container = document.getElementsByClassName('container')[0];
const loaderText = document.getElementsByClassName('loader')[0];

let count = 0;

loaderText.textContent = count;

const timerId = setInterval(() => {
    count++;
    loaderText.textContent = count + '%';
    loaderText.style.opacity = scale(count, 1, 100, 1, 0);
    container.style.filter = `blur(${scale(count, 1, 100, 30, 0)}px)`

    if(count > 99) {
        clearInterval(timerId);
    }
}, 30);

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
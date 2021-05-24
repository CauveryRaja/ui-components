// document.getElementsByClassName('tab-btn').forEach(btn => {
//     btn.addEventListener('click', clickHandler);
// });

function clickHandler() {
    console.log('Click handler called...');
}

document.querySelector('.tab-btn').addEventListener('click', clickHandler);

module.exports = clickHandler;
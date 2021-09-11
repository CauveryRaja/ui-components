// document.getElementsByClassName('tab-btn').forEach(btn => {
//     btn.addEventListener('click', clickHandler);
// });
const $ = require('jquery');
const eventHandlers = require('./EventHandlers');

const clickHandler = () => {
    console.log('Click handler called...');
}

console.log(document.querySelector('.tab-btn'));

// document.querySelector('.tab-btn').addEventListener('click', clickHandler);

$('.tab-btn').trigger('click', eventHandlers.clickHandler);

// module.exports = {
//     clickHandler
// };
let collapsibleHeader = document.getElementsByClassName('collapsible__header')[0];

collapsibleHeader.addEventListener('click', () => {
    collapsibleHeader.parentElement.classList.toggle('collapsible--open');
});
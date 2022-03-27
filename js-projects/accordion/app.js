let collapsibleHeader = document.getElementsByClassName('collapsible-header')[0];

collapsibleHeader.addEventListener('click', () => {
    collapsibleHeader.parentElement.classList.toggle('open');
});
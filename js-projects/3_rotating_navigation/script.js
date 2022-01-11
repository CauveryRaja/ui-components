const page = document.getElementsByClassName('page')[0];
const menuBtn = document.getElementsByClassName('menu-btn')[0];
const closeBtn = document.getElementsByClassName('close-btn')[0];

menuBtn.addEventListener('click', () => {
    page.classList.add('active');
    menuBtn.classList.add('rotate');
    closeBtn.classList.add('rotate');
});

closeBtn.addEventListener('click', () => {
    page.classList.remove('active');
    menuBtn.classList.remove('rotate');
    closeBtn.classList.remove('rotate');
});
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenu.classList.toggle('translate-x-0');
});

const menuItems = mobileMenu.querySelectorAll('a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
});
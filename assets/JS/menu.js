const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');


const swiperButtonPrev = document.querySelector('.swiper-button-prev');
const swiperButtonNext = document.querySelector('.swiper-button-next');

// Check the current theme from localStorage
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
    lightIconDesktop.classList.remove('hidden');
    darkIconDesktop.classList.add('hidden');
    lightIconMobile.classList.remove('hidden');
    darkIconMobile.classList.add('hidden');
} else {
    document.documentElement.classList.remove('dark');
    lightIconDesktop.classList.add('hidden');
    darkIconDesktop.classList.remove('hidden');
    lightIconMobile.classList.add('hidden');
    darkIconMobile.classList.remove('hidden');
}

// Toggle theme button functionality for Mobile
themeToggleMobile.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        lightIconDesktop.classList.remove('hidden');
        darkIconDesktop.classList.add('hidden');
        lightIconMobile.classList.remove('hidden');
        darkIconMobile.classList.add('hidden');
    } else {
        localStorage.setItem('theme', 'light');
        lightIconDesktop.classList.add('hidden');
        darkIconDesktop.classList.remove('hidden');
        lightIconMobile.classList.add('hidden');
        darkIconMobile.classList.remove('hidden');
    }
});

// Toggle theme button functionality for Desktop
themeToggleDesktop.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        lightIconDesktop.classList.remove('hidden');
        darkIconDesktop.classList.add('hidden');
        lightIconMobile.classList.remove('hidden');
        darkIconMobile.classList.add('hidden');
    } else {
        localStorage.setItem('theme', 'light');
        lightIconDesktop.classList.add('hidden');
        darkIconDesktop.classList.remove('hidden');
        lightIconMobile.classList.add('hidden');
        darkIconMobile.classList.remove('hidden');
    }
});

// Mobile Menu Toggle
menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenu.classList.toggle('translate-x-0');
    swiperButtonPrev.classList.toggle('hidden');
    swiperButtonNext.classList.toggle('hidden');
});

// Close the mobile menu when clicking on a menu item
const menuItems = mobileMenu.querySelectorAll('a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
})
///////////////////////////////////////////////////////
;
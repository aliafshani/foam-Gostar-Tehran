const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const lightIconMobile = document.getElementById('lightIconMobile');
const darkIconMobile = document.getElementById('darkIconMobile');

const themeToggleDesktop = document.getElementById('themeToggleDesktop');
const lightIconDesktop = document.getElementById('lightIconDesktop');
const darkIconDesktop = document.getElementById('darkIconDesktop');

// Check the current theme from localStorage
const currentTheme = localStorage.getItem('theme') || 'light';
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
});

// Close the mobile menu when clicking on a menu item
const menuItems = mobileMenu.querySelectorAll('a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
})
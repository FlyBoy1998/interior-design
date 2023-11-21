const stickyNavbar = document.querySelector('.sticky-container');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerBtn = document.querySelector('.hamburger-btn');
const closeBtn = document.querySelector('.close-btn');

// Display Sticky Navbar
function displayStickyNav() {
    if(window.scrollY > 450) {
        stickyNavbar.classList.add('sticky-visible');
    } else {
        stickyNavbar.classList.remove('sticky-visible');
    }
}

// Display Mobile Menu
function showMobileMenu() {
    mobileMenu.classList.add('mobile-menu-visible');
}

// Hide Mobile Menu
function hideMobileMenu() {
    mobileMenu.classList.remove('mobile-menu-visible');
}

window.addEventListener('scroll', displayStickyNav);
hamburgerBtn.addEventListener('click', showMobileMenu);
closeBtn.addEventListener('click', hideMobileMenu);
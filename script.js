const stickyNavbar = document.querySelector('.sticky-container');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerBtn = document.querySelectorAll('.hamburger-btn');
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

hamburgerBtn.forEach((btn) => {
    btn.addEventListener('click', () => showMobileMenu());
})
closeBtn.addEventListener('click', hideMobileMenu);
window.addEventListener('scroll', displayStickyNav);

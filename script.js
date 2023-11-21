const stickyNavbar = document.querySelector('.sticky-container');

// Display Sticky Navbar
function displayStickyNav() {
    if(window.scrollY > 450) {
        stickyNavbar.classList.add('sticky-visible');
    } else {
        stickyNavbar.classList.remove('sticky-visible');
    }
}

window.addEventListener('scroll', displayStickyNav);
const stickyNavbar = document.querySelector('.sticky-container');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerBtn = document.querySelectorAll('.hamburger-btn');
const closeBtn = document.querySelector('.close-btn');
const playVideoBtn = document.querySelector('.play-video-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');
const modal = document.querySelector('.modal');
const videoModal = document.querySelector('.video-modal');
const video = document.getElementById('video');
console.log(typeof video);

// Play Video 
function playVideo() {
    modal.classList.add('fixed');
    modal.classList.remove('visibility-hidden');
    videoModal.classList.add('video-container-fade');
    // Disable Scrolling While Video Plays
    document.body.style.overflowY = 'hidden';
    video.play();
}

// Close Video Modal 
function closeModal() {
    modal.classList.remove('fixed');
    modal.classList.add('visibility-hidden');
    videoModal.classList.remove('video-container-fade');
    // Enable Scrolling
    document.body.style.overflowY = 'scroll';
    video.load();
}

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
playVideoBtn.addEventListener('click', playVideo);
closeModalBtn.addEventListener('click', closeModal);

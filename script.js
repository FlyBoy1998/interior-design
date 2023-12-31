const stickyNavbar = document.querySelector('.sticky-container');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerBtn = document.querySelectorAll('.hamburger-btn');
const closeBtn = document.querySelector('.close-btn');
const playVideoBtn = document.querySelector('.play-video-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');
const modal = document.querySelector('.modal');
const videoContainer = document.getElementById('video-container');
const video = document.getElementById('video');
const dropdownArrowBtn = document.querySelector('.dropdown-arrow-btn');
const dropdownListMobile = document.querySelector('.dropdown-list-mobile');

const sliderContainer = document.getElementById('slider-container');
const slider = document.getElementById('slider');
const clientContainers = document.querySelectorAll('.client-container');
const prevBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const dots = document.querySelectorAll('.dot');

let index = 0;
let width = clientContainers[0].clientWidth;

// Play Video 
function playVideo() {
    modal.classList.add('fixed');
    modal.classList.remove('visibility-hidden');
    videoContainer.classList.add('video-container-fade');
    video.play();
}

// Close Video Modal 
function closeModal() {
    modal.classList.remove('fixed');
    modal.classList.add('visibility-hidden');
    videoContainer.classList.remove('video-container-fade');
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

// Display Drop Down List For Mobile
function showDropdownList() {
    dropdownListMobile.classList.toggle('dropdown-list-mobile-visible');
    dropdownArrowBtn.classList.toggle('dropdown-arrow-rotate');
}

// Testimonials Slider
function nextSlide() {
    index++;
    if(index > clientContainers.length - 1) {
        index = 0;
    };
    slider.style.transition = 'transform 0.4s ease-out';
    slider.style.transform = `translateX(-${width * index}px)`;
    dotsNav();
}

function prevSlide() {
    index--;
    if(index < 0) {
        index = clientContainers.length - 1;
    };
    slider.style.transition = 'transform 0.4s ease-out';
    slider.style.transform = `translateX(-${width * index}px)`;
    dotsNav();
}

// Set auto sliding
function autoSlide() {
    deleteInterval = setInterval(timer, 3500);
    function timer() {
        nextSlide();
    }
}
autoSlide();

function dotsNav() {
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', ' ');
    }
    dots[index].className += ' active';
}

// Event listeners
hamburgerBtn.forEach((btn) => {
    btn.addEventListener('click', () => showMobileMenu());
})
closeBtn.addEventListener('click', hideMobileMenu);
window.addEventListener('scroll', displayStickyNav);
playVideoBtn.addEventListener('click', playVideo);
closeModalBtn.addEventListener('click', closeModal);
dropdownArrowBtn.addEventListener('click', showDropdownList);
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
sliderContainer.addEventListener('mouseover', () => {
    clearInterval(deleteInterval);
});
sliderContainer.addEventListener('mouseleave', () => {
    autoSlide();
})

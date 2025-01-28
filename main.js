// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = '#fff';
        nav.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});

// Mobile menu toggle (you can add a hamburger menu implementation here)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .pricing-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Form submission handling (for the contact form if added later)
const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
};

// Book slider functionality
const slider = document.querySelector('.book-slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentPosition = 0;
const slideWidth = 300 + 32; // Width of slide + gap

// Update slider position
const updateSliderPosition = () => {
    slider.scrollLeft = currentPosition * slideWidth;
};

// Handle next slide
nextBtn.addEventListener('click', () => {
    if (currentPosition < slides.length - 1) {
        currentPosition++;
        updateSliderPosition();
    }
});

// Handle previous slide
prevBtn.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition--;
        updateSliderPosition();
    }
});

// Touch and drag functionality for mobile
let isDragging = false;
let startPosition = 0;
let scrollLeft = 0;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDragging = false;
});

slider.addEventListener('mouseup', () => {
    isDragging = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startPosition) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

// Initialize any interactive elements
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});

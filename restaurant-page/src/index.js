import './styles.css';
import createHomepage from './homepage.js';
import createMenu from './menu.js';
import createContact from './contact.js';

// Restaurant website initialized

// Function to clear current active button styling
function clearActiveButtons() {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => button.classList.remove('active'));
}

// Function to set active button styling
function setActiveButton(buttonId) {
    clearActiveButtons();
    const button = document.getElementById(buttonId);
    if (button) {
        button.classList.add('active');
    }
}

// Tab switching functions with smooth transitions
function loadHomePage() {
    const content = document.getElementById('content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        createHomepage();
        setActiveButton('home-btn');
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
        content.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
    }, 100);
}

function loadMenuPage() {
    const content = document.getElementById('content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        createMenu();
        setActiveButton('menu-btn');
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
        content.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
    }, 100);
}

function loadContactPage() {
    const content = document.getElementById('content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        createContact();
        setActiveButton('about-btn');
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
        content.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
    }, 100);
}

// Set up event listeners for navigation
function setupNavigation() {
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const aboutBtn = document.getElementById('about-btn');
    
    if (homeBtn) {
        homeBtn.addEventListener('click', loadHomePage);
    }
    
    if (menuBtn) {
        menuBtn.addEventListener('click', loadMenuPage);
    }
    
    if (aboutBtn) {
        aboutBtn.addEventListener('click', loadContactPage);
    }
}

// Initialize the page
function init() {
    setupNavigation();
    loadHomePage(); // Load homepage by default
}

// Wait for DOM to be fully loaded before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM is already loaded
    init();
}

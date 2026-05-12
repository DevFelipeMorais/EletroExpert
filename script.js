// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const menuBackdrop = document.getElementById('menu-backdrop');
const menuContent = document.getElementById('menu-content');

function openMenu() {
    mobileMenu.classList.remove('invisible', 'opacity-0');
    menuContent.classList.remove('translate-x-full');
    document.body.classList.add('overflow-hidden');
    lucide.createIcons(); // Ensure icons are rendered
}

function closeMenu() {
    mobileMenu.classList.add('invisible', 'opacity-0');
    menuContent.classList.add('translate-x-full');
    document.body.classList.remove('overflow-hidden');
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
menuBackdrop.addEventListener('click', closeMenu);

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Sticky Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    }
});

// Form Submission Handling (WhatsApp Redirect)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        const phoneNumber = '5541987799620';
        
        let text = `Olá! Meu nome é *${name}*.\n`;
        if (email) text += `E-mail: ${email}\n`;
        text += `Estou interessado no serviço: *${service}*\n`;
        if (message) text += `\n*Mensagem:* ${message}`;
        
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
        
        window.open(whatsappUrl, '_blank');
        contactForm.reset();
    });
}

// Simple reveal animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

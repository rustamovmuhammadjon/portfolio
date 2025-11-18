// simple nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle && navToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// update year
document.getElementById('year').textContent = new Date().getFullYear();

// contact form handling (front-end only)
const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
            feedback.textContent = 'Please fill all fields.';
            feedback.style.color = '#ffcccb';
            return;
        }

        // basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            feedback.textContent = 'Please enter a valid email.';
            feedback.style.color = '#ffcccb';
            return;
        }

        // simulate send
        feedback.textContent = 'Sending...';
        feedback.style.color = '#cfe9ff';

        setTimeout(() => {
            feedback.textContent = 'Thanks! Your message has been received. I’ll contact you shortly.';
            feedback.style.color = '#baf7d0';
            contactForm.reset();
        }, 900);
    });
}

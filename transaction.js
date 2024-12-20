// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Button hover animation
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.boxShadow = '0 5px 15px rgba(255, 126, 95, 0.5)';
    });
    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.boxShadow = 'none';
    });
}

// Sidebar navigation
function showSection(id) {
    document.querySelectorAll('.content section').forEach(section => {
        section.classList.add('hidden'); // Hides all sections
    });
    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.classList.remove('hidden'); // Shows the selected section
    }
}

// Placeholder function for "Pay Now" button
function payNow() {
    alert('Processing payment...');
}

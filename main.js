// main.js - Core portfolio initializations and scroll reveal logic

console.log("Saragadam Rakshita Portfolio initialized successfully.");

document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Stop observing once revealed
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15, // trigger when 15% of the element is visible
            rootMargin: "0px 0px -50px 0px" // trigger slightly before entering viewport fully
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
        
        console.log(`Scroll Reveal initialized. Observing ${revealElements.length} sections.`);
    }
});
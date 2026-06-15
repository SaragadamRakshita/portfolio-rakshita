// contact.js - Handles contact form submission with validation and visual feedback

// Initialize EmailJS
// TODO: Replace "YOUR_PUBLIC_KEY" with your actual EmailJS Public Key from Account Settings
(function () {
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
            publicKey: "hEm2NYlkMT3y5oreG",
        });
    }
})();

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Simple validation check
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Visual feedback - Show sending state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <span class="inline-flex items-center">
                    <i class="fas fa-spinner fa-spin mr-2"></i> Sending...
                </span>
            `;

            // Send form using EmailJS
            // TODO: Replace "YOUR_SERVICE_ID" and "YOUR_TEMPLATE_ID" with your EmailJS credentials
            emailjs.sendForm('service_wf9ymzk', 'template_iyesoa8', this)
                .then(function () {
                    // Restore button state
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;

                    // Show success message
                    if (formMessage) {
                        formMessage.classList.remove('hidden');
                        formMessage.innerHTML = `<p class="text-green-500 mt-4 font-semibold"><i class="fas fa-check-circle mr-2"></i> Thank you, ${name}! Your message has been sent.</p>`;

                        // Reset form
                        contactForm.reset();

                        // Hide success message after 5 seconds
                        setTimeout(() => {
                            formMessage.classList.add('hidden');
                        }, 5000);
                    }
                }, function (error) {
                    // Restore button state
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;

                    // Show error message
                    if (formMessage) {
                        formMessage.classList.remove('hidden');
                        formMessage.innerHTML = `<p class="text-red-500 mt-4 font-semibold"><i class="fas fa-times-circle mr-2"></i> Failed to send message. Please try again.</p>`;

                        setTimeout(() => {
                            formMessage.classList.add('hidden');
                        }, 5000);
                    }
                    console.error('EmailJS Error:', error);
                });
        });
    }
});

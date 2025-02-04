// Scroll animation using IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
    // Options for IntersectionObserver
    const observerOptions = {
        threshold: 0.1 // Trigger animation when 10% of the element is visible
    };

    // Select only the text elements you want to animate
    const textElements = document.querySelectorAll(
        ".section h1, .section p, .user-journey-title, .user-journey-description, .competitor-analysis-title, .competitor-analysis-description, .paper-wireframes-title, .paper-wireframes-description, .digital-wireframes-title, .digital-wireframes-description, .hi-fidelity-title, .hi-fidelity-description, .hi-fi-title, .hi-fi-start-title, .hi-fi-start-description, .home-account-title, .home-account-description, .order-page-title, .order-page-description, .customization-page-title, .customization-page-description, .cart-checkout-title, .cart-checkout-description, .completion-tracker-title, .completion-tracker-description, .table-reservation-title, .table-reservation-description, .style-guide-title, .style-guide-description"
    );

    // Create an IntersectionObserver to watch each text element
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view"); // Add the animation class
            }
        });
    }, observerOptions);

    // Observe each text element
    textElements.forEach((el) => observer.observe(el));

    // Fade-in effect for the cover image
    const coverImage = document.querySelector(".cover-image");
    if (coverImage) {
        // Add the 'fade-in' class to trigger the CSS transition
        coverImage.classList.add("fade-in");
    }
});

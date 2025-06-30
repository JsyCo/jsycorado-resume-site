// Scroll-to-top button logic
document.addEventListener("DOMContentLoaded", function() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (!scrollBtn) return;

    // Show or hide the button on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 120) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // Smooth scroll to top on button click
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});
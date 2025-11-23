// Scroll to Top Button
(function() {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.className = 'scroll-to-top';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    function toggleScrollButton() {
        // Show button when scrolled down more than 300px
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    }
    
    // Scroll to top function
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Event listeners
    window.addEventListener('scroll', toggleScrollButton);
    scrollButton.addEventListener('click', scrollToTop);
    
    // Initialize on page load
    toggleScrollButton();
})();


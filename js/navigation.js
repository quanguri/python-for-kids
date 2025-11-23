// Fast Navigation - Add immediate visual feedback
(function() {
    // Add click handler to all navigation links
    document.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.querySelectorAll('.nav-menu a, .nav-logo');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Only handle if it's not an anchor link (same page)
                if (this.getAttribute('href') && !this.getAttribute('href').startsWith('#')) {
                    // Add immediate visual feedback
                    this.style.opacity = '0.6';
                    this.style.transition = 'opacity 0.1s';
                    
                    // Show loading indicator if available
                    const body = document.body;
                    if (!body.querySelector('.nav-loading')) {
                        const loading = document.createElement('div');
                        loading.className = 'nav-loading';
                        loading.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                        loading.style.cssText = `
                            position: fixed;
                            top: 20px;
                            right: 20px;
                            background: var(--primary-color, #4CAF50);
                            color: white;
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            z-index: 10000;
                            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                        `;
                        body.appendChild(loading);
                    }
                    
                    // Allow navigation to proceed normally
                    // Browser will handle the navigation
                }
            });
        });
        
        // Remove loading indicator when page is fully loaded
        window.addEventListener('load', () => {
            const loading = document.querySelector('.nav-loading');
            if (loading) {
                setTimeout(() => {
                    loading.remove();
                }, 300);
            }
        });
    });
})();


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active state in sidebar
            document.querySelectorAll('.sidebar-menu a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Highlight active section in sidebar while scrolling
// Chỉ chạy cho các trang có nhiều sections cố định (như basic.html, intermediate.html)
// Không chạy cho các trang load động (algorithms, advanced, projects)
const shouldUseScrollListener = !window.location.pathname.includes('algorithms.html') && 
                                 !window.location.pathname.includes('advanced.html') && 
                                 !window.location.pathname.includes('projects.html');

const sections = document.querySelectorAll('.chapter');

if (shouldUseScrollListener) {
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');

    // Set active cho bài học đầu tiên khi trang load
    if (sidebarLinks.length > 0) {
        // Kiểm tra xem đã có link nào active chưa
        const hasActive = Array.from(sidebarLinks).some(link => link.classList.contains('active'));
        if (!hasActive) {
            // Set active cho link đầu tiên
            sidebarLinks[0].classList.add('active');
        }
    }

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        // Nếu không có section nào được highlight (ở đầu trang), giữ active cho link đầu tiên
        if (!current && sidebarLinks.length > 0) {
            sidebarLinks[0].classList.add('active');
        }
    });
}

// Add copy button to code blocks
document.querySelectorAll('.code-example').forEach(codeBlock => {
    const copyButton = document.createElement('button');
    copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
    copyButton.className = 'copy-button';
    copyButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 100px;
        background: #4CAF50;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.8rem;
        opacity: 0.8;
        transition: opacity 0.3s;
        z-index: 2;
    `;
    
    copyButton.addEventListener('mouseenter', () => {
        copyButton.style.opacity = '1';
    });
    
    copyButton.addEventListener('mouseleave', () => {
        copyButton.style.opacity = '0.8';
    });
    
    copyButton.addEventListener('click', () => {
        const code = codeBlock.querySelector('code').textContent;
        navigator.clipboard.writeText(code).then(() => {
            copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
            }, 2000);
        });
    });
    
    codeBlock.style.position = 'relative';
    codeBlock.appendChild(copyButton);
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all chapters
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Mobile menu toggle (if needed in future)
const navMenu = document.querySelector('.nav-menu');
if (window.innerWidth <= 768) {
    // Add mobile menu functionality if needed
}

// Add fun hover effects to feature cards
document.querySelectorAll('.feature-card, .course-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Console welcome message (only in development)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('%c🐍 Chào mừng đến với Học Python Vui Vẻ!', 'color: #4CAF50; font-size: 20px; font-weight: bold;');
    console.log('%cBạn đang học Python - một ngôn ngữ lập trình tuyệt vời!', 'color: #2196F3; font-size: 14px;');
}


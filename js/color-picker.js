// Color Theme Picker
(function() {
    // Theme color definitions
    const themes = {
        green: {
            primary: '#4CAF50',
            secondary: '#FF9800',
            accent: '#2196F3'
        },
        blue: {
            primary: '#2196F3',
            secondary: '#FF9800',
            accent: '#4CAF50'
        },
        orange: {
            primary: '#FF9800',
            secondary: '#4CAF50',
            accent: '#2196F3'
        },
        purple: {
            primary: '#9C27B0',
            secondary: '#FF9800',
            accent: '#2196F3'
        },
        pink: {
            primary: '#E91E63',
            secondary: '#FF9800',
            accent: '#2196F3'
        },
        teal: {
            primary: '#009688',
            secondary: '#FF9800',
            accent: '#2196F3'
        },
        red: {
            primary: '#F44336',
            secondary: '#FF9800',
            accent: '#2196F3'
        },
        indigo: {
            primary: '#3F51B5',
            secondary: '#FF9800',
            accent: '#2196F3'
        }
    };
    
    let colorPickerBtn, modal, customColorInput;
    
    // Initialize on DOM ready
    function init() {
        // Create color picker button
        colorPickerBtn = document.createElement('button');
        colorPickerBtn.className = 'color-picker-btn';
        colorPickerBtn.setAttribute('aria-label', 'Chọn màu theme');
        colorPickerBtn.innerHTML = '<i class="fas fa-palette"></i>';
        document.body.appendChild(colorPickerBtn);
        
        // Create color picker modal
        modal = document.createElement('div');
        modal.className = 'color-picker-modal';
        modal.innerHTML = `
            <h4><i class="fas fa-paint-brush"></i> Chọn Màu Theme</h4>
            <div class="color-themes">
                <div class="color-theme-item" data-theme="green" title="Python Green"></div>
                <div class="color-theme-item" data-theme="blue" title="Ocean Blue"></div>
                <div class="color-theme-item" data-theme="orange" title="Sunset Orange"></div>
                <div class="color-theme-item" data-theme="purple" title="Purple Dream"></div>
                <div class="color-theme-item" data-theme="pink" title="Rose Pink"></div>
                <div class="color-theme-item" data-theme="teal" title="Teal Ocean"></div>
                <div class="color-theme-item" data-theme="red" title="Cherry Red"></div>
                <div class="color-theme-item" data-theme="indigo" title="Indigo Night"></div>
            </div>
            <div class="custom-color-section">
                <label for="custom-color"><i class="fas fa-sliders-h"></i> Màu Tùy Chỉnh</label>
                <input type="color" id="custom-color" class="custom-color-input" value="#4CAF50">
            </div>
        `;
        document.body.appendChild(modal);
        
        customColorInput = document.getElementById('custom-color');
        
        setupEventListeners();
        initializeTheme();
    }
    
    // Get saved theme or default
    function getSavedTheme() {
        const saved = localStorage.getItem('colorTheme');
        return saved || 'green';
    }
    
    // Apply theme
    function applyTheme(themeName, customColor = null) {
        const root = document.documentElement;
        let primaryColor;
        
        if (customColor) {
            primaryColor = customColor;
        } else {
            const theme = themes[themeName];
            if (!theme) {
                primaryColor = themes.green.primary;
            } else {
                primaryColor = theme.primary;
            }
        }
        
        // Calculate darker shade for gradient
        const darker = adjustColor(primaryColor, -20);
        root.style.setProperty('--primary-color', primaryColor);
        root.style.setProperty('--primary-gradient', `linear-gradient(135deg, ${primaryColor}, ${darker})`);
        
        // Update navbar gradient
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.background = `linear-gradient(135deg, ${primaryColor}, ${darker})`;
        }
        
        // Update active state
        if (modal) {
            modal.querySelectorAll('.color-theme-item').forEach(item => {
                item.classList.remove('active');
                if (item.dataset.theme === themeName) {
                    item.classList.add('active');
                }
            });
        }
        
        // Save to localStorage
        if (customColor) {
            localStorage.setItem('colorTheme', 'custom');
            localStorage.setItem('customColor', customColor);
        } else {
            localStorage.setItem('colorTheme', themeName);
            localStorage.removeItem('customColor');
        }
    }
    
    // Helper function to adjust color brightness
    function adjustColor(color, amount) {
        const usePound = color[0] === '#';
        const col = usePound ? color.slice(1) : color;
        const num = parseInt(col, 16);
        let r = (num >> 16) + amount;
        let g = (num >> 8 & 0x00FF) + amount;
        let b = (num & 0x0000FF) + amount;
        r = r > 255 ? 255 : r < 0 ? 0 : r;
        g = g > 255 ? 255 : g < 0 ? 0 : g;
        b = b > 255 ? 255 : b < 0 ? 0 : b;
        return (usePound ? '#' : '') + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
    }
    
    // Toggle modal
    function toggleModal() {
        if (modal) {
            modal.classList.toggle('show');
        }
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // Toggle modal
        if (colorPickerBtn) {
            colorPickerBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleModal();
            });
        }
        
        // Close modal when clicking outside
        document.addEventListener('click', (e) => {
            if (modal && !modal.contains(e.target) && colorPickerBtn && !colorPickerBtn.contains(e.target)) {
                modal.classList.remove('show');
            }
        });
        
        // Theme selection
        if (modal) {
            modal.querySelectorAll('.color-theme-item').forEach(item => {
                item.addEventListener('click', () => {
                    const themeName = item.dataset.theme;
                    applyTheme(themeName);
                });
            });
        }
        
        // Custom color input
        if (customColorInput) {
            customColorInput.addEventListener('change', (e) => {
                applyTheme('custom', e.target.value);
            });
        }
    }
    
    // Initialize theme
    function initializeTheme() {
        const savedTheme = getSavedTheme();
        const customColor = localStorage.getItem('customColor');
        if (savedTheme === 'custom' && customColor) {
            applyTheme('custom', customColor);
            if (customColorInput) {
                customColorInput.value = customColor;
            }
        } else {
            applyTheme(savedTheme);
        }
    }
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();


/**
 * Main JavaScript for Portfolio Website
 * Handles navigation, theme switching, and smooth scrolling
 */

// ===================================
// Theme Management
// ===================================

/**
 * Initialize theme based on user preference or system preference
 */
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    }
}

/**
 * Set the theme and update UI
 * @param {string} theme - 'light' or 'dark'
 */
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// ===================================
// Mobile Navigation
// ===================================

/**
 * Toggle mobile navigation menu
 */
function toggleMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
}

/**
 * Close mobile navigation when clicking a link
 */
function closeMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// ===================================
// Smooth Scrolling & Active Navigation
// ===================================

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Add scroll-based navbar styling
 */
function updateNavbarOnScroll() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
}

// ===================================
// Intersection Observer for Animations
// ===================================

/**
 * Set up intersection observer for scroll animations
 */
function setupScrollAnimations() {
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
    
    // Observe all cards and sections
    const animatedElements = document.querySelectorAll(
        '.research-card, .project-card, .skill-item, .publication-item, .contact-method'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });
}

// ===================================
// Utility Functions
// ===================================

/**
 * Debounce function to limit scroll event calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// Event Listeners
// ===================================

/**
 * Initialize all event listeners
 */
function initEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileNav);
    }
    
    // Close mobile nav when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });
    
    // Scroll events (debounced for performance)
    const debouncedScrollHandler = debounce(() => {
        updateActiveNavLink();
        updateNavbarOnScroll();
    }, 10);
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Close mobile nav on Escape key
        if (e.key === 'Escape') {
            closeMobileNav();
        }
    });
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        
        if (navMenu && navToggle && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target) &&
            navMenu.classList.contains('active')) {
            closeMobileNav();
        }
    });
}

// ===================================
// Performance Optimization
// ===================================

/**
 * Preload critical resources
 */
function preloadResources() {
    // Preload any critical images or fonts here if needed
    // Example:
    // const link = document.createElement('link');
    // link.rel = 'preload';
    // link.as = 'image';
    // link.href = 'path/to/image.jpg';
    // document.head.appendChild(link);
}

// ===================================
// Accessibility Enhancements
// ===================================

/**
 * Enhance accessibility features
 */
function enhanceAccessibility() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        z-index: 100;
        text-decoration: none;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Ensure all interactive elements have focus styles
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(el => {
        if (!el.style.outline) {
            el.addEventListener('focus', () => {
                el.style.outline = '2px solid var(--primary-color)';
                el.style.outlineOffset = '2px';
            });
            el.addEventListener('blur', () => {
                el.style.outline = '';
                el.style.outlineOffset = '';
            });
        }
    });
}

// ===================================
// Analytics (Optional)
// ===================================

/**
 * Track page views and interactions (placeholder)
 * Replace with actual analytics implementation
 */
function initAnalytics() {
    // Example: Track navigation clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const section = e.target.getAttribute('href');
            console.log(`Navigation to: ${section}`);
            // Replace with actual analytics call
            // Example: gtag('event', 'navigation_click', { section: section });
        });
    });
}

// ===================================
// Initialization
// ===================================

/**
 * Initialize all features when DOM is ready
 */
function init() {
    initTheme();
    initEventListeners();
    setupScrollAnimations();
    enhanceAccessibility();
    preloadResources();
    
    // Optional: Initialize analytics
    // initAnalytics();
    
    console.log('Portfolio website initialized successfully! 🚀');
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOMContentLoaded has already fired
    init();
}

// ===================================
// Export functions for testing (optional)
// ===================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleTheme,
        setTheme,
        toggleMobileNav,
        closeMobileNav,
        updateActiveNavLink,
        debounce
    };
}

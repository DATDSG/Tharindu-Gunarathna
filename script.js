document.addEventListener('DOMContentLoaded', () => {
    /* ==================== THEME TOGGLER ==================== */
    const themeButton = document.getElementById('theme-toggle-btn');
    const darkTheme = 'dark';
    const lightTheme = 'light';
    
    // Get saved theme from localStorage
    const selectedTheme = localStorage.getItem('selected-theme') || darkTheme;
    
    // Apply selected theme
    document.documentElement.setAttribute('data-theme', selectedTheme);
    
    // Toggle theme on button click
    if (themeButton) {
        themeButton.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === darkTheme ? lightTheme : darkTheme;
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('selected-theme', newTheme);
            
            // Re-initialize particles color scheme on theme change
            if (window.initCanvasColor) {
                window.initCanvasColor(newTheme);
            }
        });
    }

    /* ==================== MOBILE MENU ==================== */
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle-btn');
    const navClose = document.getElementById('nav-close-btn');
    const navLinks = document.querySelectorAll('.nav-link');

    // Menu Show
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // Menu Hide
    if (navClose && navMenu) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Hide Menu on Link Click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('show-menu');
            }
        });
    });

    /* ==================== SCROLL HEADER (SHADOW) ==================== */
    const header = document.getElementById('header');
    
    const scrollHeader = () => {
        if (header) {
            if (window.scrollY >= 50) {
                header.classList.add('scroll-header');
            } else {
                header.classList.remove('scroll-header');
            }
        }
    };
    window.addEventListener('scroll', scrollHeader);
    scrollHeader(); // Init on load

    /* ==================== TYPEWRITER EFFECT ==================== */
    const typewriterElement = document.getElementById('typewriter-text');
    const words = ["Quantum ML Researcher", "AI & Software Engineer", "Director @ QuantumSync Labs"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeDelay = 100;

    const typeEffect = () => {
        if (!typewriterElement) return;

        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeDelay = 50;
        } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeDelay = 150;
        }

        // Word completed
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeDelay = 2000; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeDelay = 500; // Pause before typing next word
        }

        setTimeout(typeEffect, typeDelay);
    };

    if (typewriterElement) {
        setTimeout(typeEffect, 1000);
    }

    /* ==================== PARTICLES CANVAS BACKGROUND ==================== */
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let particleCount = 45;
        let connectionDistance = 110;
        
        // Colors configured by theme
        let particleColor = 'rgba(168, 85, 247, 0.25)'; // Purple
        let lineColor = 'rgba(6, 182, 212, 0.05)';     // Cyan

        window.initCanvasColor = (theme) => {
            if (theme === 'light') {
                particleColor = 'rgba(109, 40, 217, 0.15)'; // Darker violet
                lineColor = 'rgba(14, 116, 144, 0.04)';     // Darker cyan
            } else {
                particleColor = 'rgba(168, 85, 247, 0.25)';
                lineColor = 'rgba(6, 182, 212, 0.05)';
            }
        };
        
        // Initial setup
        window.initCanvasColor(document.documentElement.getAttribute('data-theme'));

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2.5 + 1;
                this.speedX = Math.random() * 0.4 - 0.2;
                this.speedY = Math.random() * 0.4 - 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = particleColor;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Adjust densities on mobile
            if (window.innerWidth < 768) {
                particleCount = 20;
                connectionDistance = 80;
            } else {
                particleCount = 55;
                connectionDistance = 120;
            }
            
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawLines = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.strokeStyle = lineColor;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            
            drawLines();
            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();
    }

    /* ==================== SCROLL REVEAL (INTERSECTION OBSERVER) ==================== */
    // Select elements to reveal programmatically to keep index.html clean
    const revealSelectors = [
        '.section-title',
        '.section-subtitle',
        '.about-text',
        '.about-skills',
        '.timeline-item',
        '.project-card',
        '.contact-card',
        '.contact-form'
    ];

    const revealElements = [];
    revealSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('reveal');
            revealElements.push(el);
        });
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve once animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ==================== ACTIVE LINK SCROLLSPY ==================== */
    const sections = document.querySelectorAll('section[id]');
    
    const scrollActive = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    };
    window.addEventListener('scroll', scrollActive);
    scrollActive(); // Init on load

    /* ==================== SCROLL UP BUTTON ==================== */
    const scrollUpButton = document.getElementById('scroll-up-btn');
    
    const showScrollUp = () => {
        if (scrollUpButton) {
            if (window.scrollY >= 350) {
                scrollUpButton.classList.add('show-scroll');
            } else {
                scrollUpButton.classList.remove('show-scroll');
            }
        }
    };
    window.addEventListener('scroll', showScrollUp);
    showScrollUp(); // Init on load

    /* ==================== CONTACT FORM HANDLER ==================== */
    const contactForm = document.getElementById('contact-form');
    const responseMsg = document.getElementById('form-response-msg');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.form-submit-btn');
            const originalBtnHtml = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';
            
            // Simulating API submit response
            setTimeout(() => {
                const nameInput = document.getElementById('form-name').value;
                
                if (responseMsg) {
                    responseMsg.className = 'form-response-msg success';
                    responseMsg.textContent = `Thank you, ${nameInput}! Your message has been sent successfully.`;
                    
                    // Clear message after 5 seconds
                    setTimeout(() => {
                        responseMsg.textContent = '';
                    }, 5000);
                }
                
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
            }, 1200);
        });
    }
});

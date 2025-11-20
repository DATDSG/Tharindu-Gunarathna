# Portfolio Website Customization Guide

This guide will help you customize your personal portfolio website to match your preferences and requirements.

## Table of Contents
1. [Personal Information](#personal-information)
2. [Color Scheme](#color-scheme)
3. [Content Updates](#content-updates)
4. [Adding Images](#adding-images)
5. [Modifying Sections](#modifying-sections)
6. [Dark Mode Customization](#dark-mode-customization)
7. [Typography](#typography)
8. [Adding New Features](#adding-new-features)

---

## Personal Information

### Update Your Name and Title

**File**: `index.html`

**Hero Section** (lines ~45-60):
```html
<h1 class="hero-title">Your Name Here</h1>
<p class="hero-subtitle">Your Title Here</p>
<p class="hero-description">
    Your personal description here...
</p>
```

**Navigation Brand** (line ~24):
```html
<div class="nav-brand">
    <a href="#home">Your Name</a>
</div>
```

**Page Title** (line ~14):
```html
<title>Your Name | Your Title</title>
```

### Update Contact Information

**File**: `index.html`

**Contact Section** (lines ~210-225):
```html
<div class="contact-method">
    <span class="contact-icon">📧</span>
    <a href="mailto:your-email@example.com">your-email@example.com</a>
</div>
<div class="contact-method">
    <span class="contact-icon">💼</span>
    <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn Profile</a>
</div>
<div class="contact-method">
    <span class="contact-icon">🐙</span>
    <a href="https://github.com/yourusername" target="_blank">GitHub</a>
</div>
```

---

## Color Scheme

### Changing Primary Colors

**File**: `styles/main.css`

**Light Mode Colors** (lines ~4-17):
```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --primary-hover: #1d4ed8;      /* Hover state */
    --secondary-color: #64748b;    /* Secondary elements */
    --background-color: #ffffff;   /* Page background */
    --surface-color: #f8fafc;      /* Card backgrounds */
    --text-primary: #0f172a;       /* Main text */
    --text-secondary: #475569;     /* Secondary text */
    --border-color: #e2e8f0;       /* Borders and dividers */
}
```

**Dark Mode Colors** (lines ~34-44):
```css
[data-theme="dark"] {
    --primary-color: #3b82f6;
    --primary-hover: #60a5fa;
    /* ... customize dark mode colors ... */
}
```

### Color Palette Suggestions

**Professional Blue** (current):
```css
--primary-color: #2563eb;
--primary-hover: #1d4ed8;
```

**Tech Green**:
```css
--primary-color: #10b981;
--primary-hover: #059669;
```

**Creative Purple**:
```css
--primary-color: #8b5cf6;
--primary-hover: #7c3aed;
```

**Academic Red**:
```css
--primary-color: #dc2626;
--primary-hover: #b91c1c;
```

---

## Content Updates

### About Section

**File**: `index.html` (lines ~65-90)

Update the text in the `about-text` div:
```html
<div class="about-text">
    <p>
        Your first paragraph about yourself...
    </p>
    <p>
        Your second paragraph...
    </p>
</div>
```

### Research Interests

**File**: `index.html` (lines ~105-145)

Each research card follows this structure:
```html
<div class="research-card">
    <div class="research-icon">🧠</div>
    <h3>Research Area Title</h3>
    <p>Description of your research interest...</p>
</div>
```

**Emoji Icons**: Choose appropriate emojis:
- 🧠 Brain/AI
- ⚛️ Quantum
- 🔬 Research
- 💡 Innovation
- 🔐 Security
- 🌐 Web/Network
- 📊 Data
- 🤖 Robotics

### Projects Section

**File**: `index.html` (lines ~150-190)

Update each project card:
```html
<article class="project-card">
    <div class="project-header">
        <h3>Project Name</h3>
        <span class="project-status">Status</span>  <!-- In Progress / Completed -->
    </div>
    <p class="project-description">
        Project description here...
    </p>
    <div class="project-tags">
        <span class="tag">Technology1</span>
        <span class="tag">Technology2</span>
    </div>
</article>
```

**Adding Project Links**:
```html
<div class="project-links" style="margin-top: 1rem;">
    <a href="https://github.com/..." target="_blank" class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.875rem;">
        GitHub
    </a>
    <a href="https://demo.example.com" target="_blank" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.875rem;">
        Live Demo
    </a>
</div>
```

### Publications Section

**File**: `index.html` (lines ~195-215)

Replace placeholder publications with real ones:
```html
<div class="publication-item">
    <div class="publication-year">2024</div>
    <div class="publication-details">
        <h3>Full Paper Title</h3>
        <p class="publication-venue">Conference or Journal Name</p>
        <p class="publication-authors">Author List</p>
        <a href="https://doi.org/..." target="_blank" style="font-size: 0.875rem; margin-top: 0.5rem; display: inline-block;">
            View Paper →
        </a>
    </div>
</div>
```

---

## Adding Images

### Profile Image in Hero

**File**: `index.html`

Add this after the opening `<div class="hero-content">` tag:
```html
<div class="hero-image" style="margin-bottom: 2rem;">
    <img src="assets/profile.jpg" 
         alt="Your Name" 
         style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; border: 4px solid var(--primary-color);">
</div>
```

### Skills Section Icons

Replace emoji icons with image icons:
```html
<div class="skill-item">
    <img src="assets/icons/ai-icon.svg" alt="AI" class="skill-icon" style="width: 60px; height: 60px;">
    <h4>Artificial Intelligence</h4>
</div>
```

### Project Thumbnails

Add images to project cards:
```html
<article class="project-card">
    <img src="assets/projects/project1.jpg" 
         alt="Project Name" 
         style="width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem; margin-bottom: 1rem;">
    <!-- rest of card content -->
</article>
```

---

## Modifying Sections

### Reordering Sections

Simply move entire `<section>` blocks in `index.html`:
```html
<!-- Move a section up or down -->
<section id="projects" class="projects section">...</section>
<section id="research" class="research section">...</section>
```

Don't forget to update the navigation links in the same order!

### Removing a Section

1. **Delete the section** from `index.html`
2. **Remove the navigation link**:
```html
<!-- Remove this line from nav -->
<li><a href="#section-name" class="nav-link">Section Name</a></li>
```

### Adding a New Section

```html
<section id="new-section" class="new-section section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <div class="section-content">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

Add navigation link:
```html
<li><a href="#new-section" class="nav-link">Section Name</a></li>
```

Add CSS styling in `styles/main.css`:
```css
.new-section {
    background-color: var(--surface-color);
}
```

---

## Dark Mode Customization

### Changing Dark Mode Behavior

**File**: `scripts/main.js`

**Default to Dark Mode**:
```javascript
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('dark');  // Changed from 'light'
    }
}
```

**Remove System Preference Check**:
```javascript
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}
```

### Customizing Dark Mode Colors

**File**: `styles/main.css`

Adjust the `[data-theme="dark"]` section to your liking:
```css
[data-theme="dark"] {
    --background-color: #1a1a1a;  /* Darker black */
    --surface-color: #2d2d2d;     /* Dark gray */
    --text-primary: #ffffff;       /* Pure white */
    /* ... other colors ... */
}
```

---

## Typography

### Changing Fonts

**Using Google Fonts**:

1. **Add to `<head>` in `index.html`**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@700&display=swap" rel="stylesheet">
```

2. **Update CSS variables in `styles/main.css`**:
```css
:root {
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-heading: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Font Size Adjustments

**Base Font Size** (`styles/main.css`):
```css
html {
    font-size: 16px;  /* Increase to 18px for larger text */
}
```

**Heading Sizes**:
```css
h1 { font-size: 3rem; }    /* Adjust as needed */
h2 { font-size: 2.5rem; }
h3 { font-size: 1.75rem; }
```

---

## Adding New Features

### Contact Form

Add after the contact methods in `index.html`:
```html
<form class="contact-form" style="margin-top: 2rem; max-width: 500px; margin-left: auto; margin-right: auto;">
    <input type="text" placeholder="Name" required 
           style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid var(--border-color); border-radius: 0.5rem; background: var(--surface-color); color: var(--text-primary);">
    <input type="email" placeholder="Email" required 
           style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid var(--border-color); border-radius: 0.5rem; background: var(--surface-color); color: var(--text-primary);">
    <textarea placeholder="Message" rows="5" required 
              style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid var(--border-color); border-radius: 0.5rem; background: var(--surface-color); color: var(--text-primary);"></textarea>
    <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
</form>
```

### Social Media Icons

Replace text-based contact with icon-based:

1. **Add Font Awesome to `<head>`**:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

2. **Update contact methods**:
```html
<div class="contact-method">
    <i class="fab fa-github" style="font-size: 1.5rem;"></i>
    <a href="https://github.com/..." target="_blank">GitHub</a>
</div>
<div class="contact-method">
    <i class="fab fa-linkedin" style="font-size: 1.5rem;"></i>
    <a href="https://linkedin.com/..." target="_blank">LinkedIn</a>
</div>
```

### Back to Top Button

**Add to `index.html` before closing `</body>`**:
```html
<button id="backToTop" class="back-to-top" style="display: none;">↑</button>
```

**Add to `styles/main.css`**:
```css
.back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: var(--shadow-lg);
    transition: all var(--transition-fast);
    z-index: 999;
}

.back-to-top:hover {
    background-color: var(--primary-hover);
    transform: translateY(-5px);
}
```

**Add to `scripts/main.js`**:
```javascript
// Show/hide back to top button
window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    }
});

// Scroll to top on click
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
```

---

## Testing Your Changes

### Local Testing

1. **Open `index.html` in a browser**: Simply double-click the file
2. **Use Live Server** (VS Code extension): Right-click → "Open with Live Server"
3. **Python Simple Server**: 
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

### Responsive Testing

1. **Chrome DevTools**: F12 → Toggle device toolbar (Ctrl+Shift+M)
2. **Test on real devices**: Use your phone/tablet
3. **Different browsers**: Chrome, Firefox, Safari, Edge

### Validation

- **HTML**: [W3C Validator](https://validator.w3.org/)
- **CSS**: [CSS Validator](https://jigsaw.w3.org/css-validator/)
- **Accessibility**: Chrome Lighthouse

---

## Common Issues & Solutions

### Dark Mode Not Working
- Check if `data-theme` attribute is being set on `<html>` element
- Verify CSS variables are properly defined in both themes
- Clear browser cache and localStorage

### Mobile Menu Not Closing
- Ensure JavaScript is loading correctly
- Check browser console for errors
- Verify event listeners are attached

### Animations Not Showing
- Check if elements have the correct classes
- Verify Intersection Observer is supported (use polyfill for older browsers)
- Ensure CSS transitions are defined

### Colors Not Changing
- Make sure you're editing CSS variables in `:root` and `[data-theme="dark"]`
- Use browser DevTools to inspect computed styles
- Clear cache or hard refresh (Ctrl+Shift+R)

---

## Additional Resources

- **MDN Web Docs**: https://developer.mozilla.org/
- **CSS Tricks**: https://css-tricks.com/
- **Can I Use**: https://caniuse.com/ (browser compatibility)
- **Color Palette Generators**: 
  - https://coolors.co/
  - https://colorhunt.co/
- **Free Images**: 
  - https://unsplash.com/
  - https://pexels.com/

---

## Getting Help

If you encounter issues:
1. Check browser console for error messages
2. Validate your HTML and CSS
3. Review this guide for similar examples
4. Search for specific issues on Stack Overflow

---

*Happy customizing! Make this portfolio truly yours.* 🚀

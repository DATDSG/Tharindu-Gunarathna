# Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended)

GitHub Pages is free and perfect for static websites like this portfolio.

#### Steps:

1. **Go to Repository Settings**
   - Navigate to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section

2. **Configure GitHub Pages**
   - Source: Select "Deploy from a branch"
   - Branch: Select your main branch (e.g., `main` or `master`)
   - Folder: Select `/ (root)`
   - Click "Save"

3. **Wait for Deployment**
   - GitHub will build and deploy your site
   - Usually takes 1-2 minutes
   - Your site will be available at: `https://yourusername.github.io/repository-name/`

4. **Custom Domain (Optional)**
   - Add a `CNAME` file to the root with your domain name
   - Configure DNS settings with your domain provider
   - Add the custom domain in GitHub Pages settings

**Pros:**
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Easy to set up
- ✅ Automatic deployments on push

**Cons:**
- ❌ Public repositories only (for free tier)
- ❌ Limited to static sites

---

### Option 2: Netlify

Netlify offers excellent static site hosting with many features.

#### Steps:

1. **Sign up at [Netlify](https://www.netlify.com/)**

2. **Deploy via Git**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.` (root)
   - Click "Deploy site"

3. **Configure Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add custom domain
   - Follow DNS configuration instructions

**Pros:**
- ✅ Free tier with generous limits
- ✅ Automatic HTTPS
- ✅ Continuous deployment
- ✅ Form handling (useful if you add a contact form)
- ✅ Edge functions support
- ✅ Built-in analytics

**Cons:**
- ❌ Build minutes limited on free tier

**Netlify Configuration** (create `netlify.toml` if needed):
```toml
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

### Option 3: Vercel

Similar to Netlify, Vercel provides excellent hosting for static sites.

#### Steps:

1. **Sign up at [Vercel](https://vercel.com/)**

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import from GitHub
   - Select your repository
   - Framework Preset: Other
   - Root Directory: `./`
   - Click "Deploy"

3. **Custom Domain**
   - Go to project settings → Domains
   - Add your custom domain
   - Configure DNS as instructed

**Pros:**
- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ Fast global CDN
- ✅ Zero configuration
- ✅ Excellent performance

---

### Option 4: Cloudflare Pages

Cloudflare Pages offers free hosting with excellent performance.

#### Steps:

1. **Sign up at [Cloudflare Pages](https://pages.cloudflare.com/)**

2. **Create a Project**
   - Connect to GitHub
   - Select your repository
   - Build settings:
     - Build command: (leave empty)
     - Build output directory: `/`
   - Click "Save and Deploy"

**Pros:**
- ✅ Free unlimited bandwidth
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Fast deployment

---

### Option 5: Self-Hosting

Host on your own server using Apache or Nginx.

#### Using Apache:

1. **Upload files** to your web server (via FTP, SSH, etc.)

2. **Configure Apache** (if needed):
```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    DocumentRoot /var/www/portfolio
    
    <Directory /var/www/portfolio>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

3. **Enable HTTPS** using Let's Encrypt:
```bash
sudo certbot --apache -d yourdomain.com
```

#### Using Nginx:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

**Pros:**
- ✅ Full control
- ✅ No limitations

**Cons:**
- ❌ Requires server management
- ❌ Manual SSL setup
- ❌ Manual deployments

---

## 🔒 Security Headers

Add these security headers for production deployment:

### Option A: Via HTML Meta Tags

Already included in `index.html`:
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

### Option B: Via Server Configuration

**For Netlify** (in `netlify.toml`):
```toml
[[headers]]
  for = "/*"
    [headers.values]
    Content-Security-Policy = "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self'"
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

**For Apache** (in `.htaccess`):
```apache
<IfModule mod_headers.c>
    Header set X-Frame-Options "DENY"
    Header set X-Content-Type-Options "nosniff"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

**For Nginx** (in server block):
```nginx
add_header X-Frame-Options "DENY";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
```

---

## 🎯 Pre-Deployment Checklist

Before deploying, ensure you've completed:

- [ ] Updated all placeholder content with real information
- [ ] Added your profile image (if desired)
- [ ] Updated contact information
- [ ] Replaced placeholder publications
- [ ] Customized colors (if desired)
- [ ] Added your custom favicon
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Validated HTML/CSS
- [ ] Optimized images (if any)
- [ ] Updated README with your information

---

## 📊 Performance Optimization

### Before Deployment:

1. **Minify CSS and JavaScript** (optional):
```bash
# Using online tools or command line
npx csso styles/main.css -o styles/main.min.css
npx terser scripts/main.js -o scripts/main.min.js
```

2. **Optimize Images**:
- Use [TinyPNG](https://tinypng.com/) for compression
- Use WebP format for better compression
- Add appropriate image dimensions

3. **Enable Caching**:
Add to `.htaccess` (Apache):
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType text/javascript "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

---

## 🔍 Post-Deployment

### 1. Test Your Site

- Visit your deployed URL
- Test all navigation links
- Test dark mode toggle
- Test on mobile devices
- Test on different browsers

### 2. Set Up Analytics (Optional)

Add Google Analytics or another analytics service:

```html
<!-- Add to <head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

### 3. Submit to Search Engines

- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

### 4. Create a Sitemap (Optional)

Create `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 🆘 Troubleshooting

### Issue: Page not loading styles

**Solution:** Check file paths in `index.html`. Ensure:
```html
<link rel="stylesheet" href="styles/main.css">
<script src="scripts/main.js"></script>
```

### Issue: 404 Error on GitHub Pages

**Solution:** 
- Ensure `index.html` is in the root directory
- Check GitHub Pages settings
- Wait a few minutes after pushing changes

### Issue: Dark mode not persisting

**Solution:** 
- Clear browser cache and localStorage
- Check browser console for errors
- Ensure JavaScript is enabled

### Issue: Mobile menu not working

**Solution:**
- Check if JavaScript is loading
- Verify no console errors
- Test in different browsers

---

## 📱 Social Media

After deployment, update Open Graph tags in `index.html`:

```html
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:image" content="https://yourdomain.com/assets/preview.jpg">
```

Create a preview image (1200x630px) for social sharing.

---

## 🔄 Continuous Deployment

With GitHub Pages, Netlify, Vercel, or Cloudflare Pages:

1. Make changes to your repository
2. Commit and push to GitHub
3. Site automatically rebuilds and deploys
4. Changes live in 1-2 minutes

---

## 📞 Need Help?

- Check hosting provider documentation
- Review browser console for errors
- Validate HTML/CSS/JavaScript
- Test in incognito mode to rule out caching issues

---

**Good luck with your deployment! 🚀**

# 🚀 Deployment & Launch Guide

## Quick Start

### Local Development
```bash
npm install
npm start
```
Opens at `http://localhost:3000`

### Production Build
```bash
npm run build
```
Creates optimized `/build` folder ready to deploy

## Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Method A: Drag & Drop**
1. Build project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. Drag `/build` folder to Netlify
5. Done! Get instant public URL

**Method B: Git Integration**
1. Push to GitHub
2. Connect GitHub repo to Netlify
3. Netlify auto-deploys on push
4. Domain auto-generated or custom domain

### Option 2: Vercel (Very Fast)

```bash
npm i -g vercel
vercel
```
Follow prompts, automatically deployed

### Option 3: GitHub Pages (Free)

1. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Deploy:
```bash
npm run deploy
```

### Option 4: Traditional Hosting

1. Build: `npm run build`
2. Upload `/build` folder contents to hosting via FTP/SFTP
3. Configure server to serve `index.html` for all routes

## Custom Domain Setup

After deploying, add custom domain:
- **Netlify**: Domain settings → Add custom domain
- **Vercel**: Project settings → Domains → Add
- **GH Pages**: Repository settings → Pages → Custom domain

## Environment Variables (If Needed)

Create `.env` file:
```
REACT_APP_API_URL=https://api.example.com
```

Access in components:
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

## Performance Verification

After deployment, check:

### Google PageSpeed Insights
- Visit [pagespeed.web.dev](https://pagespeed.web.dev)
- Enter your URL
- Should score 90+ for Performance

### Lighthouse (Chrome DevTools)
1. Right-click → Inspect
2. Lighthouse tab
3. Generate report
4. Target 90+ across all metrics

### Bundle Analysis
```bash
npm install --save-dev cra-bundle-analyzer
```

## SEO Optimization

Add to `public/index.html`:
```html
<meta name="description" content="Frontend Developer Portfolio">
<meta name="keywords" content="React, Frontend, Developer, Portfolio">
<meta property="og:title" content="Harish Chittoor - Frontend Developer">
<meta property="og:description" content="5+ years experience building exceptional web applications">
<meta property="og:image" content="https://your-site.com/og-image.png">
```

## Analytics Setup

### Google Analytics
1. Create account at [google.com/analytics](https://google.com/analytics)
2. Get tracking ID
3. Add to `public/index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## SSL/HTTPS

All deployment platforms provide free HTTPS:
- ✅ Netlify - Automatic
- ✅ Vercel - Automatic
- ✅ GitHub Pages - Automatic
- Hosting: Request from provider

## Monitoring & Maintenance

### Uptime Monitoring
- [Pingdom](https://tools.pingdom.com)
- [Uptime Robot](https://uptimerobot.com)
- [Statuscake](https://www.statuscake.com)

### Error Tracking
- [Sentry](https://sentry.io)
- [LogRocket](https://logrocket.com)

## Post-Launch Checklist

- [ ] Domain purchased and configured
- [ ] SSL certificate active (green padlock)
- [ ] Google PageSpeed score 90+
- [ ] All links working (test in different browsers)
- [ ] Mobile responsive (test on actual phones)
- [ ] Dark mode toggle works
- [ ] Theme persists on reload
- [ ] Project links open correctly
- [ ] Contact links work (email, social)
- [ ] No console errors
- [ ] Images load quickly
- [ ] Analytics installed
- [ ] SEO meta tags added
- [ ] robots.txt configured
- [ ] sitemap.xml created

## Troubleshooting

### White Screen After Deploy
- Clear browser cache
- Check browser console for errors
- Verify build completed successfully

### Routes Not Working
- Ensure SPA routing configured on host
- Add `_redirects` file to `/public`:
```
/* /index.html 200
```

### Images Not Loading
- Use absolute paths or public folder
- Optimize image sizes
- Consider CDN for large images

### Slow Load Time
- Enable compression (gzip)
- Minify CSS/JS
- Add caching headers
- Consider image optimization service

## SSL Certificate Issues

If HTTPS not working:
- Wait 24-48 hours for DNS propagation
- Check domain DNS settings
- Verify certificate not expired
- Clear browser cache

## Update & Maintenance

To update portfolio after deployment:

```bash
# Make changes locally
# Test with npm start
# Build again
npm run build

# Deploy
# (Method depends on platform)
# For Netlify/Vercel: Just push to GitHub
# For manual: Upload new build folder
```

## Contact & Support

If issues with deployment:
1. Check platform documentation
2. Review console errors (F12 → Console)
3. Check platform status page
4. Contact platform support

---

**Your portfolio is production-ready and can be live in minutes!** 🎉

Choose your platform and deploy now! 🚀

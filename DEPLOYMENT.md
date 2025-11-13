# Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub**

    ```bash
    git add .
    git commit -m "Initial commit"
    git push origin main
    ```

2. **Deploy on Vercel**
    - Visit [vercel.com](https://vercel.com)
    - Click "Add New Project"
    - Import your GitHub repository
    - Vercel auto-detects Astro - just click "Deploy"
    - Done! Your site will be live at `yourproject.vercel.app`

### Option 2: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
    - Visit [netlify.com](https://netlify.com)
    - Click "Add new site" → "Import an existing project"
    - Select your repository
    - Configure build settings:
        - Build command: `npm run build`
        - Publish directory: `dist`
    - Click "Deploy site"

### Option 3: GitHub Pages (Free)

1. **Update Configuration**

    In `astro.config.mjs`, update the site URL:

    ```javascript
    site: "https://yourusername.github.io/repository-name";
    ```

2. **Enable GitHub Pages**
    - Go to your repository settings
    - Navigate to "Pages" section
    - Source: GitHub Actions

3. **Push Your Code**

    ```bash
    git add .
    git commit -m "Add GitHub Pages workflow"
    git push origin main
    ```

4. **Automatic Deployment**
    - The GitHub Action will automatically build and deploy
    - Your site will be live at `https://yourusername.github.io/repository-name`

## Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Update personal information in `src/pages/index.astro`
- [ ] Replace placeholder projects with your actual projects
- [ ] Update work experience with your actual roles
- [ ] Add your real skills to the skills section
- [ ] Set up Formspree for the contact form
- [ ] Update social media links in the footer (`src/layouts/BaseLayout.astro`)
- [ ] Add project images to `public/images/`
- [ ] Update meta tags and SEO information in `src/layouts/BaseLayout.astro`
- [ ] Test the site locally with `npm run build` and `npm run preview`
- [ ] Check all links are working
- [ ] Verify images have proper alt text
- [ ] Run Lighthouse audit (aim for 95+ score)

## Custom Domain Setup

### For Vercel:

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### For Netlify:

1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration steps

### For GitHub Pages:

1. Add a `CNAME` file to `public/` with your domain
2. Configure DNS with your provider:
    - Add A records pointing to GitHub's IPs
    - Or add CNAME record pointing to `yourusername.github.io`

## Environment Variables

If you need environment variables (e.g., for API keys):

### Vercel:

- Go to Project Settings → Environment Variables
- Add your variables

### Netlify:

- Go to Site settings → Environment variables
- Add your variables

## Continuous Deployment

All three platforms support automatic deployment:

- **Vercel & Netlify**: Automatically deploy on every push to main branch
- **GitHub Pages**: Uses the GitHub Action workflow (already configured)

## Monitoring & Analytics

After deployment, consider adding:

1. **Google Analytics** - Add tracking code to `BaseLayout.astro`
2. **Vercel Analytics** - Enable in project settings (if using Vercel)
3. **Plausible** - Privacy-friendly alternative to Google Analytics

## Troubleshooting

### Build fails

- Check Node.js version (must be 18+)
- Verify all dependencies are in `package.json`
- Run `npm run build` locally to test

### Images not loading

- Ensure images are in `public/` directory
- Use paths starting with `/` (e.g., `/images/photo.jpg`)
- Check image file names match exactly (case-sensitive)

### Contact form not working

- Verify Formspree form ID is correct
- Check form action URL in `ContactForm.astro`

## Performance Optimization Tips

1. **Compress images** before uploading:

    ```bash
    # Using imagemagick
    convert input.jpg -quality 85 -strip output.jpg
    ```

2. **Use WebP format** for better compression:

    ```bash
    cwebp input.jpg -q 85 -o output.webp
    ```

3. **Test performance**:
    - Run Lighthouse in Chrome DevTools
    - Use [PageSpeed Insights](https://pagespeed.web.dev/)
    - Check [WebPageTest](https://www.webpagetest.org/)

## Need Help?

- Astro Discord: [astro.build/chat](https://astro.build/chat)
- Astro Docs: [docs.astro.build](https://docs.astro.build)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Netlify Support: [netlify.com/support](https://netlify.com/support)

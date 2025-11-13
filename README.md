# Personal Portfolio Website

A high-performance, minimalist personal portfolio website built with Astro.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:4321`

## 📝 Customization Guide

### 1. Personal Information

Edit `src/pages/index.astro` to update:

- **Hero Section**: Update the title and subtitle with your value proposition
- **About Section**: Replace placeholder bio with your story
- **Contact Email**: Update social links in the footer

### 2. Projects

In `src/pages/index.astro`, find the `projects` array and add your projects:

```javascript
{
  title: 'Your Project Name',
  description: 'Brief description of the project',
  techStack: ['Tech1', 'Tech2', 'Tech3'],
  githubUrl: 'https://github.com/yourusername/project',
  liveUrl: 'https://yourproject.com', // Optional
  imageUrl: '/images/your-project.jpg' // Add image to public/images/
}
```

### 3. Work Experience

Update the `experience` array with your actual work history:

```javascript
{
  company: 'Company Name',
  role: 'Your Position',
  period: 'YYYY - YYYY',
  location: 'City, State or Remote',
  achievements: [
    'Key achievement 1',
    'Key achievement 2',
  ]
}
```

### 4. Skills

Modify the `skills` object to reflect your actual skills:

```javascript
const skills = {
	"Category Name": ["Skill 1", "Skill 2", "Skill 3"],
	// Add more categories
};
```

### 5. Contact Form

The contact form uses Formspree. To activate it:

1. Sign up at [https://formspree.io](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORMSPREE_ID` in `src/components/ContactForm.astro` with your
   form ID

### 6. Meta Tags & SEO

Update SEO information in `src/layouts/BaseLayout.astro`:

- Site title
- Meta description
- Social media links
- Open Graph image (create `public/og-image.png`)

### 7. Styling

The design system is defined in `src/styles/global.css`. You can customize:

- Colors (search for `:root` variables)
- Typography scale
- Spacing system
- Accent color (default: blue `#2563EB`)

## 🏗️ Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── images/          # Add your project screenshots here
├── src/
│   ├── components/
│   │   ├── ContactForm.astro
│   │   ├── ProjectCard.astro
│   │   ├── SkillCategory.astro
│   │   └── TimelineItem.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## 🛠️ Available Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview your build locally before deploying |

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Astro and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

### Deploy to GitHub Pages

1. Update `site` in `astro.config.mjs`:

    ```javascript
    site: "https://yourusername.github.io";
    ```

2. Create `.github/workflows/deploy.yml`:

    ```yaml
    name: Deploy to GitHub Pages

    on:
        push:
            branches: [main]

    jobs:
        build:
            runs-on: ubuntu-latest
            steps:
                - uses: actions/checkout@v3
                - uses: actions/setup-node@v3
                  with:
                      node-version: 18
                - run: npm ci
                - run: npm run build
                - uses: peaceiris/actions-gh-pages@v3
                  with:
                      github_token: ${{ secrets.GITHUB_TOKEN }}
                      publish_dir: ./dist
    ```

3. Push to GitHub and enable GitHub Pages in repository settings

## 📊 Performance Checklist

- [x] Minimal JavaScript (Astro ships zero JS by default)
- [x] Optimized CSS (automatically minified in production)
- [x] System fonts (no external font loading)
- [x] Lazy loading for images
- [x] Semantic HTML
- [x] Accessible navigation
- [ ] Add WebP images for projects
- [ ] Add proper alt text to all images
- [ ] Test with Lighthouse (target: 95+ score)

## 🎨 Design Philosophy

This website follows **Brutalist Minimalism**:

- Content-first approach
- Clean typography hierarchy
- Monochrome palette with strategic accent color
- Fast loading times
- Zero unnecessary animations
- Highly accessible

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

If you need help customizing this template, check out:

- [Astro Documentation](https://docs.astro.build)
- [Design System Reference](../DESIGN_SYSTEM.md)
- [Architecture Guide](../ARCHITECTURE.md)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page
is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put
any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into
our [Discord server](https://astro.build/chat).

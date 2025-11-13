# Customization Guide

This guide will help you personalize the website with your information.

## Step 1: Update Personal Information

### Edit `src/pages/index.astro`

1. **Find the hero section** (around line 100) and update:

```javascript
<h1 class="hero-title">
  Your unique value proposition here
</h1>
<p class="hero-subtitle">
  Your professional title and specialties
</p>
```

### Edit `src/layouts/BaseLayout.astro`

2. **Update the default meta tags** (around line 6):

```javascript
const {
	title = "Your Name - Your Title",
	description = "Your professional description",
	image = "/og-image.png",
} = Astro.props;
```

3. **Update navigation logo** (around line 46):

```html
<a href="/" class="nav-logo" aria-label="Home">
	<strong>Your Name</strong>
</a>
```

4. **Update footer social links** (around line 60):

```html
<a href="https://linkedin.com/in/your-profile" ...>
	<a href="https://github.com/your-username" ...>
		<a href="mailto:your.email@example.com" ...></a></a
></a>
```

## Step 2: Add Your Projects

In `src/pages/index.astro`, find the `projects` array and replace with your
projects:

```javascript
const projects = [
	{
		title: "Your Project Title",
		description:
			"A compelling 1-2 sentence description of what you built and the problem it solves.",
		techStack: ["Technology1", "Technology2", "Technology3", "Technology4"],
		githubUrl: "https://github.com/yourusername/repo-name",
		liveUrl: "https://yourproject.com", // Optional - remove if no live demo
		imageUrl: "/images/project-screenshot.jpg", // Add screenshots to public/images/
	},
	// Add 3-4 projects total
];
```

### Adding Project Images

1. Take high-quality screenshots of your projects (1200x800px recommended)
2. Save them in `public/images/` folder
3. Name them descriptively (e.g., `cloud-automation.jpg`,
   `salesforce-integration.png`)
4. Update the `imageUrl` in your project objects

## Step 3: Add Your Work Experience

In `src/pages/index.astro`, find the `experience` array:

```javascript
const experience = [
  {
    company: 'Company Name',
    role: 'Your Job Title',
    period: '2022 - Present', // or 'Jan 2022 - Dec 2023'
    location: 'City, State' or 'Remote',
    achievements: [
      'Start with action verbs. Quantify impact: "Reduced costs by 40%"',
      'Highlight specific technologies and methodologies used',
      'Focus on results and business impact, not just duties',
      'Keep it concise - 3-5 achievements per role'
    ]
  },
  // Add 2-4 previous roles
];
```

**Tips for writing achievements:**

- Use metrics: percentages, time saved, users impacted
- Start with strong verbs: Led, Designed, Implemented, Optimized
- Be specific about technologies used
- Show business value, not just technical tasks

## Step 4: Update Your Skills

In `src/pages/index.astro`, find the `skills` object:

```javascript
const skills = {
	"Cloud Platforms": ["AWS", "Azure", "GCP"], // List 4-6 per category
	"Infrastructure as Code": ["Terraform", "Ansible", "CloudFormation"],
	"DevOps & CI/CD": ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
	"Programming Languages": ["Python", "JavaScript", "TypeScript", "Bash"],
	// Add categories relevant to your expertise
	Certifications: ["AWS Solutions Architect", "CKA"], // Optional
};
```

**Guidelines:**

- Group skills into logical categories
- List 4-8 categories total
- Put strongest skills first in each category
- Include only skills you're comfortable discussing in interviews

## Step 5: Write Your About Section

In `src/pages/index.astro`, find the About section (around line 118):

```javascript
<p>
  First paragraph: Who you are, your current role/focus, and what you're passionate about.
  Keep it personal but professional. What drives you?
</p>
<p>
  Second paragraph: Your journey - how you got into tech, what you've learned,
  your unique combination of skills. What makes you different?
</p>
<p>
  Third paragraph: What you're looking for, your work philosophy, or what you're
  currently learning. Where are you headed?
</p>
```

**Writing tips:**

- Write in first person ("I build..." not "John builds...")
- Be authentic - let your personality show
- Avoid jargon - write clearly
- Keep each paragraph 2-3 sentences
- Total length: ~150-200 words

## Step 6: Configure Contact Form

1. **Sign up for Formspree:**
    - Go to [formspree.io](https://formspree.io)
    - Create a free account
    - Create a new form
    - Copy your form ID (looks like `abc123xyz`)

2. **Update ContactForm.astro:**
    - Open `src/components/ContactForm.astro`
    - Find line with `YOUR_FORMSPREE_ID`
    - Replace with your actual form ID:
    ```html
    <form action="https://formspree.io/f/your-actual-id" method="POST"></form>
    ```

## Step 7: Customize Colors (Optional)

If you want to change the accent color from blue:

1. Open `src/styles/global.css`
2. Find the `:root` section
3. Update these variables:

```css
--color-accent: #2563eb; /* Change to your preferred color */
--color-accent-hover: #1d4ed8; /* Slightly darker version */
```

**Color suggestions:**

- Green: `#059669` (tech/nature)
- Purple: `#7C3AED` (creative/innovative)
- Orange: `#EA580C` (energetic/bold)
- Teal: `#0891B2` (modern/professional)

## Step 8: Add Open Graph Image

Create a social sharing image (1200x630px):

1. Design an image with your name and title
2. Save as `public/og-image.png`
3. This will appear when sharing your site on social media

**Design tools:**

- [Canva](https://canva.com) - Free templates
- [Figma](https://figma.com) - Design from scratch
- Use your brand colors and clean typography

## Step 9: Final Touches

### Update package.json

```json
{
	"name": "your-portfolio",
	"description": "Personal portfolio of Your Name",
	"author": "Your Name"
}
```

### Update astro.config.mjs

```javascript
export default defineConfig({
	site: "https://yourdomain.com", // Your actual domain
	// ...
});
```

## Testing Your Changes

Before deploying:

```bash
# Start development server
npm run dev

# Test production build
npm run build
npm run preview
```

**Check these items:**

- [ ] All links work and go to the right places
- [ ] All images load correctly
- [ ] Contact form submits successfully
- [ ] Mobile layout looks good (test in browser DevTools)
- [ ] No console errors in browser
- [ ] All text is your own (no placeholders left)
- [ ] Social links point to your profiles

## Need Inspiration?

Look at these portfolios for ideas:

- [Minimal examples](https://onepagelove.com/gallery/portfolio)
- Focus on **clarity over cleverness**
- **Content first** - good writing beats fancy animations

## Common Mistakes to Avoid

❌ Too many projects (keep it to 3-4 best ones) ❌ Generic descriptions ("I'm
passionate about technology") ❌ Listing every technology you've touched ❌
Walls of text in about section ❌ Broken links or missing images

✅ Curated, high-quality projects ✅ Specific, authentic voice ✅ Technologies
you actually use regularly ✅ Scannable, concise content ✅ Everything works
perfectly

---

**Next Step:** Once you've customized everything, see
[DEPLOYMENT.md](./DEPLOYMENT.md) to publish your site!

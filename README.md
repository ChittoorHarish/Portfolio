# 🚀 Harish Chittoor - Frontend Developer Portfolio

A modern, impressive portfolio website showcasing 5+ years of frontend development expertise. Built with React, TypeScript, and modern web technologies.

## ✨ Features

### Modern Design & UX
- **Glassmorphism Navigation** - Sleek navbar with blur effect and smooth animations
- **Gradient Backgrounds** - Eye-catching gradients throughout the site
- **Responsive Layout** - Fully mobile-optimized with elegant breakpoints
- **Dark/Light Theme** - Seamless theme switching with localStorage persistence
- **Smooth Animations** - CSS animations for entrance effects, hover states, and transitions

### Key Sections
1. **Hero Section** - Impressive introduction with animated profile image and CTA buttons
2. **About** - Personal story and key highlights with icon cards
3. **Experience** - Timeline of professional roles with detailed descriptions
4. **Projects** - Showcase of 6 featured projects with filtering, tech stack, and live demos
5. **Skills** - Organized by categories with progress bars and visual proficiency levels
6. **Contact** - Multiple CTA options for getting in touch

### Technical Highlights
- **Performance** - Optimized for Core Web Vitals
- **Accessibility** - WCAG 2.1 compliant with semantic HTML
- **SEO Ready** - Proper meta tags and structured data
- **Code Quality** - Clean, maintainable React components with proper prop handling

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Routing**: React Router DOM 7.6.0
- **Styling**: Custom CSS3 with modern features (Grid, Flexbox, Gradients)
- **Build Tool**: Create React App with react-scripts 5.0.1
- **Version Control**: Git

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/harishchittoor/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation with theme toggle
│   ├── Hero.js            # Hero section with profile
│   ├── About.js           # About me section
│   ├── Experience.js      # Work experience timeline
│   ├── Projects.js        # Featured projects showcase
│   ├── Skills.js          # Technical skills categorized
│   ├── Contact.js         # Contact/CTA section
│   ├── Footer.js          # Footer with links
│   └── ThemeProvider.js   # Dark/Light theme context
├── assets/
│   ├── harish.png         # Profile picture
│   ├── Ibm.jpg           # Company logo
│   └── Utd.jpg           # Company logo
├── App.js                 # Main app component
├── App.css                # Global styles
└── index.js               # Entry point
```

## 🎨 Customization

### Update Personal Information
Edit the content in each component:
- `components/Hero.js` - Your title and tagline
- `components/About.js` - Your bio and highlights
- `components/Experience.js` - Your work history
- `components/Projects.js` - Your project showcase
- `components/Skills.js` - Your technical skills

### Colors & Branding
Main color scheme in `App.css`:
```css
Primary Gradient: #667eea → #764ba2
Accent: #f093fb
```

### Profile Picture
Replace `src/assets/harish.png` with your photo

## 🚀 Deployment

### Deploy to Netlify
```bash
# Build the project
npm run build

# Drag and drop the build folder to Netlify
# Or connect your GitHub repo for auto-deploy
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 💡 Performance Tips

- Images are optimized with proper sizing
- CSS animations use GPU acceleration
- Code splitting ready with React Router
- Lazy loading for project images
- Minimal dependencies for fast load times

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔗 Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (one-way operation)

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Contact

- **Email**: harish@example.com
- **LinkedIn**: linkedin.com/in/harish-chittoor
- **GitHub**: github.com/harishchittoor
- **Twitter**: @harishchittoor

---

**Made with ❤️ and React**

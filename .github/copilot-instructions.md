# AI Copilot Instructions for Portfolio Codebase

## Project Overview
Modern React-based frontend developer portfolio with 5+ years of experience showcase. Single-page application with multiple sections, dark/light theme support, and responsive design. Targets impressing tech company recruiters and demonstrating advanced frontend skills.

## Architecture Decisions
- **Component Structure**: Modular sections (Hero, About, Experience, Projects, Skills, Contact, Footer) with Theme Provider pattern for dark/light mode
- **Styling Approach**: Custom CSS3 (no component libraries) for maximum control and uniqueness. Gradients, animations, and glassmorphism effects showcase modern CSS skills
- **Routing**: React Router for potential multi-page expansion (currently home route, projects detail view as modal)
- **State Management**: Minimal - only theme state via Context API; component-level state for filtering and animations
- **Data Structure**: All content (projects, skills, experience) as inline arrays in components for fast iteration (could extract to JSON/CMS later)

## Key Development Patterns

### Component Pattern
Each section component is self-contained:
```javascript
const SectionComponent = () => {
  const [state, setState] = useState(initialValue);
  
  return (
    <section id="section-id" className="section-class">
      {/* Content */}
    </section>
  );
};
```

### Styling Conventions
- Global styles in `App.css` 
- Class naming: kebab-case (e.g., `.project-card`, `.skill-bar`)
- Responsive breakpoints: 1024px (tablet), 768px (mobile), 480px (small mobile)
- Theme handling: `.dark .class-name` selector pattern

### Animation Strategy
- CSS animations for entrance (`slideInLeft`, `slideInRight`, `fadeInUp`)
- CSS transitions for interactions (hover effects, state changes)
- `animation: property duration timing infinite` for continuous effects (glow, rotate)

## Critical Files & Knowledge

### `src/App.js` 
Entry point with Router and ThemeProvider. Must maintain Context pattern for theme toggle propagation.

### `src/App.css` (~1400 lines)
Master stylesheet with:
- CSS custom properties area (consider adding for colors)
- Global animations
- Section-specific styling 
- Responsive breakpoints at end

**Important**: Updates here affect all sections. Test theme toggle across all pages.

### `src/components/Hero.js`
Profile showcase with animated profile image (rotating glow effect). Key elements:
- Profile image wrapper with `.profile-glow` and `.profile-glow-2` for animation
- Floating cards (`.floating-card`) with staggered animations
- Stats display with color emphasis

### `src/components/Projects.js` 
Project showcase with:
- Category filtering (`activeCategory` state)
- Modal popup for project details
- Inline modal styling (CSS in template string)
- Tech stack badge system
- Links to GitHub and live demos

**Pattern**: Map array → filter by category → display grid. Modal state controls visibility.

### `src/components/Skills.js`
Skill display with animated progress bars:
- Category-based skill grouping using `useMemo` 
- `animatedSkills` state tracks filled widths
- `useEffect` triggers animation on category change
- Progress bar width animated via inline style + CSS transition

### `src/components/ThemeProvider.js`
Context API pattern for theme management. Essential for dark mode.

## Common Tasks

### Add New Project
1. Add object to `projects` array in `Projects.js` with id, title, description, image, techStack, category
2. Update `filteredProjects` logic if new category
3. Ensure image URL is valid (uses unsplash currently)

### Add New Skill
1. Add skill object to appropriate category in `skillsData` in `Skills.js`
2. Component auto-renders with progress animation

### Update Colors
1. Primary gradient: `#667eea` → `#764ba2`
2. Secondary: `#f093fb`
3. Edit CSS and inline styles across components
4. Test dark mode (.dark theme class)

### Responsive Adjustments
1. Edit media queries in `App.css` (bottom section)
2. Key breakpoints: @media (max-width: 1024px), 768px, 480px
3. Test by changing browser width or DevTools device emulation

## Dependencies
- `react@19.1.0`: Core framework
- `react-dom@19.1.0`: DOM rendering
- `react-router-dom@7.6.0`: Client-side routing
- `react-scripts@5.0.1`: Build tooling

No third-party UI libraries - all styling is custom. This is intentional to showcase CSS mastery.

## Build & Deploy
- `npm start`: Dev server on port 3000
- `npm run build`: Production build to `/build`
- Deployed examples: Netlify (drag-drop) or Vercel (git integration)

## Performance Considerations
- No code splitting needed (small single page)
- Image optimization: Using external Unsplash for projects (consider local images)
- CSS animations use GPU acceleration (transform, opacity)
- Minimal JavaScript - heavy CSS approach reduces bundle size

## Testing Checklist for Changes
1. **Desktop**: Chrome, Firefox, Safari at full width
2. **Mobile**: Test responsive breakpoints (test at 1024px, 768px, 480px)
3. **Theme**: Toggle dark/light mode across all sections
4. **Navigation**: All internal links work (anchor scrolling)
5. **Project Modal**: Can open/close projects, links clickable
6. **Skills Animation**: Progress bars animate smoothly on category filter
7. **Accessibility**: Check keyboard navigation, contrast ratios

## Future Enhancement Ideas
- Add CMS integration for content management
- Implement actual contact form backend
- Add blog section with article previews
- Add testimonials/case studies section
- Implement analytics tracking
- Add smooth scroll-spy navbar indicator
- Extract colors to CSS custom properties
- Add lazy loading for project images

---
**Last Updated**: December 2025
**Maintainer**: Harish Chittoor
**Framework**: React 19 with React Router 7

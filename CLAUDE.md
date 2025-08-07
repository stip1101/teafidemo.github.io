# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Vite-based static landing page project. Use these commands for development:

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/` directory)  
- `npm run preview` - Preview production build locally

## Project Architecture

This is a single-page vanilla JavaScript application for the Tea-Fi Ambassador Program landing page built with Vite.

### Project Structure
- `index.html` - Main HTML entry point with basic structure and meta tags
- `src/main.js` - Single JavaScript file containing all application logic, DOM manipulation, and interactive features
- `src/style.css` - Complete CSS styling with CSS custom properties, responsive design, and animations
- `public/` - Static assets (SVG icons and logos for Tea-Fi branding)
- `vite.config.js` - Basic Vite configuration

### Key Implementation Details

**Single-File Architecture**: The entire application is implemented in `src/main.js` using innerHTML to generate the complete page structure. This includes:
- Navigation with smooth scrolling
- Hero section with interactive logo animations
- Role progression system
- FAQ section with accordion functionality
- Call-to-action sections

**Styling Approach**: CSS uses custom properties (CSS variables) defined in `:root` for consistent theming:
- Dark gradient background (`--gradient-bg`)
- Pink accent color (`--accent-pink: #FF007A`)
- Typography using Space Grotesk and Montserrat fonts
- Responsive design with mobile-first approach

**Interactive Features**:
- FAQ accordion with smooth animations (`toggleFAQ` function)
- Role card hover effects
- Smooth scrolling navigation
- Interactive logo with mouse tracking and breathing animations
- Scroll-triggered animations using Intersection Observer

**External Dependencies**:
- Google Fonts (Montserrat, Space Grotesk)
- Font Awesome 6.5.1 for social icons
- No JavaScript frameworks - pure vanilla JS

### Deployment
The `build` command generates a static site in the `dist/` directory suitable for deployment to any static hosting service.
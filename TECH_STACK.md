# Tea-Fi Ambassador Program - Technical Stack

## Overview
The Tea-Fi Ambassador Program landing page is a modern, responsive web application built with vanilla JavaScript and Vite. It serves as the main entry point for users interested in joining the Tea-Fi ecosystem as ambassadors and contributors.

## Core Technologies

### Build System & Development
- **Vite 7.0.0** - Modern build tool and development server
- **Node.js** - Runtime environment for build tools
- **NPM** - Package manager

### Frontend Framework
- **Vanilla JavaScript (ES6+)** - Pure JavaScript without frameworks
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with custom properties and animations

### Styling Architecture
- **CSS Custom Properties** - CSS variables for consistent theming
- **Flexbox & CSS Grid** - Modern layout systems
- **CSS Animations & Transitions** - Smooth interactive effects
- **Responsive Design** - Mobile-first approach with breakpoints

### External Dependencies
- **Google Fonts** - Typography (Montserrat, Space Grotesk)
- **Font Awesome 6.5.1** - Icon library for social media icons
- **No JavaScript frameworks** - Vanilla JS implementation

## API Integration

### Backend Communication
- **REST API** - Discord bot API integration
- **HTTPS Endpoints** - Secure API communication via reverse proxy
- **API Base URL**: `https://api.tea-fi-ambassadors.com/api`
- **Caching Strategy** - 5-minute client-side cache for API responses
- **Error Handling** - Graceful fallbacks with mock data

### Available Endpoints
- `/all-stats` - Complete community statistics
- `/role-members` - Member data with roles
- `/top-ambassadors` - Ambassador leaderboard

## Project Structure

```
├── index.html              # Main HTML entry point
├── stats.html              # Statistics page
├── src/
│   ├── main.js            # Main application logic
│   ├── stats.js           # Statistics page logic
│   └── style.css          # Complete CSS styling
├── public/                # Static assets
│   ├── *.webp            # Role images and avatars
│   ├── *.svg             # Logo and brand assets
│   └── favicon files
├── dist/                  # Build output
├── vite.config.js         # Build configuration
└── package.json           # Dependencies and scripts
```

## Key Features

### Single-Page Application Architecture
- **Dynamic Content Rendering** - JavaScript-driven DOM manipulation
- **Component-based Structure** - Modular code organization
- **State Management** - Simple caching and data persistence

### Interactive Elements
- **FAQ Accordion** - Smooth expand/collapse animations
- **Role Card Interactions** - Hover effects and animations
- **Smooth Scrolling Navigation** - Enhanced UX with scroll behavior
- **Interactive Logo** - Mouse tracking and click animations
- **Real-time Statistics** - Live Discord API integration

### Performance Optimizations
- **Asset Optimization** - Compressed images and optimized SVGs
- **CSS Minification** - Production build optimizations
- **Lazy Loading** - Efficient resource management
- **Caching Strategy** - API response caching

## Responsive Design

### Breakpoints
- **Mobile First** - Base styles for mobile devices
- **Tablet** - `@media (min-width: 768px)`
- **Desktop** - `@media (min-width: 1024px)`
- **Large Screens** - `@media (min-width: 1440px)`

### Layout Systems
- **CSS Grid** - Complex layouts and statistics grids
- **Flexbox** - Component-level layouts
- **Container Queries** - Future-ready responsive design

## Deployment

### Build Process
- **Vite Build** - Optimized production builds
- **Asset Processing** - Automatic optimization and hashing
- **Static Site Generation** - Pure static HTML/CSS/JS output

### Hosting & CI/CD
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - Automated deployment pipeline
- **Custom Domain** - Professional domain configuration
- **HTTPS** - Secure delivery via GitHub Pages

## Development Workflow

### Available Scripts
```bash
npm run dev      # Development server with hot reload
npm run build    # Production build
npm run preview  # Preview production build
```

### Development Features
- **Hot Module Replacement** - Instant development updates
- **Source Maps** - Debug support
- **Development Server** - Local development environment

## Browser Support
- **Modern Browsers** - Chrome, Firefox, Safari, Edge (latest)
- **ES6+ Features** - Modern JavaScript syntax
- **CSS Grid & Flexbox** - Modern layout support
- **WebP Images** - Modern image format with fallbacks

## Security Considerations
- **HTTPS Only** - Secure API communication
- **Content Security Policy** - Protection against XSS
- **No Sensitive Data** - Client-side only, no secrets
- **External Link Security** - `rel="noopener"` on external links

## Theming System

### CSS Custom Properties
```css
:root {
  --primary-color: #FF007A;
  --gradient-bg: linear-gradient(...);
  --text-primary: #FFFFFF;
  --spacing-unit: 8px;
}
```

### Design System
- **Color Palette** - Consistent brand colors
- **Typography Scale** - Modular font sizing
- **Spacing System** - 8px grid system
- **Animation Easing** - Custom cubic-bezier functions

## Future Enhancements
- **Progressive Web App** - Service worker implementation
- **Internationalization** - Multi-language support
- **Advanced Analytics** - User interaction tracking
- **Component Library** - Reusable UI components
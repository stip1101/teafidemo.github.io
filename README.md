# TeaFi Ambassador Program Landing Page

A beautiful, interactive landing page for the TeaFi Ambassador Program built with modern web technologies.

## 🍃 Features

- **Modern Design**: Dark gradient theme with vibrant pink accents (#FF007A)
- **Interactive Elements**: Floating animations, hover effects, and smooth transitions
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Vite for lightning-fast development and optimized builds
- **Accessibility**: Semantic HTML and proper contrast ratios

## 🎨 Design System

### Color Palette
- **Background Gradient**: `#0C0C0F` → `#2C0F26`
- **Accent Pink**: `#FF007A` (buttons and highlights)
- **Text White**: `#FFFFFF`
- **Text Gray**: `#D3D3D3` and `#B0B0B0`
- **Dark Purple**: `#2A0D23` (inactive cards)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

## 🚀 Quick Start

### Prerequisites
- Node.js 20.19+ or 22.12+
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd teafilandingpage
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## 📱 Sections

### 1. Hero Section
- Main headline with gradient text effect
- Call-to-action button with smooth scrolling
- Animated floating tea-themed elements
- Interactive progress ring visualization

### 2. Progression System
- Role cards with hover effects: Tea-OG → Tea Fan → Tea Enjoyer → Tea Chad
- Special Ambassador track for influencers
- Animated progression arrows

### 3. Special Skills & Badges
- Side roles: Sugar Shaman, Game Master, Code Brewer
- Organic badge system based on contributions

### 4. Contributor Types
- Content Creators, Meme Creators, Event Organizers, Community Members
- Interactive cards with hover animations

### 5. FAQ Section
- Collapsible FAQ items with smooth animations
- "Spill The Tea" themed questions and answers

### 6. Final CTA
- Join Discord call-to-action
- Gradient background effects

## 🛠 Technology Stack

- **Build Tool**: Vite 7.0
- **Languages**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables and Modern Features
- **Icons**: Unicode emojis and custom SVG icons
- **Fonts**: Inter from Google Fonts
- **Browser Support**: Modern browsers with ES6+ support

## 🎯 Interactive Features

- **FAQ Toggle**: Click to expand/collapse FAQ items
- **Role Card Animations**: Hover effects with scale and translate transforms
- **Floating Elements**: Continuous floating animation for tea cubes
- **Smooth Scrolling**: Navigation between sections
- **Scroll-triggered Animations**: Elements animate in as they come into view
- **Progress Ring**: Spinning border animation
- **Button Hover Effects**: Transform and shadow effects

## 📁 Project Structure

\`\`\`
teafilandingpage/
├── public/
│   └── tea-icon.svg          # Custom TeaFi logo
├── src/
│   ├── style.css             # Main stylesheet with all components
│   └── main.js               # JavaScript for interactivity
├── index.html                # Main HTML file
├── package.json              # Dependencies and scripts
└── README.md                 # This file
\`\`\`

## 🎨 Customization

### Colors
Modify CSS variables in `src/style.css`:
\`\`\`css
:root {
  --bg-dark-start: #0C0C0F;
  --bg-dark-end: #2C0F26;
  --accent-pink: #FF007A;
  /* ... other variables */
}
\`\`\`

### Content
Update the HTML content in `src/main.js` to modify:
- Text content
- Role descriptions
- FAQ questions and answers
- Discord links

### Animations
Adjust animation timing and effects in the CSS:
- `--transition` variables for timing
- `@keyframes` rules for custom animations
- `animation-delay` for staggered effects

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel
1. Connect your Git repository
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

### GitHub Pages
1. Build: `npm run build`
2. Push `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📄 License

This project is built for TeaFi Ambassador Program promotional purposes.

## 🤝 Contributing

This is a promotional landing page. For contributions or suggestions, please contact the TeaFi team through Discord.

---

**Farm your status. Build your influence. Shape TeaFi.** 🍃 
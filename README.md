# SCRAFT Salon - Luxury Beauty Website

A premium, responsive website for SCRAFT Salon showcasing luxury hair styling, makeup, spa services, and beauty treatments.

## ✨ Features

- **Luxury Design**: Premium, elegant design with gold accents and sophisticated typography
- **Responsive Layout**: Fully responsive design that works on all devices
- **Modern Tech Stack**: Built with React, TypeScript, Tailwind CSS, and Vite
- **Interactive Elements**: Smooth animations, hover effects, and premium user experience
- **Service Showcase**: Beautiful presentation of salon services with detailed descriptions
- **Client Testimonials**: Carousel-style testimonials with client photos and ratings
- **Contact Forms**: Professional contact forms with salon information and booking options

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Yadnesh2404/aurum-salon-sparkle.git
cd aurum-salon-sparkle
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## 🏗️ Build & Deploy

### Local Build

```bash
npm run build
```

### Deploy to Netlify

#### Option 1: Automatic Deployment (Recommended)

1. Connect your GitHub repository to Netlify
2. Netlify will automatically build and deploy your site
3. Your site will be available at your Netlify URL

#### Option 2: Manual Deployment

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Your site will be deployed instantly

### Configuration

✅ **Configuration is already complete for Netlify deployment:**
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Routing**: Handled by `netlify.toml`
- **Environment**: Node.js 18+

## 🎨 Customization

### Colors & Theme

The design system uses a luxury color palette defined in `src/index.css`:

- **Primary Gold**: Rich gold accents for premium feel
- **Background**: Pure white foundation
- **Text**: Dark gray for readability
- **Accents**: Champagne and ivory tones

### Components

The website is built with modular components:

- `Hero.tsx` - Landing page with main CTA
- `About.tsx` - Salon information and team details
- `Services.tsx` - Service offerings with icons
- `Testimonials.tsx` - Client reviews carousel
- `Contact.tsx` - Contact forms and salon information
- `Footer.tsx` - Site footer with links and social media

## 🔧 Troubleshooting

### Common Issues

1. **Website not loading on Netlify**
   - Check that the build command is `npm run build`
   - Verify the publish directory is set to `dist`
   - Check build logs for any errors

2. **Routing issues**
   - The `netlify.toml` file handles client-side routing
   - Ensure all routes redirect to `index.html`

3. **Build errors**
   - Check Node.js version (18+ required)
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`

### Netlify Settings

1. Go to your Netlify dashboard
2. Navigate to Site settings → Build & deploy
3. Set Build command to: `npm run build`
4. Set Publish directory to: `dist`
5. Save the settings

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions, please open an issue in the GitHub repository.

---

**SCRAFT Salon** - Redefining the Luxury Salon Experience ✨

# Modern Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and modern web technologies. This portfolio showcases your skills, projects, and professional experience in an engaging and visually appealing way.

## Features

- 🎨 Modern and clean design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive layout
- ⚡ Smooth animations and transitions
- 🔍 SEO optimized
- 🌐 Multi-language support (Arabic/English)
- 📝 Contact form with validation
- 🎯 Project filtering
- 📊 Skills visualization
- 📅 Experience timeline
- 🔗 Social media integration

## Technologies Used

- React
- TypeScript
- Vite
- Framer Motion
- React Icons
- React Router DOM
- React Intersection Observer
- CSS3 (Custom properties, Flexbox, Grid)
- Material-UI (Optional)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be generated in the `dist` directory.

## Customization

### Personal Information

1. Update the content in the components:

   - `Hero.tsx`: Update your name, title, and description
   - `About.tsx`: Modify your bio and statistics
   - `Skills.tsx`: Add or modify your skills
   - `Projects.tsx`: Add your projects
   - `Experience.tsx`: Update your work experience and education
   - `Contact.tsx`: Update contact information

2. Replace images:
   - Add your profile picture as `profile-image.jpg`
   - Add project screenshots as `project1.jpg`, `project2.jpg`, etc.
   - Add about section image as `about-image.jpg`

### Styling

1. Colors:

   - Modify the CSS variables in `index.css`:

   ```css
   :root {
     --primary-color: #4831d4;
     --secondary-color: #ccf381;
     --dark-color: #3a3a3a;
     --light-color: #f5f5f5;
   }
   ```

2. Fonts:
   - The project uses Poppins font by default
   - You can change the font in `index.css`

### Contact Form

To enable the contact form functionality:

1. Set up a backend service or use a form service like Formspree
2. Update the form submission logic in `Contact.tsx`

## Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy the `dist` directory to your preferred hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - Firebase Hosting
   - etc.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Font from [Google Fonts](https://fonts.google.com/)

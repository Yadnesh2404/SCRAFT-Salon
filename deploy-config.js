// Deployment Configuration for SCRAFT Salon
// Updated with actual GitHub details

const config = {
  // GitHub Pages Configuration
  githubUsername: 'Yadnesh2404',
  repositoryName: 'aurum-salon-sparkle',
  
  // Website Information
  siteTitle: 'SCRAFT Salon',
  siteDescription: 'Redefining the Luxury Salon Experience',
  
  // Contact Information
  contact: {
    phone: '+1 (234) 567-8900',
    email: 'info@scraftsalon.com',
    address: '123 Luxury Avenue, Beverly Hills, CA 90210'
  },
  
  // Social Media
  social: {
    instagram: 'https://instagram.com/scraftsalon',
    facebook: 'https://facebook.com/scraftsalon',
    whatsapp: 'https://wa.me/1234567890'
  }
};

// Generate URLs
config.homepage = `https://${config.githubUsername}.github.io/${config.repositoryName}`;
config.basePath = `/${config.repositoryName}/`;

module.exports = config;

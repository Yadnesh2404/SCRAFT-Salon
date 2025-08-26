#!/bin/bash

# Deploy script for SCRAFT Salon website
echo "🚀 Deploying SCRAFT Salon website to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌍 Your website should be available at: https://yadnesh2404.github.io/aurum-salon-sparkle"
echo "⏰ It may take a few minutes for changes to appear."

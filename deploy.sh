#!/bin/bash

# Build the Angular project
ng build

# Run the build with the specified base href
npm run build -- --base-href "https://fjzamora93.github.io/Portfolio/"

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/portfolio/browser

#chmod +x deploy.sh
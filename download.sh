#!/bin/bash

# Create a zip file of the GitHub Pages deployment files
cd ..
zip -r github-pages-deploy.zip github-pages-deploy/*

echo ""
echo "Created github-pages-deploy.zip in the root directory."
echo "Download this file to your computer, then extract it."
echo "Upload the contents to your GitHub repository."
echo ""
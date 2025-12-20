# 📸 How to Add Your Project Images

## Quick Start

1. **Prepare Your Images**
   - Recommended size: 1200x800px or similar ratio
   - Format: PNG, JPG, or WebP
   - Optimize images for web (use tools like TinyPNG)

2. **Add to Public Folder**
   ```
   /public/images/
   ├── background.jpg (hero background - already exists)
   ├── project1.png (your first project)
   ├── project2.png (your second project)
   ├── project3.png (your third project)
   └── project4.png (your fourth project)
   ```

3. **Update Projects Component**
   
   Open: `/src/components/Projects/index.jsx`
   
   Replace the projects array:
   ```javascript
   const projects = [
     {
       title: "LogChat - Log Correlation Dashboard",
       src: "project1.png",  // Your image filename
       color: "#1a1a2e"      // Background color for modal
     },
     {
       title: "GoReconX - OSINT Platform",
       src: "project2.png",
       color: "#16213e"
     },
     // Add more projects...
   ]
   ```

## Color Palette Suggestions

Match your project themes:

### Cybersecurity Projects
- `#1a1a2e` - Dark navy
- `#16213e` - Deep blue
- `#0f3460` - Electric blue
- `#533483` - Purple

### Development Projects
- `#2d4a3e` - Forest green
- `#1e3a5f` - Ocean blue
- `#3a3a52` - Slate gray
- `#4a4063` - Deep violet

### AI/ML Projects
- `#ff6b6b` - Coral red
- `#4ecdc4` - Turquoise
- `#ffe66d` - Bright yellow
- `#a8e6cf` - Mint green

## Pro Tips

1. **Consistent Style**: Use similar image styles (screenshots, mockups, or illustrations)
2. **Aspect Ratio**: Keep consistent ratios for better visual flow
3. **High Quality**: Use high-resolution images that scale well
4. **Load Time**: Optimize images to keep site fast (aim for <500KB per image)

## Need Placeholder Images?

If you don't have project images yet, you can use:
- **Unsplash**: https://unsplash.com (free stock photos)
- **Pexels**: https://pexels.com (free stock photos)
- **UI Mockups**: Create mockups at https://shots.so or https://mockuphone.com

## Testing

After adding images:
1. Save files
2. The dev server will hot-reload
3. Hover over projects to see your images in the modal
4. Check responsiveness on mobile

---

Need help? Check the main README.md for more customization options!

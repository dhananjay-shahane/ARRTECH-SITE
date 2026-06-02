const fs = require('fs');

const files = [
  'src/app/(company)/company/page.tsx', 
  'src/app/(company)/team/page.tsx', 
  'src/app/(company)/contact/page.tsx', 
  'src/app/projects/page.tsx', 
  'src/app/(services)/software-platforms/page.tsx', 
  'src/app/(services)/software/[slug]/page.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // The target is these two lines:
    // <div className="absolute inset-0 bg-black/60"></div>
    // <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90"></div>
    
    // We will replace both lines with a single, clean normal overlay
    // Depending on what is currently in the file, we can use regex to replace both divs.
    
    content = content.replace(
      /<div className="absolute inset-0 bg-black\/60"><\/div>\s*<div className="absolute inset-0 bg-gradient-to-b [^>]+><\/div>/g,
      '<div className="absolute inset-0 bg-black/50"></div>'
    );
    
    fs.writeFileSync(file, content);
    console.log('Normalized overlay in ' + file);
  }
});

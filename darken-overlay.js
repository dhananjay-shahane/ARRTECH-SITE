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
    
    // Replace bg-black/50 with bg-black/70 to make it darker
    content = content.replace(
      '<div className="absolute inset-0 bg-black/50"></div>',
      '<div className="absolute inset-0 bg-black/70"></div>'
    );
    
    fs.writeFileSync(file, content);
    console.log('Darkened overlay in ' + file);
  }
});

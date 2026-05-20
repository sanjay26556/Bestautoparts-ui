const fs = require('fs');
const path = require('path');

const filesToProcess = ['Models.jsx', 'Services.jsx', 'ProductDetail.jsx', 'Cart.jsx', 'Login.jsx'];

filesToProcess.forEach(file => {
  const filePath = path.join('src', 'pages', file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/ for="/g, ' htmlFor="');
  content = content.replace(/ tabindex="/gi, ' tabIndex="');
  content = content.replace(/ stroke-width="/g, ' strokeWidth="');
  content = content.replace(/ stroke-linecap="/g, ' strokeLinecap="');
  content = content.replace(/ stroke-linejoin="/g, ' strokeLinejoin="');
  content = content.replace(/ clip-rule="/g, ' clipRule="');
  content = content.replace(/ fill-rule="/g, ' fillRule="');
  
  // Also fix `<input ...>` inside components if they were missed
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed JSX attributes in ${file}`);
});

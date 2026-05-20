const fs = require('fs');
const path = require('path');

const filesToProcess = [
  { file: 'models.html', componentName: 'Models' },
  { file: 'services.html', componentName: 'Services' },
  { file: 'product.html', componentName: 'ProductDetail' },
  { file: 'cart.html', componentName: 'Cart' },
  { file: 'login.html', componentName: 'Login' }
];

filesToProcess.forEach(({ file, componentName }) => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Extract content between <main...> and </main>
  const match = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!match) {
    console.log(`Could not find <main> in ${file}`);
    return;
  }
  
  let mainContent = match[1];
  
  // If the <main> tag has classes, let's capture them to wrap the content
  const mainTagMatch = content.match(/<main([^>]*)>/i);
  const mainAttrs = mainTagMatch ? mainTagMatch[1] : '';
  
  // Replace class=" with className="
  mainContent = mainContent.replace(/class="/g, 'className="');
  
  // Replace inline styles if any (simple ones)
  // For safety, let's just close void tags correctly
  mainContent = mainContent.replace(/<img([^>]*)>/g, (m, attrs) => {
    if (!m.endsWith('/>')) return `<img${attrs}/>`;
    return m;
  });
  mainContent = mainContent.replace(/<input([^>]*)>/g, (m, attrs) => {
    if (!m.endsWith('/>')) return `<input${attrs}/>`;
    return m;
  });
  mainContent = mainContent.replace(/<hr([^>]*)>/g, (m, attrs) => {
    if (!m.endsWith('/>')) return `<hr${attrs}/>`;
    return m;
  });
  mainContent = mainContent.replace(/<br([^>]*)>/g, (m, attrs) => {
    if (!m.endsWith('/>')) return `<br${attrs}/>`;
    return m;
  });
  
  // Replace checked with defaultChecked for React
  mainContent = mainContent.replace(/ checked /g, ' defaultChecked ');
  mainContent = mainContent.replace(/ checked="" /g, ' defaultChecked ');
  
  // Create React component
  const componentCode = `import { Link } from 'react-router-dom';

export default function ${componentName}() {
  return (
    <main ${mainAttrs.replace(/class="/g, 'className="')}>
      ${mainContent}
    </main>
  );
}
`;

  fs.writeFileSync(path.join('src', 'pages', `${componentName}.jsx`), componentCode);
  console.log(`Generated src/pages/${componentName}.jsx`);
});

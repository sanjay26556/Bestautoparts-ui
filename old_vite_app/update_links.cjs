const fs = require('fs');

const updateFile = (path, replacements) => {
  if (!fs.existsSync(path)) return;
  let content = fs.readFileSync(path, 'utf8');
  for (const {from, to} of replacements) {
    content = content.replace(from, to);
  }
  fs.writeFileSync(path, content);
};

// 1. MarutiSuzukiModels
updateFile('./src/pages/MarutiSuzukiModels.jsx', [
  {
    from: /<button className=\"w-full bg-secondary text-on-secondary py-2 rounded-lg font-label-md text-label-md hover:bg-secondary-container transition-colors flex justify-center items-center gap-2\">\s*View Parts\s*<span className=\"material-symbols-outlined text-\[18px\]\" data-icon=\"arrow_forward\">arrow_forward<\/span>\s*<\/button>/im,
    to: `<Link to="/models/maruti-suzuki/swift" className="w-full bg-secondary text-on-secondary py-2 rounded-lg font-label-md text-label-md hover:bg-secondary-container transition-colors flex justify-center items-center gap-2">View Parts <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span></Link>`
  },
  {
    from: /<button className=\"w-full bg-secondary text-on-secondary py-2 rounded-lg font-label-md text-label-md hover:bg-secondary-container transition-colors flex justify-center items-center gap-2\">\s*View Parts\s*<span className=\"material-symbols-outlined text-\[18px\]\" data-icon=\"arrow_forward\">arrow_forward<\/span>\s*<\/button>/gim,
    to: `<Link to="/marketplace" className="w-full bg-secondary text-on-secondary py-2 rounded-lg font-label-md text-label-md hover:bg-secondary-container transition-colors flex justify-center items-center gap-2">View Parts <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span></Link>`
  }
]);

// 2. MahindraModels
updateFile('./src/pages/MahindraModels.jsx', [
  {
    from: /<button className=\"w-full bg-secondary text-on-secondary py-3 rounded-lg font-label-md text-label-md hover:bg-secondary-container transition-colors shadow-sm flex justify-center items-center gap-2 group\/btn\">\s*View Parts Catalog\s*<span className=\"material-symbols-outlined\" data-icon=\"arrow_forward\">arrow_forward<\/span>\s*<\/button>/im,
    to: `<Link to="/models/mahindra/xuv700" className="w-full bg-secondary text-on-secondary py-3 rounded-lg font-label-md text-label-md hover:bg-secondary-container transition-colors shadow-sm flex justify-center items-center gap-2 group/btn">View Parts Catalog <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span></Link>`
  },
  {
    from: /<button className=\"w-full bg-secondary text-on-secondary py-3 rounded-lg font-label-md text-label-md hover:bg-secondary-container transition-colors shadow-sm flex justify-center items-center gap-2 group\/btn\">\s*View Parts Catalog\s*<span className=\"material-symbols-outlined\" data-icon=\"arrow_forward\">arrow_forward<\/span>\s*<\/button>/gim,
    to: `<Link to="/marketplace" className="w-full bg-secondary text-on-secondary py-3 rounded-lg font-label-md text-label-md hover:bg-secondary-container transition-colors shadow-sm flex justify-center items-center gap-2 group/btn">View Parts Catalog <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span></Link>`
  }
]);

// 3. TataModels
updateFile('./src/pages/TataModels.jsx', [
  {
    from: /<button className=\"text-secondary font-label-md text-label-md hover:underline\">\s*View Parts\s*<\/button>/im,
    to: `<Link to="/models/tata/nexon" className="text-secondary font-label-md text-label-md hover:underline">View Parts</Link>`
  },
  {
    from: /<button className=\"text-secondary font-label-md text-label-md hover:underline\">\s*View Parts\s*<\/button>/gim,
    to: `<Link to="/marketplace" className="text-secondary font-label-md text-label-md hover:underline">View Parts</Link>`
  }
]);

// 4. HyundaiModels
updateFile('./src/pages/HyundaiModels.jsx', [
  {
    from: /<button className=\"w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group\/btn\">\s*View Parts\s*<span className=\"material-symbols-outlined text-sm group-hover\/btn:translate-x-1 transition-transform\" data-icon=\"arrow_forward\">arrow_forward<\/span>\s*<\/button>/gim,
    to: `<Link to="/marketplace" className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn">View Parts <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span></Link>`
  }
]);

// 5. BMWModels
updateFile('./src/pages/BMWModels.jsx', [
  {
    from: /<button className=\"w-full bg-primary text-on-primary py-2 rounded font-label-md text-label-md hover:bg-secondary transition-colors\">\s*View Parts\s*<\/button>/gim,
    to: `<Link to="/marketplace" className="w-full block text-center bg-primary text-on-primary py-2 rounded font-label-md text-label-md hover:bg-secondary transition-colors">View Parts</Link>`
  }
]);

// 6. Fix product cards in XUV700, Swift, Nexon
const fixProducts = (path) => {
  if (!fs.existsSync(path)) return;
  let content = fs.readFileSync(path, 'utf8');
  
  content = content.replace(/<button className=\"bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-on-secondary-fixed transition-colors\">\s*<span className=\"material-symbols-outlined\">add_shopping_cart<\/span>\s*<\/button>/gim, `<Link to="/cart" className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-on-secondary-fixed transition-colors"><span className="material-symbols-outlined">add_shopping_cart</span></Link>`);

  content = content.replace(/<h4 className=\"font-bold text-body-lg mb-2\">/gim, `<h4 className="font-bold text-body-lg mb-2 hover:text-secondary"><Link to="/product">`);
  content = content.replace(/<\/h4>/gim, `</Link></h4>`);

  fs.writeFileSync(path, content);
};

fixProducts('./src/pages/MahindraXUV700.jsx');
fixProducts('./src/pages/MarutiSwift.jsx');
fixProducts('./src/pages/TataNexon.jsx');

console.log('Update complete.');

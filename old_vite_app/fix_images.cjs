const fs = require('fs');
const path = require('path');

const models = {
  MarutiSuzukiModels: {
    hero: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg",
    swift: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg",
    baleno: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/107543/baleno-exterior-right-front-three-quarter.jpeg",
    brezza: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/107543/brezza-exterior-right-front-three-quarter.jpeg",
    grandvitara: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/108109/grand-vitara-exterior-right-front-three-quarter.jpeg"
  },
  TataModels: {
    hero: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/141867/nexon-facelift-exterior-right-front-three-quarter.jpeg",
    nexon: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/141867/nexon-facelift-exterior-right-front-three-quarter.jpeg",
    punch: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/39015/punch-exterior-right-front-three-quarter-57.jpeg",
    safari: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/139651/safari-facelift-exterior-right-front-three-quarter.jpeg",
    harrier: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/139647/harrier-facelift-exterior-right-front-three-quarter.jpeg"
  },
  MahindraModels: {
    hero: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg",
    xuv700: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg",
    scorpio: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter.jpeg",
    thar: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/40087/thar-exterior-right-front-three-quarter-35.jpeg",
    bolero: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/131825/bolero-exterior-right-front-three-quarter.jpeg",
    xuv3xo: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/171211/xuv-3xo-exterior-right-front-three-quarter.jpeg"
  },
  HyundaiModels: {
    hero: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/48067/tucson-exterior-right-front-three-quarter.jpeg",
    tucson: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/48067/tucson-exterior-right-front-three-quarter.jpeg",
    creta: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/106815/creta-exterior-right-front-three-quarter.jpeg",
    i20: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/40530/i20-exterior-right-front-three-quarter-5.jpeg",
    verna: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/141113/verna-exterior-right-front-three-quarter.jpeg"
  },
  ToyotaModels: {
    hero: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg",
    fortuner: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg",
    camry: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/192443/camry-exterior-right-front-three-quarter.jpeg",
    innovacrysta: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter.jpeg",
    glanza: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/115777/glanza-exterior-right-front-three-quarter.jpeg"
  },
  HondaModels: {
    hero: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/134287/city-exterior-right-front-three-quarter.jpeg",
    city: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/134287/city-exterior-right-front-three-quarter.jpeg",
    civic: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/27074/civic-exterior-right-front-three-quarter-2.jpeg",
    amaze: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/45951/amaze-exterior-right-front-three-quarter.jpeg",
    elevate: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/151109/elevate-exterior-right-front-three-quarter.jpeg"
  },
  BMWModels: {
    hero: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/192525/m5-exterior-right-front-three-quarter.jpeg",
    m5: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/192525/m5-exterior-right-front-three-quarter.jpeg",
    "3series": "https://imgd.aeplcdn.com/1200x900/n/cw/ec/51909/3-series-gran-limousine-exterior-right-front-three-quarter.jpeg",
    "5series": "https://imgd.aeplcdn.com/1200x900/n/cw/ec/175951/5-series-exterior-right-front-three-quarter.jpeg",
    x5: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/44686/x5-exterior-right-front-three-quarter.jpeg",
    x1: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/120049/x1-exterior-right-front-three-quarter.jpeg",
    ix: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/51940/ix-exterior-right-front-three-quarter.jpeg"
  },
  MercedesModels: {
    hero: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/168707/amg-gt-coupe-exterior-right-front-three-quarter.jpeg",
    amggt: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/168707/amg-gt-coupe-exterior-right-front-three-quarter.jpeg",
    sclass: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/48057/s-class-exterior-right-front-three-quarter.jpeg",
    eclass: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/177129/e-class-exterior-right-front-three-quarter.jpeg",
    cclass: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/51909/c-class-exterior-right-front-three-quarter.jpeg",
    gle: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/51954/gle-exterior-right-front-three-quarter.jpeg"
  },
  PorscheModels: {
    hero: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/39232/911-exterior-right-front-three-quarter.jpeg",
    "911": "https://imgd.aeplcdn.com/1200x900/n/cw/ec/39232/911-exterior-right-front-three-quarter.jpeg",
    cayenne: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/181139/cayenne-exterior-right-front-three-quarter.jpeg",
    panamera: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/181141/panamera-exterior-right-front-three-quarter.jpeg",
    taycan: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/39270/taycan-exterior-right-front-three-quarter.jpeg"
  },
  AudiModels: {
    hero: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/51909/r8-exterior-right-front-three-quarter.jpeg",
    r8: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/51909/r8-exterior-right-front-three-quarter.jpeg",
    a6: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/39472/a6-exterior-right-front-three-quarter.jpeg",
    q7: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/51954/q7-exterior-right-front-three-quarter.jpeg",
    a4: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/28379/a4-exterior-right-front-three-quarter.jpeg",
    q5: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/39735/q5-exterior-right-front-three-quarter.jpeg",
    etron: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/51940/e-tron-gt-exterior-right-front-three-quarter.jpeg"
  },
  KiaModels: {
    hero: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/51940/ev6-exterior-right-front-three-quarter.jpeg",
    seltos: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/115777/seltos-exterior-right-front-three-quarter.jpeg",
    sonet: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/169289/sonet-exterior-right-front-three-quarter.jpeg",
    carens: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/144185/carens-exterior-right-front-three-quarter.jpeg",
    ev6: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/51940/ev6-exterior-right-front-three-quarter.jpeg"
  },
  VolkswagenModels: {
    hero: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/124839/virtus-exterior-right-front-three-quarter.jpeg",
    virtus: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/124839/virtus-exterior-right-front-three-quarter.jpeg",
    taigun: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/47051/taigun-exterior-right-front-three-quarter.jpeg",
    tiguan: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/115777/tiguan-exterior-right-front-three-quarter.jpeg"
  }
};

const pagesDir = path.join(__dirname, 'src', 'pages');

Object.keys(models).forEach(filePrefix => {
  const filePath = path.join(pagesDir, `${filePrefix}.jsx`);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const brandData = models[filePrefix];
  
  // Replace card images (which are mapped by id)
  for (const [id, imageUrl] of Object.entries(brandData)) {
    if (id === 'hero') continue;
    // We match any URL in the image property of modelsData array
    const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?image:\\s*)"([^"]+)"`, 'g');
    content = content.replace(regex, `$1"${imageUrl}"`);
  }
  
  // Replace Hero Image
  content = content.replace(/({\/\* Hero Section \*\/(?:[\s\S]*?)<img[^>]*src=")([^"]+)("[^>]*>)/i, (match, p1, p2, p3) => {
    return p1 + brandData.hero + p3;
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated images in ${filePrefix}.jsx`);
});

// Update Brands.jsx images
const brandsPath = path.join(pagesDir, 'Brands.jsx');
if (fs.existsSync(brandsPath)) {
  let content = fs.readFileSync(brandsPath, 'utf8');
  const brandToImg = {
    'maruti-suzuki': models.MarutiSuzukiModels.swift,
    'tata': models.TataModels.nexon,
    'mahindra': models.MahindraModels.xuv700,
    'hyundai': models.HyundaiModels.creta,
    'toyota': models.ToyotaModels.fortuner,
    'honda': models.HondaModels.city,
    'bmw': models.BMWModels.m5,
    'mercedes': models.MercedesModels.amggt,
    'porsche': models.PorscheModels['911'],
    'audi': models.AudiModels.r8,
    'volkswagen': models.VolkswagenModels.virtus,
    'kia': models.KiaModels.seltos
  };
  
  for (const [id, imgUrl] of Object.entries(brandToImg)) {
    const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?image:\\s*)"([^"]+)"`, 'g');
    content = content.replace(regex, `$1"${imgUrl}"`);
  }
  fs.writeFileSync(brandsPath, content, 'utf8');
  console.log('Updated Brands.jsx images');
}

// Update Home.jsx images
const homePath = path.join(pagesDir, 'Home.jsx');
if (fs.existsSync(homePath)) {
  let content = fs.readFileSync(homePath, 'utf8');
  
  const homeImgs = {
    'BMW': models.BMWModels.m5,
    'Audi': models.AudiModels.r8,
    'Mercedes': models.MercedesModels.amggt,
    'Porsche': models.PorscheModels['911'],
    'Honda': models.HondaModels.city,
    'Mahindra': models.MahindraModels.xuv700
  };
  
  for (const [alt, imgUrl] of Object.entries(homeImgs)) {
    const regex = new RegExp(`(<img\\s+alt="${alt}"[^>]+src=")[^"]+(")`, 'g');
    content = content.replace(regex, `$1${imgUrl}$2`);
  }
  fs.writeFileSync(homePath, content, 'utf8');
  console.log('Updated Home.jsx images');
}

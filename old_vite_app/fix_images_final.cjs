const https = require('https');
const fs = require('fs');
const path = require('path');

const models = {
  MarutiSuzukiModels: {
    hero: "Suzuki_Swift",
    swift: "Suzuki_Swift",
    baleno: "Suzuki_Baleno",
    brezza: "Suzuki_Vitara_Brezza",
    grandvitara: "Suzuki_Grand_Vitara"
  },
  TataModels: {
    hero: "Tata_Harrier",
    nexon: "Tata_Nexon",
    punch: "Tata_Punch",
    safari: "Tata_Safari",
    harrier: "Tata_Harrier"
  },
  MahindraModels: {
    hero: "Mahindra_XUV700",
    xuv700: "Mahindra_XUV700",
    scorpio: "Mahindra_Scorpio",
    thar: "Mahindra_Thar",
    bolero: "Mahindra_Bolero",
    xuv3xo: "Mahindra_XUV300"
  },
  HyundaiModels: {
    hero: "Hyundai_Tucson",
    tucson: "Hyundai_Tucson",
    creta: "Hyundai_Creta",
    i20: "Hyundai_i20",
    verna: "Hyundai_Verna"
  },
  ToyotaModels: {
    hero: "Toyota_Fortuner",
    fortuner: "Toyota_Fortuner",
    camry: "Toyota_Camry",
    innovacrysta: "Toyota_Innova",
    glanza: "Toyota_Glanza"
  },
  HondaModels: {
    hero: "Honda_City",
    city: "Honda_City",
    civic: "Honda_Civic",
    amaze: "Honda_Amaze",
    elevate: "Honda_Elevate"
  },
  BMWModels: {
    hero: "BMW_M5",
    m5: "BMW_M5",
    "3series": "BMW_3_Series",
    "5series": "BMW_5_Series",
    x5: "BMW_X5",
    x1: "BMW_X1",
    ix: "BMW_iX"
  },
  MercedesModels: {
    hero: "Mercedes-AMG_GT",
    amggt: "Mercedes-AMG_GT",
    sclass: "Mercedes-Benz_S-Class",
    eclass: "Mercedes-Benz_E-Class",
    cclass: "Mercedes-Benz_C-Class",
    gle: "Mercedes-Benz_GLE"
  },
  PorscheModels: {
    hero: "Porsche_911",
    "911": "Porsche_911",
    cayenne: "Porsche_Cayenne",
    panamera: "Porsche_Panamera",
    taycan: "Porsche_Taycan"
  },
  AudiModels: {
    hero: "Audi_R8",
    r8: "Audi_R8",
    a6: "Audi_A6",
    q7: "Audi_Q7",
    a4: "Audi_A4",
    q5: "Audi_Q5",
    etron: "Audi_e-tron_GT"
  },
  KiaModels: {
    hero: "Kia_EV6",
    seltos: "Kia_Seltos",
    sonet: "Kia_Sonet",
    carens: "Kia_Carens",
    ev6: "Kia_EV6"
  },
  VolkswagenModels: {
    hero: "Volkswagen_Virtus",
    virtus: "Volkswagen_Virtus",
    taigun: "Volkswagen_Taigun",
    tiguan: "Volkswagen_Tiguan"
  }
};

const cache = {};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getWikiOgImage(title) {
  return new Promise(async (resolve) => {
    if (cache[title]) return resolve(cache[title]);
    
    await sleep(200); // 200ms delay to prevent rate limit
    const url = `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;
    
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<meta property="og:image" content="([^"]+)"/);
        if (match && match[1]) {
          cache[title] = match[1];
          resolve(cache[title]);
        } else {
          console.log(`No image found for ${title}, using fallback.`);
          cache[title] = "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=800";
          resolve(cache[title]);
        }
      });
    }).on('error', () => {
      cache[title] = "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=800";
      resolve(cache[title]);
    });
  });
}

const pagesDir = path.join(__dirname, 'src', 'pages');

async function processAll() {
  for (const filePrefix of Object.keys(models)) {
    const filePath = path.join(pagesDir, `${filePrefix}.jsx`);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf8');
    const brandData = models[filePrefix];
    
    for (const [id, title] of Object.entries(brandData)) {
      if (id === 'hero') continue;
      const imageUrl = await getWikiOgImage(title);
      const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?image:\\s*)"([^"]+)"`, 'g');
      content = content.replace(regex, `$1"${imageUrl}"`);
    }
    
    // Replace Hero Image
    const heroUrl = await getWikiOgImage(brandData.hero);
    content = content.replace(/({\/\* Hero Section \*\/(?:[\s\S]*?)<img[^>]*src=")([^"]+)("[^>]*>)/i, (match, p1, p2, p3) => {
      return p1 + heroUrl + p3;
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated images in ${filePrefix}.jsx`);
  }
  
  // Update Brands.jsx images
  const brandsPath = path.join(pagesDir, 'Brands.jsx');
  if (fs.existsSync(brandsPath)) {
    let content = fs.readFileSync(brandsPath, 'utf8');
    const brandToImg = {
      'maruti-suzuki': await getWikiOgImage(models.MarutiSuzukiModels.swift),
      'tata': await getWikiOgImage(models.TataModels.nexon),
      'mahindra': await getWikiOgImage(models.MahindraModels.xuv700),
      'hyundai': await getWikiOgImage(models.HyundaiModels.creta),
      'toyota': await getWikiOgImage(models.ToyotaModels.fortuner),
      'honda': await getWikiOgImage(models.HondaModels.city),
      'bmw': await getWikiOgImage(models.BMWModels.m5),
      'mercedes': await getWikiOgImage(models.MercedesModels.amggt),
      'porsche': await getWikiOgImage(models.PorscheModels['911']),
      'audi': await getWikiOgImage(models.AudiModels.r8),
      'volkswagen': await getWikiOgImage(models.VolkswagenModels.virtus),
      'kia': await getWikiOgImage(models.KiaModels.seltos)
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
      'BMW': await getWikiOgImage(models.BMWModels.m5),
      'Audi': await getWikiOgImage(models.AudiModels.r8),
      'Mercedes': await getWikiOgImage(models.MercedesModels.amggt),
      'Porsche': await getWikiOgImage(models.PorscheModels['911']),
      'Honda': await getWikiOgImage(models.HondaModels.city),
      'Mahindra': await getWikiOgImage(models.MahindraModels.xuv700)
    };
    
    for (const [alt, imgUrl] of Object.entries(homeImgs)) {
      const regex = new RegExp(`(<img\\s+alt="${alt}"[^>]+src=")[^"]+(")`, 'g');
      content = content.replace(regex, `$1${imgUrl}$2`);
    }
    fs.writeFileSync(homePath, content, 'utf8');
    console.log('Updated Home.jsx images');
  }
}

processAll().then(() => console.log('Done')).catch(err => console.error(err));

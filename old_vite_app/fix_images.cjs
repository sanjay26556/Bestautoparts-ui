const fs = require('fs');
const path = require('path');

const models = {
  MarutiSuzukiModels: {
    hero: "https://upload.wikimedia.org/wikipedia/commons/2/22/2018_Suzuki_Swift_SZ5_Boosterjet_MHEV_1.0_Front.jpg",
    swift: "https://upload.wikimedia.org/wikipedia/commons/2/22/2018_Suzuki_Swift_SZ5_Boosterjet_MHEV_1.0_Front.jpg",
    baleno: "https://upload.wikimedia.org/wikipedia/commons/9/91/2022_Maruti_Suzuki_Baleno_Alpha_%28India%29_front_view.png",
    brezza: "https://upload.wikimedia.org/wikipedia/commons/f/fb/2022_Maruti_Suzuki_Brezza_ZXi%2B_%28India%29_front_view.jpg",
    grandvitara: "https://upload.wikimedia.org/wikipedia/commons/9/92/2022_Suzuki_Grand_Vitara_%28India%29_front_view.jpg"
  },
  TataModels: {
    hero: "https://upload.wikimedia.org/wikipedia/commons/b/b3/2019_Tata_Harrier.jpg",
    nexon: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Tata_Nexon_XZA%2B_O_Dark_Edition_Front_Left.jpg",
    punch: "https://upload.wikimedia.org/wikipedia/commons/5/5a/2021_Tata_Punch_Creative_%28India%29_front_view_02.png",
    safari: "https://upload.wikimedia.org/wikipedia/commons/a/af/2021_Tata_Safari_XZA%2B_front_view.png",
    harrier: "https://upload.wikimedia.org/wikipedia/commons/b/b3/2019_Tata_Harrier.jpg"
  },
  MahindraModels: {
    hero: "https://upload.wikimedia.org/wikipedia/commons/7/71/2021_Mahindra_XUV700_AX7_%28India%29_front_view.png",
    xuv700: "https://upload.wikimedia.org/wikipedia/commons/7/71/2021_Mahindra_XUV700_AX7_%28India%29_front_view.png",
    scorpio: "https://upload.wikimedia.org/wikipedia/commons/b/b5/2022_Mahindra_Scorpio-N_Z8_%28India%29_front_view_01.png",
    thar: "https://upload.wikimedia.org/wikipedia/commons/8/84/2020_Mahindra_Thar_LX_%28India%29_front_view.png",
    bolero: "https://upload.wikimedia.org/wikipedia/commons/8/89/Mahindra_Bolero_Neo_Front.jpg",
    xuv3xo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Mahindra_XUV300.jpg"
  },
  HyundaiModels: {
    hero: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Hyundai_Tucson_%28NX4%29_EX_IMG_4966.jpg",
    tucson: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Hyundai_Tucson_%28NX4%29_EX_IMG_4966.jpg",
    creta: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2020_Hyundai_Creta_1.4_SX_%28O%29_%28India%29_front_view_01.png",
    i20: "https://upload.wikimedia.org/wikipedia/commons/1/1a/2020_Hyundai_i20_1.0_T-GDi_MHEV_Premium_front.jpg",
    verna: "https://upload.wikimedia.org/wikipedia/commons/7/77/2023_Hyundai_Verna_1.5_SX_%28India%29_front_view.png"
  },
  ToyotaModels: {
    hero: "https://upload.wikimedia.org/wikipedia/commons/7/7b/2021_Toyota_Fortuner_2.8_VRZ_4WD_wagon_%28GUN156R%3B_02-23-2022%29%2C_South_Tangerang.jpg",
    fortuner: "https://upload.wikimedia.org/wikipedia/commons/7/7b/2021_Toyota_Fortuner_2.8_VRZ_4WD_wagon_%28GUN156R%3B_02-23-2022%29%2C_South_Tangerang.jpg",
    camry: "https://upload.wikimedia.org/wikipedia/commons/a/ac/2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg",
    innovacrysta: "https://upload.wikimedia.org/wikipedia/commons/3/3d/2021_Toyota_Kijang_Innova_2.0_V_%28TGN140R%3B_02-09-2022%29%2C_South_Tangerang.jpg",
    glanza: "https://upload.wikimedia.org/wikipedia/commons/1/15/2022_Toyota_Glanza_V_%28India%29_front_view_01.png"
  },
  HondaModels: {
    hero: "https://upload.wikimedia.org/wikipedia/commons/4/4e/2020_Honda_City_SV.jpg",
    city: "https://upload.wikimedia.org/wikipedia/commons/4/4e/2020_Honda_City_SV.jpg",
    civic: "https://upload.wikimedia.org/wikipedia/commons/7/7b/2022_Honda_Civic_LX_Sedan%2C_front_11.2.22.jpg",
    amaze: "https://upload.wikimedia.org/wikipedia/commons/8/87/2018_Honda_Amaze_VX_1.2.jpg",
    elevate: "https://upload.wikimedia.org/wikipedia/commons/f/fc/2023_Honda_Elevate_1.5_ZX_%28India%29_front_view.jpg"
  },
  BMWModels: {
    hero: "https://upload.wikimedia.org/wikipedia/commons/a/a3/BMW_M5_Competition_Facelift_IMG_3160.jpg",
    m5: "https://upload.wikimedia.org/wikipedia/commons/a/a3/BMW_M5_Competition_Facelift_IMG_3160.jpg",
    "3series": "https://upload.wikimedia.org/wikipedia/commons/9/91/2019_BMW_320d_M_Sport_Automatic_2.0_Front.jpg",
    "5series": "https://upload.wikimedia.org/wikipedia/commons/a/ad/2017_BMW_520d_M_Sport_Automatic_2.0_Front.jpg",
    x5: "https://upload.wikimedia.org/wikipedia/commons/7/76/BMW_X5_xDrive45e_eDrive_M_Sport_%28G05%29_%E2%80%93_Frontansicht%2C_6._Juni_2021%2C_D%C3%BCsseldorf.jpg",
    x1: "https://upload.wikimedia.org/wikipedia/commons/b/b8/BMW_iX1_xDrive30_%28U11%29_%E2%80%93_f_14042023.jpg",
    ix: "https://upload.wikimedia.org/wikipedia/commons/8/86/BMW_iX_xDrive50_%28I20%29_1X7A6224.jpg"
  },
  MercedesModels: {
    hero: "https://upload.wikimedia.org/wikipedia/commons/0/00/Mercedes-AMG_GT_C_Edition_50_%28C_190%29_%E2%80%93_Frontansicht%2C_2._September_2018%2C_D%C3%BCsseldorf.jpg",
    amggt: "https://upload.wikimedia.org/wikipedia/commons/0/00/Mercedes-AMG_GT_C_Edition_50_%28C_190%29_%E2%80%93_Frontansicht%2C_2._September_2018%2C_D%C3%BCsseldorf.jpg",
    sclass: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Mercedes-Benz_S_500_4MATIC_%28W_223%29_%E2%80%93_f_08042021.jpg",
    eclass: "https://upload.wikimedia.org/wikipedia/commons/a/a2/2016_Mercedes-Benz_E220d_AMG_Line_Premium_Automatic_2.0_Front.jpg",
    cclass: "https://upload.wikimedia.org/wikipedia/commons/3/30/Mercedes-Benz_C_200_AMG_Line_%28W_206%29_%E2%80%93_f_09052022.jpg",
    gle: "https://upload.wikimedia.org/wikipedia/commons/8/80/Mercedes-Benz_GLE_450_4MATIC_%28V_167%29_%E2%80%93_Frontansicht%2C_18._Mai_2019%2C_D%C3%BCsseldorf.jpg"
  },
  PorscheModels: {
    hero: "https://upload.wikimedia.org/wikipedia/commons/7/73/Porsche_992_Carrera_S_at_Retro_Classics_2020_IMG_0051.jpg",
    "911": "https://upload.wikimedia.org/wikipedia/commons/7/73/Porsche_992_Carrera_S_at_Retro_Classics_2020_IMG_0051.jpg",
    cayenne: "https://upload.wikimedia.org/wikipedia/commons/2/20/Porsche_Cayenne_S_%28E3%29_%E2%80%93_Frontansicht%2C_25._April_2018%2C_Messe_D%C3%BCsseldorf.jpg",
    panamera: "https://upload.wikimedia.org/wikipedia/commons/2/23/Porsche_Panamera_4S_%28971%29_%E2%80%93_Frontansicht%2C_16._Dezember_2017%2C_D%C3%BCsseldorf.jpg",
    taycan: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Porsche_Taycan_Turbo_S_%281%29.jpg"
  },
  AudiModels: {
    hero: "https://upload.wikimedia.org/wikipedia/commons/2/29/2016_Audi_R8_Plus_Quattro_V10_Automatic_5.2.jpg",
    r8: "https://upload.wikimedia.org/wikipedia/commons/2/29/2016_Audi_R8_Plus_Quattro_V10_Automatic_5.2.jpg",
    a6: "https://upload.wikimedia.org/wikipedia/commons/f/fb/2019_Audi_A6_S_Line_TDI_MHEV_S-A_2.0_Front.jpg",
    q7: "https://upload.wikimedia.org/wikipedia/commons/f/f6/2016_Audi_Q7_S_Line_TDI_Quattro_Automatic_3.0.jpg",
    a4: "https://upload.wikimedia.org/wikipedia/commons/5/5f/2016_Audi_A4_Sport_TDI_Ultra_1.9.jpg",
    q5: "https://upload.wikimedia.org/wikipedia/commons/0/07/2018_Audi_Q5_S_Line_TDI_Quattro_S-A_2.0_Front.jpg",
    etron: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Audi_e-tron_GT_IAA_2021_1X7A0063.jpg"
  },
  KiaModels: {
    hero: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Kia_EV6_CV_GT-Line_AWD_Yacht_Blue_%282%29.jpg",
    seltos: "https://upload.wikimedia.org/wikipedia/commons/4/40/Kia_Seltos_SP2_EX_1.6_GDI_2020_%2850444369018%29.jpg",
    sonet: "https://upload.wikimedia.org/wikipedia/commons/d/dc/2020_Kia_Sonet_GTX%2B_%28India%29_front_view.png",
    carens: "https://upload.wikimedia.org/wikipedia/commons/6/6c/2022_Kia_Carens_1.4_Premium_%28India%29_front_view.jpg",
    ev6: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Kia_EV6_CV_GT-Line_AWD_Yacht_Blue_%282%29.jpg"
  },
  VolkswagenModels: {
    hero: "https://upload.wikimedia.org/wikipedia/commons/0/02/2022_Volkswagen_Virtus_Highline_%28India%29_front_view.png",
    virtus: "https://upload.wikimedia.org/wikipedia/commons/0/02/2022_Volkswagen_Virtus_Highline_%28India%29_front_view.png",
    taigun: "https://upload.wikimedia.org/wikipedia/commons/8/8c/2021_Volkswagen_Taigun_%28India%29_front_view.png",
    tiguan: "https://upload.wikimedia.org/wikipedia/commons/0/0d/2021_Volkswagen_Tiguan_R-Line_front_view.png"
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
    // Replace both aeplcdn URLs and any Unsplash URLs in the modelsData array
    const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?image:\\s*)"([^"]+)"`, 'g');
    content = content.replace(regex, `$1"${imageUrl}"`);
  }
  
  // Replace Hero Image
  // Find the FIRST <img ...> in the file that isn't inside modelsData and has src="..."
  // Usually it looks like <img alt="BMW M5" className="..." src="..." />
  // We can just use a regex to replace the src attribute of the first img tag after "main className" or similar.
  // The hero section image is inside the 'Hero Section' comment block.
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

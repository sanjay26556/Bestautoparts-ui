const fs = require('fs');
const path = require('path');

const baseWikiUrl = "https://commons.wikimedia.org/wiki/Special:FilePath/";

const models = {
  MarutiSuzukiModels: {
    hero: "2018_Suzuki_Swift_SZ5_Boosterjet_MHEV_1.0_Front.jpg?width=800",
    swift: "2018_Suzuki_Swift_SZ5_Boosterjet_MHEV_1.0_Front.jpg?width=800",
    baleno: "2022_Maruti_Suzuki_Baleno_Alpha_(India)_front_view.png?width=800",
    brezza: "2022_Maruti_Suzuki_Brezza_ZXi+_(India)_front_view.jpg?width=800",
    grandvitara: "2022_Suzuki_Grand_Vitara_(India)_front_view.jpg?width=800"
  },
  TataModels: {
    hero: "2019_Tata_Harrier.jpg?width=800",
    nexon: "Tata_Nexon_XZA%2B_O_Dark_Edition_Front_Left.jpg?width=800",
    punch: "2021_Tata_Punch_Creative_(India)_front_view_02.png?width=800",
    safari: "2021_Tata_Safari_XZA%2B_front_view.png?width=800",
    harrier: "2019_Tata_Harrier.jpg?width=800"
  },
  MahindraModels: {
    hero: "2021_Mahindra_XUV700_AX7_(India)_front_view.png?width=800",
    xuv700: "2021_Mahindra_XUV700_AX7_(India)_front_view.png?width=800",
    scorpio: "2022_Mahindra_Scorpio-N_Z8_(India)_front_view_01.png?width=800",
    thar: "2020_Mahindra_Thar_LX_(India)_front_view.png?width=800",
    bolero: "Mahindra_Bolero_Neo_Front.jpg?width=800",
    xuv3xo: "Mahindra_XUV300.jpg?width=800"
  },
  HyundaiModels: {
    hero: "Hyundai_Tucson_(NX4)_EX_IMG_4966.jpg?width=800",
    tucson: "Hyundai_Tucson_(NX4)_EX_IMG_4966.jpg?width=800",
    creta: "2020_Hyundai_Creta_1.4_SX_(O)_(India)_front_view_01.png?width=800",
    i20: "2020_Hyundai_i20_1.0_T-GDi_MHEV_Premium_front.jpg?width=800",
    verna: "2023_Hyundai_Verna_1.5_SX_(India)_front_view.png?width=800"
  },
  ToyotaModels: {
    hero: "2021_Toyota_Fortuner_2.8_VRZ_4WD_wagon_(GUN156R;_02-23-2022),_South_Tangerang.jpg?width=800",
    fortuner: "2021_Toyota_Fortuner_2.8_VRZ_4WD_wagon_(GUN156R;_02-23-2022),_South_Tangerang.jpg?width=800",
    camry: "2018_Toyota_Camry_(ASV70R)_Ascent_sedan_(2018-08-27)_01.jpg?width=800",
    innovacrysta: "2021_Toyota_Kijang_Innova_2.0_V_(TGN140R;_02-09-2022),_South_Tangerang.jpg?width=800",
    glanza: "2022_Toyota_Glanza_V_(India)_front_view_01.png?width=800"
  },
  HondaModels: {
    hero: "2020_Honda_City_SV.jpg?width=800",
    city: "2020_Honda_City_SV.jpg?width=800",
    civic: "2022_Honda_Civic_LX_Sedan,_front_11.2.22.jpg?width=800",
    amaze: "2018_Honda_Amaze_VX_1.2.jpg?width=800",
    elevate: "2023_Honda_Elevate_1.5_ZX_(India)_front_view.jpg?width=800"
  },
  BMWModels: {
    hero: "BMW_M5_Competition_Facelift_IMG_3160.jpg?width=800",
    m5: "BMW_M5_Competition_Facelift_IMG_3160.jpg?width=800",
    "3series": "2019_BMW_320d_M_Sport_Automatic_2.0_Front.jpg?width=800",
    "5series": "2017_BMW_520d_M_Sport_Automatic_2.0_Front.jpg?width=800",
    x5: "BMW_X5_xDrive45e_eDrive_M_Sport_(G05)_–_Frontansicht,_6._Juni_2021,_Düsseldorf.jpg?width=800",
    x1: "BMW_iX1_xDrive30_(U11)_–_f_14042023.jpg?width=800",
    ix: "BMW_iX_xDrive50_(I20)_1X7A6224.jpg?width=800"
  },
  MercedesModels: {
    hero: "Mercedes-AMG_GT_C_Edition_50_(C_190)_–_Frontansicht,_2._September_2018,_Düsseldorf.jpg?width=800",
    amggt: "Mercedes-AMG_GT_C_Edition_50_(C_190)_–_Frontansicht,_2._September_2018,_Düsseldorf.jpg?width=800",
    sclass: "Mercedes-Benz_S_500_4MATIC_(W_223)_–_f_08042021.jpg?width=800",
    eclass: "2016_Mercedes-Benz_E220d_AMG_Line_Premium_Automatic_2.0_Front.jpg?width=800",
    cclass: "Mercedes-Benz_C_200_AMG_Line_(W_206)_–_f_09052022.jpg?width=800",
    gle: "Mercedes-Benz_GLE_450_4MATIC_(V_167)_–_Frontansicht,_18._Mai_2019,_Düsseldorf.jpg?width=800"
  },
  PorscheModels: {
    hero: "Porsche_992_Carrera_S_at_Retro_Classics_2020_IMG_0051.jpg?width=800",
    "911": "Porsche_992_Carrera_S_at_Retro_Classics_2020_IMG_0051.jpg?width=800",
    cayenne: "Porsche_Cayenne_S_(E3)_–_Frontansicht,_25._April_2018,_Messe_Düsseldorf.jpg?width=800",
    panamera: "Porsche_Panamera_4S_(971)_–_Frontansicht,_16._Dezember_2017,_Düsseldorf.jpg?width=800",
    taycan: "Porsche_Taycan_Turbo_S_(1).jpg?width=800"
  },
  AudiModels: {
    hero: "2016_Audi_R8_Plus_Quattro_V10_Automatic_5.2.jpg?width=800",
    r8: "2016_Audi_R8_Plus_Quattro_V10_Automatic_5.2.jpg?width=800",
    a6: "2019_Audi_A6_S_Line_TDI_MHEV_S-A_2.0_Front.jpg?width=800",
    q7: "2016_Audi_Q7_S_Line_TDI_Quattro_Automatic_3.0.jpg?width=800",
    a4: "2016_Audi_A4_Sport_TDI_Ultra_1.9.jpg?width=800",
    q5: "2018_Audi_Q5_S_Line_TDI_Quattro_S-A_2.0_Front.jpg?width=800",
    etron: "Audi_e-tron_GT_IAA_2021_1X7A0063.jpg?width=800"
  },
  KiaModels: {
    hero: "Kia_EV6_CV_GT-Line_AWD_Yacht_Blue_(2).jpg?width=800",
    seltos: "Kia_Seltos_SP2_EX_1.6_GDI_2020_(50444369018).jpg?width=800",
    sonet: "2020_Kia_Sonet_GTX%2B_(India)_front_view.png?width=800",
    carens: "2022_Kia_Carens_1.4_Premium_(India)_front_view.jpg?width=800",
    ev6: "Kia_EV6_CV_GT-Line_AWD_Yacht_Blue_(2).jpg?width=800"
  },
  VolkswagenModels: {
    hero: "2022_Volkswagen_Virtus_Highline_(India)_front_view.png?width=800",
    virtus: "2022_Volkswagen_Virtus_Highline_(India)_front_view.png?width=800",
    taigun: "2021_Volkswagen_Taigun_(India)_front_view.png?width=800",
    tiguan: "2021_Volkswagen_Tiguan_R-Line_front_view.png?width=800"
  }
};

const pagesDir = path.join(__dirname, 'src', 'pages');

Object.keys(models).forEach(filePrefix => {
  const filePath = path.join(pagesDir, `${filePrefix}.jsx`);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const brandData = models[filePrefix];
  
  // Replace card images (mapped by id)
  for (const [id, filename] of Object.entries(brandData)) {
    if (id === 'hero') continue;
    const fullUrl = baseWikiUrl + filename;
    const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?image:\\s*)"([^"]+)"`, 'g');
    content = content.replace(regex, `$1"${fullUrl}"`);
  }
  
  // Replace Hero Image
  const heroUrl = baseWikiUrl + brandData.hero;
  content = content.replace(/({\/\* Hero Section \*\/(?:[\s\S]*?)<img[^>]*src=")([^"]+)("[^>]*>)/i, (match, p1, p2, p3) => {
    return p1 + heroUrl + p3;
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated images in ${filePrefix}.jsx`);
});

// Update Brands.jsx images
const brandsPath = path.join(pagesDir, 'Brands.jsx');
if (fs.existsSync(brandsPath)) {
  let content = fs.readFileSync(brandsPath, 'utf8');
  const brandToImg = {
    'maruti-suzuki': baseWikiUrl + models.MarutiSuzukiModels.swift,
    'tata': baseWikiUrl + models.TataModels.nexon,
    'mahindra': baseWikiUrl + models.MahindraModels.xuv700,
    'hyundai': baseWikiUrl + models.HyundaiModels.creta,
    'toyota': baseWikiUrl + models.ToyotaModels.fortuner,
    'honda': baseWikiUrl + models.HondaModels.city,
    'bmw': baseWikiUrl + models.BMWModels.m5,
    'mercedes': baseWikiUrl + models.MercedesModels.amggt,
    'porsche': baseWikiUrl + models.PorscheModels['911'],
    'audi': baseWikiUrl + models.AudiModels.r8,
    'volkswagen': baseWikiUrl + models.VolkswagenModels.virtus,
    'kia': baseWikiUrl + models.KiaModels.seltos
  };
  
  for (const [id, fullUrl] of Object.entries(brandToImg)) {
    const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?image:\\s*)"([^"]+)"`, 'g');
    content = content.replace(regex, `$1"${fullUrl}"`);
  }
  fs.writeFileSync(brandsPath, content, 'utf8');
  console.log('Updated Brands.jsx images');
}

// Update Home.jsx images
const homePath = path.join(pagesDir, 'Home.jsx');
if (fs.existsSync(homePath)) {
  let content = fs.readFileSync(homePath, 'utf8');
  const homeImgs = {
    'BMW': baseWikiUrl + models.BMWModels.m5,
    'Audi': baseWikiUrl + models.AudiModels.r8,
    'Mercedes': baseWikiUrl + models.MercedesModels.amggt,
    'Porsche': baseWikiUrl + models.PorscheModels['911'],
    'Honda': baseWikiUrl + models.HondaModels.city,
    'Mahindra': baseWikiUrl + models.MahindraModels.xuv700
  };
  
  for (const [alt, fullUrl] of Object.entries(homeImgs)) {
    const regex = new RegExp(`(<img\\s+alt="${alt}"[^>]+src=")[^"]+(")`, 'g');
    content = content.replace(regex, `$1${fullUrl}$2`);
  }
  fs.writeFileSync(homePath, content, 'utf8');
  console.log('Updated Home.jsx images');
}

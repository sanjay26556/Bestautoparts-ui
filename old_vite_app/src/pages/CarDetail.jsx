import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

// Comprehensive Database of Brand Models and their Spares
const vehicleDatabase = {
  audi: {
    brandName: "Audi",
    models: {
      r8: {
        name: "Audi R8",
        subtitle: "The Ultimate Racing Bred Supercar.",
        category: "Supercar",
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "5.2L V10 FSI Naturally Aspirated",
          power: "602 bhp @ 8,000 rpm",
          torque: "560 Nm @ 6,500 rpm",
          transmission: "7-Speed S-Tronic Dual-Clutch",
          fuel: "Petrol"
        },
        variants: ["V10 Performance RWD", "V10 Performance Quattro", "Decennium Edition"]
      },
      a6: {
        name: "Audi A6",
        subtitle: "High-Tech Luxury Executive Sedan.",
        category: "Luxury Sedan",
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.0L TFSI Inline-4 Turbocharged",
          power: "261 bhp @ 5,200 rpm",
          torque: "370 Nm @ 1,600 rpm",
          transmission: "7-Speed S-Tronic Automatic",
          fuel: "Petrol (Mild Hybrid)"
        },
        variants: ["Premium Plus 45 TFSI", "Technology 45 TFSI"]
      },
      q7: {
        name: "Audi Q7",
        subtitle: "Supreme Command in Luxury 7-Seater.",
        category: "Premium SUV",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "3.0L V6 TFSI Twin-Scroll Turbo",
          power: "335 bhp @ 5,000 rpm",
          torque: "500 Nm @ 1,370 rpm",
          transmission: "8-Speed Tiptronic Automatic",
          fuel: "Petrol"
        },
        variants: ["Premium Plus 55 TFSI", "Technology 55 TFSI"]
      },
      a4: {
        name: "Audi A4",
        subtitle: "Perfect Balance of Sport and Comfort.",
        category: "Executive Sedan",
        image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.0L TFSI Turbocharged I4",
          power: "190 bhp @ 4,200 rpm",
          torque: "320 Nm @ 1,450 rpm",
          transmission: "7-Speed S-Tronic",
          fuel: "Petrol"
        },
        variants: ["Premium", "Premium Plus", "Technology"]
      },
      q5: {
        name: "Audi Q5",
        subtitle: "Premium Versatility for Every Journey.",
        category: "Premium SUV",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.0L TFSI Inline-4 Turbo",
          power: "249 bhp @ 5,000 rpm",
          torque: "370 Nm @ 1,600 rpm",
          transmission: "7-Speed S-Tronic",
          fuel: "Petrol"
        },
        variants: ["Premium Plus", "Technology"]
      },
      etron: {
        name: "Audi e-tron GT",
        subtitle: "Pure Electric Performance Art.",
        category: "Electric Supercar",
        image: "https://images.unsplash.com/photo-1614026480209-cd9cd33c18ee?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "Dual Electric Motors with AWD",
          power: "522 bhp (Boost Mode)",
          torque: "630 Nm @ 0 rpm",
          transmission: "2-Speed Automatic",
          fuel: "Electric"
        },
        variants: ["Quattro Premium Plus", "Quattro Prestige", "RS e-tron GT"]
      }
    }
  },
  bmw: {
    brandName: "BMW",
    models: {
      m5: {
        name: "BMW M5",
        subtitle: "Pure Track Performance Sealed in a Sedan.",
        category: "Super Sedan",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "4.4L TwinPower V8 Bi-Turbocharged",
          power: "617 bhp @ 6,000 rpm",
          torque: "750 Nm @ 1,800 rpm",
          transmission: "8-Speed M Steptronic",
          fuel: "Petrol"
        },
        variants: ["Competition", "CS Edition"]
      },
      "3series": {
        name: "BMW 3 Series",
        subtitle: "The Benchmark for Sports Sedans.",
        category: "Sports Sedan",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.0L TwinPower Turbo Inline-4",
          power: "258 bhp @ 5,000 rpm",
          torque: "400 Nm @ 1,550 rpm",
          transmission: "8-Speed Steptronic Sport",
          fuel: "Petrol"
        },
        variants: ["330Li M Sport", "330Li Grand Limousine"]
      },
      "5series": {
        name: "BMW 5 Series",
        subtitle: "Business Athlete Sedan.",
        category: "Luxury Sedan",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.0L TwinPower Turbo I4",
          power: "248 bhp @ 5,200 rpm",
          torque: "350 Nm @ 1,450 rpm",
          transmission: "8-Speed Steptronic",
          fuel: "Petrol"
        },
        variants: ["530i M Sport", "520d Luxury Line"]
      },
      x5: {
        name: "BMW X5",
        subtitle: "The Boss of Luxury SUVs.",
        category: "Premium SUV",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "3.0L TwinPower Turbo Inline-6",
          power: "375 bhp @ 5,500 rpm",
          torque: "520 Nm @ 1,850 rpm",
          transmission: "8-Speed Steptronic",
          fuel: "Petrol"
        },
        variants: ["xDrive40i M Sport", "xDrive30d xLine"]
      },
      x1: {
        name: "BMW X1",
        subtitle: "Spirited Performance in a Compact Package.",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.0L TwinPower Turbo Inline-4",
          power: "241 bhp @ 4,500 rpm",
          torque: "400 Nm @ 1,500 rpm",
          transmission: "7-Speed Dual-Clutch Automatic",
          fuel: "Petrol"
        },
        variants: ["sDrive20i M Sport", "xDrive28i"]
      },
      ix: {
        name: "BMW iX",
        subtitle: "Pioneering a New Age of Electrified Utility.",
        category: "Electric SUV",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "Dual High-Excitation Electric Motors",
          power: "516 bhp (Combined)",
          torque: "765 Nm @ 0 rpm",
          transmission: "Single-Speed Automatic",
          fuel: "Electric"
        },
        variants: ["xDrive40", "xDrive50", "M60"]
      }
    }
  },
  mercedes: {
    brandName: "Mercedes-Benz",
    models: {
      amggt: {
        name: "Mercedes-AMG GT",
        subtitle: "Driving Performance in Exquisite Form.",
        category: "Supercar",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "4.0L V8 Biturbo AMG handcrafted",
          power: "523 bhp @ 5,500 rpm",
          torque: "670 Nm @ 2,100 rpm",
          transmission: "7-Speed AMG SPEEDSHIFT DCT",
          fuel: "Petrol"
        },
        variants: ["AMG GT Coupe", "AMG GT R Roadster", "AMG GT Black Series"]
      },
      sclass: {
        name: "Mercedes-Benz S-Class",
        subtitle: "The Pinnacle of Automotive Luxury.",
        category: "Luxury Sedan",
        image: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "3.0L Turbocharged Inline-6",
          power: "362 bhp @ 5,500 rpm",
          torque: "500 Nm @ 1,600 rpm",
          transmission: "9G-TRONIC 9-Speed Automatic",
          fuel: "Petrol"
        },
        variants: ["S 350d", "S 450 4MATIC"]
      },
      eclass: {
        name: "Mercedes-Benz E-Class",
        subtitle: "Masterpiece of Intelligence.",
        category: "Premium Sedan",
        image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.0L Turbocharged I4",
          power: "194 bhp @ 4,000 rpm",
          torque: "320 Nm @ 1,450 rpm",
          transmission: "9G-TRONIC",
          fuel: "Petrol / Diesel"
        },
        variants: ["E 200 Expression", "E 220d Exclusive", "E 350d AMG Line"]
      },
      cclass: {
        name: "Mercedes-Benz C-Class",
        subtitle: "Dynamic Sophistication in Motion.",
        category: "Premium Sedan",
        image: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.5L Turbocharged Inline-4",
          power: "201 bhp @ 5,800 rpm",
          torque: "300 Nm @ 1,800 rpm",
          transmission: "9G-TRONIC",
          fuel: "Petrol (Mild Hybrid)"
        },
        variants: ["C 200 Avantgarde", "C 220d Avantgarde"]
      },
      gle: {
        name: "Mercedes-Benz GLE",
        subtitle: "Commanding Power with Premium Space.",
        category: "Luxury SUV",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "3.0L Turbocharged Diesel Inline-6",
          power: "362 bhp @ 4,000 rpm",
          torque: "750 Nm @ 1,350 rpm",
          transmission: "9G-TRONIC",
          fuel: "Diesel"
        },
        variants: ["GLE 300d 4MATIC", "GLE 450d AMG Line"]
      }
    }
  },
  porsche: {
    brandName: "Porsche",
    models: {
      "911": {
        name: "Porsche 911",
        subtitle: "The Eternal Sports Car Icon.",
        category: "Sports Car",
        image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "3.0L Twin-Turbocharged Flat-6",
          power: "379 bhp @ 6,500 rpm",
          torque: "450 Nm @ 1,950 rpm",
          transmission: "8-speed Porsche Doppelkupplung (PDK)",
          fuel: "Petrol"
        },
        variants: ["Carrera", "Carrera S", "GT3 RS", "Turbo S"]
      },
      cayenne: {
        name: "Porsche Cayenne",
        subtitle: "Sports Car Performance for Five.",
        category: "Premium SUV",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "3.0L Turbocharged V6 Engine",
          power: "348 bhp @ 5,400 rpm",
          torque: "500 Nm @ 1,450 rpm",
          transmission: "8-speed Tiptronic S",
          fuel: "Petrol"
        },
        variants: ["Cayenne SUV", "Cayenne Coupe", "Cayenne E-Hybrid"]
      },
      panamera: {
        name: "Porsche Panamera",
        subtitle: "Pure Racing Soul Configured for Four.",
        category: "Sports Sedan",
        image: "https://images.unsplash.com/photo-1611245781467-33e1431f478a?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.9L Twin-Turbocharged V6",
          power: "348 bhp @ 5,400 rpm",
          torque: "500 Nm @ 1,900 rpm",
          transmission: "8-speed PDK Automatic",
          fuel: "Petrol / E-Hybrid"
        },
        variants: ["Panamera Standard", "Panamera 4 E-Hybrid"]
      },
      taycan: {
        name: "Porsche Taycan",
        subtitle: "Electrified Performance Art in Motion.",
        category: "Electric Sedan",
        image: "https://images.unsplash.com/photo-1611245798538-4e1b3cb1c1d0?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "Permanent Magnet Synchronous Motors",
          power: "402 bhp (Overboost)",
          torque: "345 Nm @ 0 rpm",
          transmission: "2-Speed Automatic on Rear Axle",
          fuel: "Electric"
        },
        variants: ["Taycan Base", "Taycan 4S", "Taycan Turbo S"]
      }
    }
  },
  toyota: {
    brandName: "Toyota",
    models: {
      fortuner: {
        name: "Toyota Fortuner",
        subtitle: "The Undisputed King of the Off-Road.",
        category: "Premium SUV",
        image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.8L D-4D Turbocharged Diesel",
          power: "201 bhp @ 3,400 rpm",
          torque: "500 Nm @ 1,600 rpm",
          transmission: "6-Speed Automatic / Manual",
          fuel: "Diesel"
        },
        variants: ["2.8L 4x2 MT", "2.8L 4x4 AT", "Legender 4x4 AT", "GR Sport"]
      },
      camry: {
        name: "Toyota Camry",
        subtitle: "Premium Hybrid Sophistication.",
        category: "Luxury Sedan",
        image: "https://images.unsplash.com/photo-1621007947382-cc34a621123a?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.5L Dynamic Force Hybrid 4-Cylinder",
          power: "215 bhp (Combined Hybrid System)",
          torque: "221 Nm @ 3,600 rpm",
          transmission: "e-CVT Electronically Controlled",
          fuel: "Petrol Hybrid"
        },
        variants: ["Camry 2.5L Hybrid"]
      },
      innovacrysta: {
        name: "Toyota Innova Crysta",
        subtitle: "Unmatched Comfort, Unrivalled Durability.",
        category: "Premium MPV",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.4L 2GD-FTV Turbocharged I4",
          power: "148 bhp @ 3,400 rpm",
          torque: "343 Nm @ 1,400 rpm",
          transmission: "5-Speed Manual Transmission",
          fuel: "Diesel"
        },
        variants: ["G-SLF 7-Seater", "GX 7-Seater", "VX 8-Seater", "ZX 7-Seater"]
      },
      glanza: {
        name: "Toyota Glanza",
        subtitle: "Hatchback Elegance Sourced with Efficiency.",
        category: "Premium Hatchback",
        image: "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.2L K-Series Dual Jet Engine",
          power: "89 bhp @ 6,000 rpm",
          torque: "113 Nm @ 4,400 rpm",
          transmission: "5-Speed AMT / Manual",
          fuel: "Petrol / CNG"
        },
        variants: ["G manual", "V AMT", "S CNG"]
      }
    }
  },
  honda: {
    brandName: "Honda",
    models: {
      city: {
        name: "Honda City",
        subtitle: "The Ultimate Premium Sedan.",
        category: "Sedan",
        image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.5L i-VTEC DOHC 4-Cylinder",
          power: "119 bhp @ 6,600 rpm",
          torque: "145 Nm @ 4,300 rpm",
          transmission: "6-Speed Manual / 7-Speed CVT",
          fuel: "Petrol"
        },
        variants: ["SV", "V", "VX", "ZX", "e:HEV Hybrid"]
      },
      civic: {
        name: "Honda Civic",
        subtitle: "Aggressive Design Meets Dynamic Response.",
        category: "Premium Sedan",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.8L i-VTEC / 1.6L i-DTEC",
          power: "140 bhp @ 6,500 rpm",
          torque: "174 Nm @ 4,300 rpm",
          transmission: "CVT / 6-Speed Manual",
          fuel: "Petrol / Diesel"
        },
        variants: ["V CVT Petrol", "VX CVT Petrol", "ZX CVT Petrol", "ZX MT Diesel"]
      },
      amaze: {
        name: "Honda Amaze",
        subtitle: "Smart Styling with Solid Reliability.",
        category: "Compact Sedan",
        image: "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.2L i-VTEC SOHC 4-Cylinder",
          power: "89 bhp @ 6,000 rpm",
          torque: "110 Nm @ 4,800 rpm",
          transmission: "5-Speed MT / CVT Automatic",
          fuel: "Petrol"
        },
        variants: ["E manual", "S CVT", "VX manual"]
      },
      elevate: {
        name: "Honda Elevate",
        subtitle: "The Bold, Spacious Urban SUV.",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.5L i-VTEC DOHC Petrol Engine",
          power: "119 bhp @ 6,600 rpm",
          torque: "145 Nm @ 4,300 rpm",
          transmission: "6-Speed MT / 7-Speed CVT",
          fuel: "Petrol"
        },
        variants: ["V manual", "VX CVT", "ZX CVT"]
      }
    }
  },
  hyundai: {
    brandName: "Hyundai",
    models: {
      tucson: {
        name: "Hyundai Tucson",
        subtitle: "Premium Crossover SUV Sensation.",
        category: "Premium SUV",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.0L CRDi Turbocharged Diesel",
          power: "184 bhp @ 4,000 rpm",
          torque: "416 Nm @ 2,000 rpm",
          transmission: "8-Speed Torque Converter AT",
          fuel: "Diesel / Petrol"
        },
        variants: ["Platinum 2.0 AT", "Signature 2.0 AT AWD"]
      },
      creta: {
        name: "Hyundai Creta",
        subtitle: "The Masterpiece Crossover.",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.5L CRDi Diesel / 1.5L MPi Petrol",
          power: "113 bhp @ 4,000 rpm",
          torque: "250 Nm @ 1,500 rpm",
          transmission: "6-Speed Manual / IVT / 6-Speed AT",
          fuel: "Petrol / Diesel"
        },
        variants: ["EX", "S", "SX", "SX(O)"]
      },
      i20: {
        name: "Hyundai i20",
        subtitle: "The Stylish Premium Hatchback.",
        category: "Hatchback",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.2L Kappa Petrol Engine",
          power: "82 bhp @ 6,000 rpm",
          torque: "115 Nm @ 4,200 rpm",
          transmission: "5-Speed MT / Intelligent Variable Transmission",
          fuel: "Petrol"
        },
        variants: ["Magna MT", "Sportz IVT", "Asta (O) MT"]
      },
      verna: {
        name: "Hyundai Verna",
        subtitle: "Futuristic Design meets Sensuous Sportiness.",
        category: "Sedan",
        image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.5L Turbo GDi Petrol Engine",
          power: "158 bhp @ 5,500 rpm",
          torque: "253 Nm @ 1,500 rpm",
          transmission: "7-Speed Dual Clutch AT / 6-Speed MT",
          fuel: "Petrol"
        },
        variants: ["S turbo manual", "SX manual", "SX (O) DCT"]
      }
    }
  },
  kia: {
    brandName: "Kia",
    models: {
      seltos: {
        name: "Kia Seltos",
        subtitle: "Badass Design Meets Smart Connected Tech.",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1632245889027-ea2e6a7a50e1?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.5L CRDi VGT Clean Diesel",
          power: "114 bhp @ 4,000 rpm",
          torque: "250 Nm @ 1,500 rpm",
          transmission: "6-Speed Automatic / 6-Speed iMT",
          fuel: "Diesel / Turbo Petrol"
        },
        variants: ["HTE", "HTK", "HTX", "GTX+", "X-Line"]
      },
      sonet: {
        name: "Kia Sonet",
        subtitle: "Muscular Styling Loaded with Smart Gadgets.",
        category: "Compact SUV",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.0L Turbocharged GDi Petrol",
          power: "118 bhp @ 6,000 rpm",
          torque: "172 Nm @ 1,500 rpm",
          transmission: "7-speed DCT / 6-speed iMT",
          fuel: "Petrol / Diesel"
        },
        variants: ["HTX iMT", "GTX Plus DCT", "X-Line AT"]
      },
      carens: {
        name: "Kia Carens",
        subtitle: "Premium 3-Row Seating Reimagined.",
        category: "MPV",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.5L Turbocharged CRDi Diesel",
          power: "114 bhp @ 4,000 rpm",
          torque: "250 Nm @ 1,500 rpm",
          transmission: "6-speed Torque Converter AT / MT",
          fuel: "Diesel / Petrol"
        },
        variants: ["Premium 7-seater", "Prestige Plus iMT", "Luxury Plus DCT"]
      },
      ev6: {
        name: "Kia EV6",
        subtitle: "A High-Performance Electric Revolution.",
        category: "Electric Crossover",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "Dual Electric Motors with AWD",
          power: "320 bhp @ 0 rpm",
          torque: "605 Nm @ 0 rpm",
          transmission: "Single-Speed Reduction Gear",
          fuel: "Electric"
        },
        variants: ["GT-Line RWD", "GT-Line AWD", "EV6 GT Performance"]
      }
    }
  },
  volkswagen: {
    brandName: "Volkswagen",
    models: {
      virtus: {
        name: "Volkswagen Virtus",
        subtitle: "The Thrill of German Engineering.",
        category: "Sedan",
        image: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.5L TSI EVO Turbo Petrol",
          power: "148 bhp @ 5,000 rpm",
          torque: "250 Nm @ 1,600 rpm",
          transmission: "7-Speed DSG Dual-Clutch / 6-Speed MT",
          fuel: "Petrol"
        },
        variants: ["Comfortline", "Highline", "Topline", "GT Plus DSG"]
      },
      taigun: {
        name: "Volkswagen Taigun",
        subtitle: "Playful Design Meets Safe Structure.",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.0L TSI Turbo Petrol Engine",
          power: "113 bhp @ 5,000 rpm",
          torque: "178 Nm @ 1,750 rpm",
          transmission: "6-Speed AT / 6-Speed MT",
          fuel: "Petrol"
        },
        variants: ["Highline MT", "Topline AT", "GT Plus DSG"]
      },
      tiguan: {
        name: "Volkswagen Tiguan",
        subtitle: "Pure Premium Command on All Terrains.",
        category: "Premium SUV",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.0L TSI Turbocharged I4",
          power: "187 bhp @ 4,200 rpm",
          torque: "320 Nm @ 1,500 rpm",
          transmission: "7-Speed DSG 4MOTION",
          fuel: "Petrol"
        },
        variants: ["Elegance 2.0 TSI"]
      }
    }
  },
  "maruti-suzuki": {
    brandName: "Maruti Suzuki",
    models: {
      swift: {
        name: "Maruti Suzuki Swift",
        subtitle: "The Sporty Hatchback Icon.",
        category: "Hatchback",
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.2L Z-Series 3-Cylinder Petrol",
          power: "80 bhp @ 5,700 rpm",
          torque: "112 Nm @ 4,300 rpm",
          transmission: "5-Speed MT / AMT Automatic",
          fuel: "Petrol / CNG"
        },
        variants: ["LXi manual", "VXi manual", "ZXi AMT", "ZXi+ manual"]
      },
      baleno: {
        name: "Maruti Suzuki Baleno",
        subtitle: "Modern Luxury Re-engineered.",
        category: "Premium Hatchback",
        image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.2L DualJet 4-Cylinder Petrol",
          power: "89 bhp @ 6,000 rpm",
          torque: "113 Nm @ 4,400 rpm",
          transmission: "5-Speed manual / AGS Automatic",
          fuel: "Petrol / CNG"
        },
        variants: ["Delta MT", "Zeta AGS", "Alpha manual"]
      },
      brezza: {
        name: "Maruti Suzuki Brezza",
        subtitle: "The Bold, Dynamic City SUV.",
        category: "Compact SUV",
        image: "https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.5L K15C Smart Hybrid I4",
          power: "102 bhp @ 6,000 rpm",
          torque: "136.8 Nm @ 4,400 rpm",
          transmission: "5-Speed MT / 6-Speed Torque Converter AT",
          fuel: "Petrol / CNG"
        },
        variants: ["VXi manual", "ZXi automatic", "ZXi+ manual"]
      },
      grandvitara: {
        name: "Maruti Suzuki Grand Vitara",
        subtitle: "The Premium Intelligent Hybrid SUV.",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.5L Intelligent Strong Hybrid",
          power: "114 bhp @ 5,500 rpm",
          torque: "141 Nm @ 4,400 rpm",
          transmission: "e-CVT / 6-Speed AT / 5-Speed MT",
          fuel: "Petrol Hybrid / CNG"
        },
        variants: ["Delta SmartHybrid MT", "Zeta+ Strong Hybrid", "Alpha AWD manual"]
      }
    }
  },
  tata: {
    brandName: "Tata Motors",
    models: {
      nexon: {
        name: "Tata Nexon",
        subtitle: "India's Best Selling Safety SUV.",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.2L Revotron Turbocharged Petrol",
          power: "118 bhp @ 5,500 rpm",
          torque: "170 Nm @ 1,750 rpm",
          transmission: "6-Speed MT / 6-Speed AMT / 7-Speed DCA",
          fuel: "Petrol / Diesel / EV"
        },
        variants: ["Smart MT", "Creative+ DCA", "Fearless+ S Diesel", "Nexon.EV Empowered"]
      },
      punch: {
        name: "Tata Punch",
        subtitle: "The Rugged, High-Altitude SUV.",
        category: "Compact SUV",
        image: "https://images.unsplash.com/photo-1638618830478-39c9d4c7edc3?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.2L Revotron 3-Cylinder Petrol",
          power: "87 bhp @ 6,000 rpm",
          torque: "115 Nm @ 3,250 rpm",
          transmission: "5-Speed MT / AMT Automatic",
          fuel: "Petrol / CNG / EV"
        },
        variants: ["Pure MT", "Adventure AMT", "Accomplished Dazzle", "Creative Flagship"]
      },
      safari: {
        name: "Tata Safari",
        subtitle: "The Magnificent Flagship SUV Legend.",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.0L Kryotec Turbocharged Diesel",
          power: "168 bhp @ 3,750 rpm",
          torque: "350 Nm @ 1,750 rpm",
          transmission: "6-Speed Automatic / 6-Speed Manual",
          fuel: "Diesel"
        },
        variants: ["Smart MT", "Pure+ AT", "Adventure+ AT", "Accomplished+ Dark Edition"]
      },
      harrier: {
        name: "Tata Harrier",
        subtitle: "Pure Command Performance on the Road.",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.0L Kryotec Diesel Engine",
          power: "168 bhp @ 3,750 rpm",
          torque: "350 Nm @ 1,750 rpm",
          transmission: "6-Speed AT / 6-Speed MT",
          fuel: "Diesel"
        },
        variants: ["Smart MT", "Adventure+ AT", "Fearless+ Dark Edition"]
      }
    }
  },
  mahindra: {
    brandName: "Mahindra",
    models: {
      xuv700: {
        name: "Mahindra XUV700",
        subtitle: "Sci-Fi Luxury SUV Command Center.",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1625217527288-93919c996509?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.2L mHawk Turbocharged Diesel",
          power: "182 bhp @ 3,500 rpm",
          torque: "450 Nm @ 1,750 rpm",
          transmission: "6-Speed Torque Converter AT / MT",
          fuel: "Diesel / Petrol"
        },
        variants: ["MX MT", "AX3 AT", "AX5 MT", "AX7 Luxury AT AWD"]
      },
      scorpio: {
        name: "Mahindra Scorpio N",
        subtitle: "The Big Daddy of SUVs.",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.2L mHawk Turbo Diesel Engine",
          power: "172 bhp @ 3,500 rpm",
          torque: "400 Nm @ 1,750 rpm",
          transmission: "6-Speed AT / 6-Speed MT with 4XPLOR",
          fuel: "Diesel / Petrol"
        },
        variants: ["Z2 MT", "Z4 AT", "Z8 Select", "Z8 L Luxury AT 4WD"]
      },
      thar: {
        name: "Mahindra Thar",
        subtitle: "The Ultimate Rugged Off-Road Companion.",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "2.0L mStallion Turbo Petrol / 2.2L mHawk Diesel",
          power: "150 bhp @ 5,000 rpm",
          torque: "320 Nm @ 1,500 rpm",
          transmission: "6-speed MT / 6-speed AT with 4x4",
          fuel: "Petrol / Diesel"
        },
        variants: ["AX (O) 4WD MT", "LX RWD AT", "LX 4WD AT Convertible Hard Top"]
      },
      bolero: {
        name: "Mahindra Bolero",
        subtitle: "Utilitarian Heavy Duty Reliability.",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.5L mHawk75 Turbocharged I3",
          power: "75 bhp @ 3,600 rpm",
          torque: "210 Nm @ 1,600 rpm",
          transmission: "5-Speed Manual Transmission",
          fuel: "Diesel"
        },
        variants: ["B4 manual", "B6 manual", "B6 (O) manual", "Bolero Neo N10"]
      },
      xuv3xo: {
        name: "Mahindra XUV 3XO",
        subtitle: "Thrill of SUV, Smartness of City.",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?auto=format&fit=crop&q=80&w=800",
        specs: {
          engine: "1.2L mStallion Turbo Petrol TGDi",
          power: "129 bhp @ 5,000 rpm",
          torque: "230 Nm @ 1,500 rpm",
          transmission: "6-Speed AISIN Torque Converter AT / MT",
          fuel: "Petrol / Diesel"
        },
        variants: ["MX1 MT", "AX5 AT", "AX7 Luxury AT"]
      }
    }
  }
};

// Standard parts database to generate spares customized for the vehicle
const generateSparesForVehicle = (vehicleName) => {
  return [
    {
      id: `${vehicleName.toLowerCase().replace(/\s+/g, '-')}-brakes`,
      name: "Brembo Premium Braking Kit",
      brand: "BREMBO",
      price: 4850,
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=300",
      description: "High-friction carbon-ceramic brake pads engineered to exceed OEM durability and temperature standards.",
      category: "Brakes"
    },
    {
      id: `${vehicleName.toLowerCase().replace(/\s+/g, '-')}-oilfilter`,
      name: "Bosch Premium Double-Filtration Oil Filter",
      brand: "BOSCH",
      price: 650,
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=300",
      description: "Advanced synthetic blend media captures 99% of engine wear contaminants, ensuring perfect lubrication flow.",
      category: "Filters"
    },
    {
      id: `${vehicleName.toLowerCase().replace(/\s+/g, '-')}-sparkplugs`,
      name: "NGK Laser Iridium Spark Plug (Set of 4)",
      brand: "NGK",
      price: 2450,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLG0w54ZGgdkZi9Y_LZj_pQadbE0eUJ9ntuAfNK8y_FbYWqTVTkx18zmm0EEN3lWMFAG4No13L3z7EmBlNmGzLevKSwAlLTVXCeTT0ijvG1TcEiiP74B-d0TtdV325D6GjLZpSosO-dnA-dSsscGltin2Exha9tfxHy3QvicoQxgIOTh83Ys0SWK40eh4tnxQxYeF4sd_CXwzq5xv0hGQgyyJtC0GxgLcnyc5mW8Nq8umoe2PjWIcqyz86hP4XnrJ2eXzaB0gB_bXe",
      description: "Laser-welded iridium electrode tips deliver ultimate spark precision, complete fuel ignition, and better throttle response.",
      category: "Engine Parts"
    },
    {
      id: `${vehicleName.toLowerCase().replace(/\s+/g, '-')}-airfilter`,
      name: "Bosch High-Flow Cabin Active Carbon Air Filter",
      brand: "BOSCH",
      price: 890,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxVGdg3Kc25V37Sg-sY1NbzSiU6EdW7-mV0CQ03MZdhCY0066tu1_fTr8FuZ4sbBgqLGothUy8pM1TsdMbUBXbC4W5ViNKl-YjmexmkES2ROyhEgzG28qe5O-28D_RYy5gl_1f6a_RsYCuEpqe0IWetBt02g8Lkm7qnCTcc47CDyY_hStgJsFr1KqmY6gI3ZPVNPvllzHmKGi9l1mL_cxQQPSiI_7NWXi1gpg9hpaJ-ZNQOmhup-ggYlBxBQqYT9McfqNWhqK8vmzF",
      description: "Active carbon layers block fine dust, pollen, exhaust smells, and airborne micro-particles from cabin vents.",
      category: "Filters"
    }
  ];
};

export default function CarDetail() {
  const { brand, carId } = useParams();
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [cartSuccess, setCartSuccess] = useState(null);

  // Retrieve Brand & Car Data
  const brandData = vehicleDatabase[brand];
  if (!brandData) {
    return (
      <div className="min-h-screen pt-36 text-center">
        <h1 className="text-display-md text-primary font-bold">Brand Not Found</h1>
        <p className="mt-4 text-on-surface-variant">The requested vehicle brand listing does not exist.</p>
        <Link to="/brands" className="mt-8 inline-block bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md">Return to Brands</Link>
      </div>
    );
  }

  const carData = brandData.models[carId];
  if (!carData) {
    return (
      <div className="min-h-screen pt-36 text-center">
        <h1 className="text-display-md text-primary font-bold">Model Not Found</h1>
        <p className="mt-4 text-on-surface-variant">The requested model '{carId}' could not be located.</p>
        <Link to={`/models/${brand}`} className="mt-8 inline-block bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md">View {brandData.brandName} Showroom</Link>
      </div>
    );
  }

  // Pre-select first variant on load if none selected
  const activeVariant = selectedVariant || carData.variants[0];

  const sparesList = generateSparesForVehicle(carData.name);

  const handleAddToCart = (part) => {
    // Mock local storage cart addition
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartItem = {
      id: part.id,
      name: part.name,
      brand: part.brand,
      price: `₹${part.price.toLocaleString()}`,
      qty: 1,
      image: part.image
    };
    
    // Check if exists, otherwise append
    const updatedCart = [...existingCart.filter(item => item.id !== part.id), cartItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    setCartSuccess(part.id);
    setTimeout(() => setCartSuccess(null), 2000);
  };

  return (
    <main className="min-h-screen pt-20 bg-background text-on-surface">
      {/* Dynamic Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-desktop py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Premium Showroom Car Picture */}
        <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-outline-variant/30 relative min-h-[450px] bg-surface-container-lowest shadow-lg">
          <img 
            alt={carData.name} 
            className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-500 hover:scale-[1.02]" 
            src={carData.image} 
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
            <span className="bg-secondary text-on-secondary px-3.5 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider mb-3 inline-block">
              {carData.category}
            </span>
            <h1 className="font-display-lg text-display-lg text-white mb-2 leading-tight">{carData.name}</h1>
            <p className="font-body-lg text-body-lg text-white/90">{carData.subtitle}</p>
          </div>
        </div>

        {/* Right Column: Variant Fitment Assurer */}
        <div className="lg:col-span-4 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
            <h2 className="font-headline-md text-headline-md text-primary font-bold">Select Variant</h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
            Choose your exact model specification to filter matching spares perfectly.
          </p>
          
          <div className="space-y-3">
            {carData.variants.map((v, idx) => (
              <button 
                key={idx} 
                onClick={() => setSelectedVariant(v)}
                className={`text-left w-full p-4 rounded-xl border transition-all flex justify-between items-center relative overflow-hidden ${activeVariant === v ? 'border-2 border-secondary bg-surface-container-low/60 shadow-sm' : 'border-outline-variant/40 hover:border-secondary/60 hover:bg-surface-container-low/20'}`}
              >
                {activeVariant === v && <div className="absolute inset-y-0 left-0 w-1.5 bg-secondary"></div>}
                <div>
                  <h3 className={`font-label-md text-label-md font-semibold ${activeVariant === v ? 'text-secondary' : 'text-primary'}`}>{v}</h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant/80 mt-1">{carData.specs.transmission} | {carData.specs.fuel}</p>
                </div>
                <span className={`material-symbols-outlined ${activeVariant === v ? 'text-secondary' : 'text-outline-variant'}`}>
                  {activeVariant === v ? 'check_circle' : 'chevron_right'}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Categorized Spares Grid */}
      <section className="max-w-container-max mx-auto px-margin-desktop py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Specs Bento Box */}
        <div className="lg:col-span-4 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6 border-b border-outline-variant/20 pb-4">
              <span className="material-symbols-outlined text-secondary text-[24px]">tune</span>
              <h2 className="font-headline-md text-headline-md text-primary font-bold">Tech Specifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                <span className="font-body-sm text-body-sm text-on-surface-variant font-semibold">Engine Spec</span>
                <span className="font-label-md text-label-md text-primary text-right font-medium">{carData.specs.engine}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                <span className="font-body-sm text-body-sm text-on-surface-variant font-semibold">Max Power</span>
                <span className="font-label-md text-label-md text-primary text-right font-medium">{carData.specs.power}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                <span className="font-body-sm text-body-sm text-on-surface-variant font-semibold">Max Torque</span>
                <span className="font-label-md text-label-md text-primary text-right font-medium">{carData.specs.torque}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                <span className="font-body-sm text-body-sm text-on-surface-variant font-semibold">Transmission</span>
                <span className="font-label-md text-label-md text-primary text-right font-medium">{carData.specs.transmission}</span>
              </div>
              <div className="flex justify-between items-center pb-3">
                <span className="font-body-sm text-body-sm text-on-surface-variant font-semibold">Fuel System</span>
                <span className="font-label-md text-label-md text-primary text-right font-medium">{carData.specs.fuel}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Categories systems Selection */}
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-md">
          <div className="flex items-center gap-2 mb-6 border-b border-outline-variant/20 pb-4">
            <span className="material-symbols-outlined text-secondary text-[24px]">category</span>
            <h2 className="font-headline-md text-headline-md text-primary font-bold">Browse Compatible Systems</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link to="/marketplace" className="bg-surface-container-low/50 hover:bg-secondary/10 hover:text-secondary rounded-xl p-6 border border-outline-variant/30 text-center transition-all flex flex-col items-center justify-center gap-3 group">
              <span className="material-symbols-outlined text-[36px] text-primary group-hover:text-secondary transition-colors">directions_car</span>
              <span className="font-label-md text-label-md text-primary font-semibold">Engine Parts</span>
            </Link>
            <Link to="/marketplace" className="bg-surface-container-low/50 hover:bg-secondary/10 hover:text-secondary rounded-xl p-6 border border-outline-variant/30 text-center transition-all flex flex-col items-center justify-center gap-3 group">
              <span className="material-symbols-outlined text-[36px] text-primary group-hover:text-secondary transition-colors">tire_repair</span>
              <span className="font-label-md text-label-md text-primary font-semibold">Braking</span>
            </Link>
            <Link to="/marketplace" className="bg-surface-container-low/50 hover:bg-secondary/10 hover:text-secondary rounded-xl p-6 border border-outline-variant/30 text-center transition-all flex flex-col items-center justify-center gap-3 group">
              <span className="material-symbols-outlined text-[36px] text-primary group-hover:text-secondary transition-colors">bolt</span>
              <span className="font-label-md text-label-md text-primary font-semibold">Electricals</span>
            </Link>
            <Link to="/marketplace" className="bg-surface-container-low/50 hover:bg-secondary/10 hover:text-secondary rounded-xl p-6 border border-outline-variant/30 text-center transition-all flex flex-col items-center justify-center gap-3 group">
              <span className="material-symbols-outlined text-[36px] text-primary group-hover:text-secondary transition-colors">build</span>
              <span className="font-label-md text-label-md text-primary font-semibold">Suspension</span>
            </Link>
          </div>
          
          <Link to="/marketplace" className="mt-6 bg-primary hover:bg-secondary text-on-primary rounded-xl p-6 transition-all flex items-center justify-between group overflow-hidden relative shadow">
            <div className="relative z-10 text-left">
              <h3 className="font-headline-md text-headline-md font-semibold text-white mb-1">View Full {carData.name} Catalog</h3>
              <p className="font-body-sm text-body-sm text-white/80">Explore over 1,200+ compatible OEM parts guaranteed to fit perfectly.</p>
            </div>
            <span className="material-symbols-outlined text-[32px] text-white group-hover:translate-x-2 transition-transform relative z-10">arrow_forward</span>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/10 to-transparent"></div>
          </Link>
        </div>
      </section>

      {/* Compatible Spares Catalog Integration */}
      <section className="max-w-container-max mx-auto px-margin-desktop py-10 border-t border-outline-variant/20">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-y-4 mb-8">
          <div className="text-left">
            <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">FITMENT GUARANTEED</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">Genuine Spares for {carData.name}</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Frequently replaced performance components engineered for {activeVariant}.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sparesList.map((part) => (
            <div key={part.id} className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group">
              <div className="h-44 bg-surface-container-low relative overflow-hidden flex items-center justify-center p-4">
                <div className="absolute top-2 left-2 px-2.5 py-0.5 bg-primary/10 text-primary border border-primary/20 font-label-sm text-[10px] rounded-full font-bold flex items-center gap-1 uppercase">
                  <span className="material-symbols-outlined text-[12px]">verified</span> OEM Part
                </div>
                <img 
                  alt={part.name} 
                  className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  src={part.image} 
                />
              </div>
              
              <div className="p-4 flex-1 flex flex-col justify-between text-left">
                <div>
                  <p className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider font-bold mb-1">{part.brand}</p>
                  <h3 className="font-body-md text-body-md text-primary font-semibold line-clamp-2 mb-2">{part.name}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-2">{part.description}</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="font-headline-md text-headline-md text-secondary font-bold">₹{part.price.toLocaleString()}</span>
                  <button 
                    onClick={() => handleAddToCart(part)}
                    className={`h-10 w-10 rounded-lg flex items-center justify-center transition-all ${cartSuccess === part.id ? 'bg-emerald-500 text-white' : 'bg-primary text-on-primary hover:bg-secondary hover:shadow active:scale-95'}`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {cartSuccess === part.id ? 'done' : 'add_shopping_cart'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

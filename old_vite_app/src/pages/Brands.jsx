import { Link } from 'react-router-dom';

export default function Brands() {
  const brandsData = [
    {
      id: "maruti-suzuki",
      name: "Maruti Suzuki",
      path: "/models/maruti-suzuki",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Suzuki_Swift_%282024%29_hybrid_DSC_6076.jpg/1280px-Suzuki_Swift_%282024%29_hybrid_DSC_6076.jpg",
      alt: "Maruti Suzuki Swift"
    },
    {
      id: "tata",
      name: "Tata Motors",
      path: "/models/tata",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tata_Nexon_Blue_Dual_Tone.jpg/1280px-Tata_Nexon_Blue_Dual_Tone.jpg",
      alt: "Tata Nexon"
    },
    {
      id: "mahindra",
      name: "Mahindra",
      path: "/models/mahindra",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/2021_Mahindra_XUV700_2.2_AX7_%28India%29_front_view.png/1280px-2021_Mahindra_XUV700_2.2_AX7_%28India%29_front_view.png",
      alt: "Mahindra XUV700"
    },
    {
      id: "hyundai",
      name: "Hyundai",
      path: "/models/hyundai",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Moscow%2C_Hyundai_Creta_%282nd_gen%29_Aug_2025_01_%28cropped%29.jpg/1280px-Moscow%2C_Hyundai_Creta_%282nd_gen%29_Aug_2025_01_%28cropped%29.jpg",
      alt: "Hyundai Creta"
    },
    {
      id: "toyota",
      name: "Toyota",
      path: "/models/toyota",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg/1280px-2015_Toyota_Fortuner_%28New_Zealand%29.jpg",
      alt: "Toyota Fortuner"
    },
    {
      id: "honda",
      name: "Honda",
      path: "/models/honda",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/2022_Honda_City_ZX_i-VTEC_%28India%29_front_view_%28cropped%29.jpg/1280px-2022_Honda_City_ZX_i-VTEC_%28India%29_front_view_%28cropped%29.jpg",
      alt: "Honda City"
    },
    {
      id: "bmw",
      name: "BMW",
      path: "/models/bmw",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/2018_BMW_M5_Automatic_4.4.jpg/1280px-2018_BMW_M5_Automatic_4.4.jpg",
      alt: "BMW 3 Series"
    },
    {
      id: "mercedes",
      name: "Mercedes-Benz",
      path: "/models/mercedes",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg/1280px-Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg",
      alt: "Mercedes-Benz AMG GT"
    },
    {
      id: "porsche",
      name: "Porsche",
      path: "/models/porsche",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg/1280px-Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg",
      alt: "Porsche 911"
    },
    {
      id: "audi",
      name: "Audi",
      path: "/models/audi",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/2018_Audi_R8_Coupe_V10_plus_Front.jpg/1280px-2018_Audi_R8_Coupe_V10_plus_Front.jpg",
      alt: "Audi A4"
    },
    {
      id: "volkswagen",
      name: "Volkswagen",
      path: "/models/volkswagen",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/2022_Volkswagen_Virtus_1.5_GT_%28India%29_front_view_02.png/1280px-2022_Volkswagen_Virtus_1.5_GT_%28India%29_front_view_02.png",
      alt: "Volkswagen Virtus"
    },
    {
      id: "kia",
      name: "Kia",
      path: "/models/kia",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kia_Seltos_SP2_PE_Snow_White_Pearl_%2817%29_%28cropped%29.jpg/1280px-Kia_Seltos_SP2_PE_Snow_White_Pearl_%2817%29_%28cropped%29.jpg",
      alt: "Kia Seltos"
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-surface-container-lowest py-20 border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <h1 className="font-display-lg text-display-lg text-primary mb-4">Explore All Brands</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Choose from our extensive catalog of genuine and premium aftermarket parts for all major manufacturers. Engineering precision for every drive.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="sticky top-20 z-40 bg-background/80 backdrop-blur-md py-6 border-b border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="relative max-w-xl mx-auto">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">search</span>
            <input className="w-full pl-12 pr-6 py-4 bg-surface-container-lowest border-outline-variant border rounded-xl shadow-sm focus:ring-2 focus:ring-secondary-container/20 transition-all text-body-md" placeholder="Find your brand (e.g., Maruti Suzuki, BMW)" type="text" />
          </div>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="max-w-container-max mx-auto px-margin-desktop py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
          {brandsData.map((brand) => (
            <div key={brand.id} className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-low">
                <img
                  alt={brand.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={brand.image}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">{brand.name}</h3>
                  <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-outline">directions_car</span>
                  </div>
                </div>
                <Link to={brand.path} className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn">
                  View Models
                  <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

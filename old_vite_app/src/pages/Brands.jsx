import { Link } from 'react-router-dom';

export default function Brands() {
  const brandsData = [
    {
      id: "maruti-suzuki",
      name: "Maruti Suzuki",
      path: "/models/maruti-suzuki",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/2018_Suzuki_Swift_SZ5_Boosterjet_MHEV_1.0_Front.jpg?width=800",
      alt: "Maruti Suzuki Swift"
    },
    {
      id: "tata",
      name: "Tata Motors",
      path: "/models/tata",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tata_Nexon_XZA%2B_O_Dark_Edition_Front_Left.jpg?width=800",
      alt: "Tata Nexon"
    },
    {
      id: "mahindra",
      name: "Mahindra",
      path: "/models/mahindra",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/2021_Mahindra_XUV700_AX7_(India)_front_view.png?width=800",
      alt: "Mahindra XUV700"
    },
    {
      id: "hyundai",
      name: "Hyundai",
      path: "/models/hyundai",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/2020_Hyundai_Creta_1.4_SX_(O)_(India)_front_view_01.png?width=800",
      alt: "Hyundai Creta"
    },
    {
      id: "toyota",
      name: "Toyota",
      path: "/models/toyota",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/2021_Toyota_Fortuner_2.8_VRZ_4WD_wagon_(GUN156R;_02-23-2022),_South_Tangerang.jpg?width=800",
      alt: "Toyota Fortuner"
    },
    {
      id: "honda",
      name: "Honda",
      path: "/models/honda",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/2020_Honda_City_SV.jpg?width=800",
      alt: "Honda City"
    },
    {
      id: "bmw",
      name: "BMW",
      path: "/models/bmw",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/BMW_M5_Competition_Facelift_IMG_3160.jpg?width=800",
      alt: "BMW 3 Series"
    },
    {
      id: "mercedes",
      name: "Mercedes-Benz",
      path: "/models/mercedes",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-AMG_GT_C_Edition_50_(C_190)_–_Frontansicht,_2._September_2018,_Düsseldorf.jpg?width=800",
      alt: "Mercedes-Benz AMG GT"
    },
    {
      id: "porsche",
      name: "Porsche",
      path: "/models/porsche",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche_992_Carrera_S_at_Retro_Classics_2020_IMG_0051.jpg?width=800",
      alt: "Porsche 911"
    },
    {
      id: "audi",
      name: "Audi",
      path: "/models/audi",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/2016_Audi_R8_Plus_Quattro_V10_Automatic_5.2.jpg?width=800",
      alt: "Audi A4"
    },
    {
      id: "volkswagen",
      name: "Volkswagen",
      path: "/models/volkswagen",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/2022_Volkswagen_Virtus_Highline_(India)_front_view.png?width=800",
      alt: "Volkswagen Virtus"
    },
    {
      id: "kia",
      name: "Kia",
      path: "/models/kia",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kia_Seltos_SP2_EX_1.6_GDI_2020_(50444369018).jpg?width=800",
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

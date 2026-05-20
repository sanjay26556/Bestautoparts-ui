import { Link } from 'react-router-dom';

export default function Brands() {
  const brandsData = [
    {
      id: "maruti-suzuki",
      name: "Maruti Suzuki",
      path: "/models/maruti-suzuki",
      // Maruti Suzuki Swift - compact red hatchback
      image: "https://images.unsplash.com/photo-1609000099860-01f59f93fdee?auto=format&fit=crop&q=80&w=600",
      alt: "Maruti Suzuki Swift Hatchback"
    },
    {
      id: "tata",
      name: "Tata Motors",
      path: "/models/tata",
      // Tata Nexon-style compact SUV
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600",
      alt: "Tata Nexon Compact SUV"
    },
    {
      id: "mahindra",
      name: "Mahindra",
      path: "/models/mahindra",
      // Mahindra Thar/Scorpio-style rugged SUV outdoors
      image: "https://images.unsplash.com/photo-1625217527288-93919c996509?auto=format&fit=crop&q=80&w=600",
      alt: "Mahindra Rugged SUV"
    },
    {
      id: "hyundai",
      name: "Hyundai",
      path: "/models/hyundai",
      // Hyundai Creta/Tucson-style crossover SUV
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600",
      alt: "Hyundai Creta SUV"
    },
    {
      id: "toyota",
      name: "Toyota",
      path: "/models/toyota",
      // Toyota Fortuner/Camry-style premium vehicle
      image: "https://images.unsplash.com/photo-1621007947382-cc34a621123a?auto=format&fit=crop&q=80&w=600",
      alt: "Toyota Premium Sedan"
    },
    {
      id: "honda",
      name: "Honda",
      path: "/models/honda",
      // Honda City-style clean white sedan
      image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=600",
      alt: "Honda City Sedan"
    },
    {
      id: "bmw",
      name: "BMW",
      path: "/models/bmw",
      // BMW M series blue sports sedan
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600",
      alt: "BMW M Series Sports Sedan"
    },
    {
      id: "mercedes",
      name: "Mercedes-Benz",
      path: "/models/mercedes",
      // Mercedes AMG GT silver luxury car
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600",
      alt: "Mercedes-Benz AMG GT"
    },
    {
      id: "porsche",
      name: "Porsche",
      path: "/models/porsche",
      // Porsche 911-style dark sports car
      image: "https://images.unsplash.com/photo-1611245781467-33e1431f478a?auto=format&fit=crop&q=80&w=600",
      alt: "Porsche Sports Car"
    },
    {
      id: "audi",
      name: "Audi",
      path: "/models/audi",
      // Audi A6-style silver executive sedan
      image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=600",
      alt: "Audi Executive Sedan"
    },
    {
      id: "volkswagen",
      name: "Volkswagen",
      path: "/models/volkswagen",
      // Volkswagen Virtus/Taigun-style German sedan
      image: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?auto=format&fit=crop&q=80&w=600",
      alt: "Volkswagen German Sedan"
    },
    {
      id: "kia",
      name: "Kia",
      path: "/models/kia",
      // Kia Seltos-style crossover SUV
      image: "https://images.unsplash.com/photo-1632245889027-ea2e6a7a50e1?auto=format&fit=crop&q=80&w=600",
      alt: "Kia Seltos Crossover SUV"
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
            <div key={brand.id} className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden brand-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-low">
                <img 
                  alt={brand.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={brand.image} 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-1">{brand.name}</h3>
                  </div>
                  <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-outline">directions_car</span>
                  </div>
                </div>
                <Link to={brand.path} className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn">
                  View Parts
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

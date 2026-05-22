import { Link } from 'react-router-dom';

export default function Brands() {
  const brandsData = [
    {
      id: "maruti-suzuki",
      name: "Maruti Suzuki",
      path: "/models/maruti-suzuki",
      // Maruti Suzuki Swift - red sporty hatchback
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=600",
      alt: "Maruti Suzuki Swift Hatchback"
    },
    {
      id: "tata",
      name: "Tata Motors",
      path: "/models/tata",
      // Tata Nexon - compact SUV front view
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
      alt: "Tata Nexon Compact SUV"
    },
    {
      id: "mahindra",
      name: "Mahindra",
      path: "/models/mahindra",
      // Mahindra Thar - rugged 4x4 off-road SUV
      image: "https://images.unsplash.com/photo-1625217527288-93919c996509?auto=format&fit=crop&q=80&w=600",
      alt: "Mahindra Thar Off-Road SUV"
    },
    {
      id: "hyundai",
      name: "Hyundai",
      path: "/models/hyundai",
      // Hyundai Tucson / Creta - modern crossover SUV
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600",
      alt: "Hyundai Tucson Crossover SUV"
    },
    {
      id: "toyota",
      name: "Toyota",
      path: "/models/toyota",
      // Toyota Fortuner - large premium SUV
      image: "https://images.unsplash.com/photo-1621007947382-cc34a621123a?auto=format&fit=crop&q=80&w=600",
      alt: "Toyota Fortuner Premium SUV"
    },
    {
      id: "honda",
      name: "Honda",
      path: "/models/honda",
      // Honda Civic - classic clean white sedan
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=600",
      alt: "Honda Civic Sedan"
    },
    {
      id: "bmw",
      name: "BMW",
      path: "/models/bmw",
      // BMW M5 - iconic blue performance sedan
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600",
      alt: "BMW M5 Performance Sedan"
    },
    {
      id: "mercedes",
      name: "Mercedes-Benz",
      path: "/models/mercedes",
      // Mercedes-Benz AMG GT - silver luxury sports car
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600",
      alt: "Mercedes-Benz AMG GT"
    },
    {
      id: "porsche",
      name: "Porsche",
      path: "/models/porsche",
      // Porsche 911 - iconic rear-engine sports car
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600",
      alt: "Porsche 911 Sports Car"
    },
    {
      id: "audi",
      name: "Audi",
      path: "/models/audi",
      // Audi e-tron GT / A6 - sleek luxury sedan
      image: "https://images.unsplash.com/photo-1614026480209-cd9cd33c18ee?auto=format&fit=crop&q=80&w=600",
      alt: "Audi e-tron GT Luxury Sedan"
    },
    {
      id: "volkswagen",
      name: "Volkswagen",
      path: "/models/volkswagen",
      // Volkswagen Golf GTI - iconic hot hatchback
      image: "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?auto=format&fit=crop&q=80&w=600",
      alt: "Volkswagen Golf GTI Hatchback"
    },
    {
      id: "kia",
      name: "Kia",
      path: "/models/kia",
      // Kia Seltos / Sportage - bold crossover SUV
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600",
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

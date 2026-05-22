import { Link } from 'react-router-dom';

export default function Brands() {
  const brandsData = [
    {
      id: "maruti-suzuki",
      name: "Maruti Suzuki",
      path: "/models/maruti-suzuki",
      image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg",
      alt: "Maruti Suzuki Swift"
    },
    {
      id: "tata",
      name: "Tata Motors",
      path: "/models/tata",
      image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/141867/nexon-facelift-exterior-right-front-three-quarter.jpeg",
      alt: "Tata Nexon"
    },
    {
      id: "mahindra",
      name: "Mahindra",
      path: "/models/mahindra",
      image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg",
      alt: "Mahindra XUV700"
    },
    {
      id: "hyundai",
      name: "Hyundai",
      path: "/models/hyundai",
      image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/106815/creta-exterior-right-front-three-quarter.jpeg",
      alt: "Hyundai Creta"
    },
    {
      id: "toyota",
      name: "Toyota",
      path: "/models/toyota",
      image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg",
      alt: "Toyota Fortuner"
    },
    {
      id: "honda",
      name: "Honda",
      path: "/models/honda",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600",
      alt: "Honda City"
    },
    {
      id: "bmw",
      name: "BMW",
      path: "/models/bmw",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600",
      alt: "BMW 3 Series"
    },
    {
      id: "mercedes",
      name: "Mercedes-Benz",
      path: "/models/mercedes",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600",
      alt: "Mercedes-Benz AMG GT"
    },
    {
      id: "porsche",
      name: "Porsche",
      path: "/models/porsche",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600",
      alt: "Porsche 911"
    },
    {
      id: "audi",
      name: "Audi",
      path: "/models/audi",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=600",
      alt: "Audi A4"
    },
    {
      id: "volkswagen",
      name: "Volkswagen",
      path: "/models/volkswagen",
      image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/124839/virtus-exterior-right-front-three-quarter.jpeg",
      alt: "Volkswagen Virtus"
    },
    {
      id: "kia",
      name: "Kia",
      path: "/models/kia",
      image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/115777/seltos-exterior-right-front-three-quarter.jpeg",
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

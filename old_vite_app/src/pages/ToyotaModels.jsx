import { Link } from 'react-router-dom';

export default function ToyotaModels() {
  const modelsData = [
    {
      id: "fortuner",
      name: "Toyota Fortuner",
      subtitle: "The Undisputed King of the Off-Road.",
      category: "Premium SUV",
      image: "https://images.unsplash.com/photo-1625217527288-93919c996509?auto=format&fit=crop&q=80&w=600",
      transmission: "6-Speed AT / MT",
      engine: "2.8L D-4D Turbo Diesel",
      path: "/models/toyota/fortuner"
    },
    {
      id: "camry",
      name: "Toyota Camry",
      subtitle: "Premium Hybrid Sophistication.",
      category: "Luxury Sedan",
      image: "https://images.unsplash.com/photo-1621007947382-cc34a621123a?auto=format&fit=crop&q=80&w=600",
      transmission: "e-CVT Automatic",
      engine: "2.5L Hybrid Dynamic Force",
      path: "/models/toyota/camry"
    },
    {
      id: "innovacrysta",
      name: "Toyota Innova Crysta",
      subtitle: "Unmatched Comfort, Unrivalled Durability.",
      category: "Premium MPV",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=600",
      transmission: "5-Speed Manual",
      engine: "2.4L 2GD-FTV Turbo I4",
      path: "/models/toyota/innovacrysta"
    },
    {
      id: "glanza",
      name: "Toyota Glanza",
      subtitle: "Hatchback Elegance Sourced with Efficiency.",
      category: "Premium Hatchback",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
      transmission: "5-Speed AMT / MT",
      engine: "1.2L K-Series Dual Jet",
      path: "/models/toyota/glanza"
    }
  ];

  return (
    <>
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-surface-container-lowest overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-desktop py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-gutter">
            <div className="z-10 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full mb-6">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider">Official Partner</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">Toyota Genuine Parts</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
                Quality Service & Parts. Protect your Toyota's legendary reliability with 100% genuine factory-certified parts sourced directly from authorized distributors.
              </p>
              <div className="flex gap-4">
                <Link to="/marketplace" className="bg-secondary text-on-secondary px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-secondary/90 transition-all shadow-lg active:scale-95 flex items-center justify-center">
                  Explore Full Catalog
                </Link>
                <Link to="/login" className="border border-primary text-primary px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-all active:scale-95 flex items-center justify-center">
                  Bulk Inquiry
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-fixed/30 to-transparent rounded-full blur-3xl -z-10 transform scale-125"></div>
              <img alt="Toyota Fortuner" className="w-full h-auto object-contain drop-shadow-2xl rounded-xl" src="https://images.unsplash.com/photo-1625217527288-93919c996509?auto=format&fit=crop&q=80&w=800"/>
            </div>
          </div>
        </section>

        {/* Model Selection Grid */}
        <section className="py-20 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter mb-8">
              {modelsData.map((model) => (
                <div key={model.id} className="group bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <Link to={model.path} className="aspect-[16/10] bg-surface-container-low p-6 overflow-hidden flex items-center justify-center relative block">
                    <img className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" alt={model.name} src={model.image} />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-on-primary font-label-sm text-label-sm px-3 py-1 rounded-full uppercase">{model.category}</span>
                    </div>
                  </Link>
                  <div className="p-6 text-left">
                    <h3 className="font-headline-md text-headline-md text-primary mb-1">{model.name}</h3>
                    <p className="text-body-sm text-on-surface-variant mb-4">{model.subtitle}</p>
                    <div className="flex gap-4 mb-6">
                      <div className="flex items-center gap-1 text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px]">settings_input_component</span>
                        <span className="font-body-sm text-body-sm">{model.transmission}</span>
                      </div>
                      <div className="flex items-center gap-1 text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px]">bolt</span>
                        <span className="font-body-sm text-body-sm">{model.engine}</span>
                      </div>
                    </div>
                    <Link to={model.path} className="w-full py-3 bg-surface-container-high group-hover:bg-secondary group-hover:text-on-secondary transition-all rounded-lg font-label-md text-label-md flex justify-center items-center gap-2">
                      Explore Parts & Specs <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="flex flex-col items-center text-center p-6">
                <span className="material-symbols-outlined text-secondary text-[48px] mb-4">verified_user</span>
                <h4 className="font-headline-md text-headline-md text-primary mb-2">Genuine Guarantee</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">All Toyota parts are sourced from authorized manufacturers with 100% authenticity certification.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <span className="material-symbols-outlined text-secondary text-[48px] mb-4">local_shipping</span>
                <h4 className="font-headline-md text-headline-md text-primary mb-2">Fast Logistics</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Global supply chain nodes ensure your critical spares reach you within 48-72 hours.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <span className="material-symbols-outlined text-secondary text-[48px] mb-4">handyman</span>
                <h4 className="font-headline-md text-headline-md text-primary mb-2">Precision Fit</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Engineered to exact OEM specifications for seamless integration and peak performance.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

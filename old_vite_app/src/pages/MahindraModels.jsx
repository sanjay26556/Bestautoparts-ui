import { Link } from 'react-router-dom';

export default function MahindraModels() {
  const modelsData = [
    {
      id: "xuv700",
      name: "Mahindra XUV700",
      subtitle: "Sci-Fi Luxury SUV Command Center.",
      category: "SUV",
      image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg",
      transmission: "6-Speed AT / MT",
      engine: "2.2L mHawk Turbo Diesel",
      path: "/models/mahindra/xuv700"
    },
    {
      id: "scorpio",
      name: "Mahindra Scorpio N",
      subtitle: "The Big Daddy of SUVs.",
      category: "SUV",
      image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter.jpeg",
      transmission: "6-Speed AT / MT with 4XPLOR",
      engine: "2.2L mHawk Turbo Diesel",
      path: "/models/mahindra/scorpio"
    },
    {
      id: "thar",
      name: "Mahindra Thar",
      subtitle: "The Ultimate Rugged Off-Road Companion.",
      category: "SUV",
      image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/40087/thar-exterior-right-front-three-quarter-35.jpeg",
      transmission: "6-Speed MT / AT with 4x4",
      engine: "2.0L mStallion Turbo / 2.2L mHawk",
      path: "/models/mahindra/thar"
    },
    {
      id: "bolero",
      name: "Mahindra Bolero",
      subtitle: "Utilitarian Heavy Duty Reliability.",
      category: "SUV",
      image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/131825/bolero-exterior-right-front-three-quarter.jpeg",
      transmission: "5-Speed Manual Transmission",
      engine: "1.5L mHawk75 Turbocharged I3",
      path: "/models/mahindra/bolero"
    },
    {
      id: "xuv3xo",
      name: "Mahindra XUV 3XO",
      subtitle: "Thrill of SUV, Smartness of City.",
      category: "SUV",
      image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/171211/xuv-3xo-exterior-right-front-three-quarter.jpeg",
      transmission: "6-Speed MT / AT / AMT",
      engine: "1.2L mStallion TGDi Petrol",
      path: "/models/mahindra/xuv3xo"
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
              <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">Mahindra Genuine Parts</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
                Explore and go anywhere. Keep your Mahindra SUV trail-ready with certified genuine parts built for India's toughest terrains.
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
              <img alt="Mahindra XUV700" className="w-full h-auto object-contain drop-shadow-2xl rounded-xl" src="https://images.unsplash.com/photo-1625217527288-93919c996509?auto=format&fit=crop&q=80&w=800"/>
            </div>
          </div>
        </section>

        {/* Model Selection Grid */}
        <section className="py-20 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-desktop">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter mb-12">
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
                <p className="font-body-md text-body-md text-on-surface-variant">All Mahindra parts are sourced from authorized manufacturers with 100% authenticity certification.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <span className="material-symbols-outlined text-secondary text-[48px] mb-4">local_shipping</span>
                <h4 className="font-headline-md text-headline-md text-primary mb-2">Fast Logistics</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Pan-India logistics network ensures your critical spares reach you within 48-72 hours.</p>
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

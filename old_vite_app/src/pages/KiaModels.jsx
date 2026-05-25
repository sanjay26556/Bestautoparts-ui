import { Link } from 'react-router-dom';

export default function KiaModels() {
  const modelsData = [
    {
      id: "seltos",
      name: "Kia Seltos",
      subtitle: "Badass Design Meets Smart Connected Tech.",
      category: "SUV",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Kia_Seltos_SP2_EX_1.6_GDI_2020_%2850444369018%29.jpg",
      transmission: "6-Speed Automatic / 6-Speed iMT",
      engine: "1.5L CRDi Clean Diesel / Petrol",
      path: "/models/kia/seltos"
    },
    {
      id: "sonet",
      name: "Kia Sonet",
      subtitle: "Muscular Styling Loaded with Smart Gadgets.",
      category: "Compact SUV",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/2020_Kia_Sonet_GTX%2B_%28India%29_front_view.png",
      transmission: "7-speed DCT / 6-speed iMT",
      engine: "1.0L Turbocharged GDi Petrol",
      path: "/models/kia/sonet"
    },
    {
      id: "carens",
      name: "Kia Carens",
      subtitle: "Premium 3-Row Seating Reimagined.",
      category: "MPV",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/2022_Kia_Carens_1.4_Premium_%28India%29_front_view.jpg",
      transmission: "6-speed AT / MT",
      engine: "1.5L Turbocharged CRDi Diesel",
      path: "/models/kia/carens"
    },
    {
      id: "ev6",
      name: "Kia EV6",
      subtitle: "A High-Performance Electric Revolution.",
      category: "Electric Crossover",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Kia_EV6_CV_GT-Line_AWD_Yacht_Blue_%282%29.jpg",
      transmission: "Single-Speed Reduction Gear",
      engine: "Dual Electric Motors (AWD)",
      path: "/models/kia/ev6"
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
              <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">Kia Genuine Spares</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
                Movement that inspires. Ensure consistent reliability and bold performance with genuine Kia replacement components.
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
              <img alt="Kia EV6" className="w-full h-auto object-contain drop-shadow-2xl rounded-xl" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Kia_EV6_CV_GT-Line_AWD_Yacht_Blue_%282%29.jpg"/>
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
                <p className="font-body-md text-body-md text-on-surface-variant">All Kia parts are sourced from authorized manufacturers with 100% authenticity certification.</p>
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

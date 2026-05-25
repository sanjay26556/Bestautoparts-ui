import { Link } from 'react-router-dom';

export default function MarutiSuzukiModels() {
  const modelsData = [
    {
      id: "swift",
      name: "Maruti Suzuki Swift",
      subtitle: "The Sporty Hatchback Icon.",
      category: "Hatchback",
      // Small sporty hatchback
      image: "https://upload.wikimedia.org/wikipedia/commons/2/22/2018_Suzuki_Swift_SZ5_Boosterjet_MHEV_1.0_Front.jpg",
      transmission: "5-Speed MT / AMT Automatic",
      engine: "1.2L Z-Series 3-Cylinder Petrol",
      path: "/models/maruti-suzuki/swift"
    },
    {
      id: "baleno",
      name: "Maruti Suzuki Baleno",
      subtitle: "Modern Luxury Re-engineered.",
      category: "Premium Hatchback",
      // Premium compact car
      image: "https://upload.wikimedia.org/wikipedia/commons/9/91/2022_Maruti_Suzuki_Baleno_Alpha_%28India%29_front_view.png",
      transmission: "5-Speed MT / AGS Automatic",
      engine: "1.2L DualJet 4-Cylinder Petrol",
      path: "/models/maruti-suzuki/baleno"
    },
    {
      id: "brezza",
      name: "Maruti Suzuki Brezza",
      subtitle: "The Bold, Dynamic City SUV.",
      category: "Compact SUV",
      // Compact city crossover
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/2022_Maruti_Suzuki_Brezza_ZXi%2B_%28India%29_front_view.jpg",
      transmission: "5-Speed MT / 6-Speed AT",
      engine: "1.5L K15C Smart Hybrid I4",
      path: "/models/maruti-suzuki/brezza"
    },
    {
      id: "grandvitara",
      name: "Maruti Suzuki Grand Vitara",
      subtitle: "The Premium Intelligent Hybrid SUV.",
      category: "SUV",
      // Mid-size SUV
      image: "https://upload.wikimedia.org/wikipedia/commons/9/92/2022_Suzuki_Grand_Vitara_%28India%29_front_view.jpg",
      transmission: "e-CVT / 6-Speed AT / 5-Speed MT",
      engine: "1.5L Intelligent Strong Hybrid",
      path: "/models/maruti-suzuki/grandvitara"
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
              <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">Maruti Suzuki Genuine Parts</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
                Way of Life. Keep your Maruti Suzuki running at its best with genuine OEM replacement parts sourced directly from authorized Maruti distributors.
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
              <img alt="Maruti Suzuki Swift" className="w-full h-auto object-cover drop-shadow-2xl rounded-xl" src="https://upload.wikimedia.org/wikipedia/commons/2/22/2018_Suzuki_Swift_SZ5_Boosterjet_MHEV_1.0_Front.jpg"/>
            </div>
          </div>
        </section>

        {/* Model Selection Grid */}
        <section className="py-20 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-desktop">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {modelsData.map((model) => (
                <div key={model.id} className="group bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <Link to={model.path} className="aspect-[16/10] bg-surface-container-low overflow-hidden flex items-center justify-center relative block">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={model.name} src={model.image} />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-on-primary font-label-sm text-label-sm px-3 py-1 rounded-full uppercase">{model.category}</span>
                    </div>
                  </Link>
                  <div className="p-6 text-left">
                    <h3 className="font-headline-md text-headline-md text-primary mb-1">{model.name}</h3>
                    <p className="text-body-sm text-on-surface-variant mb-4">{model.subtitle}</p>
                    <div className="flex flex-wrap gap-3 mb-6">
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
                <p className="font-body-md text-body-md text-on-surface-variant">All Maruti Suzuki parts are sourced from authorized manufacturers with 100% authenticity certification.</p>
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

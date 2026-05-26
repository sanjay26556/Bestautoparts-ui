import { Link } from 'react-router-dom';

export default function TataModels() {
  const modelsData = [
    {
      id: "nexon",
      name: "Tata Nexon",
      subtitle: "India's Best Selling Safety SUV.",
      category: "SUV",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tata_Nexon_Blue_Dual_Tone.jpg/1280px-Tata_Nexon_Blue_Dual_Tone.jpg",
      transmission: "6-Speed MT / AMT / 7-Speed DCA",
      engine: "1.2L Revotron Turbo Petrol / Diesel",
      path: "/models/tata/nexon"
    },
    {
      id: "punch",
      name: "Tata Punch",
      subtitle: "The Rugged, High-Altitude SUV.",
      category: "Compact SUV",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2021_Tata_Punch_Creative_%28India%29_front_view_01.png/1280px-2021_Tata_Punch_Creative_%28India%29_front_view_01.png",
      transmission: "5-Speed MT / AMT Automatic",
      engine: "1.2L Revotron 3-Cylinder Petrol",
      path: "/models/tata/punch"
    },
    {
      id: "safari",
      name: "Tata Safari",
      subtitle: "The Magnificent Flagship SUV Legend.",
      category: "SUV",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Tata_Safari_II_front_-_PSM_2009.jpg/1280px-Tata_Safari_II_front_-_PSM_2009.jpg",
      transmission: "6-Speed AT / 6-Speed MT",
      engine: "2.0L Kryotec Turbo Diesel",
      path: "/models/tata/safari"
    },
    {
      id: "harrier",
      name: "Tata Harrier",
      subtitle: "Pure Command Performance on the Road.",
      category: "SUV",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tata_Buzzard_Sport%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0651%29.jpg/1280px-Tata_Buzzard_Sport%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0651%29.jpg",
      transmission: "6-Speed AT / MT",
      engine: "2.0L Kryotec Diesel Engine",
      path: "/models/tata/harrier"
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
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">Tata Genuine Parts</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
                New Forever. Maintain your Tata vehicle's high safety standards and reliable mechanical execution with 100% factory-certified components.
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
              <img alt="Tata Nexon" className="w-full h-auto object-contain drop-shadow-2xl rounded-xl" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tata_Buzzard_Sport%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0651%29.jpg/1280px-Tata_Buzzard_Sport%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0651%29.jpg"/>
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
                <p className="font-body-md text-body-md text-on-surface-variant">All Tata parts are sourced from authorized manufacturers with 100% authenticity certification.</p>
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

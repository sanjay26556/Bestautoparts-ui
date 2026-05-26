import { Link } from 'react-router-dom';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero3D from '../components/Hero3D';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const revealElements = gsap.utils.toArray('.scroll-reveal');
      
      revealElements.forEach((el) => {
        gsap.fromTo(el, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, mainRef);
    
    return () => ctx.revert();
  }, []);
  return (
    <main className="w-full" ref={mainRef}>
      <Hero3D>
        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter flex flex-col justify-start pt-32 md:justify-center md:pt-0 h-full">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-stack-sm block md:mt-0 mt-4">ENGINEERING EXCELLENCE</span>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-stack-lg drop-shadow-sm">Find Parts for Your Performance</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-xl">
              Precision-engineered components for every make and model. Guaranteed reliability for DIY enthusiasts and professional mechanics alike.
            </p>
            {/* Search Bar */}
            <div className="relative max-w-xl bg-surface rounded-lg shadow-sm border border-outline-variant focus-within:ring-2 focus-within:ring-secondary/20 transition-all pointer-events-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-outline">search</span>
              </div>
              <input className="w-full pl-12 pr-4 py-4 bg-transparent border-none rounded-lg font-body-md text-body-md text-on-surface placeholder-outline focus:ring-0" placeholder="Search by brand, model, or part number..." type="text" />
              <Link to="/marketplace" className="absolute inset-y-2 right-2 bg-secondary text-on-secondary px-6 py-3 rounded-md font-label-md text-label-md hover:bg-secondary-container transition-colors flex items-center justify-center">
                Search
              </Link>
            </div>
          </div>
        </div>
      </Hero3D>

      {/* Main Content Wrapper (Full width solid background to cover pinned hero) */}
      <div className="w-full bg-background relative z-30 shadow-[0_-15px_30px_rgba(0,0,0,0.05)] -mt-8 pt-8 rounded-t-3xl md:-mt-0 md:pt-0 md:rounded-t-none md:shadow-[0_-15px_30px_rgba(0,0,0,0.03)]">
        <div className="max-w-container-max mx-auto px-gutter py-16 md:py-20 space-y-32">
          {/* Select Your Brand */}
          <section>
            <div className="flex justify-between items-end mb-stack-lg scroll-reveal">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-sm">Select Your Brand</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">OEM and premium aftermarket parts for top manufacturers.</p>
              </div>
              <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center" to="/brands">
                View All Brands <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter scroll-reveal">
              {/* Brand Card 1 */}
              <Link className="group bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300" to="/models/bmw">
                <img alt="BMW" className="w-full h-24 object-cover rounded-lg mb-3 transition-transform group-hover:scale-105" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/2018_BMW_M5_Automatic_4.4.jpg/1280px-2018_BMW_M5_Automatic_4.4.jpg" />
                <div className="text-center"><div className="font-label-md text-on-surface font-semibold">BMW</div></div>
              </Link>
              {/* Brand Card 2 */}
              <Link className="group bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300" to="/models/audi">
                <img alt="Audi" className="w-full h-24 object-cover rounded-lg mb-3 transition-transform group-hover:scale-105" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/2018_Audi_R8_Coupe_V10_plus_Front.jpg/1280px-2018_Audi_R8_Coupe_V10_plus_Front.jpg" />
                <div className="text-center"><div className="font-label-md text-on-surface font-semibold">Audi</div></div>
              </Link>
              {/* Brand Card 3 */}
              <Link className="group bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300" to="/models/mercedes">
                <img alt="Mercedes" className="w-full h-24 object-cover rounded-lg mb-3 transition-transform group-hover:scale-105" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg/1280px-Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg" />
                <div className="text-center"><div className="font-label-md text-on-surface font-semibold">Mercedes</div></div>
              </Link>
              {/* Brand Card 4 */}
              <Link className="group bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300" to="/models/porsche">
                <img alt="Porsche" className="w-full h-24 object-cover rounded-lg mb-3 transition-transform group-hover:scale-105" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg/1280px-Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg" />
                <div className="text-center"><div className="font-label-md text-on-surface font-semibold">Porsche</div></div>
              </Link>
              {/* Brand Card 5 */}
              <Link className="group bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300" to="/models/honda">
                <img alt="Honda" className="w-full h-24 object-cover rounded-lg mb-3 transition-transform group-hover:scale-105" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/2022_Honda_City_ZX_i-VTEC_%28India%29_front_view_%28cropped%29.jpg/1280px-2022_Honda_City_ZX_i-VTEC_%28India%29_front_view_%28cropped%29.jpg" />
                <div className="text-center"><div className="font-label-md text-on-surface font-semibold">Honda</div></div>
              </Link>
              {/* Brand Card 6 */}
              <Link className="group bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300" to="/models/mahindra">
                <img alt="Mahindra" className="w-full h-24 object-cover rounded-lg mb-3 transition-transform group-hover:scale-105" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/2021_Mahindra_XUV700_2.2_AX7_%28India%29_front_view.png/1280px-2021_Mahindra_XUV700_2.2_AX7_%28India%29_front_view.png" />
                <div className="text-center"><div className="font-label-md text-on-surface font-semibold">Mahindra</div></div>
              </Link>
            </div>
          </section>

          {/* Genuine Spare Parts Category Grid (Bento Style) */}
          <section className="scroll-reveal">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-lg text-center">Browse by Component</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter h-auto md:h-[600px] auto-rows-[250px] md:auto-rows-auto">
              {/* Large Feature Box */}
              <Link className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden group bg-surface border border-outline-variant hover:shadow-md transition-shadow" to="/marketplace">
                <img alt="Engine Parts" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-headline-md">Engine &amp; Performance</h3>
                  <p className="text-white/80 text-body-sm">High-performance OEM internal components</p>
                </div>
              </Link>
              {/* Smaller Grid Boxes */}
              <Link className="relative rounded-xl overflow-hidden group bg-surface border border-outline-variant hover:shadow-md transition-shadow" to="/marketplace">
                <img alt="Brakes & Suspension" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-label-md">Brakes &amp; Suspension</h3>
                </div>
              </Link>
              <Link className="relative rounded-xl overflow-hidden group bg-surface border border-outline-variant hover:shadow-md transition-shadow" to="/marketplace">
                <img alt="Electrical Systems" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-label-md">Electrical Systems</h3>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

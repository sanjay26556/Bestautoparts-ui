import { Link } from 'react-router-dom';
import Hero3D from '../components/Hero3D';

export default function Home() {
  return (
    <main className="w-full">
      <Hero3D>
        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter flex flex-col justify-center h-full">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-stack-sm block">ENGINEERING EXCELLENCE</span>
            <h1 className="font-display-lg text-display-lg text-primary mb-stack-lg drop-shadow-sm">Find Parts for Your Performance</h1>
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
      <div className="w-full bg-background relative z-30 shadow-[0_-15px_30px_rgba(0,0,0,0.03)]">
        <div className="max-w-container-max mx-auto px-gutter py-20 space-y-32">
          {/* Select Your Brand */}
          <section>
            <div className="flex justify-between items-end mb-stack-lg">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-sm">Select Your Brand</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">OEM and premium aftermarket parts for top manufacturers.</p>
              </div>
              <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center" to="/brands">
                View All Brands <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter">
              {/* Brand Card 1 */}
              <Link className="group bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300" to="/brands">
                <img alt="BMW" className="w-full h-24 object-cover rounded-lg mb-3 transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMuXV6GoqL4ajQLVNbFU2InfFeAHdAalP4Aq1ZDVm2eF2iFc5YLZar-dPboRxJWkj2QcX0Hs2-RLGscyojcdhnyIY_CoND_ld7_TIFvzaRYXliSLiZJThFQkMaPV7kfcaa3XtM8i3-0e6KL5B6PoNW1VdCkcmJbLoxP5EvRHgj7QMujnsANW5h4IDFThCh_uqTr63j8XgeGlxdGX9rFmYbtEGi1QN_zXJFjRyQaHfvsQDidjaGNhOVt5VLALgOo-s59eeoCh3Wu4n-" />
                <div className="text-center"><div className="font-label-md text-on-surface">BMW</div><div className="text-body-sm text-on-surface-variant text-[11px]">12 Models</div></div>
              </Link>
              {/* Brand Card 2 */}
              <Link className="group bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300" to="/brands">
                <img alt="Audi" className="w-full h-24 object-cover rounded-lg mb-3 transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDghV-k-Bo9q6ycI2uUv_Falls5YRKU39YAuDR1v2IHR-dIctWBJMZC0j4lG6O-T3ZyR_EWRLuNw3q9wJErRla3Wo1fUXRIP8_ln9vipv3K3K73FHeADNfp5aLFeW42yFtmtrm6AkekpomnvRTCHWsMniUhGo_U59qKpxMm8QKTLSnSp6sw0exIN5u5X3YotDpQ62VnPZoplU_8kqlKHEhTTPSJFdvNS8TpTM27l1PM6uDgcsL3i6Yvb7h-SH-lyPAc4c8NbwXXQT-U" />
                <div className="text-center"><div className="font-label-md text-on-surface">Audi</div><div className="text-body-sm text-on-surface-variant text-[11px]">15 Models</div></div>
              </Link>
              {/* Brand Card 3 */}
              <Link className="group bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300" to="/brands">
                <img alt="Mercedes" className="w-full h-24 object-cover rounded-lg mb-3 transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7QoOnDcFxKwsCUZHI578qy_RZfscxK8zLFzesvWrLKj5qhDg5JO7D133l_iF6Xnan4vU1VstKFyd6xifE4CJ4_Z8F63YrLiHJEXSKLz2NiY7aIbdk5ERWzp9e02-rpSpdw45ROJ-2QYEP813ZhNd1FrVR6bpBt1o3btU0s_9FCiWNU9uHx34H-y_L83YNq9swYCD0TrfJNC4ik7AzdTHno_nVeP6jOdZfnfUhLePCYhxKfLaCHFNoA_o2AeSeCvUYdMuRDSffKG_O" />
                <div className="text-center"><div className="font-label-md text-on-surface">Mercedes</div><div className="text-body-sm text-on-surface-variant text-[11px]">18 Models</div></div>
              </Link>
              {/* Brand Card 4 */}
              <Link className="group bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300" to="/brands">
                <img alt="Porsche" className="w-full h-24 object-cover rounded-lg mb-3 transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnA7ixtG4XUhAeWEYAW6W7RuscDKN5uUCCEByDGvTqGkD3GJprJEtE4PWbkYCVR3EsX5FiphuHimkyFtt5dkNeS1lZwX6k0plCa-zqJ2SyskuEopV-qLCQFZx9XxxpuaTuVzduHRUBg-o1vxbBriKUklU_dzSLPglqb1e3EH1EvvK54N4FcYe0SwgZbszAIaPkQUVQE9ncvLgC3ktjJPSd5MxU8p5-7BGxK1VTPHT7aj4qxhG9e7MwxUmXJ3GqhBlLdoN2uNgj_37J" />
                <div className="text-center"><div className="font-label-md text-on-surface">Porsche</div><div className="text-body-sm text-on-surface-variant text-[11px]">10 Models</div></div>
              </Link>
              {/* Brand Card 5 */}
              <Link className="group bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300" to="/brands">
                <img alt="Honda" className="w-full h-24 object-cover rounded-lg mb-3 transition-transform group-hover:scale-105" src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-sleek-red-honda-civic-sedan-sporty-design-aggressive-front-grille-black-png-image_15456934.png" />
                <div className="text-center"><div className="font-label-md text-on-surface">Honda</div><div className="text-body-sm text-on-surface-variant text-[11px]">8 Models</div></div>
              </Link>
              {/* Brand Card 6 */}
              <Link className="group bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300" to="/brands">
                <img alt="Mahindra" className="w-full h-24 object-cover rounded-lg mb-3 transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0uiPpzqUDDQ6K9OVAKCZDiv3uKl45VaoJWhNi1lh8Qj0vP-Q-nvNufm54A5uz6RCEl15Ip9pdAK8ciNVrazScDGnQo2_QEEbhP0kicMhnwOgDH3ASXjPHcldxasYKy1-8Dsb1KVsIWNg9KwxztKvFnsisQIdzyy3KCmPn5NcZqWCwXCkMbGn3rmKuprbcs8t6uYDLl3wv7TUrVIem4bKdYJ_jNhfAoURBhoMd4oK0jzxdGAG6j5lrznDsAmc" />
                <div className="text-center"><div className="font-label-md text-on-surface">Mahindra</div><div className="text-body-sm text-on-surface-variant text-[11px]">14 Models</div></div>
              </Link>
            </div>
          </section>

          {/* Genuine Spare Parts Category Grid (Bento Style) */}
          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-lg text-center">Browse by Component</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter h-[600px]">
              {/* Large Feature Box */}
              <Link className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden group bg-surface border border-outline-variant hover:shadow-md transition-shadow" to="/marketplace">
                <img alt="Engine Parts" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCYf6z-K6JRWELD6cvJtThP5M9H-VHPSBn8g0zMCw5tehVyOaAJCcFx5LLPzGeYhwnDPPGhcONp7Xd30_4wLCf3mJ6_0YF1U8lrBl4ZaS7Zc7jHp8sI6ukjheRGGDvOpjiD69SH3GggkNUcInTWsrmDQomAHI3k5w1-FsHkiL1n6z9CBCA0Oh2pabHvsQC6mn7QK-r9_ox7dIWk9kZ9QcIEZlp4Sy38HVhn06zezL96upTeyc4LK7-BVmTS9Oi6QoowKLyOMLnqiGI" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-headline-md">Engine &amp; Performance</h3>
                  <p className="text-white/80 text-body-sm">High-performance OEM internal components</p>
                </div>
              </Link>
              {/* Smaller Grid Boxes */}
              <Link className="relative rounded-xl overflow-hidden group bg-surface border border-outline-variant hover:shadow-md transition-shadow" to="/marketplace">
                <img alt="Brakes &amp; Suspension" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_tt5FUGreCuFpuUuwHn6G4bsPvpb2orteC1_kZYz546ep0-YOTV_nuQ3GkYumn1lsp-w-wgEuJRDlQSYP0fDT5XsZdNSSYCqaRqct3Q5JzCsFkpGbMlXlN5nv6Uk0tIdXRDhIoGY_7i1QmqGXPxC79FTqkRRvSWn_99tUpwuYaCSXNB-GECbOx2lX1UleOVpzvlS605_h00TnT5hlf0pmX03j53YTI1PJ-BpMDxyIDKcLH-tH7SLioprAV591CrnLRC7kVjM__99D" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-label-md">Brakes &amp; Suspension</h3>
                </div>
              </Link>
              <Link className="relative rounded-xl overflow-hidden group bg-surface border border-outline-variant hover:shadow-md transition-shadow" to="/marketplace">
                <img alt="Electrical Systems" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfKoanOcBJmCPbdY1X5Rk7UUd1HOX8-13d3R8KnCyzVOmKGc8sEh5WIxe2goRMa7lVk52sSj_jPVPrrvI-NadAjLaAi2rRi4mpJFiI2avXmEwM3Nlmj7H3wKSGcKP3CT9O5RlKs8A6FgOLoeLSggP8JuabhvTK7nAM9W_Sfakluv_SOvir4L4flQeYpIC6ic06bz8nuUhhMwfaASb4P7GUoTaohaP2JT42jsC6cnB61QqQdNF3JntmsZEvS6tHF-HZ_jpcvT5HSAGf" />
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

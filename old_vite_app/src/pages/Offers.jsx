import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Offers() {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const activeOffers = [
    {
      id: 1,
      title: "Brembo Premium Braking",
      discount: "20% OFF",
      code: "BRAKE20",
      description: "Upgrade your stopping power. Valid on all premium brake pads, rotors, and calipers.",
      category: "Brakes & Suspension",
      expiry: "Valid till May 31, 2026",
      color: "from-red-500/20 to-red-600/5",
      badgeColor: "bg-red-500/10 text-red-500 border-red-500/20"
    },
    {
      id: 2,
      title: "Mobil1 Synthetic Engine Oils",
      discount: "10% OFF",
      code: "SYNTH10",
      description: "Keep your engine running in showroom condition. Valid on all synthetic oils and filter combos.",
      category: "Fluids & Filters",
      expiry: "Valid till June 15, 2026",
      color: "from-blue-500/20 to-blue-600/5",
      badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      id: 3,
      title: "Philips LED Headlight Kits",
      discount: "15% OFF",
      code: "LIGHTS15",
      description: "Enhance night visibility with 150% brighter crystal-clear projection LED upgrades.",
      category: "Electricals & Lights",
      expiry: "Valid till May 31, 2026",
      color: "from-amber-500/20 to-amber-600/5",
      badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/20"
    },
    {
      id: 4,
      title: "Monroe Shock Absorbers",
      discount: "$50 FLAT OFF",
      code: "STRUTS50",
      description: "Restore original ride comfort and handling precision. Applicable on a set of 4 struts.",
      category: "Suspension",
      expiry: "Valid till June 30, 2026",
      color: "from-emerald-500/20 to-emerald-600/5",
      badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
    },
    {
      id: 5,
      title: "Bosch Spark Plugs & Ignition",
      discount: "Buy 3 Get 1 Free",
      code: "IGNITE4",
      description: "Maximize fuel efficiency and smooth starts with premium double-platinum spark plugs.",
      category: "Engine Parts",
      expiry: "Valid till May 31, 2026",
      color: "from-purple-500/20 to-purple-600/5",
      badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      id: 6,
      title: "Seasonal Cooling Care",
      discount: "12% OFF",
      code: "COOL12",
      description: "Beat the heat. Save on high-durability radiators, coolant pumps, and premium refrigerants.",
      category: "Cooling System",
      expiry: "Valid till July 31, 2026",
      color: "from-cyan-500/20 to-cyan-600/5",
      badgeColor: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
    }
  ];

  return (
    <main className="min-h-screen pt-20 bg-background text-on-surface">
      {/* Hero Section */}
      <section className="bg-surface-container-lowest py-20 border-b border-outline-variant/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="max-w-container-max mx-auto px-margin-desktop text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full mb-6">
            <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider">Premium Deals</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-primary mb-4">Exclusive Automotive Offers</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Upgrade your drive with premium parts at unbeatable prices. Sourced from certified manufacturers, backed by full warranties.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="max-w-container-max mx-auto px-margin-desktop py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {activeOffers.map((offer) => (
            <div 
              key={offer.id} 
              className={`group relative bg-gradient-to-b ${offer.color} bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
            >
              <div className="p-stack-lg">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 border rounded-full font-label-sm text-label-sm ${offer.badgeColor}`}>
                    {offer.category}
                  </span>
                  <span className="text-body-sm text-on-surface-variant/80 font-medium">
                    {offer.expiry}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  {offer.title}
                </h3>
                <div className="text-display-sm font-display-sm text-secondary font-bold mb-4">
                  {offer.discount}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {offer.description}
                </p>
              </div>

              {/* Promo Code & Action Panel */}
              <div className="p-stack-lg pt-0">
                <div className="bg-surface-container-low border border-outline-variant/50 rounded-lg p-3 flex items-center justify-between gap-4 mb-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">Promo Code</span>
                    <span className="font-mono text-headline-sm text-primary font-bold">{offer.code}</span>
                  </div>
                  <button 
                    onClick={() => handleCopyCode(offer.code)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-on-primary hover:bg-secondary rounded-md font-label-sm text-label-sm transition-all"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {copiedCode === offer.code ? 'check' : 'content_copy'}
                    </span>
                    {copiedCode === offer.code ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <Link 
                  to="/marketplace" 
                  className="w-full py-3 bg-surface-container-high hover:bg-secondary hover:text-on-secondary transition-all rounded-lg font-label-md text-label-md flex justify-center items-center gap-2 group-hover:shadow-md"
                >
                  Shop Now
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Free Diagnostics Info Banner */}
      <section className="bg-surface-container-low border-y border-outline-variant/30 py-16">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full mb-4">
                <span className="material-symbols-outlined text-[18px]">build</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider">Workshop Special</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Free Diagnostics & Spark Check</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Get a comprehensive 40-point vehicle system scan absolutely free with any premium brake pad or engine oil kit purchase. Our certified partner centers will verify ECU codes, battery health, and fluid status.
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center lg:items-end">
              <Link 
                to="/services" 
                className="w-full sm:w-auto bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-secondary transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
              >
                Book Inspection
                <span className="material-symbols-outlined">event_available</span>
              </Link>
              <Link 
                to="/login" 
                className="w-full sm:w-auto border border-outline text-primary px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                Find Partner Center
                <span className="material-symbols-outlined">map</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

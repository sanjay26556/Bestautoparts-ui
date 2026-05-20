import { Link } from 'react-router-dom';

export default function Brands() {
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
        <div className="max-w-container-max mx-auto px-margin-desktop space-y-6">
          <div className="relative max-w-xl mx-auto">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">search</span>
            <input className="w-full pl-12 pr-6 py-4 bg-surface-container-lowest border-outline-variant border rounded-xl shadow-sm focus:ring-2 focus:ring-secondary-container/20 transition-all text-body-md" placeholder="Find your brand (e.g., Maruti Suzuki, BMW)" type="text" />
          </div>
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
            <button className="px-6 py-2 rounded-full bg-secondary-container text-on-primary font-label-md">All</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md">Indian</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md">Japanese</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md">European</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md">Korean</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md">Luxury</button>
          </div>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="max-w-container-max mx-auto px-margin-desktop py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
          {/* Maruti Suzuki */}
          <div className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden brand-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-low">
              <img alt="Maruti Suzuki Swift" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/ADBb0ugE4cRD9aeRWJWMDwU14jo3gJ4rAxUomDjAHDce7k_g4AcoCfSNA_0k8ulvkOxtFexfzWJb9a0vtyuTAm1LUhVpXG4VnRHTDy2klCDqf9s0MuxiQK3Y3mSipR1v1cDxvZUQeQldjx41qdVfuaZHTNnrtSC6Dsw3dhpBuG6Ty0-PK0cJWiJ6T13gNXx0rDLQ9XyvzJWB_hi8BDsSXtQecoKIpEPpg9xk5NusJnOWmxEtTdNAhx8lpRBzKTs" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Maruti Suzuki</h3>
                  <p className="text-body-sm text-on-surface-variant">24 Models Available</p>
                </div>
                <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">directions_car</span>
                </div>
              </div>
              <Link to="/models/maruti-suzuki" className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn">
                View Parts
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Tata Motors */}
          <div className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden brand-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-low">
              <img alt="Tata Nexon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/ADBb0uizjW4Un_QitLDk1bUsmPkq_RTTMqwnqsGFaDfs0Ggf2JxbxqEOrjtkjIi66IavoeGbHEyQ2x_RzC4qTsVEe919frDYrDn2MFfcPXquPoKd02BfNwPaKJH45-vKKefF7yOq5-Z9NnSeIgsRf484Uh3RodDg8rgEcqQYkaIifvvUauw8dEUZSPT82Zayol2R82O5MsB-w3ESzvjf5j2dDtjox2eQ_6VLC9FJOyN0uUBQgpad26a17EHM-Fs" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Tata Motors</h3>
                  <p className="text-body-sm text-on-surface-variant">18 Models Available</p>
                </div>
                <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">directions_car</span>
                </div>
              </div>
              <Link to="/models/tata" className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn">
                View Parts
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Mahindra */}
          <div className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden brand-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-low">
              <img alt="Mahindra XUV700" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/ADBb0uiPpzqUDDQ6K9OVAKCZDiv3uKl45VaoJWhNi1lh8Qj0vP-Q-nvNufm54A5uz6RCEl15Ip9pdAK8ciNVrazScDGnQo2_QEEbhP0kicMhnwOgDH3ASXjPHcldxasYKy1-8Dsb1KVsIWNg9KwxztKvFnsisQIdzyy3KCmPn5NcZqWCwXCkMbGn3rmKuprbcs8t6uYDLl3wv7TUrVIem4bKdYJ_jNhfAoURBhoMd4oK0jzxdGAG6j5lrznDsAmc" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Mahindra</h3>
                  <p className="text-body-sm text-on-surface-variant">12 Models Available</p>
                </div>
                <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">directions_car</span>
                </div>
              </div>
              <Link to="/models/mahindra" className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn">
                View Parts
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Hyundai */}
          <div className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden brand-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-low">
              <img alt="Hyundai Tucson" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/ADBb0ujYG9TVhhLuguvZheOUNwcjC0Pr6Ccpo3r_8vNPVJt0Td8d_WXpewRbAq61UAvTssftld6iKRQF1727rxuGRSQvNC5BdfACAoxbXvCZisrQFJNn7TYkA2NDvyo8ajYaSKU8TE8j34W8RsAOSWV571p27Ho_jwBYerMALkESRgZGEOJemrittJ-cjvjxaeErKrdsaBPbu80ZwWmrid4UYadnGA1-ww0xA3ikoO5oQ-FywT27IWoI8vr5dnNn" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Hyundai</h3>
                  <p className="text-body-sm text-on-surface-variant">20 Models Available</p>
                </div>
                <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">directions_car</span>
                </div>
              </div>
              <Link to="/models/hyundai" className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn">
                View Parts
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Toyota */}
          <div className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden brand-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-low">
              <img alt="Toyota Camry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/ADBb0ugIT9rqW8KyA2VAPnYlnDWUT78gWf8a1PtoQ8_MnCVKKoJI02PMn_NMdLhF6T02azQXILkwz36Pz-kyc7YFMG4a1XCu6RA7HQQuc65Lp1TXe9BuTz1g1Bp8MO-9MbFX5nl-neWZJnJiaiaO8TWY4e0_Lu4Ty1E3zNOl9QqN4Hi4a9XTdIGZ-DP5lHsu5ffhYVLP86NUIHoFZN1wXuYYZWDyyFM7smXEJQ2gVvdu85DFVe8UrxMv7Ag-YlY" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Toyota</h3>
                  <p className="text-body-sm text-on-surface-variant">15 Models Available</p>
                </div>
                <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">directions_car</span>
                </div>
              </div>
              <Link to="/models" className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn">
                View Parts
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Honda */}
          <div className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden brand-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-low">
              <img alt="Honda City" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/ADBb0uhda3_f5RRmyF6bAaQ5jg0CY7J7CeaAiXN4Uu-qsqMHPkH0I7LlPIHhL_nQWhYBSoGkMdpZ4L18v_zDj698xUbG40SipZxODEYOFTCg1yEs7x44X-TFeJtg6ldcKPzRlVIWHSb-aMI56HvdBemHn_HAO6F_gH05oTolWhZPmyxwPBf0v_49BzKLSFiHuR8EpjyBuF7XwUbZ3h5vqYAoSMFqC1Jl9BVZDPJ2Iax2X2PBzTfM5icKomSYDLh8" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Honda</h3>
                  <p className="text-body-sm text-on-surface-variant">10 Models Available</p>
                </div>
                <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">directions_car</span>
                </div>
              </div>
              <Link to="/models" className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn">
                View Parts
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* BMW */}
          <div className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden brand-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-low">
              <div className="w-full h-full bg-surface-variant flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30"></div>
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7kPoTwLnBp13XInKk8COFa6Z5lRRS9PGpfxfanppXvSrR_A_W_d3gzGdnocR41Zhb072HpEGBTaTI7yBcCIqfQPQjqx3BHnE-dQ7OBWXYF5bGk-K8A1O9fl3-_dhDUsZ6GN1MON2xZrUTD6yjS59zSUApNA7jIg6EIWr9pxMPgGNFuU9I4Ah2kxerjFkVezOvisrWaYBfn6qDRNC8D8VK-fzUy1Zv1ZzNPzJE-e2ISbtLBrZt092uI7ane8SQ4-hRbXDE7hLTZmDN" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">BMW</h3>
                  <p className="text-body-sm text-on-surface-variant">32 Models Available</p>
                </div>
                <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">directions_car</span>
                </div>
              </div>
              <Link to="/models/bmw" className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn">
                View Parts
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Mercedes-Benz */}
          <div className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden brand-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-low">
              <div className="w-full h-full bg-surface-variant flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30"></div>
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaHoJ0tk-wbPF0sPEccua5xIMEBxlBv6Xy8I4BfPpjlM-q8XHbeL0aKU8Eed0AdUVRer1i0lX_cqWCuuPlLoKzs7cYQcebT39ZNMOtZ0-Oj2-qeJG8vu0Afr_cKUqTIN0S_74LTDeZvZZtYOekDxh-noo9XEanL8BIGf-D202UimikLRoOlzZinC7d_-44Q6KeP_eYjB3c5t7bPMlL6Lz-aVK5lwOQEcZk4hdCgrAZvfiXVFVr0TvWTBQ865rqN2OwXp4rvp6P_zX_"/>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Mercedes-Benz</h3>
                  <p className="text-body-sm text-on-surface-variant">28 Models Available</p>
                </div>
                <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">directions_car</span>
                </div>
              </div>
              <Link to="/models" className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn">
                View Parts
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Porsche */}
          <div className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden brand-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-low">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2jBtPw42wbNB4nvzh_TLgynZTSQ7tw7Do7bxGSYHy63oe3FsX4sDPSBBN7N5arhRkDuf6W4xMtMAeGoZtlmgu1jrLqH7rLHDN50hChxMWDmPJvLGZYCeWBOYrpA5eoibtVwEaG0xNCwnFiVkEpoPA8H5_eqJXdnWF-QxQISdp68bCqBYdsPyZwP1EWCpV8w6fAmvcrFrCP44mIxSFgb6mHOzyAlRGrfsLKYNYCY1GTmdiJYmKP8Va5ih9Y_oAw3QR5uo4mX0F6HkB" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Porsche</h3>
                  <p className="text-body-sm text-on-surface-variant">14 Models Available</p>
                </div>
                <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">directions_car</span>
                </div>
              </div>
              <Link to="/models" className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn">
                View Parts
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Audi */}
          <div className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden brand-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-low">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDErHiHRl-iIeBQ7lWqQXydsVG2OUGS8xNuOU_7xB3MeJIyb106VDHutVZHiovkOkVezej4aFOCmV-MedB4WH5Lwq8XjFVSg-JHWrs78pqs4_HvSTUPAj-yo8mfAvvJnDoL-AP9kZ0bGE3L-JzRZUEcFaYhWkvqEk_FnUeQuqormucN_yspABy_jF9nLeGWqoyZr7f0f-c3n8tIs0wgaEU9V6_8pLlLQAguY4PFssSwCHFVOb1EWptUK0tbqQnazN5fMrbnSKpb1_jb" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Audi</h3>
                  <p className="text-body-sm text-on-surface-variant">22 Models Available</p>
                </div>
                <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">directions_car</span>
                </div>
              </div>
              <Link to="/models" className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn">
                View Parts
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Volkswagen */}
          <div className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden brand-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-low">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChhETdQXSxGPg2FV9EsM2KUDowm-co9jmZvPOZWoqjcHIiFd3QKM6G_Pt8Up14rcJxCIPxYwD7s1S-2FXN4WyFLXBxPaKgZB0dNdPqU8LVgMnESWM-SPxE_ai8Czj6m37vpiLQ2B5jq3jRXVSNymFqXetxudwTl_sdtvc0SOUnJz1japfTzG4X6hC7jlgliuw3R3HeQrvQyVvkD-9CfzJqNhfsvR0dkakq0zl6jMAGsXhaww-Q7FGiJy7Yb5H6Nvl52UyqfWNUzO3T" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Volkswagen</h3>
                  <p className="text-body-sm text-on-surface-variant">12 Models Available</p>
                </div>
                <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">directions_car</span>
                </div>
              </div>
              <Link to="/models" className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn">
                View Parts
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Kia */}
          <div className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden brand-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-low">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaZSe9YTzYuPZKJYTuY57TKdpJ7m-OoS8EZQUJ5lbRazXm27iXgP-To6EFncxIhnCwT8fnbXmiTbX4OMaXHkbOU-nmlUJtA3YePQWWHIrDOzxd-ERHo3doM7LFVNXkmVx6414-xypmG_NjZy_mlxLThj0SIfLHvU1jfRtSbpx5G8pCezlcCToNgxwxWq5ycAXqqC0RRYQqC_Z42x79xTqs45pYRcvioJU1q33ZkPfTDDLk6WdBJBJ0mlEw8GD9DdIYBVyvYETQgYR3" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Kia</h3>
                  <p className="text-body-sm text-on-surface-variant">14 Models Available</p>
                </div>
                <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">directions_car</span>
                </div>
              </div>
              <Link to="/models" className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn">
                View Parts
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

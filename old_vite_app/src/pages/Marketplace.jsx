import { Link } from 'react-router-dom';

export default function Marketplace() {
  return (
    <main className="flex-grow pt-32 pb-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex text-on-surface-variant font-body-sm text-body-sm mb-stack-lg">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link className="hover:text-primary transition-colors" to="/">Home</Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
              <Link className="hover:text-primary transition-colors" to="/brands">Maruti Suzuki</Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
              <Link className="hover:text-primary transition-colors" to="/models">Swift</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
              <span className="text-secondary font-medium">Engine Parts</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Page Header */}
      <div className="mb-stack-lg flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Engine Parts for Maruti Swift ZXI</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Showing 1-12 of 145 genuine and aftermarket components.</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="sort">Sort by:</label>
          <select className="border border-outline-variant rounded-lg px-3 py-2 bg-surface font-body-sm text-body-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none" id="sort">
            <option>Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Top Rated</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-gutter">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4 flex-shrink-0">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 sticky top-32">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-md flex items-center justify-between">
              Filters
              <button className="text-secondary font-label-md text-label-md hover:underline">Clear All</button>
            </h2>

            {/* Category Filter */}
            <div className="py-4 border-t border-surface-variant">
              <h3 className="font-label-md text-label-md text-on-surface mb-3 uppercase tracking-wider">Category</h3>
              <div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input defaultChecked className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="group-hover:text-primary transition-colors">Air Intake (42)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="group-hover:text-primary transition-colors">Belts &amp; Pulleys (28)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="group-hover:text-primary transition-colors">Cooling System (35)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="group-hover:text-primary transition-colors">Ignition (40)</span>
                </label>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="py-4 border-t border-surface-variant">
              <h3 className="font-label-md text-label-md text-on-surface mb-3 uppercase tracking-wider">Brand</h3>
              <div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input defaultChecked className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="group-hover:text-primary transition-colors">Genuine Maruti (65)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="group-hover:text-primary transition-colors">Bosch (32)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="group-hover:text-primary transition-colors">NGK (18)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="group-hover:text-primary transition-colors">Valeo (20)</span>
                </label>
              </div>
            </div>

            {/* Price Filter */}
            <div className="py-4 border-t border-surface-variant">
              <h3 className="font-label-md text-label-md text-on-surface mb-3 uppercase tracking-wider">Price Range</h3>
              <div className="flex items-center gap-2 font-body-sm text-body-sm">
                <input className="w-full rounded-md border border-outline-variant p-2 focus:ring-2 focus:ring-secondary outline-none bg-surface" placeholder="Min" type="number" />
                <span className="text-on-surface-variant">-</span>
                <input className="w-full rounded-md border border-outline-variant p-2 focus:ring-2 focus:ring-secondary outline-none bg-surface" placeholder="Max" type="number" />
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Product Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="relative h-48 bg-surface-container-low flex items-center justify-center p-4">
                <img alt="Genuine Maruti Air Filter" className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxVGdg3Kc25V37Sg-sY1NbzSiU6EdW7-mV0CQ03MZdhCY0066tu1_fTr8FuZ4sbBgqLGothUy8pM1TsdMbUBXbC4W5ViNKl-YjmexmkES2ROyhEgzG28qe5O-28D_RYy5gl_1f6a_RsYCuEpqe0IWetBt02g8Lkm7qnCTcc47CDyY_hStgJsFr1KqmY6gI3ZPVNPvllzHmKGi9l1mL_cxQQPSiI_7NWXi1gpg9hpaJ-ZNQOmhup-ggYlBxBQqYT9McfqNWhqK8vmzF" />
                <button className="absolute top-3 right-3 p-2 bg-surface-container-lowest rounded-full shadow-sm text-on-surface-variant hover:text-secondary hover:bg-surface-container-low transition-colors z-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
                <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2 py-1 rounded-full inline-block">OEM Part</span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">check_circle</span>
                    Swift 2024+
                  </span>
                  <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Petrol
                  </span>
                </div>
                <Link to="/product"><h3 className="font-headline-lg-mobile text-body-lg font-semibold text-on-surface mb-1 leading-tight group-hover:text-secondary transition-colors line-clamp-2">Genuine Maruti Air Filter Element</h3></Link>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-1">Part No: 13780M74L00</p>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <span className="font-headline-md text-headline-md text-primary block">₹ 450</span>
                  </div>
                  <Link to="/cart" className="bg-secondary text-on-secondary font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors shadow-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                    Add
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="relative h-48 bg-surface-container-low flex items-center justify-center p-4">
                <img alt="Bosch Spark Plugs" className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLG0w54ZGgdkZi9Y_LZj_pQadbE0eUJ9ntuAfNK8y_FbYWqTVTkx18zmm0EEN3lWMFAG4No13L3z7EmBlNmGzLevKSwAlLTVXCeTT0ijvG1TcEiiP74B-d0TtdV325D6GjLZpSosO-dnA-dSsscGltin2Exha9tfxHy3QvicoQxgIOTh83Ys0SWK40eh4tnxQxYeF4sd_CXwzq5xv0hGQgyyJtC0GxgLcnyc5mW8Nq8umoe2PjWIcqyz86hP4XnrJ2eXzaB0gB_bXe" />
                <button className="absolute top-3 right-3 p-2 bg-surface-container-lowest rounded-full shadow-sm text-on-surface-variant hover:text-secondary hover:bg-surface-container-low transition-colors z-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
                <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                  <span className="bg-surface-container-highest text-on-surface font-label-sm text-label-sm px-2 py-1 rounded-full inline-block">Aftermarket</span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">check_circle</span>
                    Swift 2018-2024
                  </span>
                  <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Petrol
                  </span>
                </div>
                <Link to="/product"><h3 className="font-headline-lg-mobile text-body-lg font-semibold text-on-surface mb-1 leading-tight group-hover:text-secondary transition-colors line-clamp-2">Bosch Double Platinum Spark Plug Set (4pcs)</h3></Link>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-1">Part No: YR7DC+</p>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <span className="font-headline-md text-headline-md text-primary block">₹ 1,200</span>
                  </div>
                  <button className="bg-secondary text-on-secondary font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors shadow-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="relative h-48 bg-surface-container-low flex items-center justify-center p-4">
                <img alt="Serpentine Belt" className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgljs0fDs59j-OYyhN4KDD2RrW6CnI0mRbqCW1uuqXtw1SHRBNbbqxW4eAVIQ_b3Gy8zUchKoqMg5P5thoX3SlOxZ-93obiU6ynwWOgaiAUfKof5pE_rlWLmwd4m32LdROv2Tt8SbV6SUmUulnqJ5Moe0MQGPtfkW9Zii2mJMsZQIVnHWTkXPIFF31yK4XODWPBhUXBep5pW122n2cRsqB4T0t9RKg4xA7VVE9ztVLGPnevcztmj0ciYHWfMmc7xR69fH0RbDid6U7" />
                <button className="absolute top-3 right-3 p-2 bg-surface-container-lowest rounded-full shadow-sm text-on-surface-variant hover:text-secondary hover:bg-surface-container-low transition-colors z-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
                <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2 py-1 rounded-full inline-block">OEM Part</span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">check_circle</span>
                    Swift 2024+
                  </span>
                  <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    All
                  </span>
                </div>
                <Link to="/product"><h3 className="font-headline-lg-mobile text-body-lg font-semibold text-on-surface mb-1 leading-tight group-hover:text-secondary transition-colors line-clamp-2">Maruti Genuine V-Ribbed Belt (Alternator)</h3></Link>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-1">Part No: 17521M74L00</p>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <span className="font-headline-md text-headline-md text-primary block">₹ 650</span>
                  </div>
                  <button className="bg-secondary text-on-secondary font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors shadow-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-stack-lg flex justify-center">
            <nav aria-label="Pagination" className="flex items-center gap-2">
              <button className="p-2 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors disabled:opacity-50">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md shadow-sm">1</button>
              <button className="w-10 h-10 rounded-lg border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors">2</button>
              <button className="w-10 h-10 rounded-lg border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors">3</button>
              <span className="text-on-surface-variant">...</span>
              <button className="p-2 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}

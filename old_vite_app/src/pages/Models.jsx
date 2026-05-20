import { Link } from 'react-router-dom';

export default function Models() {
  return (
    <main  className="flex-grow flex flex-col max-w-container-max mx-auto w-full px-margin-mobile md:px-gutter py-stack-lg gap-stack-lg">
      
{/* Brand Hero */}
<section className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-stack-lg">
<div className="absolute inset-0 bg-gradient-to-r from-primary-container/90 to-transparent z-10"></div>
<img alt="Maruti Suzuki Dealership" className="absolute inset-0 w-full h-full object-cover" data-alt="A sleek, modern automotive showroom featuring a pristine white Maruti Suzuki vehicle under bright, studio-quality lighting. The environment is highly polished with reflective flooring, conveying a premium, high-tech automotive engineering atmosphere. The overall color palette emphasizes clean whites, deep architectural blacks, and subtle metallic accents to match a professional, corporate modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6UeTOP9zbNlrtu2PUCNOzKckQ2NXCrFlc-59g8oYoPg78SDCwgabMC9DbDtPT5NCooZ1uBuYKGVZwZHR2ER6-haQOHfzQiEPn3TP7E8m7ynmDdfeQhgCQuevayb8-StirH_9htdtIGU77BflZLlG4kRiIcs2uLxUuMJk3nG3gTGnKRGZG5b5uEKoc_ksXTKtteio-pBY9P2Oorepw1F5b4Ur6HEdniWOCMT8VzorcuCEsFoFMSTo0OWQe03NHqaQwECGSopyjgYG4"/>
<div className="relative z-20 h-full flex flex-col justify-center p-stack-lg md:p-[48px] max-w-2xl">
<div className="flex items-center gap-stack-md mb-stack-sm">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="directions_car">directions_car</span>
</div>
<span className="font-label-md text-label-md text-on-primary tracking-widest uppercase opacity-80">Official Partner</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-primary mb-stack-md leading-tight">Maruti Suzuki <br/><span className="text-secondary-fixed">Genuine Parts</span></h1>
<p className="font-body-lg text-body-lg text-on-primary/90 mb-stack-lg">Precision-engineered components for every Maruti Suzuki model. Ensure peak performance, reliability, and longevity with 100% authentic spares.</p>
<div className="flex gap-stack-md">
<Link to="/marketplace" className="bg-secondary text-on-secondary px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-secondary-container transition-colors shadow-sm flex items-center gap-2 w-max">
                        Browse Catalog
                        <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</Link>
</div>
</div>
</section>
{/* Marketplace Context / Stats Bento */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-stack-md mb-stack-lg">
<div className="glass-panel p-stack-lg rounded-xl flex items-start gap-stack-md card-shadow">
<div className="p-3 bg-tertiary-fixed rounded-lg text-on-tertiary-fixed">
<span className="material-symbols-outlined" data-icon="verified">verified</span>
</div>
<div>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mb-1">100% Genuine</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sourced directly from MGP authorized distributors.</p>
</div>
</div>
<div className="glass-panel p-stack-lg rounded-xl flex items-start gap-stack-md card-shadow">
<div className="p-3 bg-tertiary-fixed rounded-lg text-on-tertiary-fixed">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
</div>
<div>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mb-1">50k+ Spares</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Comprehensive inventory for current and legacy models.</p>
</div>
</div>
<div className="glass-panel p-stack-lg rounded-xl flex items-start gap-stack-md card-shadow">
<div className="p-3 bg-tertiary-fixed rounded-lg text-on-tertiary-fixed">
<span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
</div>
<div>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mb-1">Express Delivery</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Next-day dispatch for critical mechanical components.</p>
</div>
</div>
</section>
{/* Main Content Area: Sidebar + Grid */}
<div className="flex flex-col md:flex-row gap-stack-lg w-full">
{/* Sidebar Filters */}
<aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-stack-md">
<div className="bg-surface-container-lowest rounded-xl p-stack-md border border-outline-variant card-shadow">
<h3 className="font-headline-md text-body-lg font-semibold mb-stack-md pb-stack-sm border-b border-outline-variant text-on-surface">Filter Models</h3>
{/* Search within models */}
<div className="relative mb-stack-md">
<input className="w-full pl-8 pr-3 py-2 bg-surface rounded-lg border border-outline-variant text-body-sm focus:ring-1 focus:ring-secondary focus:border-secondary outline-none" placeholder="Quick search..." type="text"/>
<span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" data-icon="search">search</span>
</div>
{/* Fuel Type */}
<div className="mb-stack-md">
<h4 className="font-label-md text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Fuel Type</h4>
<div className="flex flex-col gap-2">
<label className="flex items-center gap-2 cursor-pointer group">
<input defaultChecked className="rounded border-outline-variant text-secondary focus:ring-secondary/20 w-4 h-4" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-secondary transition-colors">Petrol</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="rounded border-outline-variant text-secondary focus:ring-secondary/20 w-4 h-4" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-secondary transition-colors">Diesel</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input defaultChecked className="rounded border-outline-variant text-secondary focus:ring-secondary/20 w-4 h-4" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-secondary transition-colors">CNG</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="rounded border-outline-variant text-secondary focus:ring-secondary/20 w-4 h-4" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-secondary transition-colors">Hybrid</span>
</label>
</div>
</div>
{/* Body Type */}
<div className="mb-stack-md">
<h4 className="font-label-md text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Body Type</h4>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm rounded-full">Hatchback</button>
<button className="px-3 py-1 bg-surface text-on-surface border border-outline-variant font-label-sm text-label-sm rounded-full hover:bg-surface-container">Sedan</button>
<button className="px-3 py-1 bg-surface text-on-surface border border-outline-variant font-label-sm text-label-sm rounded-full hover:bg-surface-container">SUV</button>
<button className="px-3 py-1 bg-surface text-on-surface border border-outline-variant font-label-sm text-label-sm rounded-full hover:bg-surface-container">MUV</button>
</div>
</div>
</div>
{/* Ad Banner */}
<div className="bg-surface-container-highest rounded-xl p-stack-md border border-outline-variant flex flex-col items-center text-center">
<span className="material-symbols-outlined text-secondary text-4xl mb-2" data-icon="build_circle">build_circle</span>
<h4 className="font-headline-md text-body-lg font-semibold text-on-surface mb-1">Need Help?</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-md">Can't find your specific model or part number?</p>
<button className="w-full bg-transparent border border-primary text-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors">Contact Support</button>
</div>
</aside>
{/* Model Grid */}
<div className="flex-grow">
<div className="flex justify-between items-center mb-stack-md">
<h2 className="font-headline-md text-headline-md text-on-surface">Select Model</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Showing 8 models</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-stack-md">
{/* Card 1: Swift */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant card-shadow card-hover transition-all flex flex-col">
<div className="h-48 bg-surface-container relative">
<img alt="Maruti Suzuki Swift" className="w-full h-full object-cover" data-alt="A dynamic, high-quality studio photograph of a modern red hatchback car, resembling a Suzuki Swift. The lighting is dramatic yet clean, highlighting the vehicle's curves and sporty stance against a neutral, bright white studio background. The overall tone is premium, professional, and crisp, suitable for a high-end automotive marketplace." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWhVacjfpwSd8lYWCAfo-Gkx9pGPAnTBxjDVk9tokmCeH8wRYSArD2mru5TkhytFsincN3Y8Ss9gS3uiUpawwejeUrI3TINTxPODFs0s3INHxJt5jJZv3Ey0EF7XiX4lMWO2829BxiUGzXWbqcXE5nhu1DkPAIEtUHUZTO7CSxvqCy0DNJ1pOIe6xPnSJAIlifvHU8UUZPcxvqZZbg_4G5szHM4qFSu-1HfIGMZ9owHKrbU1MOMOks-BJqgd2KeZXNrx0-s4YV7-ko"/>
<div className="absolute top-2 right-2 flex gap-1">
<span className="bg-surface/90 backdrop-blur px-2 py-1 rounded text-xs font-label-sm text-on-surface font-semibold shadow-sm">Petrol</span>
<span className="bg-surface/90 backdrop-blur px-2 py-1 rounded text-xs font-label-sm text-secondary font-semibold shadow-sm">CNG</span>
</div>
</div>
<div className="p-stack-md flex-grow flex flex-col justify-between">
<div>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface">Swift</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-2">2005 - Present • Hatchback</p>
<div className="flex gap-2 mb-stack-md">
<span className="inline-flex items-center gap-1 text-xs text-on-surface-variant"><span className="material-symbols-outlined text-[16px]" data-icon="settings">settings</span> MT / AMT</span>
</div>
</div>
<Link to="/marketplace" className="w-full bg-secondary text-on-secondary py-2 rounded-lg font-label-md text-label-md hover:bg-secondary-container transition-colors flex justify-center items-center gap-2">
                                View Parts <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</Link>
</div>
</div>
{/* Card 2: Baleno */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant card-shadow card-hover transition-all flex flex-col">
<div className="h-48 bg-surface-container relative">
<img alt="Maruti Suzuki Baleno" className="w-full h-full object-cover" data-alt="A sleek, premium blue hatchback car photographed in a brightly lit, minimalist architectural space. The vehicle's metallic paint reflects the soft, diffused overhead lighting. The composition is clean and focused solely on the car's exterior design, conveying a modern, reliable, and high-quality automotive brand aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqFFbQ2WJAfCrQt-8emdqXWgozjwVSGjJGDzWtGkI5mCc_w7XQucvaryyH7mMOV_Q3KGA7N2pfpghsyP0bnL2YJ-EIZj0BvFbF5Fr48NjkZTwyuBjoXRSbtgfSeeWL4kVq2mjYlFj_FfZhieEV9Zk-gL2P1YauYuV5RHdaaTkTNWwyeCe2R18aLQtfCdD8SIlwWAADcuTrCaAK_hB5s-NcG0ZrvAyhmYeznQ4GUnxl6-v0yXY6tKfThKnZOiK-ZJ-O9BygNktEPw80"/>
<div className="absolute top-2 right-2 flex gap-1">
<span className="bg-surface/90 backdrop-blur px-2 py-1 rounded text-xs font-label-sm text-on-surface font-semibold shadow-sm">Petrol</span>
<span className="bg-surface/90 backdrop-blur px-2 py-1 rounded text-xs font-label-sm text-secondary font-semibold shadow-sm">CNG</span>
</div>
</div>
<div className="p-stack-md flex-grow flex flex-col justify-between">
<div>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface">Baleno</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-2">2015 - Present • Premium Hatchback</p>
<div className="flex gap-2 mb-stack-md">
<span className="inline-flex items-center gap-1 text-xs text-on-surface-variant"><span className="material-symbols-outlined text-[16px]" data-icon="settings">settings</span> MT / AGS</span>
</div>
</div>
<Link to="/marketplace" className="w-full bg-secondary text-on-secondary py-2 rounded-lg font-label-md text-label-md hover:bg-secondary-container transition-colors flex justify-center items-center gap-2">
                                View Parts <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</Link>
</div>
</div>
{/* Card 3: Brezza */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant card-shadow card-hover transition-all flex flex-col">
<div className="h-48 bg-surface-container relative">
<img alt="Maruti Suzuki Brezza" className="w-full h-full object-cover" data-alt="A bold, rugged compact SUV in a metallic grey finish, presented in a bright, polished studio setting. The lighting emphasizes the vehicle's strong lines and elevated stance. The background is a clean, neutral gradient of white and light grey, ensuring the car is the absolute focal point in a premium corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC86g3-wrxRhzLn9ZR57bvb6RKb1idLBXQLBAzTR57w5t3tIcO47Yrw4Yb4QVKR-VJVkxzdAgT-87S4mAVBGDGQj_krEn33gLlloVh7v3k7oUYcFcFjcxGT9yeWmlBOSimBKittKtWvGhOuILKcGoWlRkFCpL_sIZJ5BCyqJyy1qb9LTi_2Oqr80GMMOed4qnoE7BtkRfdusOpyls81tewUEViispWzcC5UBnvzSFblh62RQ51ZdipQSo3VLdgCup2feOA6cQQfK1Ar"/>
<div className="absolute top-2 right-2 flex gap-1">
<span className="bg-surface/90 backdrop-blur px-2 py-1 rounded text-xs font-label-sm text-on-surface font-semibold shadow-sm">Petrol</span>
<span className="bg-surface/90 backdrop-blur px-2 py-1 rounded text-xs font-label-sm text-secondary font-semibold shadow-sm">CNG</span>
</div>
</div>
<div className="p-stack-md flex-grow flex flex-col justify-between">
<div>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface">Brezza</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-2">2016 - Present • Compact SUV</p>
<div className="flex gap-2 mb-stack-md">
<span className="inline-flex items-center gap-1 text-xs text-on-surface-variant"><span className="material-symbols-outlined text-[16px]" data-icon="settings">settings</span> MT / AT</span>
</div>
</div>
<Link to="/marketplace" className="w-full bg-secondary text-on-secondary py-2 rounded-lg font-label-md text-label-md hover:bg-secondary-container transition-colors flex justify-center items-center gap-2">
                                View Parts <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</Link>
</div>
</div>
</div>
</div>
</div>

    </main>
  );
}

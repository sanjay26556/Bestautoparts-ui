import { Link } from 'react-router-dom';

export default function TataModels() {
  return (
    <>
      <main className="min-h-screen pt-20">
{/* Hero Section */}
<section className="relative rounded-xl overflow-hidden mb-stack-lg h-[400px] bg-primary">
<img alt="Tata Nexon Premium Banner" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida/ADBb0uizjW4Un_QitLDk1bUsmPkq_RTTMqwnqsGFaDfs0Ggf2JxbxqEOrjtkjIi66IavoeGbHEyQ2x_RzC4qTsVEe919frDYrDn2MFfcPXquPoKd02BfNwPaKJH45-vKKefF7yOq5-Z9NnSeIgsRf484Uh3RodDg8rgEcqQYkaIifvvUauw8dEUZSPT82Zayol2R82O5MsB-w3ESzvjf5j2dDtjox2eQ_6VLC9FJOyN0uUBQgpad26a17EHM-Fs"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center px-16">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 bg-secondary-container text-white px-3 py-1 rounded-full mb-stack-md">
<span className="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">verified</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Official Partner</span>
</div>
<h1 className="font-display-lg text-display-lg text-white mb-stack-sm">TATA MOTORS</h1>
<p className="font-body-lg text-body-lg text-white/80 mb-stack-lg">Engineering reliable components for India's most loved automotive legacy. Discover genuine spares for every Tata model.</p>
<button className="bg-secondary-container hover:bg-secondary text-white font-label-md text-label-md px-8 py-3 rounded-lg transition-all active:scale-95 shadow-lg flex items-center gap-2">
                        EXPLORE CATALOG
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</section>
{/* Layout Grid: Sidebar + Content */}
<div className="flex flex-col lg:flex-row gap-gutter">
{/* Left Sidebar Filters */}
<aside className="w-full lg:w-72 shrink-0">
<div className="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl sticky top-24">
<h3 className="font-headline-md text-headline-md mb-stack-lg">Filters</h3>
<div className="mb-stack-lg">
<p className="font-label-md text-label-md text-outline uppercase mb-stack-md">Body Type</p>
<div className="space-y-stack-sm">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="rounded border-outline-variant text-secondary-container focus:ring-secondary-container" type="checkbox"/>
<span className="font-body-md text-body-md group-hover:text-primary transition-colors">SUV</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-outline-variant text-secondary-container focus:ring-secondary-container" type="checkbox"/>
<span className="font-body-md text-body-md group-hover:text-primary transition-colors">Hatchback</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-outline-variant text-secondary-container focus:ring-secondary-container" type="checkbox"/>
<span className="font-body-md text-body-md group-hover:text-primary transition-colors">Sedan</span>
</label>
</div>
</div>
<div className="mb-stack-lg border-t border-outline-variant pt-stack-lg">
<p className="font-label-md text-label-md text-outline uppercase mb-stack-md">Fuel Type</p>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-full border border-secondary-container bg-secondary-container/10 text-secondary font-label-sm text-label-sm">Petrol</button>
<button className="px-4 py-2 rounded-full border border-outline-variant hover:border-secondary transition-colors font-label-sm text-label-sm">Diesel</button>
<button className="px-4 py-2 rounded-full border border-outline-variant hover:border-secondary transition-colors font-label-sm text-label-sm">EV</button>
<button className="px-4 py-2 rounded-full border border-outline-variant hover:border-secondary transition-colors font-label-sm text-label-sm">CNG</button>
</div>
</div>
<div className="border-t border-outline-variant pt-stack-lg">
<p className="font-label-md text-label-md text-outline uppercase mb-stack-md">Quick Search</p>
<div className="relative">
<input className="w-full bg-surface-container-low border border-outline-variant rounded-lg py-2 pl-3 text-body-sm font-body-sm focus:ring-2 focus:ring-secondary-container/20" placeholder="Model name..." type="text"/>
</div>
</div>
</div>
</aside>
{/* Main Content: Model Grid */}
<div className="flex-grow">
<div className="flex justify-between items-end mb-stack-lg">
<div>
<h2 className="font-headline-lg text-headline-lg">Model Catalog</h2>
<p className="font-body-md text-body-md text-on-surface-variant">7 models found under Tata Motors</p>
</div>
<div className="flex items-center gap-2">
<span className="text-body-sm font-body-sm text-outline">Sort by:</span>
<select className="bg-transparent border-none font-label-md text-label-md text-primary focus:ring-0 cursor-pointer">
<option>Popularity</option>
<option>Newest</option>
</select>
</div>
</div>
{/* Bento-inspired Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
{/* Card 1: Nexon */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover-lift flex flex-col">
<div className="h-48 overflow-hidden relative group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A professional side-profile photograph of a sleek, dark grey Tata Nexon parked in a bright, modern studio. High-key clinical lighting highlights the vehicle's metallic finish and premium SUV stance. The background is a minimalist, clean white studio wall that reflects soft ambient light, creating a high-end corporate automotive aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuEzsAsvVuNx8gZP25hKBLB4bIXIkxciVDLD3OcNi7s9f6vTScMPT1BEhca0q7pd0Cm-iWn2-ASdFwLSQ9uXrfJnUgYby_yjvjPAaRuDc0XmqeNU2gCu9tS0z7Y56x2ghrddiqvEJxnCLH02-SdNGVStVWg6lLIjBdlAuTlh4D6OundjRFFH_fKbgiuZFXGC5KMTRMOTbOeoozI1QlI1NjxEN9Rc_JcjCdF7-IBvc5gEI8iwjUe-SDTtT_8oADO-Ev633CMfSzDXQq"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold tracking-widest text-primary border border-outline-variant uppercase">Best Seller</div>
</div>
<div className="p-stack-lg flex-grow flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-headline-md">Nexon</h3>
<span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">In Stock</span>
</div>
<div className="flex gap-2 mb-stack-lg">
<span className="font-label-sm text-[11px] text-outline px-2 py-0.5 bg-surface-container rounded border border-outline-variant/30">Petrol</span>
<span className="font-label-sm text-[11px] text-outline px-2 py-0.5 bg-surface-container rounded border border-outline-variant/30">Diesel</span>
<span className="font-label-sm text-[11px] text-secondary-container px-2 py-0.5 bg-secondary-container/10 rounded border border-secondary-container/30">EV</span>
</div>
<button className="mt-auto w-full py-3 bg-primary text-white rounded-lg font-label-md text-label-md hover:bg-on-surface-variant transition-colors flex items-center justify-center gap-2">
                                VIEW PARTS
                                <span className="material-symbols-outlined text-[18px]">settings</span>
</button>
</div>
</div>
{/* Card 2: Punch */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover-lift flex flex-col">
<div className="h-48 overflow-hidden relative group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A studio shot of a vibrant blue Tata Punch micro-SUV, emphasizing its compact yet rugged design. The lighting is crisp and uniform, illuminating the front grille and sharp LED headlights. Set against a neutral light grey background that maintains a professional, editorial look consistent with a high-performance parts catalog." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqcbXPOj49HG2FJgQ7GBdJpd5-byYpPNWPaBQdKn-NCnd5l40ya3eH1bnzreCkFaYFtKrA2uzph3Y1woKWfUoTY47MedcyLb1tLePNiYFyQXBC1hkP09D6T_hjMsdeExnzlEHoX1SKG7U0Izz82cs08-S9-r90rqcY9JNV_yoZ-1yzV0I2wG2LvyvlviIGcC7iv39BFAGxD6VSuRzitLF_CEe1ZuZ8WG3njmxyeXNrAhTKfT4jzjGHEQdTURJw_4pgOtNnlTz0gmMD"/>
</div>
<div className="p-stack-lg flex-grow flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-headline-md">Punch</h3>
</div>
<div className="flex gap-2 mb-stack-lg">
<span className="font-label-sm text-[11px] text-outline px-2 py-0.5 bg-surface-container rounded border border-outline-variant/30">Petrol</span>
<span className="font-label-sm text-[11px] text-outline px-2 py-0.5 bg-surface-container rounded border border-outline-variant/30">EV</span>
<span className="font-label-sm text-[11px] text-outline px-2 py-0.5 bg-surface-container rounded border border-outline-variant/30">CNG</span>
</div>
<button className="mt-auto w-full py-3 bg-primary text-white rounded-lg font-label-md text-label-md hover:bg-on-surface-variant transition-colors flex items-center justify-center gap-2">
                                VIEW PARTS
                                <span className="material-symbols-outlined text-[18px]">settings</span>
</button>
</div>
</div>
{/* Card 3: Safari */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover-lift flex flex-col">
<div className="h-48 overflow-hidden relative group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A majestic white flagship Tata Safari SUV captured in a sophisticated showroom setting. The vehicle's elongated profile and premium alloy wheels are accentuated by warm, directional spotlights. The overall mood is luxurious and corporate, with a clean aesthetic that prioritizes technical clarity and build quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAik2AemaBelmnddFghM3jzuR26GMCV9mF0EH13HYffviFGkzDGwUTZfaR74W9YU60k8IIgKMzNHQnftuYAohmaT9Z0UOAe2tZognN-p_sTRkJFKyqMCyPZyVfjo-ZNiKqZC3X5-YYb3p-yvHF8Ou5wEQZ_GfgvDi8XeEEqiMonCRe3umFnfNFBqT7wcQ2nalv__80I5GawgHX6Xd-EwMJ3ckXyK6YtQNAMnMsaOJM790GUVm_q1Phq1hnrO7Vni8F-kZ8hiqr6FSOY"/>
</div>
<div className="p-stack-lg flex-grow flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-headline-md">Safari</h3>
<span className="bg-secondary-container/10 text-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Premium</span>
</div>
<div className="flex gap-2 mb-stack-lg">
<span className="font-label-sm text-[11px] text-outline px-2 py-0.5 bg-surface-container rounded border border-outline-variant/30">Diesel Only</span>
</div>
<button className="mt-auto w-full py-3 bg-primary text-white rounded-lg font-label-md text-label-md hover:bg-on-surface-variant transition-colors flex items-center justify-center gap-2">
                                VIEW PARTS
                                <span className="material-symbols-outlined text-[18px]">settings</span>
</button>
</div>
</div>
{/* Card 4: Harrier */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover-lift flex flex-col">
<div className="h-48 overflow-hidden relative group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A bold, dark-themed Tata Harrier SUV with an aggressive front fascia, displayed under dramatic studio lighting that creates high-contrast shadows. The vehicle's sleek curves and muscular wheel arches are the focus, set against a pristine, minimalist backdrop. The visual style is modern, clinical, and high-performance, mirroring the precision of automotive engineering." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7hPyIPnZ5mOhzrwDcOCt3ly4O5fTwfHeJ1aeF8oIbg5mvfJgQLnYmx8fUMzOA7WjiY57dru3BJruJXQw_zNPfFxxQdNbfxAEGHnHLaFSUMSLxslNhDbKUYYxig3aKkTIRIZjXdaywUCNFi-1dJUBSiwgiqekp8e8eGlQJ76Me9i9dJLckURCYGFH97WVdfqCF_oywcs5MKT2ttR_LEiR9D-EPgiar1_NIfCQYhkD7mfQxnIBppGmZBYssoLBi56SE6hKRQHYbR2C2"/>
</div>
<div className="p-stack-lg flex-grow flex flex-col">
<h3 className="font-headline-md text-headline-md mb-2">Harrier</h3>
<div className="flex gap-2 mb-stack-lg">
<span className="font-label-sm text-[11px] text-outline px-2 py-0.5 bg-surface-container rounded border border-outline-variant/30">Diesel</span>
</div>
<button className="mt-auto w-full py-3 bg-primary text-white rounded-lg font-label-md text-label-md hover:bg-on-surface-variant transition-colors flex items-center justify-center gap-2">
                                VIEW PARTS
                                <span className="material-symbols-outlined text-[18px]">settings</span>
</button>
</div>
</div>
{/* Card 5: Altroz */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover-lift flex flex-col">
<div className="h-48 overflow-hidden relative group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A high-end editorial shot of a gold Tata Altroz hatchback, showcasing its aerodynamic 'laser-cut' design language. The car is positioned on a polished reflective surface within a white studio space. The lighting is diffused and soft, highlighting the premium hatch's metallic sheen and intricate geometric patterns on the bodywork." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXFCLErnOgMdPO82bfogv6YMPoUcw34fivaWh8AXLZsFZj3l-fvTK7G_uZPkfRlMbMgZd-UY-UEXaIxQOivqDfF-XuxMveQ97zFX7MTcRyCwwgaQezMNsLiCCTAy63dVJ316HJYWpDVapTHkH_Ceru-ueH0ydrmkbubB3NgcWTR_rd9pM0EcFkFVGM1f-rqqpr5SEs9bb6sjYkEtneOksCE-qsyOFQkERTLGMhJBcq_6dKGnLFzzUGqq8wxwTmCpAygZt328p4Npwt"/>
</div>
<div className="p-stack-lg flex-grow flex flex-col">
<h3 className="font-headline-md text-headline-md mb-2">Altroz</h3>
<div className="flex gap-2 mb-stack-lg">
<span className="font-label-sm text-[11px] text-outline px-2 py-0.5 bg-surface-container rounded border border-outline-variant/30">Petrol</span>
<span className="font-label-sm text-[11px] text-outline px-2 py-0.5 bg-surface-container rounded border border-outline-variant/30">Diesel</span>
<span className="font-label-sm text-[11px] text-outline px-2 py-0.5 bg-surface-container rounded border border-outline-variant/30">CNG</span>
</div>
<button className="mt-auto w-full py-3 bg-primary text-white rounded-lg font-label-md text-label-md hover:bg-on-surface-variant transition-colors flex items-center justify-center gap-2">
                                VIEW PARTS
                                <span className="material-symbols-outlined text-[18px]">settings</span>
</button>
</div>
</div>
{/* Card 6: Tiago */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover-lift flex flex-col">
<div className="h-48 overflow-hidden relative group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A clean, minimalist photograph of a red Tata Tiago, emphasizing its friendly yet sharp urban hatchback styling. The car is center-framed in a bright white studio, with minimal shadows and high clarity. The lighting is even and bright, emphasizing the car's vibrant color and clean lines, perfect for a professional catalog entry." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHE23176QxuBQaYi76Cw1WbLx1UNCBAHtV8UbkOwV-Hik4Cxji-j6_AyIx35ks8HNpxLJWNMfTe1I8uKA7WrNPn7Y7xPAJFSMVLDIpAUMstp6LiYzib9wpwcGEaHpbWMVpWIvzEM6eW31o-7Rlwymzgh0sjrSbrA6pvOoB2EcK-HaofJmPmS5Ne1c_KnX21VXPrb4tficuiBAiF02EdaCR-Y0jMA_Q2VmSMBupgrDwK6aK9QpCcNtPO26FHf2cJha3FmLeO6RRC8sA"/>
</div>
<div className="p-stack-lg flex-grow flex flex-col">
<h3 className="font-headline-md text-headline-md mb-2">Tiago</h3>
<div className="flex gap-2 mb-stack-lg">
<span className="font-label-sm text-[11px] text-outline px-2 py-0.5 bg-surface-container rounded border border-outline-variant/30">Petrol</span>
<span className="font-label-sm text-[11px] text-outline px-2 py-0.5 bg-surface-container rounded border border-outline-variant/30">EV</span>
<span className="font-label-sm text-[11px] text-outline px-2 py-0.5 bg-surface-container rounded border border-outline-variant/30">CNG</span>
</div>
<button className="mt-auto w-full py-3 bg-primary text-white rounded-lg font-label-md text-label-md hover:bg-on-surface-variant transition-colors flex items-center justify-center gap-2">
                                VIEW PARTS
                                <span className="material-symbols-outlined text-[18px]">settings</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/* Catalog Highlights / Technical Specs Zebra Table */}
<section className="mt-16 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
<div className="p-stack-lg border-b border-outline-variant bg-surface-container-low">
<h2 className="font-headline-md text-headline-md">Top Moving Spares (Tata Motors)</h2>
</div>
<div className="overflow-x-auto">
<table className="w-full zebra-table text-left border-collapse">
<thead>
<tr className="bg-surface-container-high border-b border-outline-variant">
<th className="p-stack-lg font-label-md text-label-md text-outline uppercase">Part Name</th>
<th className="p-stack-lg font-label-md text-label-md text-outline uppercase">Compatibility</th>
<th className="p-stack-lg font-label-md text-label-md text-outline uppercase">Quality</th>
<th className="p-stack-lg font-label-md text-label-md text-outline uppercase">In Stock</th>
<th className="p-stack-lg font-label-md text-label-md text-outline uppercase">Action</th>
</tr>
</thead>
<tbody>
<tr>
<td className="p-stack-lg font-body-md text-body-md font-semibold">Front Brake Pads Set</td>
<td className="p-stack-lg font-body-sm text-body-sm">Nexon, Punch, Harrier</td>
<td className="p-stack-lg"><span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded">OEM GENUINE</span></td>
<td className="p-stack-lg font-body-sm text-body-sm">Yes (42 units)</td>
<td className="p-stack-lg"><button className="text-secondary font-label-md text-label-md hover:underline">Add to Cart</button></td>
</tr>
<tr>
<td className="p-stack-lg font-body-md text-body-md font-semibold">Oil Filter (Diesel)</td>
<td className="p-stack-lg font-body-sm text-body-sm">Safari, Harrier, Nexon</td>
<td className="p-stack-lg"><span className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded">PREMIUM AFTERMARKET</span></td>
<td className="p-stack-lg font-body-sm text-body-sm">Yes (100+ units)</td>
<td className="p-stack-lg"><button className="text-secondary font-label-md text-label-md hover:underline">Add to Cart</button></td>
</tr>
<tr>
<td className="p-stack-lg font-body-md text-body-md font-semibold">Wiper Blade Set</td>
<td className="p-stack-lg font-body-sm text-body-sm">All Models</td>
<td className="p-stack-lg"><span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded">OEM GENUINE</span></td>
<td className="p-stack-lg font-body-sm text-body-sm">Yes (18 units)</td>
<td className="p-stack-lg"><button className="text-secondary font-label-md text-label-md hover:underline">Add to Cart</button></td>
</tr>
<tr>
<td className="p-stack-lg font-body-md text-body-md font-semibold">Air Filter Assembly</td>
<td className="p-stack-lg font-body-sm text-body-sm">Tiago, Tigor, Altroz</td>
<td className="p-stack-lg"><span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded">OEM GENUINE</span></td>
<td className="p-stack-lg font-body-sm text-body-sm">Yes (12 units)</td>
<td className="p-stack-lg"><button className="text-secondary font-label-md text-label-md hover:underline">Add to Cart</button></td>
</tr>
</tbody>
</table>
</div>
</section>
</main>
    </>
  );
}

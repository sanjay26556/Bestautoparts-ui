import { Link } from 'react-router-dom';

export default function MahindraModels() {
  return (
    <>
      <main className="min-h-screen pt-20">
{/* Hero Section */}
<section className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
<img alt="Mahindra XUV700" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uiPpzqUDDQ6K9OVAKCZDiv3uKl45VaoJWhNi1lh8Qj0vP-Q-nvNufm54A5uz6RCEl15Ip9pdAK8ciNVrazScDGnQo2_QEEbhP0kicMhnwOgDH3ASXjPHcldxasYKy1-8Dsb1KVsIWNg9KwxztKvFnsisQIdzyy3KCmPn5NcZqWCwXCkMbGn3rmKuprbcs8t6uYDLl3wv7TUrVIem4bKdYJ_jNhfAoURBhoMd4oK0jzxdGAG6j5lrznDsAmc"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent">
<div className="max-w-container-max mx-auto h-full px-margin-desktop flex flex-col justify-center items-start text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full mb-stack-md">
<span className="material-symbols-outlined text-[18px]" data-icon="verified">verified</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Premium Mahindra Catalog</span>
</div>
<h1 className="font-display-lg text-display-lg md:text-[64px] mb-stack-md max-w-2xl leading-tight">Authentic Precision. <br/><span className="text-secondary-fixed">Mahindra Excellence.</span></h1>
<p className="font-body-lg text-body-lg text-surface-variant max-w-xl mb-stack-lg">Explore the legacy of Mahindra engineering. From the untamed Thar to the sophisticated XUV700, find genuine spare parts for every adventure.</p>
<div className="flex gap-stack-md">
<button className="bg-secondary text-white px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-secondary/90 transition-all active:scale-95 shadow-lg shadow-secondary/20">Explore Inventory</button>
<button className="border border-white/50 backdrop-blur-sm px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-white/10 transition-all active:scale-95">Technical Specs</button>
</div>
</div>
</div>
</section>
{/* Brand Filter Section */}
<section className="py-stack-lg bg-surface-container-low">
<div className="max-w-container-max mx-auto px-margin-desktop">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-stack-md">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary">Mahindra Model Catalog</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Select your vehicle to browse compatible precision components.</p>
</div>
<div className="relative max-w-md w-full">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all" placeholder="Search for model or part number..." type="text"/>
</div>
</div>
</div>
</section>
{/* Model Grid (Bento Style) */}
<section className="py-stack-lg max-w-container-max mx-auto px-margin-desktop">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Large Featured: Scorpio N */}
<div className="md:col-span-8 group bg-white border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="grid md:grid-cols-2 h-full">
<div className="p-stack-lg flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-2">
<span className="material-symbols-outlined" data-icon="settings_input_component">settings_input_component</span>
<span className="font-label-sm text-label-sm uppercase">Legendary Reliability</span>
</div>
<h3 className="font-headline-lg text-headline-lg mb-2">Scorpio N</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-md">The Big Daddy of SUVs. Engineered for dominance on and off the road with world-class safety features.</p>
<div className="flex flex-wrap gap-2 mb-stack-lg">
<span className="px-3 py-1 bg-surface-container-highest rounded-full font-label-sm text-label-sm">4WD Option</span>
<span className="px-3 py-1 bg-surface-container-highest rounded-full font-label-sm text-label-sm">mHawk Engine</span>
</div>
</div>
<button className="flex items-center gap-2 text-secondary font-label-md text-label-md group-hover:gap-4 transition-all">
                                View Parts Catalog <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="relative h-64 md:h-full">
<img className="w-full h-full object-cover" data-alt="A side-profile shot of a dark metallic Mahindra Scorpio N parked on a rugged mountain road at dusk. The vehicle's bold lines and chrome accents are highlighted by the cool, low-light atmosphere. The lighting is moody and cinematic, emphasizing the SUV's tough yet premium persona within a high-end automotive catalog aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa22jkbzAgmj5K2kAD2QdbXhuKoZdHo9wnanVl_tcWlbRvlhHMzxZokI--0pr9qKIrZt56BpDLPYJ6EeA17UWhvoB2h8o_5Y88MfmJ5NjetI8RkO9xQ4UHN0FCrqu734tjUsC8WFBfgXd45nZtfs8puICQnq-rGRCHrc4fpp8vXxHp4BnSIwM-q3e64xyw2Jn8fnyi6Bg30vrgvtu4caqBF4WfiUnXao83OYEbGkOeOq1IXnnt28cfiDsAnfIR6Vnctf4KzXBw95Qw"/>
</div>
</div>
</div>
{/* Featured Secondary: Thar */}
<div className="md:col-span-4 group bg-white border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A high-contrast photo of a red Mahindra Thar traversing a sandy desert landscape. The bright daylight creates sharp shadows and highlights the vehicle's iconic boxy silhouette and off-road tires. The atmosphere is adventurous and bold, with a vibrant color palette that screams performance and durability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCudEjfbR5xpZEMmjnLRUQRFENEgXbs3orrp6xR3g6I1DOXRor1IEn1MfFHSxA7zUE0Hi_QVNCjrxiinD_FJZzMnJ1C2Tum37HLI5RqdgmKExeGc_nA4d672zVb2fVIVr0TUFlo58WvbPBe7fD3u2eBGS7zSInikBpG-DScuaHswGKPUePiiCUoh83y3cFTuZco-GTx_mMTThhwJ2YJ3SLVT0K09T2u6DWIa46qnmorItkv9vdTyKNbB8R_QjNEPslbRQ11fGZsE8TO"/>
<div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white rounded-full font-label-sm text-label-sm">4x4 Standard</div>
</div>
<div className="p-stack-lg flex-1 flex flex-col justify-between">
<div>
<h3 className="font-headline-md text-headline-md mb-2">Thar</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-md">Explore the Impossible. The ultimate off-road icon designed to conquer any terrain with ease.</p>
</div>
<button className="w-full py-3 border border-secondary text-secondary rounded-lg font-label-md text-label-md hover:bg-secondary hover:text-white transition-all active:scale-95">Access Components</button>
</div>
</div>
{/* Regular Grid Items */}
<div className="md:col-span-4 group bg-white border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="relative h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A professional studio photograph of a silver Mahindra XUV700 against a clean, white minimalist background. The lighting is soft and even, highlighting the car's aerodynamic shape and sophisticated LED light signature. The style is modern corporate, emphasizing elegance and technological advancement." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC58vVTiGiOY2Xqg9nq0tm1Ea2PhzldFTG9fxSeOiRPjzyCa8ENZBdWnrmbkrVMRkYTeax4YeKVgfREJaghvHEGJPZB-A6_1pmlF5rp8Kh_DYxxDeQdUSVtfCMnJr3YSGBXRrc9BcP0w503vjKaE38PrS7BaB3ePJEL0XpNQo_8PUPeRD_0_qC_WADRGkUw2Lg06nDA2hQRcCw1c_PCVB15Qgt2yfDbPh2vImVcNRGy7bqARrVZWiQXNoU7aHnAM9clB4w-nTzUORK"/>
</div>
<div className="p-stack-lg">
<h3 className="font-headline-md text-headline-md mb-1">XUV700</h3>
<div className="flex items-center gap-2 mb-stack-md">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-body-sm font-label-sm text-on-surface-variant">AWD Models Supported</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-lg">Precision engineering meets luxury. Browse smart electronics and drivetrain parts.</p>
<button className="text-secondary font-label-md text-label-md hover:underline underline-offset-4">Browse Catalog</button>
</div>
</div>
<div className="md:col-span-4 group bg-white border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="relative h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A rugged Mahindra Bolero parked near a rural construction site during the golden hour. The warm sunlight casts long shadows and highlights the vehicle's utilitarian, robust design. The image conveys a sense of reliability, hard work, and timeless mechanical strength in a professional documentary style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWaeuEEOUncD-9lc9lBA8aQO1gJaW8MGsBM6FSmowiDRjbqkcqJeGYaAtcCwF5aL9TjG_7giMmmWiXVv--50K4_RclKGommCqOHV-doY-qpR6EnIToWKf07wQLptRTkU_K1jUP0UT0bttAfe-Cfhrgy_lETjbdu00k-k_uMTfjnQ09CtclkwkXTsdurN2XMKmO-fzMSMVzbX23cI25b74hPNXMuZYmg2g7fwb_TnIyT2Z5hjYp2TcXiarJYGz6fm6_mJj3C4VIF1ko"/>
</div>
<div className="p-stack-lg">
<h3 className="font-headline-md text-headline-md mb-1">Bolero</h3>
<div className="flex items-center gap-2 mb-stack-md">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="text-body-sm font-label-sm text-on-surface-variant">Heavy Duty Parts</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-lg">The workhorse of India. Find durable engine components and body panels.</p>
<button className="text-secondary font-label-md text-label-md hover:underline underline-offset-4">Browse Catalog</button>
</div>
</div>
<div className="md:col-span-4 group bg-white border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="relative h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A sleek, modern Mahindra XUV 3XO maneuvering through a busy metropolitan street at night. Neon signs and city lights reflect off its polished metallic exterior, creating a dynamic and vibrant urban aesthetic. The style is high-energy and contemporary, focusing on the vehicle's agility and modern design language." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8fwcXAR6xcgpG9vOCioA0_WipWnt54Uawakg_NRhAmaFyxFWH9-rGYWvYeeUs9mIo69jMITPwDTJplzttPUAFk5x1p9Jmhf_x1r2271QOKiSlfzFe5hDMYJIy9C10cza6WtZKwJa-i_QsnfUXswDYfkfeu64bpSWVH4V9y9FLYnIuOogEER6hq4lGdKvVKAEDbNA2jazFFf7_JhSzRqNUkQRIPBl3RMg1TYwMHjW7nZ8sijNaEDG8WVRvU7Nldb9GINo5LqR3cw7S"/>
</div>
<div className="p-stack-lg">
<h3 className="font-headline-md text-headline-md mb-1">XUV 3XO</h3>
<div className="flex items-center gap-2 mb-stack-md">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-body-sm font-label-sm text-on-surface-variant">Turbo-Petrol Series</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-lg">The tech-forward compact SUV. Explore high-performance turbo components.</p>
<button className="text-secondary font-label-md text-label-md hover:underline underline-offset-4">Browse Catalog</button>
</div>
</div>
</div>
</section>
{/* Technical Excellence Section */}
<section className="bg-primary-container text-white py-16 mt-stack-lg">
<div className="max-w-container-max mx-auto px-margin-desktop grid md:grid-cols-2 gap-stack-lg items-center">
<div>
<h2 className="font-headline-lg text-headline-lg mb-stack-md text-inverse-primary">Precision Mechanical Standards</h2>
<p className="font-body-lg text-body-lg text-on-primary-container mb-stack-lg">We source components that meet the exact metallurgical and electronic standards set by Mahindra's global R&amp;D centers.</p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-secondary-container/20 rounded-xl flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-secondary-fixed" data-icon="verified_user">verified_user</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-white">Genuine Certification</h4>
<p className="font-body-sm text-body-sm text-on-primary-container">Every part comes with a unique QR code for authenticity verification and warranty tracking.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-secondary-container/20 rounded-xl flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-secondary-fixed" data-icon="precision_manufacturing">precision_manufacturing</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-white">Engineering Fit</h4>
<p className="font-body-sm text-body-sm text-on-primary-container">Zero-tolerance manufacturing ensures that every bolt and seal fits exactly as it did on the assembly line.</p>
</div>
</div>
</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-base backdrop-blur-md">
<div className="zebra-specs font-body-sm text-body-sm">
<div className="p-3 flex justify-between">
<span className="text-on-primary-container">Component Grade</span>
<span className="font-semibold text-white">Industrial S1</span>
</div>
<div className="p-3 flex justify-between">
<span className="text-on-primary-container">Metallurgy</span>
<span className="font-semibold text-white">High-Tensile Steel Alloy</span>
</div>
<div className="p-3 flex justify-between">
<span className="text-on-primary-container">Tolerance Level</span>
<span className="font-semibold text-white">+/- 0.02mm</span>
</div>
<div className="p-3 flex justify-between">
<span className="text-on-primary-container">Surface Treatment</span>
<span className="font-semibold text-white">Electrophoretic Coating</span>
</div>
<div className="p-3 flex justify-between">
<span className="text-on-primary-container">Lifespan Guarantee</span>
<span className="font-semibold text-white">150,000 KM</span>
</div>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}

import { Link } from 'react-router-dom';

export default function MarutiSwift() {
  return (
    <>
      <main className="min-h-screen pt-20">
{/* Hero Section & Variant Selection */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Hero Image Column */}
<div className="lg:col-span-8 rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 relative min-h-[400px] bg-surface-container-lowest">
<img alt="Maruti Swift" className="w-full h-full object-cover object-center absolute inset-0" data-alt="A high-quality, professional photograph of a sleek, modern silver hatchback car parked in a clean, brightly lit studio environment. The lighting is pristine and high-key, highlighting the car's dynamic curves and metallic paint finish. The setting reflects a premium automotive showroom aesthetic, utilizing a modern corporate style with crisp white backgrounds and subtle reflections. The overall mood is sophisticated, reliable, and precision-engineered." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt9wuQlxCS9FmrP7URyxeMbwCyaTJav-Sqt-RTfySxfY0ENcOdnWXGqxzNG_9Fba99OVy4RwB7qYqlT7WuEAQNfoFTZIbi9VxBRm5TfkZ3JqO8atu7LgrSSZgnYo3fE-WeUIkHg5xB2-BxjJ8A4rh3WuHPTcErN_Bva9M5eX_Xp_WLptIsW8cov0Xl3RJb4dCPXQzlGfBqyKoePIY4IWQJgPopCvZ28Q7umeMnWn5M7nraTO4dBxcj2cKrCVGwSDyMyRZQqv4Y57NM"/>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
<h1 className="font-headline-lg md:font-display-lg text-headline-lg-mobile md:text-display-lg text-white mb-2">Maruti Swift</h1>
<p className="font-body-lg text-body-lg text-white/90">Precision Engineered Spares for India's Favorite Hatchback.</p>
</div>
</div>
{/* Variant Selection Column */}
<div className="lg:col-span-4 flex flex-col gap-6">
<div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-sm flex flex-col gap-4">
<h2 className="font-headline-md text-headline-md text-on-surface">Select Variant</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Ensure perfect fitment by selecting your exact model variant.</p>
<div className="grid grid-cols-1 gap-3">
<button className="text-left w-full p-4 rounded-lg border border-outline-variant/50 hover:border-secondary hover:bg-surface-container-low transition-all flex justify-between items-center group">
<div>
<h3 className="font-label-md text-label-md text-on-surface group-hover:text-secondary">LXI</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">1.2L DualJet Petrol</p>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-secondary">chevron_right</span>
</button>
<button className="text-left w-full p-4 rounded-lg border-2 border-secondary bg-surface-container-low flex justify-between items-center relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1 bg-secondary"></div>
<div>
<h3 className="font-label-md text-label-md text-secondary">VXI</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">1.2L DualJet Petrol</p>
</div>
<span className="material-symbols-outlined text-secondary">check_circle</span>
</button>
<button className="text-left w-full p-4 rounded-lg border border-outline-variant/50 hover:border-secondary hover:bg-surface-container-low transition-all flex justify-between items-center group">
<div>
<h3 className="font-label-md text-label-md text-on-surface group-hover:text-secondary">ZXI</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">1.2L DualJet Petrol</p>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-secondary">chevron_right</span>
</button>
<button className="text-left w-full p-4 rounded-lg border border-outline-variant/50 hover:border-secondary hover:bg-surface-container-low transition-all flex justify-between items-center group">
<div>
<h3 className="font-label-md text-label-md text-on-surface group-hover:text-secondary">ZXI+</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">1.2L DualJet Petrol</p>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-secondary">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
{/* Specifications & Categories Grid */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-8">
{/* Quick Specs Bento Box */}
<div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">tune</span>
                        VXI Specifications
                    </h2>
<div className="space-y-4">
<div className="flex justify-between items-center pb-3 border-b border-surface-variant">
<span className="font-body-sm text-body-sm text-on-surface-variant">Engine</span>
<span className="font-label-md text-label-md text-on-surface">1197 cc, K Series</span>
</div>
<div className="flex justify-between items-center pb-3 border-b border-surface-variant">
<span className="font-body-sm text-body-sm text-on-surface-variant">Max Power</span>
<span className="font-label-md text-label-md text-on-surface">88.50 bhp @ 6000 rpm</span>
</div>
<div className="flex justify-between items-center pb-3 border-b border-surface-variant">
<span className="font-body-sm text-body-sm text-on-surface-variant">Max Torque</span>
<span className="font-label-md text-label-md text-on-surface">113 Nm @ 4400 rpm</span>
</div>
<div className="flex justify-between items-center pb-3 border-b border-surface-variant">
<span className="font-body-sm text-body-sm text-on-surface-variant">Transmission</span>
<span className="font-label-md text-label-md text-on-surface">5-Speed Manual/AMT</span>
</div>
<div className="flex justify-between items-center pb-3">
<span className="font-body-sm text-body-sm text-on-surface-variant">Fuel Type</span>
<span className="font-label-md text-label-md text-on-surface">Petrol</span>
</div>
</div>
</div>
</div>
{/* Categories Bento Grid */}
<div className="md:col-span-8 flex flex-col gap-6">
<h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">category</span>
                    Browse by System
                </h2>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full">
{/* Category Card */}
<a className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center gap-3 group" href="#">
<div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">
<span className="material-symbols-outlined text-[32px]">directions_car</span>
</div>
<span className="font-label-md text-label-md text-on-surface">Engine Parts</span>
</a>
{/* Category Card */}
<a className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center gap-3 group" href="#">
<div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">
<span className="material-symbols-outlined text-[32px]">tire_repair</span>
</div>
<span className="font-label-md text-label-md text-on-surface">Brakes</span>
</a>
{/* Category Card */}
<a className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center gap-3 group" href="#">
<div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">
<span className="material-symbols-outlined text-[32px]">ev_station</span>
</div>
<span className="font-label-md text-label-md text-on-surface">Electricals</span>
</a>
{/* Category Card */}
<a className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center gap-3 group" href="#">
<div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">
<span className="material-symbols-outlined text-[32px]">build</span>
</div>
<span className="font-label-md text-label-md text-on-surface">Suspension</span>
</a>
{/* Full width category banner */}
<a className="col-span-2 lg:col-span-4 bg-primary text-on-primary rounded-xl p-6 border border-outline-variant/30 shadow-sm hover:bg-primary/90 transition-all flex items-center justify-between group overflow-hidden relative" href="#">
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md mb-1">View All Swift VXI Parts</h3>
<p className="font-body-sm text-body-sm text-on-primary/80">Browse our complete catalog of verified OEM and aftermarket spares.</p>
</div>
<span className="material-symbols-outlined text-[32px] group-hover:translate-x-2 transition-transform relative z-10">arrow_forward</span>
{/* Decorative background element */}
<div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/10 to-transparent"></div>
</a>
</div>
</div>
</section>
{/* Popular Spares Carousel (Simulated) */}
<section className="flex flex-col gap-6">
<div className="flex justify-between items-end">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Popular Spares for Swift VXI</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Frequently replaced parts guaranteed to fit your vehicle.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors disabled:opacity-50" disabled="">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Product Card 1 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-[0_4px_6px_-1px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(15,23,42,0.1)] transition-all flex flex-col overflow-hidden group">
<div className="h-48 bg-surface-container-low relative overflow-hidden flex items-center justify-center p-4">
<div className="absolute top-2 left-2 px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">verified</span> OEM Part
                        </div>
<img alt="Oil Filter" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" data-alt="A detailed product shot of a brand new, clean automotive oil filter resting on a stark white background. The studio lighting is bright and even, highlighting the metallic casing and printed technical specifications on the filter body. The image conveys mechanical precision and reliability, fitting perfectly into a modern, corporate automotive e-commerce aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMdq6IE6wm05pQY6ppoxEooM134IgYOM0jDPGk64-njhWbotrzk8CsjrwRwJ_uWgOLYSPG7oy5ECNup8sQ5G6t7hRykGEkc6vpdDTpeu4W-B-W7tKXbSfhZ_SIU1tEGM_6huyFG3FaNi2FA8RxcPLC7dsqBqK0hD4EoJCZVaCF59QnYNXxrZeMfnOauyk3M35IJ5Iqq0H-8M22055z_EHKEwDQmCN74gAvfcDix9l0LSDV_4bSFkv4UKNYm7RMqe5KYsm4u4k6yziS"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-1">BOSCH</p>
<h3 className="font-body-md text-body-md text-on-surface font-semibold mb-2 line-clamp-2">Premium Oil Filter - Swift VXI Petrol</h3>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-surface-variant">
<span className="font-headline-md text-headline-md text-primary">₹345</span>
<button className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-secondary transition-colors">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
</div>
{/* Product Card 2 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-[0_4px_6px_-1px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(15,23,42,0.1)] transition-all flex flex-col overflow-hidden group">
<div className="h-48 bg-surface-container-low relative overflow-hidden flex items-center justify-center p-4">
<img alt="Brake Pads" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" data-alt="A clean, well-lit studio photograph of a set of automotive brake pads arranged neatly on a pristine white surface. The high-key lighting emphasizes the textured friction material and the metallic backing plates. The aesthetic is clinical, modern, and trustworthy, suitable for a premium auto parts catalog. The color palette is neutral with dark grays and metallic silvers dominating." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi-0akuBXHRzACkU9FBW7x9NZ47RKJUWGABH5Ngvh_nq3d-6yzzTFL069Y59rWHElOBUujP_hGUIpt_ZF5dFQ2drW03egitCJRO2KyaQC2pEgHsdghAUrssTPNz8LJ-IZhnjAew3w1LcCsEwuBnHnHHKX_dwOf6VtJiGvBHjk6gpelDDanGTjDqKgMQjtt5kZezGq3u_TezTdN9QIvHeU1Lyh12L7Fg_lOW9A7P9bdTL20zkbgTqGWDKW0k7JA-5wYmKnvIQ0aRt82"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-1">TVS GIRLING</p>
<h3 className="font-body-md text-body-md text-on-surface font-semibold mb-2 line-clamp-2">Front Brake Pad Set - Swift 2018+</h3>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-surface-variant">
<span className="font-headline-md text-headline-md text-primary">₹1,250</span>
<button className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-secondary transition-colors">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
</div>
{/* Product Card 3 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-[0_4px_6px_-1px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(15,23,42,0.1)] transition-all flex flex-col overflow-hidden group">
<div className="h-48 bg-surface-container-low relative overflow-hidden flex items-center justify-center p-4">
<img alt="Spark Plug" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" data-alt="A striking close-up shot of an automotive spark plug resting on a modern, neutral gray background. The lighting is crisp and editorial, highlighting the ceramic insulator and the metallic threads with precision. The mood is highly technical and reliable, aligning with a corporate aesthetic. Deep blacks and bright highlights emphasize the mechanical details." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxDNdrInveh8lR4gNvKTvz92iGD1htFGDKL4ccRgqxdrBAyhWqRdhOTBbay4nY7jd-B8fsT2S35k2bjeHqOmZwMQ0du_gvztTUA5fBNPyYEyCBkqoK27SF8tdicy3_B7a9ZjsYA8YaOjTWXMFPSbpq5k9Mw1gaWtWdHn_1Fjvo3FGeRp-vs5m1V25bu_kuXTwChEgQ5bCQjxLhwBpr_AQTIax4299aVyNLe5xqmDfoxuR0raWh_kUapG5yRV6LkChFddjj2SUFZ3ww"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-1">NGK</p>
<h3 className="font-body-md text-body-md text-on-surface font-semibold mb-2 line-clamp-2">Iridium Spark Plug (Set of 4)</h3>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-surface-variant">
<span className="font-headline-md text-headline-md text-primary">₹850</span>
<button className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-secondary transition-colors">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
</div>
{/* Product Card 4 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-[0_4px_6px_-1px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(15,23,42,0.1)] transition-all flex flex-col overflow-hidden group hidden lg:flex">
<div className="h-48 bg-surface-container-low relative overflow-hidden flex items-center justify-center p-4">
<img alt="Headlamp Assembly" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" data-alt="A professional product image of a complete modern car headlamp assembly isolated against a stark white backdrop. The lighting is sophisticated, creating glossy reflections on the clear plastic lens and revealing the intricate internal reflector design. The visual style is premium e-commerce, focusing on clarity, cleanliness, and technical perfection." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8GbdlPVCoKu2aApFalojO44NZ7iSpVio8P7BZBJXRlQi5tsjqYNnqibUFeg3_CoZG0_de5DEwsAwGwUfSlh-tXaLhdAXUA9Yuh4RnBsZMawEqPIMRm2w9wu8k-Ox__e1GA6LH6IDX-f3yaGun8FErCBPBXz8kf4XT9hVrnPj0I0TbUdT_vI29M92m7yQFhPdRrGevt9iZE4NvQYVqTYKVenlFyRWYIuoqs7AIFkXExdph8H1AfvlEX1PV2LB9mlEmI6_IcdoAI1i4"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-1">MINDA</p>
<h3 className="font-body-md text-body-md text-on-surface font-semibold mb-2 line-clamp-2">Halogen Headlamp Assembly - Right</h3>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-surface-variant">
<span className="font-headline-md text-headline-md text-primary">₹3,400</span>
<button className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-secondary transition-colors">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}

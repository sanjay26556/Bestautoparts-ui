import { Link } from 'react-router-dom';

export default function BMWModels() {
  return (
    <>
      <main className="min-h-screen pt-20">
{/* Hero Section */}
<section className="relative h-[500px] overflow-hidden bg-primary">
<div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent z-10"></div>
<img alt="BMW 7 Series Hero" className="absolute inset-0 w-full h-full object-cover" data-alt="A side-profile shot of a sleek, dark metallic BMW 7 Series sedan parked on a clean concrete floor in a high-end, minimalist architectural setting. The lighting is low-key with dramatic highlights accentuating the car's precision-engineered body lines. The background features deep shadows and cool gray tones, maintaining a premium and sophisticated atmosphere consistent with a corporate luxury automotive brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcNNfrouvcqi0FPe79V5wCNkMAzjQ-p696CpJEGHCN8FUx_QvKnTxJLB5XT39Smt4FgqK_aQPfzfLh5Lb1OIuly8Z8nMDZkEXIowmmZshcT7oClX0CpeN1NU4eT-ngbNrRMx4EwVxiV6d_Nl1g4OlTEE-xNkwKElNPMHftgJ96Pv3Mng2BXpUdwHsNsmgywCfnILwQdxfzZbV6CFYQ0eKqy_cvpbZNRUMep1wCteWS_1-AWc8Tp8xACA945oOczIG2hNfoWKS27F3_"/>
<div className="relative z-20 max-w-container-max mx-auto px-margin-desktop h-full flex flex-col justify-center">
<div className="max-w-2xl">
<span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-widest mb-4 block">Official Brand Page</span>
<h1 className="font-display-lg text-display-lg text-on-primary mb-6">BMW Genuine Spares &amp; Performance</h1>
<p className="font-body-lg text-body-lg text-on-primary-container mb-8">Maintain the Sheer Driving Pleasure with factory-certified precision parts designed specifically for your BMW.</p>
<div className="flex gap-4">
<button className="px-8 py-3 bg-secondary-container text-on-secondary-container font-semibold rounded-lg hover:bg-secondary-container/90 transition-all active:scale-95">Explore Catalog</button>
<button className="px-8 py-3 border border-on-primary text-on-primary font-semibold rounded-lg hover:bg-on-primary/10 transition-all">Download Brochure</button>
</div>
</div>
</div>
</section>
{/* Brand Info / Trust Badges */}
<section className="bg-surface-container-lowest py-12 border-b border-outline-variant">
<div className="max-w-container-max mx-auto px-margin-desktop flex flex-wrap justify-between items-center gap-8">
<div className="flex flex-col">
<span className="font-headline-md text-headline-md text-on-surface font-bold">Official Partner</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Authorized distributor for BMW Group Parts India</p>
</div>
<div className="flex flex-wrap gap-12">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-secondary-fixed/30 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" data-icon="verified" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">100% Genuine</p>
<p className="font-body-sm text-body-sm text-outline">Factory Seal &amp; Warranty</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-secondary-fixed/30 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" data-icon="settings_input_component" style="font-variation-settings: 'FILL' 1;">settings_input_component</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Precision Fit</p>
<p className="font-body-sm text-body-sm text-outline">OEM Specifications</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-secondary-fixed/30 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" data-icon="local_shipping" style="font-variation-settings: 'FILL' 1;">local_shipping</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Fast Delivery</p>
<p className="font-body-sm text-body-sm text-outline">Pan-India Network</p>
</div>
</div>
</div>
</div>
</section>
<section className="max-w-container-max mx-auto px-margin-desktop py-16">
<div className="flex flex-col md:flex-row gap-12">
{/* Filters Sidebar */}
<aside className="w-full md:w-64 flex-shrink-0">
<div className="sticky top-28 space-y-8">
<div>
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-4">Body Type</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface">SUV</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface">Sedan</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface">M-Sport Performance</span>
</label>
</div>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-4">Fuel Type</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface">Petrol</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface">Diesel</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface">Electric (i Series)</span>
</label>
</div>
</div>
<div className="pt-6 border-t border-outline-variant">
<button className="w-full py-2 bg-surface-container-high font-label-md text-label-md rounded-lg hover:bg-surface-container transition-all">Reset Filters</button>
</div>
</div>
</aside>
{/* Model Catalog Grid */}
<div className="flex-grow">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Select Your Model</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Showing 7 available series for the Indian market</p>
</div>
<div className="flex gap-2">
<button className="p-2 border border-outline-variant rounded hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
</button>
<button className="p-2 border border-outline-variant rounded hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined" data-icon="view_list">view_list</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/* Model Card: X1 */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-lg transition-all duration-300 group">
<div className="relative h-48 overflow-hidden">
<img alt="BMW X1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A clean, studio-lit shot of a white BMW X1 SUV. The car is positioned at a three-quarter angle against a neutral grey background with soft cinematic shadows beneath. The lighting highlights the crystalline structure of the LED headlights and the signature kidney grille, reflecting a modern, tech-focused corporate UI style with high contrast and sharp focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjprXedTUrP3SKcFo2BA-YBcTpX9JSRtx6ib6D7TJ8ypSKLI9d7oziBFDOggP--OG5uSj2Iq6TYVlgCzUBSziWaI8JOY76un-5urFE_DxNqxAVDYYb5vDKYhTZxUuL2lRa9LfzbD2UjcgZCsKfDO8b5rDwrCt1zVPTPRwbe19M1nuvOpsKAI-1HKpqIT4oaqvwJixapoF3WIfOHNijur0Klqk8_w7dGijvxYt5f796mCAoM_TpwYiVc1FAQarm_miWW-5WVXG9PcPk"/>
<div className="absolute top-4 right-4 px-3 py-1 bg-surface-container-lowest/80 backdrop-blur-md rounded-full font-label-sm text-label-sm text-on-surface">SUV</div>
</div>
<div className="p-6">
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">BMW X1</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Versatile and adventurous. Find every part from filters to engine components.</p>
<button className="w-full py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                    View Parts
                                    <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/* Model Card: 3 Series */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-lg transition-all duration-300 group">
<div className="relative h-48 overflow-hidden">
<img alt="BMW 3 Series" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A side view of a metallic blue BMW 3 Series sedan driving through a modern urban bridge at dusk. The city lights create soft bokeh in the background, while the car's body reflects the ambient twilight. The image uses a cool color palette with deep blues and crisp whites, embodying the sporty yet professional aesthetic of the Precision Auto design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE2Ju0aWjK3ylgx4TgH4UzLtFQibwi6jp6n2IPM-Lg6AgLGexB-kfuAcHi6RDv6o8_rLH3LB2xWopEmwNgHt64Za4eATq7Yor4utQ8-Ew0X7crtr9qNe16dXgAT53kPHY7apWXRD7BLLi8FLnpewiR_tKaA4Rvszn_jx0uStU1Ngz87ujoXzPWCN4bpFXgkseIDcC7xQWICPpOELUZuMn3WyJXXs1XJI0I1yB9CKKCQZfrMADc7ga8oUKVGHQfAo_3jK6xFNSEj9xE"/>
<div className="absolute top-4 right-4 px-3 py-1 bg-surface-container-lowest/80 backdrop-blur-md rounded-full font-label-sm text-label-sm text-on-surface">Sedan</div>
</div>
<div className="p-6">
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">3 Series</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6">The ultimate sports sedan. Performance brakes, exhausts, and trim kits available.</p>
<button className="w-full py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                    View Parts
                                    <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/* Model Card: X5 */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-lg transition-all duration-300 group">
<div className="relative h-48 overflow-hidden">
<img alt="BMW X5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A powerful front-on shot of a black BMW X5 parked on a wet asphalt surface after rain. The reflections on the ground mirror the car's bold LED lighting. The scene is illuminated by dramatic overhead spotlights, creating a high-performance, rugged but luxury feel. The overall lighting is moodily high-key with deep saturation in the blacks and vibrant orange indicators." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9w1njc11tOxVBw-5pqJVbv5dbKLWCIKPnrHngBl5AL8M8-ZF1pk6oYQGCMjLjQroB_kd3TMPE6XTXQdCQ7M9iANkwbiq693ZuHzEbLn2WcBZkN8LflxLjhIpo9aRRatDwXTQ8M6XMN95P5QyV2HiAWlQKJcEQ063_uSmdLxS6WOytMtSTQVR9QAiyJDL8ZK36b2Cl3zEHvXu1hzzf73iNc1A5Vs33ke3FmC_ELiFhZfgZ9xdKN1mGYHDehsiz9xmhSb0AjkvelTfR"/>
<div className="absolute top-4 right-4 px-3 py-1 bg-surface-container-lowest/80 backdrop-blur-md rounded-full font-label-sm text-label-sm text-on-surface">SUV</div>
</div>
<div className="p-6">
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">BMW X5</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6">The Boss. Full suspension kits, drivetrain components, and official accessories.</p>
<button className="w-full py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                    View Parts
                                    <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/* Model Card: M Series */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-lg transition-all duration-300 group">
<div className="relative h-48 overflow-hidden">
<img alt="BMW M Series" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A track-ready BMW M4 Competition in Yas Marina Blue drifting through a curve. Motion blur on the wheels and background emphasizes speed. The lighting is bright mid-day sun, creating high contrast and showing the carbon fiber details of the roof and mirrors. The image conveys pure mechanical precision and high-octane performance in line with professional automotive media." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrSVaBJa1W4ZYdYjPDUMo7MdQM8a-VeM37xTPvorpgtOiSN_rhTOKSJTxsoJV7geCi72HE6aF4Kn0aBTzUFh1jQf4kNjiJ71pPtXufk19ZqoPKRRVefUj4rzbl9nO7R07GVhU43pJMvQA2vdOfL2wLl3fAMSYSrgpHNAnxDku_giJ0HpISEyZz8iim313FI7uT3vgtnNEzwCz_4tQgrM2pog57qXGZwTnG8pCGOQRrrkYhk73H7_PylRDqXXPDh3-Qy-grU1gnny7p"/>
<div className="absolute top-4 right-4 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm">M-Sport</div>
</div>
<div className="p-6">
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">M Series</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Pure racing DNA. For those who demand the highest performance from their machine.</p>
<button className="w-full py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                    View Parts
                                    <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/* Model Card: 5 Series */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-lg transition-all duration-300 group">
<div className="relative h-48 overflow-hidden">
<img alt="BMW 5 Series" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="An executive BMW 5 Series parked in front of a glass-walled corporate headquarters. The evening sun casts a warm, golden glow across the silver metallic paint. The architectural setting is clean and modern, highlighting the vehicle as a symbol of business success and engineering excellence. The style is sophisticated, minimalist, and editorial." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg95KbsA0Ho4563t8YAm3_m2mIL-XKJonADe0FEF6JFvLlwtns6jyzCKcKF4xFY6JJmLghzzKw40iBY6o4rwMriCgit3eLrSt5hv0AXOx9ACe1oks7Y7rAn75_Ip9zP20hslmGn2f0iQtpf4O-Y4-Z6lpiJ7ujv1aZVQU2rOUdo8pHh2lcMFHuC0PsGqm4wD6Bhm9F83PEyGVKvvGWUrnIaEWaPO7vBw8I0vAwU6zCyK0C01zHOC8CYpd_MznEt5ceFOD3IaGtTkYS"/>
<div className="absolute top-4 right-4 px-3 py-1 bg-surface-container-lowest/80 backdrop-blur-md rounded-full font-label-sm text-label-sm text-on-surface">Sedan</div>
</div>
<div className="p-6">
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">5 Series</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Business Athlete. Comprehensive catalog of electrical and comfort components.</p>
<button className="w-full py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                    View Parts
                                    <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/* Model Card: X7 */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-lg transition-all duration-300 group">
<div className="relative h-48 overflow-hidden">
<img alt="BMW X7" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A massive, luxurious BMW X7 SUV captured in a low-angle shot to emphasize its presence. The car is dark navy, set against a mountainous landscape at sunrise. Soft, directional morning light glints off the chrome trim and the massive kidney grille. The composition is epic and grand, maintaining a clean, premium visual language for the automotive spare parts marketplace." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChZWAGvGIDtVOBwkFWDVFoxpHzYu_vat-8rGeSH6DUH3DxW8e83gjNIC3yUIFlc7Q5tIdsNGbBnIKntsbRqVyX7ffYBrGreLu-VHF_lRaPXjsGGXlo9Eps_Px5aVP7dpO0H-YMGnfXKWw1kzR48PcYvK3iU46GTmiuZ_PfkV5IBG8fNG1qrI5c0yNPvD2d6X9_qekrKUHV3ASrn3ULY5bF5Iowuh0_mcIZOgXLCVntE5Vx89aKgbJ10j8TjyRraf6WJTHe30FZ8xOt"/>
<div className="absolute top-4 right-4 px-3 py-1 bg-surface-container-lowest/80 backdrop-blur-md rounded-full font-label-sm text-label-sm text-on-surface">SUV</div>
</div>
<div className="p-6">
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">BMW X7</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6">The pinnacle of luxury. Air suspension modules and interior trim parts.</p>
<button className="w-full py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                    View Parts
                                    <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Newsletter / CTA */}
<section className="bg-primary-container text-on-primary-container py-16">
<div className="max-w-container-max mx-auto px-margin-desktop">
<div className="bg-surface-container-lowest rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-outline-variant">
<div className="flex-grow">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Can't find your part?</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Upload your VIN (Vehicle Identification Number) and our BMW specialists will find the exact match for you within 30 minutes.</p>
</div>
<div className="flex-shrink-0 flex gap-4 w-full md:w-auto">
<button className="px-8 py-4 bg-secondary text-white font-bold rounded-lg flex items-center gap-2 hover:translate-y-[-2px] transition-all shadow-md">
<span className="material-symbols-outlined" data-icon="upload">upload</span>
                            Upload VIN
                        </button>
<button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
                            Talk to Expert
                        </button>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}

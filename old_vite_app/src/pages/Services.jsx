import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <main  className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg space-y-[60px]">
      
{/* Hero Section */}
<section className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden flex items-center shadow-sm">
<div className="absolute inset-0 z-0">
<img alt="Professional mechanic working on a high-performance engine in a pristine, brightly lit modern garage. The scene emphasizes precision engineering, clean workspaces, and expert care. The lighting is crisp and natural, highlighting the metallic textures of the engine bay." className="w-full h-full object-cover" data-alt="Professional mechanic working on a high-performance engine in a pristine, brightly lit modern garage. The scene emphasizes precision engineering, clean workspaces, and expert care. The lighting is crisp and natural, highlighting the metallic textures of the engine bay. The overall aesthetic is clean, corporate, and trustworthy, matching a premium automotive service brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLwFCyWk5265Xfyc94z7i3qrxq2QKaBYJgclwHAJiPoF3Mac2ie4yzUO0TnxQh1msuF9pTLnoyMkaQqA3r4rpsrATtTr88KTxa8DYamj7ND64bJ901qIBADtCk5whmJFX7vIbqtupQsDS4p-2wuGZUKfS0IdXP90VBmbaAaXC8BVOit-sirzh-v_-2Biy2VomGzqjD1Ts9PbyhPsoe6Sy6GfShqpCU4C49DHEmhNpXVzvuXAttVqCTVN1Z2uyGeQWO_jj8HembnDDO"/>
<div className="absolute inset-0 bg-gradient-to-r from-primary-container/90 via-primary-container/60 to-transparent"></div>
</div>
<div className="relative z-10 w-full md:w-1/2 p-gutter md:p-[60px]">
<h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-primary mb-stack-md">Expert Care &amp; Exclusive Offers</h1>
<p className="font-body-lg text-body-lg text-on-primary/90 mb-stack-lg">Keep your vehicle running at peak performance with our certified mechanics and seasonal parts discounts.</p>
<div className="flex flex-wrap gap-4">
<a className="bg-secondary text-on-secondary px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-secondary/90 transition-all shadow-sm flex items-center gap-2" href="#booking">
<span>Schedule Service</span>
<span className="material-symbols-outlined" style="font-size: 18px;">calendar_month</span>
</a>
<a className="bg-transparent border border-on-primary text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-on-primary/10 transition-all flex items-center gap-2" href="#offers">
<span>View Offers</span>
<span className="material-symbols-outlined" style="font-size: 18px;">local_offer</span>
</a>
</div>
</div>
</section>
{/* Service Plans Bento Grid */}
<section className="space-y-stack-lg" id="services">
<div className="flex items-center justify-between border-b border-outline-variant pb-stack-sm">
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Premium Service Plans</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/* Annual Maintenance */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter hover:shadow-[0_20px_25px_-5px_rgba(15,23,42,0.1)] transition-all duration-300 group flex flex-col">
<div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center mb-stack-md text-secondary">
<span className="material-symbols-outlined" style="font-size: 24px;">car_repair</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">Annual Maintenance</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-stack-lg">Comprehensive 50-point inspection, oil change, filter replacement, and fluid top-up.</p>
<div className="mt-auto flex items-center justify-between border-t border-surface-variant pt-stack-md">
<span className="font-headline-md text-body-lg text-primary">From $149</span>
<Link to="/login" className="text-secondary font-label-md text-label-md flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Book Now <span className="material-symbols-outlined" style={{fontSize: "16px"}}>arrow_forward</span>
</Link>
</div>
</div>
{/* Brake Overhaul */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter hover:shadow-[0_20px_25px_-5px_rgba(15,23,42,0.1)] transition-all duration-300 group flex flex-col">
<div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center mb-stack-md text-secondary">
<span className="material-symbols-outlined" style="font-size: 24px;">tire_repair</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">Brake Overhaul</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-stack-lg">Pad replacement, rotor resurfacing or replacement, and brake fluid flush for optimal stopping power.</p>
<div className="mt-auto flex items-center justify-between border-t border-surface-variant pt-stack-md">
<span className="font-headline-md text-body-lg text-primary">From $299</span>
<button className="text-secondary font-label-md text-label-md flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Book Now <span className="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
</button>
</div>
</div>
{/* Engine Health Check */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter hover:shadow-[0_20px_25px_-5px_rgba(15,23,42,0.1)] transition-all duration-300 group flex flex-col">
<div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center mb-stack-md text-secondary">
<span className="material-symbols-outlined" style="font-size: 24px;">engineering</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">Engine Health Check</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-stack-lg">Advanced computer diagnostics, spark plug inspection, and performance optimization tuning.</p>
<div className="mt-auto flex items-center justify-between border-t border-surface-variant pt-stack-md">
<span className="font-headline-md text-body-lg text-primary">From $89</span>
<button className="text-secondary font-label-md text-label-md flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Book Now <span className="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>

    </main>
  );
}

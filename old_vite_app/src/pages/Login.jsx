import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main  className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg space-y-margin-desktop">
      
{/* AUTHENTICATION SECTION (Hero Layout) */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[768px]">
{/* Form Column */}
<div className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm p-8">
<div className="text-center mb-stack-lg">
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-stack-sm">Welcome Back</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant">Secure access to your professional account.</p>
</div>
<form className="space-y-stack-md">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="email">Email Address</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">mail</span>
<input className="w-full bg-surface border border-outline-variant/50 rounded-lg py-2 pl-10 pr-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" id="email" placeholder="mechanic@example.com" type="email"/>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<label className="block font-label-sm text-label-sm text-on-surface-variant" htmlFor="password">Password</label>
<Link className="font-label-sm text-label-sm text-secondary hover:underline" to="#">Forgot?</Link>
</div>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">lock</span>
<input className="w-full bg-surface border border-outline-variant/50 rounded-lg py-2 pl-10 pr-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" id="password" placeholder="••••••••" type="password"/>
</div>
</div>
<button className="w-full bg-primary hover:bg-on-surface-variant text-on-primary font-label-md text-label-md rounded-lg py-3 mt-stack-md transition-colors flex justify-center items-center gap-2 shadow-sm" type="button">
                        Sign In <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</form>
<div className="relative my-stack-lg flex items-center justify-center">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant/40"></div></div>
<span className="relative bg-surface-container-lowest px-4 font-label-sm text-label-sm text-outline">OR CONTINUE WITH</span>
</div>
<div className="grid grid-cols-2 gap-stack-md">
<button className="flex items-center justify-center gap-2 py-2 border border-outline-variant/50 rounded-lg hover:bg-surface-container-low transition-colors font-label-sm text-label-sm text-on-surface" type="button">
<img alt="Google" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC56daE3iwo11Td-Aq--rB69swkf6c_W-6um3VocvbmCP-hABnlJg8i9LGblRIPm5HRxTxjJxwO1YsuSY4BqudDejk8zFFduuMztIhgP7slWyAa_V9DMdHRNylvYMGCRRadLps7pVF04XNWKLUAi4gkCrWosN5Gi_R29gU5IpXiGbtvvjbLUBQOQaGxEfmE3_gFglTiWZe1qBBJQkT9CDK-jFzW8dPUfAqYNZ4zZdSf-2CPSOpWdx1ipXwFUxJCp8MFRKdGRN9N7qcC"/> Google
                    </button>
<button className="flex items-center justify-center gap-2 py-2 border border-outline-variant/50 rounded-lg hover:bg-surface-container-low transition-colors font-label-sm text-label-sm text-on-surface" type="button">
<img alt="Apple" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAREAP71z-68qALys3JOHh-zaUDZh8evDor2MkT6PCMv8JDaUEznTDR8P8MHaMTemcyPloYf-DeOEt0ipuFoHTn1SznyzDLJeHrSNuh4bB4k8hLvhQRp60aVcapPoN_1k1vdumsHoJ6o0RGRHC2ze18PksY_yBwqf6rqWX65nNKTp5acdjFmqveLOT89Y6niem54WvBs49hokyoc5GyXnKNPqVyPLDBioGQTXVLLi-nKZ8LpjWwWujwXrY4NeVQLBC3TMROwVztQ8nU"/> Apple
                    </button>
</div>
<p className="text-center font-body-sm text-body-sm text-on-surface-variant mt-stack-lg">
                    New to Best AutoParts? <Link className="text-primary font-semibold hover:text-secondary transition-colors" to="#">Create an account</Link>
</p>
</div>
{/* Image/Trust Column */}
<div className="hidden lg:block lg:col-span-7 h-full w-full relative rounded-xl overflow-hidden shadow-sm group">
<img alt="Engine Bay" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A cinematic, high-resolution close-up of a pristine, modern automotive engine bay. The lighting is dramatic and studio-quality, emphasizing the metallic textures, carbon fiber accents, and precision engineering of the components. The color palette features deep blacks, sleek silver metallics, and subtle hints of vibrant ignition orange, reflecting a premium, professional automotive aesthetic. The mood is powerful, precise, and technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcj7qJgqp4Xd2Xc_S7UMy74B7kDnS_iJByO9Z1AISI-fOHts-9bZmyG8h4Xza15Chk-zSdJvL5dh7FzHyJv3XYM8SS9h7N1XkOLbqBYneKS6D43yqZzBZlKVnAdYDWTKBz8oQ33vuIjUyAQnDxMptzBCAWdtMes1rdoKhU_VE85hAAyxZaVN56UkjrkSUTjntCoJ41PpjBn1KS2Cm8oYI3LaP8mexrukVDx2bWMhc6vuYTlFKpqw6XscS2fL5TnqrzkSdAyN3Q3X5G"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 text-on-primary">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-secondary-container" style="font-variation-settings: 'FILL' 1;">verified</span>
<span className="font-label-md text-label-md tracking-wider uppercase">Genuine Parts Guarantee</span>
</div>
<p className="font-headline-md text-headline-md max-w-lg leading-tight">Access wholesale pricing and technical diagrams instantly.</p>
</div>
</div>
</section>
<div className="w-full h-[1px] bg-outline-variant/30 my-stack-lg"></div>
{/* SUPPORT HUB (Contact & FAQ) */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Contact Info & Map */}
<div className="lg:col-span-5 space-y-stack-lg">
<div>
<h2 className="font-headline-md text-headline-md text-primary mb-stack-sm">Get in Touch</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">Need a specific part or technical assistance? Our expert mechanics are standing by.</p>
</div>
<div className="space-y-stack-md">
<div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/30">
<div className="p-2 bg-surface-container rounded-md text-primary">
<span className="material-symbols-outlined">location_on</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-primary">Global Headquarters</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">100 Precision Drive<br/>Detroit, MI 48201</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/30">
<div className="p-2 bg-surface-container rounded-md text-primary">
<span className="material-symbols-outlined">call</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-primary">Direct Support</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">1-800-555-PARTS<br/>Mon-Fri, 8am - 6pm EST</p>
</div>
</div>
</div>
<div className="w-full h-64 bg-surface-container-high rounded-xl overflow-hidden shadow-sm relative border border-outline-variant/30">
<img alt="Map Location" className="w-full h-full object-cover opacity-80 mix-blend-multiply" data-alt="An elegant, stylized aerial map view of downtown Detroit. The map uses a minimalist, modern color palette with soft greys, deep charcoal roads, and subtle surface-tinted water features. The design is clean and corporate, resembling a high-end GPS interface rather than a standard satellite image, aligning with a premium digital aesthetic." data-location="Detroit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKYlkOaBUVAn9eSCS1ulO8Av-rGqcjLjyqKo6Dst5XqSPPBMBMsF3HUaGb54_HcrnHupp3xckKKGLSg7HAGWVDrhyg2G2axu2Qj6hHZcQn3gVwsItMg3D-1XSWCBLMCQKV3Z-UfWQ3AFZmgBg1cQpeh3V2evexfwHCoP5gVaTMBrkwCMsd5DUOWubwC03v1ivp7dugl22lFfzX67aAHUivFcc-dun2Z0YguX7nHtUjGVOMrlkUCP76zs4b54N5uzeyjss2xVIrZhlw"/>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<span className="material-symbols-outlined text-secondary-container text-[32px] drop-shadow-md" style="font-variation-settings: 'FILL' 1;">location_pin</span>
</div>
</div>
</div>
{/* Contact Form & FAQ Accordions */}
<div className="lg:col-span-7 space-y-stack-lg">
{/* Contact Form Card */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm p-6 md:p-8">
<h3 className="font-headline-md text-headline-lg-mobile md:text-headline-md text-primary mb-stack-md">Send a Message</h3>
<form className="space-y-stack-md">
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Full Name</label>
<input className="w-full bg-surface border border-outline-variant/50 rounded-lg py-2 px-3 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Order Number (Optional)</label>
<input className="w-full bg-surface border border-outline-variant/50 rounded-lg py-2 px-3 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="#BAP-12345" type="text"/>
</div>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Inquiry Details</label>
<textarea className="w-full bg-surface border border-outline-variant/50 rounded-lg py-2 px-3 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none" placeholder="How can we help you today?" rows="4"></textarea>
</div>
<div className="flex justify-end">
<button className="bg-secondary-container hover:bg-secondary text-on-secondary font-label-md text-label-md rounded-lg py-2 px-6 transition-colors shadow-sm" type="button">
                                Submit Request
                            </button>
</div>
</form>
</div>
{/* FAQ Section */}
<div className="mt-margin-desktop">
<h3 className="font-headline-md text-headline-md text-primary mb-stack-md">Frequently Asked Questions</h3>
<div className="space-y-stack-sm">
{/* FAQ Item 1 */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg overflow-hidden group hover:border-outline-variant transition-colors cursor-pointer">
<div className="flex justify-between items-center p-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline">local_shipping</span>
<h4 className="font-label-md text-label-md text-primary">What are your shipping policies?</h4>
</div>
<span className="material-symbols-outlined text-outline">expand_more</span>
</div>
{/* Simulated expanded state via visual representation (no JS) */}
<div className="p-4 pt-0 text-on-surface-variant font-body-sm text-body-sm border-t border-outline-variant/20 bg-surface/50">
                                We offer expedited 2-day shipping on all orders placed before 2 PM EST. Freight shipping for oversized items like engines or transmissions typically takes 5-7 business days. Tracking details are provided instantly upon dispatch.
                            </div>
</div>
{/* FAQ Item 2 */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg overflow-hidden group hover:border-outline-variant transition-colors cursor-pointer">
<div className="flex justify-between items-center p-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline">shield</span>
<h4 className="font-label-md text-label-md text-primary">What is the Warranty Term on OEM parts?</h4>
</div>
<span className="material-symbols-outlined text-outline">chevron_right</span>
</div>
</div>
{/* FAQ Item 3 */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg overflow-hidden group hover:border-outline-variant transition-colors cursor-pointer">
<div className="flex justify-between items-center p-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline">settings</span>
<h4 className="font-label-md text-label-md text-primary">How do I verify part compatibility?</h4>
</div>
<span className="material-symbols-outlined text-outline">chevron_right</span>
</div>
</div>
</div>
</div>
</div>
</section>

    </main>
  );
}

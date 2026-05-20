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
<svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> Google
                    </button>
<button className="flex items-center justify-center gap-2 py-2 border border-outline-variant/50 rounded-lg hover:bg-surface-container-low transition-colors font-label-sm text-label-sm text-on-surface" type="button">
<svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.27.07 2.15.59 2.9.6.9-.13 1.77-.67 2.73-.63 1.17.06 2.04.5 2.64 1.28-2.39 1.44-1.98 4.62.35 5.47-.46 1.25-1.07 2.48-1.62 3.14zm-4.05-13.2c-.1 2.04 1.66 3.7 3.66 3.5.28-1.9-1.58-3.7-3.66-3.5z"/></svg> Apple
                    </button>
</div>
<p className="text-center font-body-sm text-body-sm text-on-surface-variant mt-stack-lg">
                    New to Best AutoParts? <Link className="text-primary font-semibold hover:text-secondary transition-colors" to="#">Create an account</Link>
</p>
</div>
{/* Image/Trust Column */}
<div className="hidden lg:block lg:col-span-7 h-full w-full relative rounded-xl overflow-hidden shadow-sm group">
<img alt="Engine Bay" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=1200" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 text-on-primary">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
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
<img alt="Map Location" className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" />
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<span className="material-symbols-outlined text-secondary-container text-[32px] drop-shadow-md" style={{ fontVariationSettings: "'FILL' 1" }}>location_pin</span>
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

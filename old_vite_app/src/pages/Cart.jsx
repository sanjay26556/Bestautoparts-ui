import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <main  className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter py-margin-desktop">
      
<div className="mb-stack-lg">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Your Cart</h1>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/* Left Column: Cart & Wishlist */}
<div className="lg:col-span-8 flex flex-col gap-stack-lg">
{/* Cart Items Section */}
<div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_6px_-1px_rgba(15,23,42,0.05)] border border-outline-variant p-stack-lg">
<div className="flex justify-between items-end border-b border-surface-variant pb-stack-sm mb-stack-md">
<h2 className="font-headline-md text-headline-md text-on-surface">Shopping Cart (2 Items)</h2>
</div>
<div className="flex flex-col gap-stack-md">
{/* Item 1 */}
<div className="flex flex-col sm:flex-row gap-stack-md py-stack-md border-b border-surface-variant last:border-0 hover:bg-surface-container-low transition-colors rounded-lg p-2">
<div className="w-full sm:w-[120px] h-[120px] rounded-lg bg-surface-container flex-shrink-0 overflow-hidden">
<img alt="High-performance air filter" className="w-full h-full object-cover" data-alt="A macro studio shot of a premium, high-performance automotive air filter. The filter features a bright red pleated element enclosed in a sleek, silver metallic frame. The lighting is crisp, high-key studio lighting that emphasizes the precision engineering and textures of the materials. Set against a pure white background consistent with a modern corporate e-commerce aesthetic. The overall mood is technical, reliable, and premium." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhQ1APfKJfENn9suPNm6H_JfJW-SZeOafZtmH-nxW5LGmN5YaYa6n1EVlLyNjbnGBgWAZ8AkFoKkqC63fH2sSMw8gjYJvQn-7yHwY0IEy9TtMhcqIxJGorjnWWvMGdpdzh6V_abEpm5OnX7SuhJutdaD9einWuhGiwbeGI5TMxGqjGIA3AnLfNTU1MVGsrjQg1wX0KZ5IJHlJrhKkfWsiDQo7zIuS3yVD3-ZZPGPJv1M3LjKiA5FafmfV1GwCUP6HL0ea_aClmsp7U"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div>
<h3 className="font-body-lg text-body-lg text-on-surface font-semibold">K&amp;N High Performance Air Filter</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Part No: KN-33-2304</p>
<p className="font-body-sm text-body-sm text-secondary mt-1">In Stock</p>
</div>
<div className="flex justify-between items-center mt-stack-md">
<div className="flex items-center border border-outline-variant rounded-lg">
<button className="px-3 py-1 text-on-surface hover:bg-surface-variant rounded-l-lg">-</button>
<span className="px-3 py-1 font-body-md text-body-md border-x border-outline-variant">1</span>
<button className="px-3 py-1 text-on-surface hover:bg-surface-variant rounded-r-lg">+</button>
</div>
<span className="font-headline-md text-headline-md text-on-surface">$54.99</span>
</div>
<div className="flex gap-stack-md mt-stack-sm border-t border-surface-variant pt-2">
<button className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]" data-icon="favorite_border">favorite_border</span>
                                        Save for later
                                    </button>
<button className="font-label-sm text-label-sm text-error hover:text-on-error-container flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]" data-icon="delete">delete</span>
                                        Remove
                                    </button>
</div>
</div>
</div>
{/* Item 2 */}
<div className="flex flex-col sm:flex-row gap-stack-md py-stack-md border-b border-surface-variant last:border-0 hover:bg-surface-container-low transition-colors rounded-lg p-2">
<div className="w-full sm:w-[120px] h-[120px] rounded-lg bg-surface-container flex-shrink-0 overflow-hidden">
<img alt="Ceramic Brake Pads" className="w-full h-full object-cover" data-alt="A sleek, professional product shot of a set of advanced ceramic brake pads laid out diagonally. The brake pads have a matte dark grey friction material with shiny, chamfered steel backing plates. The lighting is focused and specular, highlighting the metallic flakes in the material. The background is a stark, minimal white, fitting a high-end corporate identity. The visual tone is robust, safe, and engineered for performance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfD_XAggU0CpGG3HHvwO9wcTMItnAu53rpEgqH-SxYFPSCS2lisciilvYqhDDNUP-Z1Hs3JJeYHsd6IvbtZk-zGVGGlmJe_nAeVVIX1x09j2GTd-3KuQ_IjIcLa8qExd1g30KtDRa2DEFuO2PcuC8Flic4A_Qb7B0VVxqhr4ThuBuQE3RzX_ttBFkfe1FLrDoc0sN4-QYh2Pllxhvjb9ZL6Be9ZchVmuZKzWUO4utGbS5-MfkN6GdGygYIPZf32Y4puI47jiEqPuBC"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div>
<h3 className="font-body-lg text-body-lg text-on-surface font-semibold">Brembo Ceramic Front Brake Pads</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Part No: P83071N</p>
<p className="font-body-sm text-body-sm text-secondary mt-1">In Stock</p>
</div>
<div className="flex justify-between items-center mt-stack-md">
<div className="flex items-center border border-outline-variant rounded-lg">
<button className="px-3 py-1 text-on-surface hover:bg-surface-variant rounded-l-lg">-</button>
<span className="px-3 py-1 font-body-md text-body-md border-x border-outline-variant">2</span>
<button className="px-3 py-1 text-on-surface hover:bg-surface-variant rounded-r-lg">+</button>
</div>
<span className="font-headline-md text-headline-md text-on-surface">$118.50</span>
</div>
<div className="flex gap-stack-md mt-stack-sm border-t border-surface-variant pt-2">
<button className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]" data-icon="favorite_border">favorite_border</span>
                                        Save for later
                                    </button>
<button className="font-label-sm text-label-sm text-error hover:text-on-error-container flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]" data-icon="delete">delete</span>
                                        Remove
                                    </button>
</div>
</div>
</div>
</div>
</div>
{/* Wishlist Section */}
<div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_6px_-1px_rgba(15,23,42,0.05)] border border-outline-variant p-stack-lg mt-stack-md">
<h2 className="font-headline-md text-headline-md text-on-surface border-b border-surface-variant pb-stack-sm mb-stack-md flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                        Wishlist
                    </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-md">
{/* Wishlist Item */}
<div className="border border-outline-variant rounded-lg p-stack-md flex flex-col hover:shadow-md transition-shadow">
<div className="h-[150px] w-full rounded bg-surface-container mb-stack-md overflow-hidden">
<img alt="Synthetic Motor Oil" className="w-full h-full object-cover" data-alt="A clean, direct product photograph of a premium 5-quart bottle of full synthetic motor oil. The bottle is a deep, glossy black with a vibrant, metallic gold label. The lighting is soft but bright, minimizing reflections on the plastic surface while illuminating the label text clearly. Set against a flawless white background to adhere to modern e-commerce standards. The visual style communicates reliability, luxury, and chemical precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMk6hMi6ao_9DpjSoEaz6padWXA-c4wV7fhRhwUFd86cz0yQgaD6LcUukcezuNKdTbwoANa4sDBcHrVMdhqWSJDsfCaLhj3ZI8LCppKgtMkflqAkfSMKRa6txlLhCj78JJq7w2T9NRsHKwuclUC4gn1ajDmERkAM9XtA87Q_t-HLAa3vHeB_Xiu0ia_m3Tpwny8A1EDTwX1aZ-2tYRz8J59CVlH238hfmLFQTFJ8Hc-IMmfNAdmMUwkQowrIN3QwyiT2Zpc_aAaEwy"/>
</div>
<h3 className="font-body-md text-body-md text-on-surface font-semibold truncate">Castrol EDGE 5W-30 Full Synthetic</h3>
<p className="font-headline-md text-headline-md text-on-surface mt-auto pt-2">$29.99</p>
<button className="mt-stack-md w-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md py-2 px-4 rounded-lg border border-outline-variant transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="add_shopping_cart">add_shopping_cart</span>
                                Add to Cart
                            </button>
</div>
</div>
</div>
</div>
{/* Right Column: Order Summary */}
<div className="lg:col-span-4 flex flex-col gap-stack-md">
<div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_6px_-1px_rgba(15,23,42,0.05)] border border-outline-variant p-stack-lg sticky top-[100px]">
<h2 className="font-headline-md text-headline-md text-on-surface mb-stack-lg">Order Summary</h2>
<div className="flex flex-col gap-stack-sm mb-stack-lg font-body-md text-body-md">
<div className="flex justify-between text-on-surface-variant">
<span>Subtotal (3 items)</span>
<span className="text-on-surface">$173.49</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Shipping</span>
<span className="text-secondary font-semibold">Free</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Estimated Tax</span>
<span className="text-on-surface">$14.75</span>
</div>
</div>
<div className="flex justify-between items-center border-t border-surface-variant pt-stack-md mb-stack-lg">
<span className="font-headline-md text-headline-md text-on-surface">Total</span>
<span className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg text-headline-lg text-on-surface">$188.24</span>
</div>
<button className="w-full bg-secondary hover:bg-[#8A3B00] text-on-secondary font-label-md text-label-md py-3 px-4 rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-[1px] flex justify-center items-center gap-2">
<span className="material-symbols-outlined" data-icon="lock">lock</span>
                        Proceed to Secure Checkout
                    </button>
<div className="mt-stack-md flex justify-center items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]" data-icon="local_shipping">local_shipping</span>
                        Ships within 24 hours
                    </div>
</div>
{/* Trust Badges */}
<div className="bg-surface-container-low rounded-xl p-stack-md grid grid-cols-3 gap-2 text-center border border-outline-variant">
<div className="flex flex-col items-center gap-1">
<span className="material-symbols-outlined text-secondary" data-icon="verified">verified</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">100% Genuine</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="material-symbols-outlined text-secondary" data-icon="security">security</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Secure Payments</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="material-symbols-outlined text-secondary" data-icon="assignment_return">assignment_return</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Easy Returns</span>
</div>
</div>
</div>
</div>

    </main>
  );
}

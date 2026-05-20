import { Link } from 'react-router-dom';

export default function ProductDetail() {
  return (
    <main  className="pt-[100px] pb-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-gutter min-h-screen">
      
{/* Breadcrumbs */}
<nav className="flex items-center gap-2 mb-stack-lg font-label-sm text-label-sm text-on-surface-variant">
<Link className="hover:text-primary transition-colors" to="/">Home</Link>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<Link className="hover:text-primary transition-colors" to="/brands">Brands</Link>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<Link className="hover:text-primary transition-colors" to="/brands">Maruti Suzuki</Link>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<Link className="hover:text-primary transition-colors" to="/marketplace">Filters</Link>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-on-surface">Air Filter Element</span>
</nav>
{/* Product Hero Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-margin-desktop">
{/* Left: Image Gallery (Span 7) */}
<div className="lg:col-span-7 flex flex-col gap-4">
{/* Main Image */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant aspect-[4/3] overflow-hidden flex items-center justify-center relative group">
<img alt="Maruti Air Filter" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A highly detailed, professional studio photograph of a pristine, brand new car air filter element. The filter features pristine white pleated paper inside a black polyurethane frame. Set against a pure white background with soft, diffused top lighting to highlight the mechanical precision and clean manufacturing quality. The aesthetic is modern, corporate, and premium, suitable for an upscale automotive parts marketplace." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8LegDMXlcU3JtF_XNZexQ1svqioRxaxky7TlVgOm8h5dFHDKGQCrenBEtsoRK_xn5nqTvjOQEhAY_Jx8cI1jnDcS3DYp8XdLkD5yZZAT1e0J2NpMfVsCsAaXyrRKFnbLbVlDs9mmD7E7NznogaMGnsjpuh3-FA1lLtQCF1WLNWXSOqMEO-g1vvsUy0SqrLHT6kmaqcLLYDiMtfNT7casf-NC1QGxlWi4YCiZQE0FvEuzch_JDe8F5k6Hp5F1Qt7diktJZIYFtEbAK"/>
{/* View Fullscreen Button */}
<button className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur text-on-surface p-2 rounded-full shadow-sm hover:bg-surface transition-colors">
<span className="material-symbols-outlined">zoom_in</span>
</button>
</div>
{/* Thumbnails */}
<div className="grid grid-cols-4 gap-4">
<button className="bg-surface-container-lowest rounded-lg border-2 border-primary aspect-square overflow-hidden">
<img alt="Air Filter Front" className="w-full h-full object-cover" data-alt="A close-up studio shot of the car air filter from a direct top-down angle, highlighting the precise folds of the white filtration paper. Clean white background, soft lighting, sharp focus on the mechanical details. High-end automotive e-commerce styling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvO6wqYiVdwcKCORYuMj1PgKJSwdtYIndUZXVkpdEnXiyQc68yq1b_0s5gZr48wGW8szPb87AM3QrHNEfqI1AR9qYPV9Tq2I5DpWQNLdzuV4KoMJpvrrcO6xmxSlQp5BSfmcDiGwYRmabRq0ZVfFDpDOQCjMRDtghd7yJB34jL-014ZbrQJE5u8L8rW_4a4MKJdc4N0gi2ry-U0imOaTHvRkEt9VAD6Synf-XdrkwgsUm2trEhi7P3tkhlgTcPjSE3GA3NW-gBG7m-"/>
</button>
<button className="bg-surface-container-lowest rounded-lg border border-outline-variant aspect-square overflow-hidden hover:border-primary/50 transition-colors opacity-70 hover:opacity-100">
<img alt="Air Filter Side" className="w-full h-full object-cover" data-alt="A profile view of the car air filter showing the thickness of the black rubberized seal and the depth of the filter medium. Illuminated by precise studio lighting against a sterile white background. Corporate, clinical, and high-quality presentation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQJXuoBXo3u-ShZrjwBbHoCbaR0FPqflQJzxjFofqGkNYTEq1qjp2yTpSM6EIJ1wBx24XGXEjx6U_vn-v9QUnJO57RGOKdtitdXybiTuDX5BJ_JjSphIT97A1mPoRHxq5uV-M4EBsCcaiT8dz2XWDCrmnqYkZBtpvJF0lRbib6iMJYXEEX1hMDZD34QmJ5Jatq1QWQ-RJEY8qDQmA0Dd0jJmOFZ-q7LD7LfQgV8FAbUhNxZxfQ65wma74DXPpvPcNoqq-DWCuTyZdX"/>
</button>
<button className="bg-surface-container-lowest rounded-lg border border-outline-variant aspect-square overflow-hidden hover:border-primary/50 transition-colors opacity-70 hover:opacity-100">
<img alt="Air Filter Macro" className="w-full h-full object-cover" data-alt="An extreme macro shot of the car air filter material, revealing the microscopic porous structure of the high-efficiency filtration paper. Bright, crisp, clinical lighting setup. Conveys themes of advanced engineering and precision quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUn3bDPIiAOjBPeblaCs0ac09M3LBvS32TeuuP_uQ1u-Kh_GmX6S8gMHTLV3NAs38IzsTkuCXEwU6OZ-H8fYPwQLfLLkHtdozwKT_Kjy4MscilQ0_N8GOIEDo9riDG24HaISwQxSi4pHKXJjDHpvcF1iKaW_ZBgNczvNZVVNDJ5QO-OvTwUnY4tp4y6ksILJFbvfO59R3TnKSSd9ZvFZTEEPlAUrVBhsTaI5nSA_GjV6eK4iELsVnT7OJ6tXfYZdaNAHPvSmERUKIY"/>
</button>
<button className="bg-surface-container-lowest rounded-lg border border-outline-variant aspect-square overflow-hidden hover:border-primary/50 transition-colors flex items-center justify-center bg-surface-container-low">
<span className="font-label-md text-label-md text-on-surface-variant">+2 Videos</span>
</button>
</div>
</div>
{/* Right: Product Info & Actions (Span 5) */}
<div className="lg:col-span-5 flex flex-col pt-4">
{/* Brand & Title */}
<div className="mb-stack-md">
<span className="inline-block font-label-sm text-label-sm text-secondary bg-secondary-fixed px-3 py-1 rounded-full mb-3 font-semibold">Maruti Suzuki Genuine Parts</span>
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Genuine Maruti Air Filter Element</h1>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                        Part No: <span className="font-semibold text-on-surface">13780M74L00</span>
<button className="text-secondary hover:text-primary" title="Copy Part Number"><span className="material-symbols-outlined text-[16px]">content_copy</span></button>
</p>
</div>
{/* Price & Rating */}
<div className="flex items-end gap-4 mb-stack-lg pb-stack-lg border-b border-outline-variant">
<div className="font-display-lg text-display-lg text-primary">₹ 450</div>
<div className="flex items-center gap-2 mb-2">
<div className="flex text-secondary text-[20px]">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0.5" }}>star_half</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant underline cursor-pointer">124 Reviews</span>
</div>
</div>
{/* Compatibility Checker (Bento style card) */}
<div className="bg-surface-container-low rounded-xl p-5 border border-outline-variant mb-stack-lg shadow-sm">
<h3 className="font-label-md text-label-md text-on-surface mb-3 flex items-center gap-2 uppercase tracking-widest">
<span className="material-symbols-outlined text-[18px]">verified_user</span> Fitment Check
                    </h3>
<div className="flex items-start gap-4">
<div className="bg-green-100 text-green-700 p-2 rounded-full shrink-0">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
<div>
<p className="font-body-md text-body-md text-on-surface font-semibold">Exact fit for your vehicle</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Maruti Swift VXI (2024+)</p>
<button className="font-label-sm text-label-sm text-secondary mt-2 hover:underline">Change Vehicle</button>
</div>
</div>
</div>
{/* Actions */}
<div className="flex flex-col sm:flex-row gap-4 mt-auto">
<Link to="/cart" className="flex-1 bg-surface-container-lowest border-2 border-primary text-primary py-4 px-6 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2 group">
<span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform">shopping_cart</span>
                        Add to Cart
                    </Link>
<Link to="/cart" className="flex-1 bg-secondary text-on-secondary py-4 px-6 rounded-lg font-label-md text-label-md hover:bg-secondary/90 transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2">
<span className="material-symbols-outlined">bolt</span>
                        Buy Now
                    </Link>
</div>
{/* Delivery Info */}
<div className="mt-stack-md flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">local_shipping</span>
                        Free Delivery by <span className="font-semibold text-on-surface">Tomorrow, 9 PM</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">assignment_return</span>
                        10 Days Replacement Policy
                    </div>
</div>
</div>
</div>
{/* Details & Specs Layout */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-margin-desktop">
{/* Left: Description & Specs (Span 2) */}
<div className="lg:col-span-2 space-y-stack-lg">
{/* Key Features Bento Grid */}
<section>
<h2 className="font-headline-md text-headline-md text-on-surface mb-stack-md">Key Features</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="bg-tertiary-fixed text-on-tertiary-fixed w-10 h-10 rounded-lg flex items-center justify-center mb-4">
<span className="material-symbols-outlined">air</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface mb-2">Improved Air Flow</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Optimized pleat design ensures maximum air intake for better engine performance and fuel efficiency.</p>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="bg-tertiary-fixed text-on-tertiary-fixed w-10 h-10 rounded-lg flex items-center justify-center mb-4">
<span className="material-symbols-outlined">filter_alt</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface mb-2">High Filtration</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Traps up to 99% of dust, pollen, and airborne particles, protecting critical engine components.</p>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="bg-tertiary-fixed text-on-tertiary-fixed w-10 h-10 rounded-lg flex items-center justify-center mb-4">
<span className="material-symbols-outlined">shield</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface mb-2">Genuine Durability</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Manufactured to strict OEM standards, ensuring a perfect fit and long-lasting reliability under harsh conditions.</p>
</div>
</div>
</section>
{/* Specifications Table */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="p-5 border-b border-outline-variant bg-surface-container-low">
<h2 className="font-headline-md text-headline-md text-on-surface">Technical Specifications</h2>
</div>
<div className="p-0">
<table className="w-full text-left border-collapse">
<tbody>
<tr className="border-b border-outline-variant/50 even:bg-surface-container-low/50">
<th className="py-4 px-5 font-body-md text-body-md text-on-surface-variant font-medium w-1/3">Weight</th>
<td className="py-4 px-5 font-body-md text-body-md text-on-surface font-semibold">350 Grams</td>
</tr>
<tr className="border-b border-outline-variant/50 even:bg-surface-container-low/50">
<th className="py-4 px-5 font-body-md text-body-md text-on-surface-variant font-medium">Dimensions (LxWxH)</th>
<td className="py-4 px-5 font-body-md text-body-md text-on-surface font-semibold">25 x 18 x 5 cm</td>
</tr>
<tr className="border-b border-outline-variant/50 even:bg-surface-container-low/50">
<th className="py-4 px-5 font-body-md text-body-md text-on-surface-variant font-medium">Material</th>
<td className="py-4 px-5 font-body-md text-body-md text-on-surface font-semibold">High-grade Cellulose Fiber / Polyurethane</td>
</tr>
<tr className="even:bg-surface-container-low/50">
<th className="py-4 px-5 font-body-md text-body-md text-on-surface-variant font-medium">Warranty</th>
<td className="py-4 px-5 font-body-md text-body-md text-on-surface font-semibold">6 Months Manufacturing Defect</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
{/* Right: Sticky CTA / Summary (Span 1) */}
<div className="hidden lg:block lg:col-span-1">
<div className="sticky top-[120px] bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-md">
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Order Summary</h3>
<div className="flex items-center gap-3 mb-4 pb-4 border-b border-outline-variant">
<div className="w-16 h-16 bg-surface-container rounded-lg overflow-hidden shrink-0">
<img alt="Thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCishi8WNj1HFmZRYjCj0R-qzTMS9wHL0UzCNmzVOLoBn9WDVneUI6VaYy9baY1KIxQldIa_DnTyTnGLDhOlePidlK8wonB3CLJKCOQ1RfILExyuHIh4UKJXDlu-eXCXkS5XxJF0m_QwcWDPJ8QG6734mKovY71MCBQCdcciJ6kQzn6Ok_91Kpty_RbeSQhMFILwWe8Cp6MlSHI_YVB9ZxMlXs7GBM2I1UV1NEsBUzyKlSwMhxttg6EpLpESKzJ88ZVKgr4DKtbp_0S"/>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface line-clamp-1">Genuine Maruti Air Filter</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Qty: 1</p>
</div>
</div>
<div className="flex justify-between items-center mb-6">
<span className="font-body-md text-body-md text-on-surface-variant">Total Value</span>
<span className="font-headline-md text-headline-md text-primary">₹ 450</span>
</div>
<Link to="/cart" className="w-full bg-secondary text-on-secondary py-3 px-4 rounded-lg font-label-md text-label-md hover:bg-secondary/90 transition-colors shadow-sm mb-3 text-center flex justify-center">
                        Proceed to Checkout
                    </Link>
<p className="text-center font-label-sm text-label-sm text-on-surface-variant flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[14px]">lock</span> Secure Transaction
                    </p>
</div>
</div>
</div>
{/* Related Products */}
<section className="mb-margin-desktop">
<div className="flex justify-between items-end mb-stack-md">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">People Also Bought</h2>
<Link className="font-label-md text-label-md text-secondary hover:underline flex items-center" to="/marketplace">View All <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span></Link>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-gutter">
{/* Product Card 1 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
<div className="aspect-square bg-surface-container relative overflow-hidden">
<img alt="Oil Filter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A professional studio product shot of a metallic cylindrical car oil filter. The filter is painted black with crisp white branding text. Set against a pure white background with sharp, clean lighting to emphasize industrial reliability. High-end automotive parts catalog style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTDA3pdJpS9pald4TFHmhqnSP9NNL61Tqb2sNU-E73ajI_Dqaar5QUyUmC6wIMxEJ-ockvHOk0Fh8DpGIPVHlXdLJQp5W0H_aFOR_sbrArY26UuV9peWNpmxc1FXUbSEJgEnEwc0GtnJDCXeI3YhJt7XhYqYXMwSTAOX1xMzjZSzoZ_Mz4YzOMC8FbEs-2sHJHiXnQnuKj9liD0_rFVDthnkLycC3YINPFrTYS3IBi9dzrNpWrtTxCbeR5sSZqAHCHO0z1cxwDd3kt"/>
<Link to="/cart" className="absolute bottom-2 right-2 bg-surface/90 text-primary p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-on-primary">
<span className="material-symbols-outlined">add_shopping_cart</span>
</Link>
</div>
<div className="p-4">
<span className="font-label-sm text-label-sm text-on-surface-variant">Engine Parts</span>
<h4 className="font-label-md text-label-md text-on-surface mt-1 mb-2 line-clamp-2">Genuine Maruti Swift Oil Filter</h4>
<div className="font-headline-md text-[18px] text-primary">₹ 180</div>
</div>
</div>
{/* Product Card 2 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
<div className="aspect-square bg-surface-container relative overflow-hidden">
<img alt="Spark Plug" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A macro studio photograph of an automotive spark plug resting on a clean white surface. Soft top lighting catches the reflective metallic threads and white ceramic insulator. The image conveys precision engineering, high performance, and mechanical cleanliness." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwPV8eDITaf8fmFi8P-Ub2-6EU0qOkvu-BEL1uRmITJo1T5pliy5-z_S419QzpXU9yMS7hB99l_A0ONpQwKw8fDbp0l0mvTGXOSlnYLSjL8nTAM7Wl9DChDblkkieQvvkKVB3FLBF2E0azucFtvlxUSv7wYhJDniX0CNUbyef94dQm9k1K_U2y5XdwyHyMSL0PBUDj7TxPvCUw3zEEIoIu4M28Fh1VuU9bbNHIx4T4jJ0c4rWKFq5ejAC41ujcFQq6vXlVUI72fXfT"/>
<button className="absolute bottom-2 right-2 bg-surface/90 text-primary p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-on-primary">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
<div className="p-4">
<span className="font-label-sm text-label-sm text-on-surface-variant">Ignition</span>
<h4 className="font-label-md text-label-md text-on-surface mt-1 mb-2 line-clamp-2">NGK Iridium Spark Plug Set (x4)</h4>
<div className="font-headline-md text-[18px] text-primary">₹ 1,200</div>
</div>
</div>
{/* Product Card 3 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
<div className="aspect-square bg-surface-container relative overflow-hidden">
<img alt="Cabin Filter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A crisp studio shot of a rectangular cabin AC filter for a car. The white fibrous material is sharply in focus against a minimalist light grey background. Even lighting emphasizes the clean, hygienic nature of the product. Premium e-commerce standard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAroB5oGGcicBHLEP2uZqqmfU55MP-KxjgMO-ad9DQtN85XhTD8Np84IG1oMkQ3tST2RMNB-H6SLmchG5ytix6t5wAugFMrDWbFLHLRYs5CEVvEzxZz4hU4YBJ9Ppcvcp8s43RJQeLHuzmRWtbxo8hlV7A2NVqAN-YLRvwRSHkodu-XgwgMXCSe3DPUNSUHpltKLqd97lbCtjnZJyJ24IRLeJ1irUO7Pk9-UFHtZJqZsMXrcVJp3zAayaSAaHgd84hG7cCrRBRcpWD6"/>
<button className="absolute bottom-2 right-2 bg-surface/90 text-primary p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-on-primary">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
<div className="p-4">
<span className="font-label-sm text-label-sm text-on-surface-variant">Air Conditioning</span>
<h4 className="font-label-md text-label-md text-on-surface mt-1 mb-2 line-clamp-2">Premium Cabin AC Filter</h4>
<div className="font-headline-md text-[18px] text-primary">₹ 350</div>
</div>
</div>
{/* Product Card 4 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group hidden md:block">
<div className="aspect-square bg-surface-container relative overflow-hidden">
<img alt="Engine Oil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A high-quality studio image of a sleek plastic jug of synthetic engine oil. The bottle design is modern with metallic accents, photographed against a pure white background. The lighting is specular to highlight the glossy finish of the container. Automotive luxury and performance concept." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiSXXeZ4DltyQMkqiw8sWS3hvxk5WeL6IXE0hwdLZgvKi0U-ntxf1ITypauaGFmx-itMtmoAmi5PoNhbtgcui1c3W9ZElg6tXjAXUmrqRmOAUdM330grtjiOPIScDjml4qgkpFLXYy1tFaWkSa2WMOz05RtT7MnijjzdR89q1wDu1XnW-b4mG9RuyraZWv4teiviM6Y9juLUgKPmKTq2ky-G3vpGXJA2Szm2QTqvKE9ZrxWC9XkSPICIYi8SaaQcwxycj4-HQJ5Crn"/>
<button className="absolute bottom-2 right-2 bg-surface/90 text-primary p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-on-primary">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
<div className="p-4">
<span className="font-label-sm text-label-sm text-on-surface-variant">Lubricants</span>
<h4 className="font-label-md text-label-md text-on-surface mt-1 mb-2 line-clamp-2">Ecstar 0W-16 Synthetic Oil (3.5L)</h4>
<div className="font-headline-md text-[18px] text-primary">₹ 1,450</div>
</div>
</div>
</div>
</section>
{/* Reviews Section */}
<section className="bg-surface-container-low rounded-2xl p-margin-mobile md:p-margin-desktop border border-outline-variant/50">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-stack-lg">Customer Reviews</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Breakdown (Span 4) */}
<div className="md:col-span-4 flex flex-col gap-4">
<div className="flex items-end gap-3">
<span className="font-display-lg text-display-lg text-on-surface leading-none">4.8</span>
<div className="flex flex-col">
<div className="flex text-secondary text-[20px]">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Based on 124 ratings</span>
</div>
</div>
{/* Progress Bars */}
<div className="space-y-2 mt-4">
<div className="flex items-center gap-3">
<span className="font-label-sm text-label-sm text-on-surface w-8">5 Star</span>
<div className="h-2 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[85%] rounded-full"></div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant w-8 text-right">85%</span>
</div>
<div className="flex items-center gap-3">
<span className="font-label-sm text-label-sm text-on-surface w-8">4 Star</span>
<div className="h-2 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[10%] rounded-full"></div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant w-8 text-right">10%</span>
</div>
<div className="flex items-center gap-3">
<span className="font-label-sm text-label-sm text-on-surface w-8">3 Star</span>
<div className="h-2 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[3%] rounded-full"></div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant w-8 text-right">3%</span>
</div>
<div className="flex items-center gap-3">
<span className="font-label-sm text-label-sm text-on-surface w-8">2 Star</span>
<div className="h-2 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[1%] rounded-full"></div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant w-8 text-right">1%</span>
</div>
<div className="flex items-center gap-3">
<span className="font-label-sm text-label-sm text-on-surface w-8">1 Star</span>
<div className="h-2 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[1%] rounded-full"></div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant w-8 text-right">1%</span>
</div>
</div>
</div>
{/* Testimonials (Span 8) */}
<div className="md:col-span-8 space-y-4">
{/* Review 1 */}
<div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/50">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="font-label-md text-label-md text-on-surface">Rahul Sharma</h4>
<div className="flex text-secondary text-[16px] mt-1">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">2 days ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface mt-2">Perfect fit for my 2024 Swift. Packaging was secure and the quality is genuinely OEM. Engine breathes much better now.</p>
<div className="mt-3 flex items-center gap-2 font-label-sm text-label-sm text-green-700 bg-green-50 px-2 py-1 rounded w-max">
<span className="material-symbols-outlined text-[14px]">verified</span> Verified Purchase
                        </div>
</div>
{/* Review 2 */}
<div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/50">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="font-label-md text-label-md text-on-surface">Vikram Singh</h4>
<div className="flex text-secondary text-[16px] mt-1">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">1 week ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface mt-2">Good product. Standard Maruti genuine part. Price is reasonable compared to the local mechanics. Delivery was fast.</p>
</div>
<button className="w-full py-3 border border-outline-variant rounded-lg font-label-md text-label-md text-primary hover:bg-surface-container transition-colors">
                        Load More Reviews
                    </button>
</div>
</div>
</section>

    </main>
  );
}

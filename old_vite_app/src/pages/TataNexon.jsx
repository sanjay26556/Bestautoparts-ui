import { Link } from 'react-router-dom';

export default function TataNexon() {
  return (
    <>
      <main className="min-h-screen pt-20">
{/* Breadcrumbs */}
<nav className="flex items-center text-label-sm text-outline mb-stack-md">
<span>Home</span>
<span className="material-symbols-outlined text-base mx-1" data-icon="chevron_right">chevron_right</span>
<span>Tata Motors</span>
<span className="material-symbols-outlined text-base mx-1" data-icon="chevron_right">chevron_right</span>
<span className="text-on-surface font-semibold">Nexon Catalog</span>
</nav>
{/* Hero Section */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-16">
<div className="lg:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 shadow-sm">
<div className="relative group">
<img alt="Tata Nexon Black" className="w-full h-[400px] md:h-[500px] object-cover" data-alt="A professional studio photograph of a sleek, black Tata Nexon SUV positioned in a high-key white studio environment. The vehicle is seen from a side profile, highlighting its aerodynamic silhouette and reflective metallic paint. The lighting is soft and diffused, creating clean highlights on the car's body panels and alloy wheels. This editorial-style image emphasizes the modern engineering and premium aesthetic of the vehicle in a light-mode corporate setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT4_zWWJdGHWtYi2catjDcrpNIDncQtKjE_wLS_KC7hT8emW_5_0XIav6uKDZ31-k0RZ9AWnUDy6C3hhANbCY962m55HrceH01Fg1h5InpySgkLGxwgZhEAzscDSkHo5nzexbEZS0gZe2Npg3jAwZiHhJZU3dQ0NHbqvbre-1dD2rPajkLZU5s-5GGcTLW14yjv3o8le2QsjQg7nclOBlRCK-YbjelZb-yihkq6DF3-9IHEdrxm8L9auUxAW-Ll-3i6KubFFUxSByF"/>
<div className="absolute bottom-6 left-6 bg-surface/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
<h1 className="font-display-lg text-headline-md md:text-headline-lg text-primary">Tata Nexon</h1>
<p className="text-body-md text-on-surface-variant">Global NCAP 5-Star Certified Safety</p>
</div>
</div>
</div>
{/* Variant Selection */}
<div className="lg:col-span-4 flex flex-col justify-center">
<div className="bg-surface-container-lowest p-gutter rounded-xl border border-outline-variant/30 shadow-sm h-full">
<div className="flex items-center mb-stack-lg">
<span className="material-symbols-outlined text-secondary mr-2" data-icon="tune">tune</span>
<h2 className="font-headline-md text-headline-md">Select Variant</h2>
</div>
<div className="space-y-4">
<label className="block group cursor-pointer">
<input defaultChecked={true} className="hidden peer" name="variant" type="radio"/>
<div className="p-4 rounded-lg border-2 border-outline-variant peer-checked:border-secondary-container peer-checked:bg-secondary-fixed/20 transition-all">
<div className="flex justify-between items-center">
<span className="font-label-md text-on-surface">Smart (O)</span>
<span className="material-symbols-outlined text-secondary opacity-0 peer-checked:opacity-100" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
<p className="text-label-sm text-outline mt-1">1.2L Turbo Petrol / Manual</p>
</div>
</label>
<label className="block group cursor-pointer">
<input className="hidden peer" name="variant" type="radio"/>
<div className="p-4 rounded-lg border-2 border-outline-variant peer-checked:border-secondary-container peer-checked:bg-secondary-fixed/20 transition-all">
<div className="flex justify-between items-center">
<span className="font-label-md text-on-surface">Pure</span>
<span className="material-symbols-outlined text-secondary opacity-0 peer-checked:opacity-100" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
<p className="text-label-sm text-outline mt-1">1.5L Revotorq Diesel / Manual</p>
</div>
</label>
<label className="block group cursor-pointer">
<input className="hidden peer" name="variant" type="radio"/>
<div className="p-4 rounded-lg border-2 border-outline-variant peer-checked:border-secondary-container peer-checked:bg-secondary-fixed/20 transition-all">
<div className="flex justify-between items-center">
<span className="font-label-md text-on-surface">Creative +</span>
<span className="material-symbols-outlined text-secondary opacity-0 peer-checked:opacity-100" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
<p className="text-label-sm text-outline mt-1">1.2L Turbo Petrol / DCA</p>
</div>
</label>
<label className="block group cursor-pointer">
<input className="hidden peer" name="variant" type="radio"/>
<div className="p-4 rounded-lg border-2 border-outline-variant peer-checked:border-secondary-container peer-checked:bg-secondary-fixed/20 transition-all">
<div className="flex justify-between items-center">
<span className="font-label-md text-on-surface">Fearless PR</span>
<span className="material-symbols-outlined text-secondary opacity-0 peer-checked:opacity-100" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
<p className="text-label-sm text-outline mt-1">Top Tier Diesel AMT / Sunroof</p>
</div>
</label>
</div>
<button className="w-full mt-stack-lg py-4 bg-secondary-container text-on-tertiary font-label-md rounded-lg shadow-md hover:bg-secondary transition-colors active:scale-95">
            CONFIRM SELECTION
          </button>
</div>
</div>
</section>
{/* Browse by System (Bento Grid) */}
<section className="mb-16">
<div className="flex justify-between items-end mb-stack-lg">
<div>
<h2 className="font-headline-md text-headline-md text-primary">Browse by System</h2>
<p className="text-body-sm text-outline">Explore technical categories for precise part matching</p>
</div>
<a className="text-secondary font-label-md hover:underline" href="#">View All Categories</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
{/* Category Item */}
<div className="group cursor-pointer bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover:border-secondary-container hover:shadow-md transition-all text-center">
<div className="w-16 h-16 mx-auto mb-4 bg-surface-container flex items-center justify-center rounded-full group-hover:bg-secondary-fixed transition-colors">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary text-3xl" data-icon="settings_input_component">settings_input_component</span>
</div>
<span className="font-label-md text-on-surface">Engine</span>
</div>
<div className="group cursor-pointer bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover:border-secondary-container hover:shadow-md transition-all text-center">
<div className="w-16 h-16 mx-auto mb-4 bg-surface-container flex items-center justify-center rounded-full group-hover:bg-secondary-fixed transition-colors">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary text-3xl" data-icon="minor_crash">minor_crash</span>
</div>
<span className="font-label-md text-on-surface">Brakes</span>
</div>
<div className="group cursor-pointer bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover:border-secondary-container hover:shadow-md transition-all text-center">
<div className="w-16 h-16 mx-auto mb-4 bg-surface-container flex items-center justify-center rounded-full group-hover:bg-secondary-fixed transition-colors">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary text-3xl" data-icon="bolt">bolt</span>
</div>
<span className="font-label-md text-on-surface">Electricals</span>
</div>
<div className="group cursor-pointer bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover:border-secondary-container hover:shadow-md transition-all text-center">
<div className="w-16 h-16 mx-auto mb-4 bg-surface-container flex items-center justify-center rounded-full group-hover:bg-secondary-fixed transition-colors">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary text-3xl" data-icon="tire_repair">tire_repair</span>
</div>
<span className="font-label-md text-on-surface">Suspension</span>
</div>
<div className="group cursor-pointer bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover:border-secondary-container hover:shadow-md transition-all text-center">
<div className="w-16 h-16 mx-auto mb-4 bg-surface-container flex items-center justify-center rounded-full group-hover:bg-secondary-fixed transition-colors">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary text-3xl" data-icon="directions_car">directions_car</span>
</div>
<span className="font-label-md text-on-surface">Body</span>
</div>
<div className="group cursor-pointer bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover:border-secondary-container hover:shadow-md transition-all text-center">
<div className="w-16 h-16 mx-auto mb-4 bg-surface-container flex items-center justify-center rounded-full group-hover:bg-secondary-fixed transition-colors">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary text-3xl" data-icon="ac_unit">ac_unit</span>
</div>
<span className="font-label-md text-on-surface">Cooling</span>
</div>
</div>
</section>
{/* Popular Spares Section */}
<section className="mb-16">
<div className="flex items-center space-x-3 mb-stack-lg">
<div className="h-8 w-2 bg-secondary rounded-full"></div>
<h2 className="font-headline-md text-headline-md text-primary">Popular Spares for Nexon</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/* Product Card 1 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden group hover:shadow-lg transition-all">
<div className="aspect-square relative overflow-hidden bg-surface-container-low">
<img alt="Oil Filter" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A macro studio shot of a high-performance automotive oil filter for a modern engine. The filter is presented on a clean, light grey reflective surface with a soft white background. The composition is minimalist and technical, focusing on the precision threading and industrial orange finish of the component. Bright, even studio lighting highlights the metallic textures and premium build quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSZo610cO1EeeROV5EMoSMqfF5nJVDKZI8PTUpZrbw5vY0bALz1vYV4Yvr4gjm4yAECjmxhoB-PEwI9FuezS8unglk4QsyAmBgXDXnlMvRltHleBXcpTNVjDrqA4fhrTJkhgsH6XUoo5khXqS5L5yxuhi-6ktX6VbOKUPxBS5V0NC0_QLj674JapFNTZTSHsCsNTKhsO6o-CePolJ71vbZB28scYv7hSv7YDsJU8BgYYbO3tZCUy2gn0V8P3L-xCL_ume2ZObGKw8X"/>
<span className="absolute top-3 left-3 bg-green-100 text-green-700 text-label-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider">In Stock</span>
</div>
<div className="p-4">
<h3 className="font-label-md text-on-surface line-clamp-2">Genuine Tata Motors Oil Filter - 1.2L Revotron</h3>
<div className="mt-4 flex items-center justify-between">
<div>
<span className="text-label-sm text-outline line-through">₹450</span>
<p className="text-headline-md font-bold text-primary">₹385</p>
</div>
<button className="bg-primary text-on-primary w-10 h-10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
<span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
</button>
</div>
</div>
</div>
{/* Product Card 2 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden group hover:shadow-lg transition-all">
<div className="aspect-square relative overflow-hidden bg-surface-container-low">
<img alt="Brake Pads" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close-up commercial photography of a set of premium ceramic brake pads for an SUV. The components are arranged symmetrically on a neutral technical background with professional top-down lighting. The image showcases the high-friction surface texture and sturdy metal backing plates. The aesthetic is sharp, clean, and industrial, reflecting reliability and safety in modern automotive engineering." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbEIM5xLh7F3BrDlA1mvj6ygZrNDbmV01RXXlVqI0yic9bguC0bgtmmyBT5xxc0jRLr2Jl8kuuM2K0bwsO3x3VqKiOu1mbX5h27jrU88d6qSGEIokMt10EG97YbZUJ49Uj7sbR2T4z9eQK77prQgtm0iLwvln6bSitmWhVE2ud3l051vVCbrgBPoep7Jn92hoLHxu_TbbGl0h-o2MqH-3UPaF-9822ljp1bpCUk78RaTdWnncBIM2a6x0lUQzpHYAQvN8ic7v5RkkD"/>
<span className="absolute top-3 right-3 bg-secondary-container text-white text-label-sm font-bold px-3 py-1 rounded-full">Best Seller</span>
</div>
<div className="p-4">
<h3 className="font-label-md text-on-surface line-clamp-2">Brembo Front Brake Pad Set - Performance Series</h3>
<div className="mt-4 flex items-center justify-between">
<div>
<span className="text-label-sm text-outline line-through">₹2,800</span>
<p className="text-headline-md font-bold text-primary">₹2,450</p>
</div>
<button className="bg-primary text-on-primary w-10 h-10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
<span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
</button>
</div>
</div>
</div>
{/* Product Card 3 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden group hover:shadow-lg transition-all">
<div className="aspect-square relative overflow-hidden bg-surface-container-low">
<img alt="Spark Plugs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Highly detailed studio shot of three iridium spark plugs arranged diagonally on a sleek dark surface. The lighting is dramatic yet soft, highlighting the metallic finish and the ceramic insulation. The image has a crisp, high-definition look, emphasizing mechanical precision and high-performance technology. The color palette is dominated by silver and white with subtle blue reflections." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBtICGvDuLvgoGWM2928KBxol87fDCU8LuH3oF1mugNCkZbM_1MDEuyXz5XrmLuZNXHnwYDGNDWZhm2uoP2qqlHpqQOnKDbNm2lubizmvMsVcdbK_ne7FEHfz3nObtzjfeyOUazTxSNMqZTZidIUbh8TYL-4X_gsAIEYqSjihRgZYGKUjxbmFrkFgsYWOa9vw500iBNlacCY3hcdXIVW-jevuY6byZd-zq58aForVHYiaxCCCQG5XgO9NwhrbEhh9Ixze6ArJXPD_Q"/>
</div>
<div className="p-4">
<h3 className="font-label-md text-on-surface line-clamp-2">NGK Laser Iridium Spark Plug (Set of 3)</h3>
<div className="mt-4 flex items-center justify-between">
<div>
<span className="text-label-sm text-outline line-through">₹1,200</span>
<p className="text-headline-md font-bold text-primary">₹990</p>
</div>
<button className="bg-primary text-on-primary w-10 h-10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
<span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
</button>
</div>
</div>
</div>
{/* Product Card 4 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden group hover:shadow-lg transition-all">
<div className="aspect-square relative overflow-hidden bg-surface-container-low">
<img alt="Air Filter" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A clean, minimalist product photograph of a pleated automotive air filter. The item is positioned against a pristine white studio background with soft ambient shadows. The image highlights the intricate folds of the white filter media and the black plastic housing frame. The style is strictly commercial and editorial, conveying a sense of purity and technical efficiency in a light-mode layout." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTQP07BBIxEHR9orx8gSsvFQ-4mIdejKrCs92clWOWEKmFk6qutZOmtXDFLU7Jp0pQCE2ytiTEqqpI0tjGjh-dmUVnOLUJXz9DLlnskY_N-T-UhqqwHYZhqtrNDg5ZKk7XWHYs_5OYTVd-G9kbRysYl5sy1odzfvURv4bwWcZUPZIx62rKo2G7gwz06oy08-VMQ5gbuKOgCkZIp3FXZo5xaIQ_dZsXcuc3hETQhGWQkrxSg3UNz-A5AQ3RZ8Rw3bCPDySFzAUvxEOb"/>
</div>
<div className="p-4">
<h3 className="font-label-md text-on-surface line-clamp-2">Nexon Cabin Air Filter - Charcoal Activated</h3>
<div className="mt-4 flex items-center justify-between">
<div>
<span className="text-label-sm text-outline line-through">₹650</span>
<p className="text-headline-md font-bold text-primary">₹520</p>
</div>
<button className="bg-primary text-on-primary w-10 h-10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
<span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
</button>
</div>
</div>
</div>
</div>
</section>
{/* Technical Specs Banner */}
<section className="bg-primary-container text-on-primary rounded-xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between">
<div className="mb-6 md:mb-0">
<h2 className="text-headline-md font-bold mb-2">Technical Specifications Sheet</h2>
<p className="text-on-primary-container max-w-md">Download the full technical parts manual for the Tata Nexon 2023-24 model range. PDF Includes exploded diagrams and torque specs.</p>
</div>
<button className="flex items-center bg-secondary-container hover:bg-secondary text-white font-label-md px-8 py-4 rounded-lg transition-all shadow-lg active:scale-95">
<span className="material-symbols-outlined mr-2" data-icon="download">download</span>
        DOWNLOAD PDF CATALOG
      </button>
</section>
</main>
    </>
  );
}

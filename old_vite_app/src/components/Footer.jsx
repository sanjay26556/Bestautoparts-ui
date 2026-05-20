import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full mt-stack-lg border-t border-outline-variant dark:border-outline-variant bg-surface-container-highest dark:bg-surface-container-highest">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-gutter py-stack-lg max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="font-display-lg text-headline-md font-bold text-primary dark:text-primary mb-4">
            BEST AUTOPARTS
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface-variant mb-6">
            Precision Engineering. Guaranteed Reliability. The professional's choice for genuine spare parts.
          </p>
          <div className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface-variant">
            © 2024 BEST AUTOPARTS. All rights reserved.
          </div>
        </div>
        <div className="col-span-1">
          <h4 className="font-label-md text-label-md text-on-surface mb-4 uppercase tracking-wider">Company</h4>
          <ul className="space-y-3 font-body-sm text-body-sm">
            <li className=""><Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary transition-colors opacity-90 hover:opacity-100" to="/">About Us</Link></li>
            <li className=""><Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary transition-colors opacity-90 hover:opacity-100" to="/">Contact Support</Link></li>
            <li className=""><Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary transition-colors opacity-90 hover:opacity-100" to="/">Genuine Parts Guarantee</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="font-label-md text-label-md text-on-surface mb-4 uppercase tracking-wider">Policies</h4>
          <ul className="space-y-3 font-body-sm text-body-sm">
            <li className=""><Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary transition-colors opacity-90 hover:opacity-100" to="/">Shipping Policy</Link></li>
            <li className=""><Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary transition-colors opacity-90 hover:opacity-100" to="/">Warranty Terms</Link></li>
            <li className=""><Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary transition-colors opacity-90 hover:opacity-100" to="/">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="col-span-1 bg-surface rounded-xl p-6 border border-outline-variant">
          <h4 className="font-label-md text-label-md text-on-surface mb-2 flex items-center">
            <span className="material-symbols-outlined text-secondary mr-2">verified</span>
            Expert Support
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
            Need help finding the right part? Our master mechanics are standing by.
          </p>
          <button className="w-full bg-transparent border border-primary text-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors">
            Chat with an Expert
          </button>
        </div>
      </div>
    </footer>
  );
}

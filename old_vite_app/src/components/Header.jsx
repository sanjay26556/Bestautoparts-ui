import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-gutter py-stack-md max-w-container-max mx-auto">
        <Link to="/" className="font-display-lg text-headline-md font-bold tracking-tighter text-primary dark:text-inverse-primary">
          BEST AUTOPARTS
        </Link>
        <nav className="hidden md:flex items-center space-x-gutter">
          <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-inverse-primary transition-colors hover:bg-surface-container-low dark:hover:bg-inverse-surface rounded-lg px-3 py-2 transition-all duration-300" to="/brands">Brands</Link>

          <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-inverse-primary transition-colors hover:bg-surface-container-low dark:hover:bg-inverse-surface rounded-lg px-3 py-2 transition-all duration-300" to="/marketplace">Marketplace</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-inverse-primary transition-colors hover:bg-surface-container-low dark:hover:bg-inverse-surface rounded-lg px-3 py-2 transition-all duration-300" to="/services">Services</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-inverse-primary transition-colors hover:bg-surface-container-low dark:hover:bg-inverse-surface rounded-lg px-3 py-2 transition-all duration-300" to="/offers">Offers</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-on-surface-variant hover:text-primary transition-colors flex items-center">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          <Link to="/profile" className="text-on-surface-variant hover:text-primary transition-colors flex items-center">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

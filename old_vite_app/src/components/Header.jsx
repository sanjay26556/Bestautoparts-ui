import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-gutter py-stack-md max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
          <Link to="/" className="font-display-lg text-headline-md font-bold tracking-tighter text-primary dark:text-inverse-primary">
            BEST AUTOPARTS
          </Link>
        </div>
        
        {/* Desktop Nav */}
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

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-t border-outline-variant/30 shadow-lg py-4 px-gutter flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200">
          <Link onClick={() => setIsMobileMenuOpen(false)} className="w-full text-left font-body-md text-body-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg px-4 py-3 transition-colors" to="/brands">Brands</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="w-full text-left font-body-md text-body-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg px-4 py-3 transition-colors" to="/marketplace">Marketplace</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="w-full text-left font-body-md text-body-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg px-4 py-3 transition-colors" to="/services">Services</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="w-full text-left font-body-md text-body-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg px-4 py-3 transition-colors" to="/offers">Offers</Link>
        </div>
      )}
    </header>
  );
}

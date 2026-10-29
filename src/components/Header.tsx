import { useState } from 'react';
import { ShoppingBag, Menu, X, Heart, Sparkles } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PrestigeLogo from './PrestigeLogo';
import { prefetchRoute } from '../routeLoaders';

interface HeaderProps {
  cartItemsCount: number;
  onOpenCart: () => void;
  wishlistCount: number;
}

export default function Header({
  cartItemsCount,
  onOpenCart,
  wishlistCount,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About Us', path: '/about' },
    { label: 'My Wishlist', path: '/wishlist' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 text-neutral-1100">
      {/* Premium Metallic Announcement Bar */}
      <div className="gold-shimmer-bg h-1.5 w-full" />
      <div className="flex items-center justify-center gap-1.5 bg-neutral-950 px-3 py-1.5 text-center font-mono text-[8px] font-medium uppercase tracking-[0.08em] text-white border-b border-amber-500/15 sm:px-4 sm:text-[10px] sm:tracking-[0.14em]">
        <Sparkles className="h-3.5 w-3.5 shrink-0 text-amber-300 animate-pulse" />
        <span className="text-amber-100/90 font-semibold">Prestige Studio Configurator Live below — Tailor Your Gilded Calibre today</span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-3 sm:gap-4">
          
          {/* Logo */}
          <Link
            id="header-logo-btn"
            to="/"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo(0, 0);
            }}
            onPointerEnter={() => prefetchRoute('/')}
            onFocus={() => prefetchRoute('/')}
            className="flex shrink-0 items-center focus:outline-none"
          >
            <PrestigeLogo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-end gap-2 whitespace-nowrap lg:gap-4 xl:gap-6">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <Link
                  id={`nav-desktop-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                  key={item.path}
                  to={item.path}
                  onClick={() => window.scrollTo(0, 0)}
                  onPointerEnter={() => prefetchRoute(item.path)}
                  onFocus={() => prefetchRoute(item.path)}
                  className={`relative whitespace-nowrap px-1 py-2 text-[10px] sm:text-xs lg:text-sm tracking-[0.22em] uppercase transition-colors duration-200 cursor-pointer focus:outline-none ${
                    isActive ? 'text-amber-400 font-medium' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Shopping Bag and Mobile Drawer toggles */}
          <div className="flex shrink-0 items-center space-x-0 sm:space-x-4">
            {/* Wishlist Button */}
            <Link
              id="header-wishlist-btn"
              to="/wishlist"
              onClick={() => window.scrollTo(0, 0)}
              onPointerEnter={() => prefetchRoute('/wishlist')}
              onFocus={() => prefetchRoute('/wishlist')}
              className={`hidden h-11 w-11 items-center justify-center text-neutral-400 hover:text-amber-400 hover:bg-neutral-800/60 rounded-full transition-all relative cursor-pointer focus:outline-none min-[360px]:flex ${
                currentPath === '/wishlist' ? 'text-amber-400' : ''
              }`}
              aria-label="View Wishlist"
            >
              <Heart className={`h-5 w-5 sm:h-6 sm:w-6 ${currentPath === '/wishlist' ? 'fill-amber-500 text-amber-500' : 'text-neutral-300 hover:text-amber-400'}`} />
              {wishlistCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 bg-red-550 bg-red-500 text-neutral-950 border border-neutral-950 font-sans text-xs font-semibold h-5 w-5 rounded-full flex items-center justify-center text-[10px]"
                >
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Shopping Cart Button */}
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              className="flex h-11 w-11 items-center justify-center text-neutral-400 hover:text-amber-400 hover:bg-neutral-800/60 rounded-full transition-all relative cursor-pointer focus:outline-none"
              aria-label="Open Cart"
            >
              <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-300 hover:text-amber-400" />
              {cartItemsCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 bg-amber-500 text-neutral-50 border border-neutral-950 font-sans text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center"
                >
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Icon */}
            <button
              id="header-mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="md:hidden flex h-11 w-11 items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full cursor-pointer focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden border-t border-neutral-800 bg-neutral-950 px-4 pt-2 pb-6 space-y-2"
          >
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  id={`nav-mobile-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  onPointerEnter={() => prefetchRoute(item.path)}
                  onFocus={() => prefetchRoute(item.path)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm tracking-widest uppercase transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-400 font-medium'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />}
                </button>
              );
            })}
          </div>
      )}
    </header>
  );
}

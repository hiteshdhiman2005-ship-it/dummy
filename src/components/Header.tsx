import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Watch, ShoppingBag, Menu, X, Heart, Sparkles } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PrestigeLogo from './PrestigeLogo';

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
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'My Wishlist', path: '/wishlist' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 text-neutral-100">
      {/* Premium Metallic Announcement Bar */}
      <div className="gold-shimmer-bg h-1.5 w-full" />
      <div className="bg-neutral-950 text-white text-[9px] sm:text-[10px] font-mono font-medium py-1.5 px-4 text-center tracking-[0.14em] uppercase border-b border-amber-500/15 flex items-center justify-center space-x-1.5 select-none">
        <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-pulse" />
        <span className="text-amber-100/90 font-semibold">Prestige Studio Configurator Live below — Tailor Your Gilded Calibre today</span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link
            id="header-logo-btn"
            to="/"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none"
          >
            <PrestigeLogo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <Link
                  id={`nav-desktop-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                  key={item.path}
                  to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`relative text-sm tracking-widest uppercase transition-colors duration-200 cursor-pointer py-2 focus:outline-none ${
                    isActive ? 'text-amber-400 font-medium' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Shopping Bag and Mobile Drawer toggles */}
          <div className="flex items-center space-x-4">
            {/* Wishlist Button */}
            <Link
              id="header-wishlist-btn"
              to="/wishlist"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`p-2.5 text-neutral-400 hover:text-red-400 hover:bg-neutral-800/60 rounded-full transition-all relative cursor-pointer focus:outline-none ${
                currentPath === '/wishlist' ? 'text-red-400 border border-red-500/10 bg-red-500/5' : ''
              }`}
              aria-label="View Wishlist"
            >
              <Heart className={`h-6 w-6 ${currentPath === '/wishlist' ? 'fill-red-500 text-red-500' : 'text-neutral-300 hover:text-red-400'}`} />
              {wishlistCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 bg-red-550 bg-red-500 text-neutral-950 border border-neutral-950 font-sans text-xs font-semibold h-5 w-5 rounded-full flex items-center justify-center text-[10px]"
                >
                  {wishlistCount}
                </motion.span>
              )}
            </Link>

            {/* Shopping Cart Button */}
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              className="p-2.5 text-neutral-400 hover:text-amber-400 hover:bg-neutral-800/60 rounded-full transition-all relative cursor-pointer focus:outline-none"
              aria-label="Open Cart"
            >
              <ShoppingBag className="h-6 w-6 text-neutral-300 hover:text-amber-400" />
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 bg-amber-500 text-neutral-50 border border-neutral-950 font-sans text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </button>

            {/* Mobile Menu Icon */}
            <button
              id="header-mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 text-neutral-400 hover:text-white hover:bg-neutral-800/60 rounded-full cursor-pointer focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-neutral-800 bg-neutral-950 px-4 pt-2 pb-6 space-y-2"
          >
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  id={`nav-mobile-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


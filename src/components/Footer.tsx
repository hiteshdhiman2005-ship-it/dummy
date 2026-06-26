import { Watch, Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import PrestigeLogo from './PrestigeLogo';

export default function Footer() {
  const socials = [
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, url: 'https://facebook.com' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com' },
    { name: 'X (Twitter)', icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com' },
    { name: 'YouTube', icon: <Youtube className="h-5 w-5" />, url: 'https://youtube.com' }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sapphire-900 text-neutral-300 border-t border-sapphire-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Slogan */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center">
              <PrestigeLogo size="md" />
            </div>
            <p className="text-neutral-300 max-w-sm text-sm italic font-serif">
              Luxury Watches • Precision Craftsmanship • Timeless Style
            </p>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Discover premium timepieces crafted with precision, elegance, and timeless style. PrestigeTime is dedicated to serving watch enthusiasts and collectors around the globe.
            </p>
          </div>

          {/* Quick Links Nav */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-4 border-l-2 border-amber-500 pl-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  id="footer-nav-home"
                  to="/"
                  onClick={handleScrollToTop}
                  className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block text-neutral-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  id="footer-nav-products"
                  to="/products"
                  onClick={handleScrollToTop}
                  className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block text-neutral-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  id="footer-nav-services"
                  to="/services"
                  onClick={handleScrollToTop}
                  className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block text-neutral-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  id="footer-nav-about"
                  to="/about"
                  onClick={handleScrollToTop}
                  className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block text-neutral-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  id="footer-nav-wishlist"
                  to="/wishlist"
                  onClick={handleScrollToTop}
                  className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block text-neutral-300"
                >
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link
                  id="footer-nav-blog"
                  to="/blog"
                  onClick={handleScrollToTop}
                  className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block text-neutral-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  id="footer-nav-contact"
                  to="/contact"
                  onClick={handleScrollToTop}
                  className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block text-neutral-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  id="footer-nav-sitemap"
                  to="/sitemap"
                  onClick={handleScrollToTop}
                  className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block text-neutral-300"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-4 border-l-2 border-amber-500 pl-2">
              Our Headquarters
            </h4>
            <ul className="space-y-3 text-xs text-neutral-300">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span>125 Luxury Avenue,<br />New York, NY 10001, US</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <span>+1 (800) 555-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <a href="mailto:info@prestigetime.com" className="hover:text-amber-400 transition-colors">
                  info@prestigetime.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Icons & Bottom copyright */}
        <div className="border-t border-sapphire-500/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-4">
            {socials.map((social) => (
              <a
                id={`footer-social-${social.name.toLowerCase().replace(/\s/g, '')}`}
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-sapphire-900 border border-sapphire-500/20 rounded-full text-neutral-300 hover:text-amber-400 hover:bg-sapphire-600 hover:border-amber-500/30 transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="text-xs text-neutral-400 text-center sm:text-right font-sans">
            <p className="mb-1">© 2026 PrestigeTime. All Rights Reserved.</p>
            <p>Crafted for collectors who understand values, precision, and elegance.</p>
          </div>

        </div>

      </div>
    </footer>
  );
}

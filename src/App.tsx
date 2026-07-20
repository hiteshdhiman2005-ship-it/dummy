import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import Sitemap from './pages/Sitemap';

import { CartItem, Product } from './types';
import { PRODUCTS } from './data';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Luxury' | 'Sports' | 'Smart' | 'Classic'>('All');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);
  const [checkoutCode, setCheckoutCode] = useState('');

  // Wishlist state with localStorage persistence
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('prestigetime_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('prestigetime_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      return [...prev, productId];
    });
  };

  // Count items inside cart
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Cart subtotal calculation
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    // Open the drawer automatically
    setIsCheckoutSuccess(false);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleCheckoutSubmit = () => {
    if (cart.length === 0) return;
    
    // Simulate payment clearing
    setCheckoutCode(`PT-PAY-${Math.floor(10000 + Math.random() * 90000)}`);
    setIsCheckoutSuccess(true);
    setCart([]); // Clear the cart on success
  };

  // Close custom overlays on keydown ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-900 selection:bg-amber-500 selection:text-neutral-950 flex flex-col justify-between">
      
      {/* 1. Header Bar */}
      <Header
        cartItemsCount={cartItemsCount}
        onOpenCart={() => {
          setIsCheckoutSuccess(false);
          setIsCartOpen(true);
        }}
        wishlistCount={wishlist.length}
      />

      {/* 2. Page Content Slot with page transition */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    setSelectedCategory={setSelectedCategory}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Navigate to="/products" replace />} />
              <Route
                path="/products"
                element={
                  <Products
                    onAddToCart={handleAddToCart}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    wishlist={wishlist}
                    onToggleWishlist={handleToggleWishlist}
                  />
                }
              />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route
                path="/wishlist"
                element={
                  <Wishlist
                    wishlistItems={PRODUCTS.filter((p) => wishlist.includes(p.id))}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                  />
                }
              />
              <Route
                path="*"
                element={
                  <Home
                    setSelectedCategory={setSelectedCategory}
                  />
                }
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Footer Bar */}
      <Footer />

      {/* 4. Cart Side Drawer Overlay sliding panel */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-55 overflow-hidden font-sans" id="shopping-cart-drawer">
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-neutral-950/80 backdrop-blur-xs cursor-pointer"
            />

            {/* Inner Drawer body */}
            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
                className="w-screen max-w-md bg-neutral-950 border-l border-neutral-800 flex flex-col justify-between h-full shadow-2xl overflow-hidden"
              >
                
                {/* Drawer Header */}
                <div className="px-6 py-6 border-b border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ShoppingBag className="h-5 w-5 text-amber-500" />
                    <h2 className="text-sm font-extrabold uppercase tracking-widest text-white">
                      Your Shopping Bag
                    </h2>
                    {cartItemsCount > 0 && (
                      <span className="bg-amber-500/10 text-amber-400 text-xs px-2 py-0.5 rounded-full font-mono border border-amber-500/20">
                        {cartItemsCount}
                      </span>
                    )}
                  </div>
                  <button
                    id="cart-drawer-close"
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 text-neutral-450 hover:text-white rounded-full hover:bg-neutral-900 transition-colors cursor-pointer focus:outline-none"
                    aria-label="Close cart"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Drawer Content */}
                <div className="flex-1 overflow-y-auto py-6 px-6 scrollbar-thin scrollbar-thumb-neutral-800">
                  
                  <AnimatePresence mode="wait">
                    {isCheckoutSuccess ? (
                      
                      // Checkout Receipt block
                      <motion.div
                        id="checkout-success-view"
                        key="checkout-success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-10 space-y-6"
                      >
                        <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                          <CheckCircle2 className="h-7 w-7" />
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="font-serif text-xl font-bold text-white">Purchase Completed</h3>
                          <p className="text-xs text-neutral-400 max-w-xs mx-auto leading-relaxed">
                            Your order has been authorized successfully. Our New York dispatch team is currently packing your luxury watch set.
                          </p>
                        </div>

                        <div className="bg-neutral-900 border border-neutral-805 p-5 text-left rounded-lg text-xs space-y-2 max-w-sm mx-auto font-mono">
                          <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                            <span className="text-neutral-500 uppercase font-bold text-[9px]">Receipt Token</span>
                            <span className="text-amber-500 text-[10px] font-bold">{checkoutCode}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Handling Priority:</span>
                            <span className="text-white font-semibold">Express Air Insured</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Tracking details ETA:</span>
                            <span className="text-white font-semibold">Under 12-HR</span>
                          </div>
                        </div>

                        <button
                          id="cart-continue-browse-btn"
                          onClick={() => setIsCartOpen(false)}
                          className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold tracking-widest rounded uppercase transition-colors cursor-pointer w-full focus:outline-none"
                        >
                          Keep Browsing Watches
                        </button>
                      </motion.div>

                    ) : cart.length > 0 ? (
                      
                      // Active items list
                      <motion.div
                        key="cart-active-list"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-6"
                      >
                        {cart.map((item) => (
                          <div
                            key={item.product.id}
                            className="flex items-center space-x-4 border-b border-neutral-900 pb-4"
                          >
                            <div className="h-16 w-16 rounded bg-neutral-900 border border-neutral-800 overflow-hidden shrink-0">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-full h-full object-cover filter brightness-[0.9]"
                                referrerPolicy="no-referrer"
                              />
                            </div>

                            <div className="flex-grow min-w-0">
                              <h4 className="font-serif text-sm font-bold text-white truncate">
                                {item.product.name}
                              </h4>
                              <p className="text-[10px] uppercase text-neutral-500 tracking-wider">
                                {item.product.category} Series
                              </p>
                              <span className="text-neutral-300 text-xs font-bold block mt-1">
                                ${item.product.price.toLocaleString()}
                              </span>
                            </div>

                            {/* Quantity Adjusters */}
                            <div className="flex items-center space-x-1.5 shrink-0 bg-neutral-900 border border-neutral-800 py-1.5 px-2 rounded-md">
                              <button
                                id={`cart-qty-dec-${item.product.id}`}
                                onClick={() => handleUpdateQuantity(item.product.id, -1)}
                                className="p-0.5 text-neutral-400 hover:text-white cursor-pointer focus:outline-none"
                                title="Decrease Quantity"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="text-xs text-white font-mono font-medium px-1 min-w-[15px] text-center select-none">
                                {item.quantity}
                              </span>
                              <button
                                id={`cart-qty-inc-${item.product.id}`}
                                onClick={() => handleUpdateQuantity(item.product.id, 1)}
                                className="p-0.5 text-neutral-400 hover:text-white cursor-pointer focus:outline-none"
                                title="Increase Quantity"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            <button
                              id={`cart-del-${item.product.id}`}
                              onClick={() => handleRemoveFromCart(item.product.id)}
                              className="p-1.5 bg-neutral-900/50 hover:bg-red-500/10 text-neutral-500 hover:text-red-400 border border-neutral-850 hover:border-red-500/20 rounded-md transition-colors cursor-pointer shrink-0 focus:outline-none"
                              aria-label="Move item to trash"
                            >
                              <Trash2 className="h-4.5 w-4.5" />
                            </button>
                          </div>
                        ))}
                      </motion.div>

                    ) : (
                      
                      // Empty Cart screen
                      <motion.div
                        key="cart-empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 space-y-4"
                      >
                        <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center mx-auto text-neutral-600">
                          <ShoppingBag className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-white">Your bag is empty</h4>
                          <p className="text-xs text-neutral-500 max-w-[200px] mx-auto">
                            Add premium watch models to view selected specs, pricing guides, and check out securely.
                          </p>
                        </div>
                        <button
                          id="cart-browse-btn"
                          onClick={() => {
                            setIsCartOpen(false);
                            navigate('/services');
                          }}
                          className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded cursor-pointer transition-colors focus:outline-none"
                        >
                          Explore Products
                        </button>
                      </motion.div>

                    )}
                  </AnimatePresence>

                </div>

                {/* Drawer Footer Summary (only if cart has items and not checked out) */}
                {!isCheckoutSuccess && cart.length > 0 && (
                  <div className="px-6 py-6 border-t border-neutral-800 bg-neutral-950 shrink-0 space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-neutral-400">
                        <span>Delivery Insured Handling:</span>
                        <span className="text-emerald-400 uppercase font-semibold font-mono tracking-wide">FREE STANDARD AIR</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white font-medium">Estimated Subtotal:</span>
                        <span className="text-amber-400 font-mono font-bold text-lg">
                          ${cartSubtotal.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <button
                        id="drawer-checkout-btn"
                        onClick={handleCheckoutSubmit}
                        className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-extrabold text-xs tracking-widest uppercase rounded-md transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/5 focus:outline-none"
                      >
                        <span>CHECKOUT & BOOK ORDER</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      
                      <div className="flex items-center justify-center space-x-1.5 text-[10px] text-neutral-500 uppercase font-mono tracking-wider">
                        <Lock className="h-3 w-3 text-amber-500" />
                        <span>256-Bit Encrypted Secure Checkout Pipeline</span>
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

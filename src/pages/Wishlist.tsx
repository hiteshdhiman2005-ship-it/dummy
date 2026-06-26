import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ShoppingCart, Eye, Trash2, Info, Check, Watch } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Product, PageType } from '../types';

// Performance Optimizer: Dynamically resizes Unsplash image URLs for responsive screens
function getOptimizedUnsplashUrl(url: string, width: number, quality = 75) {
  if (!url || !url.includes('unsplash.com')) return url;
  try {
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?auto=format&fit=crop&q=${quality}&w=${width}`;
  } catch {
    return url;
  }
}

interface WishlistProps {
  wishlistItems: Product[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
}

export default function Wishlist({
  wishlistItems,
  onAddToCart,
  onToggleWishlist,
}: WishlistProps) {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useSEO({
    title: 'My Handpicked Wishlist Collection | PrestigeTime',
    description: 'Access and manage your privately saved catalog of elite PrestigeTime Swiss watch choices and rare luxury timepiece calibers.',
    keywords: [
      'saved luxury watches',
      'watch wishlist',
      'prestigetime saved items',
      'timepiece collection planner'
    ],
  });

  return (
    <div id="wishlist-page-container" className="bg-neutral-900 text-neutral-100 font-sans min-h-screen">
      
      {/* Header section */}
      <section className="relative py-20 bg-neutral-950 border-b border-neutral-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={getOptimizedUnsplashUrl("https://images.unsplash.com/photo-1547996160-81dfa63595aa", 1200, 75)}
            srcSet={`${getOptimizedUnsplashUrl("https://images.unsplash.com/photo-1547996160-81dfa63595aa", 640, 70)} 640w,
                    ${getOptimizedUnsplashUrl("https://images.unsplash.com/photo-1547996160-81dfa63595aa", 1200, 75)} 1200w`}
            sizes="100vw"
            fetchPriority="high"
            decoding="async"
            alt="Watch gears backdrop"
            className="w-full h-full object-cover object-center scale-105 filter blur-xs"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/80 to-neutral-950" />
        
        <div className="relative text-center z-10 max-w-4xl mx-auto px-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500 font-bold">Your Curated Selection</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-black tracking-wide text-white mb-3 mt-1.5">
            MY <span className="text-amber-500">WISHLIST</span>
          </h1>
          <div className="h-0.5 w-16 bg-amber-500 mx-auto rounded" />
          <p className="mt-4 text-neutral-400 text-xs sm:text-sm font-light tracking-wide uppercase">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'Timepiece' : 'Timepieces'} saved to your library
          </p>
        </div>
      </section>

      {/* Main content slot */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="popLayout">
          {wishlistItems.length > 0 ? (
            <motion.div
              layout
              key="wishlist-grid-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {/* Reset controls */}
              <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                <span className="text-xs text-neutral-300 font-mono">
                  Saved Timepieces ({wishlistItems.length})
                </span>
                <button
                  id="wishlist-clear-all-btn"
                  onClick={() => {
                    if (window.confirm("Are you sure you want to clear your wishlist?")) {
                      wishlistItems.forEach(item => onToggleWishlist(item.id));
                    }
                  }}
                  className="text-[10px] sm:text-xs text-neutral-300 hover:text-red-400 font-bold tracking-widest uppercase transition-colors flex items-center space-x-1 cursor-pointer focus:outline-none focus:ring-1 focus:ring-red-500/50 rounded px-1.5 py-0.5"
                >
                  <Trash2 className="h-4 w-4 mr-1 text-red-500/80" aria-hidden="true" />
                  <span>Clear All Items</span>
                </button>
              </div>

              {/* Grid lists */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {wishlistItems.map((p, idx) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-neutral-950 border border-neutral-800/80 rounded-xl overflow-hidden titan-card-glow flex flex-col h-full relative"
                  >
                    {/* Delete/Heart Action in Top Right corner */}
                    <button
                      id={`wishlist-remove-btn-${p.id}`}
                      onClick={() => onToggleWishlist(p.id)}
                      className="absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-md bg-red-500/20 border border-red-500/50 text-red-500 hover:bg-red-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 cursor-pointer"
                      aria-label={`Remove ${p.name} from Wishlist`}
                      title="Remove from Wishlist"
                    >
                      <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
                    </button>

                    {/* Image section */}
                    <div className="relative aspect-square overflow-hidden bg-neutral-900 border-b border-neutral-800">
                      <img
                        src={getOptimizedUnsplashUrl(p.image, 500)}
                        srcSet={`${getOptimizedUnsplashUrl(p.image, 380)} 380w, ${getOptimizedUnsplashUrl(p.image, 600)} 600w`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                        decoding="async"
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.9] group-hover:brightness-100"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Category overlay label */}
                      <span className="absolute top-4 left-4 bg-neutral-950/90 border border-neutral-800 text-amber-400 font-mono text-[9px] font-bold tracking-widest uppercase p-1.5 px-3 rounded-md">
                        {p.category} SERIES
                      </span>

                      {/* Action buttons hover overlay */}
                      <div className="absolute inset-0 bg-neutral-950/45 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                        <button
                          id={`wishlist-quickview-${p.id}`}
                          onClick={() => setSelectedProduct(p)}
                          className="p-3 bg-white hover:bg-neutral-100 text-neutral-950 rounded-full transition-transform hover:scale-110 cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          aria-label={`Quick View Specifications for ${p.name}`}
                          title="Quick Specs View"
                        >
                          <Eye className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button
                          id={`wishlist-addcart-overlay-${p.id}`}
                          onClick={() => onAddToCart(p)}
                          className="p-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 rounded-full transition-transform hover:scale-110 cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-950"
                          aria-label={`Add ${p.name} to Cart`}
                          title="Add to Cart"
                        >
                          <ShoppingCart className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    {/* Bottom body */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                            {p.name}
                          </h3>
                          <span className="text-amber-500 font-bold font-mono text-base tracking-wide whitespace-nowrap">
                            ${p.price.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-neutral-300 text-xs font-light line-clamp-2 leading-relaxed">
                          {p.description}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-neutral-900 mt-6 flex items-center justify-between gap-4">
                        <button
                          id={`wishlist-specs-${p.id}`}
                          onClick={() => setSelectedProduct(p)}
                          className="text-[10px] sm:text-xs text-neutral-300 hover:text-amber-400 font-bold tracking-widest uppercase transition-colors flex items-center space-x-1 cursor-pointer focus:outline-none focus:underline"
                        >
                          <Info className="h-4 w-4 mr-1 text-amber-500/90" aria-hidden="true" />
                          <span>Specifications</span>
                        </button>

                        <button
                          id={`wishlist-addcart-btn-${p.id}`}
                          onClick={() => onAddToCart(p)}
                          className="px-4 py-2 bg-neutral-900 hover:bg-amber-500 hover:text-neutral-950 border border-neutral-800 text-neutral-200 text-[10px] sm:text-xs font-bold tracking-wider rounded uppercase transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-amber-500"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            // Beautiful Empty State
            <motion.div
              key="wishlist-empty-state"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="text-center py-24 px-6 border border-dashed border-neutral-800 rounded-2xl max-w-2xl mx-auto space-y-6"
            >
              <div className="w-16 h-16 bg-neutral-950 border border-neutral-800 rounded-full flex items-center justify-center mx-auto text-neutral-600 relative">
                <Heart className="h-7 w-7 text-neutral-700" />
                <div className="absolute top-0 right-0 h-3 w-3 bg-amber-500 rounded-full animate-ping" />
                <div className="absolute top-0 right-0 h-3 w-3 bg-amber-500 rounded-full" />
              </div>
              
              <div className="space-y-2">
                <h2 className="font-serif text-2xl font-bold text-white">Your wishlist is empty</h2>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Browse our legendary collection of premium Swiss calibers, classic luxury, and adventurous sports style timepieces, and select the items you adore.
                </p>
              </div>

              <div className="pt-2">
                <button
                  id="wishlist-explore-btn"
                  onClick={() => navigate('/services')}
                  className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold tracking-widest uppercase rounded transition-colors cursor-pointer inline-flex items-center space-x-2 focus:outline-none"
                >
                  <Watch className="h-4 w-4 mr-1 pb-0.5" />
                  <span>EXPLORE OUR TIMEPIECES</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Specification detail modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            id="wishlist-detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-wishlist-product-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-25 grid grid-cols-1 md:grid-cols-12"
            >
              <button
                id="wishlist-modal-close"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors cursor-pointer z-30 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Close details"
              >
                ✕
              </button>

              {/* Left Column Image */}
              <div className="col-span-12 md:col-span-5 bg-neutral-950 border-b md:border-b-0 md:border-r border-neutral-800 h-96 md:h-auto min-h-[300px]">
                <img
                  src={getOptimizedUnsplashUrl(selectedProduct.image, 500, 75)}
                  srcSet={`${getOptimizedUnsplashUrl(selectedProduct.image, 380, 70)} 380w, ${getOptimizedUnsplashUrl(selectedProduct.image, 600, 75)} 600w`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                  loading="lazy"
                  decoding="async"
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover filter brightness-[0.95]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Specifications Column */}
              <div className="col-span-12 md:col-span-7 p-8 space-y-6 flex flex-col justify-between">
                
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-amber-400 font-bold bg-amber-500/10 px-2 py-1 rounded">
                      {selectedProduct.category} COLLECTION
                    </span>
                    <h2 id="modal-wishlist-product-title" className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2 leading-tight">
                      {selectedProduct.name}
                    </h2>
                    <span className="text-amber-400 font-mono text-xl font-bold block mt-1.5">
                      ${selectedProduct.price.toLocaleString()}
                    </span>
                  </div>

                  <p className="text-neutral-200 text-xs sm:text-sm font-light leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  <div className="border-t border-b border-neutral-800 py-4 my-2">
                    <h4 className="text-amber-400 text-[10px] tracking-widest font-bold uppercase mb-2">
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                      <div>
                        <span className="text-neutral-400 block text-[9px] uppercase">Caliber Movement</span>
                        <span className="text-neutral-200 font-medium">{selectedProduct.movement}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block text-[9px] uppercase">Water Resistance</span>
                        <span className="text-neutral-200 font-medium">{selectedProduct.waterResistance}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block text-[9px] uppercase">Crystal Glass Face</span>
                        <span className="text-neutral-200 font-medium">{selectedProduct.glassType}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block text-[9px] uppercase">Default Strap</span>
                        <span className="text-neutral-200 font-medium">{selectedProduct.strapMaterial}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-amber-400 text-[10px] tracking-widest font-bold uppercase">
                      Core Crafted Inclusions
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedProduct.features.map((feat) => (
                        <li key={feat} className="flex items-start space-x-2 text-[11px] text-neutral-300">
                          <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-800 flex items-center gap-4">
                  <button
                    id={`wishlist-modal-addcart-${selectedProduct.id}`}
                    onClick={() => {
                      onAddToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 py-3.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs tracking-widest rounded-md uppercase transition-all duration-300 cursor-pointer text-center focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  >
                    ADD TO CART
                  </button>
                  <button
                    id="wishlist-modal-close-btn"
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 py-3.5 bg-neutral-950 border border-neutral-800 hover:bg-neutral-850 text-neutral-300 text-xs tracking-wider rounded uppercase transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  >
                    Close
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

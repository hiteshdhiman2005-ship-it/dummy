import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlidersHorizontal, Eye, ShoppingCart, Check, Info, ShieldAlert, Award, Compass, Zap, Heart } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Product } from '../types';
import { PRODUCTS } from '../data';

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

interface ProductsProps {
  onAddToCart: (product: Product) => void;
  selectedCategory: 'All' | 'Luxury' | 'Sports' | 'Smart' | 'Classic';
  setSelectedCategory: (category: 'All' | 'Luxury' | 'Sports' | 'Smart' | 'Classic') => void;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
}

export default function Products({
  onAddToCart,
  selectedCategory,
  setSelectedCategory,
  wishlist,
  onToggleWishlist,
}: ProductsProps) {
  // SEO Configuration for Horology Services and Curation
  useSEO({
    title: 'Fossil, Fastrack & Rolex Watches for Men | PrestigeTime Collection',
    description: 'Shop our premium catalog of Fossil watches for men, reliable Fastrack watches for men, and classic luxury Rolex watches for men. Browse our professional horology curation.',
    keywords: [
      'fossil watches for men',
      'fastrack watches for men',
      'rolex watches for men',
      'sport watches',
      'smart watches',
      'classic watches',
      'timepieces'
    ],
  });

  const [sortedProducts, setSortedProducts] = useState<Product[]>(PRODUCTS);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: ('All' | 'Luxury' | 'Sports' | 'Smart' | 'Classic')[] = [
    'All',
    'Luxury',
    'Sports',
    'Smart',
    'Classic',
  ];

  const specHighlights = [
    { title: 'Automatic & Quartz Movements', desc: 'Precision Swiss calibrated self-winding and high HZ battery-cell mechanisms.' },
    { title: 'Water Resistant Designs', desc: 'Securely sealed gaskets certified up to 200m (20 ATM) depth tolerances.' },
    { title: 'Scratch Resistant Sapphire Glass', desc: 'Double-domed sapphire crystal screens with high durable hardness scales.' },
    { title: 'Premium Straps', desc: 'Interchangeable straps crafted in full-grain Italian leather and 316L solid stainless steel steel.' },
    { title: 'International Warranty', desc: 'Every model carries our global, transferrable 5-year warranty package.' }
  ];

  // Filter and sort side effects
  useEffect(() => {
    let result = [...PRODUCTS];

    // Filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // "featured" sort (defaults to true values first)
      result.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
    }

    setSortedProducts(result);
  }, [selectedCategory, sortBy]);

  return (
    <div id="products-page-container" className="bg-neutral-900 text-neutral-100 font-sans min-h-screen">
      
      {/* Page Header banner */}
      <section className="relative py-20 bg-neutral-950 border-b border-neutral-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=75&w=1200"
            srcSet="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=70&w=640 640w,
                    https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=75&w=1200 1200w"
            sizes="100vw"
            fetchPriority="high"
            alt="Macro watch dial mechanics background"
            className="w-full h-full object-cover object-center scale-105 filter blur-xs"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/80 to-neutral-950" />
        
        <div className="relative text-center z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-black tracking-wide text-white mb-3">
            OUR <span className="text-amber-500">SERVICES & COLLECTION</span>
          </h1>
          <div className="h-0.5 w-16 bg-amber-500 mx-auto rounded" />
          <p className="mt-4 text-neutral-400 text-sm sm:text-base font-light tracking-wide uppercase">
            Meticulously constructed mechanical & digital movements
          </p>
        </div>
      </section>

      {/* Main Catalog View Container */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls: Filters & Sorting */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-neutral-800 pb-8 mb-12">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none" role="tablist" aria-label="Product categories">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  id={`cat-filter-${cat.toLowerCase()}`}
                  key={cat}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                    isSelected
                      ? 'bg-amber-500 text-neutral-950 border-amber-500 font-bold shadow-lg shadow-amber-500/10'
                      : 'bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700'
                  }`}
                >
                  {cat === 'All' ? 'All Watches' : `${cat} Series`}
                </button>
              );
            })}
          </div>

          {/* Sort selection dropdown */}
          <div className="flex items-center space-x-3 shrink-0 self-start md:self-auto">
            <SlidersHorizontal className="h-4 w-4 text-amber-500" aria-hidden="true" />
            <label htmlFor="product-sort-select" className="text-xs text-neutral-300 font-medium cursor-pointer">Sort By:</label>
            <select
              id="product-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-neutral-950 border border-neutral-800 text-xs text-neutral-200 py-2.5 px-4 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 outline-none cursor-pointer"
              aria-label="Sort watches list"
            >
              <option value="featured">Default (Featured first)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
          </div>

        </div>

        {/* Watch Catalog grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((p, idx) => {
              const isWishlisted = wishlist.includes(p.id);
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(idx, 3) * 0.02 }}
                  className="group bg-neutral-950 border border-neutral-800/80 rounded-xl overflow-hidden titan-card-glow flex flex-col h-full select-none"
                >
                  {/* Watch Card Image Wrapper */}
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

                    {p.featured && (
                      <span className="absolute top-4 right-14 bg-amber-500 text-neutral-950 font-sans text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded">
                        Featured
                      </span>
                    )}

                    {/* ALWAYS VISIBLE ACCESSIBLE HEART BUTTON (Top-Right) */}
                    <button
                      id={`product-wishlist-toggle-${p.id}`}
                      onClick={() => onToggleWishlist(p.id)}
                      className={`absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 cursor-pointer border ${
                        isWishlisted
                          ? 'bg-red-500/20 border-red-500/50 text-red-500 hover:bg-red-500/30'
                          : 'bg-neutral-950/80 border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-900'
                      }`}
                      aria-label={isWishlisted ? `Remove ${p.name} from Wishlist` : `Add ${p.name} to Wishlist`}
                      title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                    >
                      <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>

                    {/* Actions overlay buttons on hover */}
                    <div className="absolute inset-0 bg-neutral-950/45 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                      <button
                        id={`quickview-btn-${p.id}`}
                        onClick={() => setSelectedProduct(p)}
                        className="p-3 bg-white hover:bg-neutral-100 text-neutral-950 rounded-full transition-transform hover:scale-110 cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        aria-label={`Quick View Specifications for ${p.name}`}
                        title="Quick View Specifications"
                      >
                        <Eye className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <button
                        id={`addcart-overlay-btn-${p.id}`}
                        onClick={() => onAddToCart(p)}
                        className="p-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 rounded-full transition-transform hover:scale-110 cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-950"
                        aria-label={`Add ${p.name} to Cart`}
                        title="Add to Cart"
                      >
                        <ShoppingCart className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  {/* Watch Card Bottom Details */}
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
                        id={`detail-text-btn-${p.id}`}
                        onClick={() => setSelectedProduct(p)}
                        className="text-[10px] sm:text-xs text-neutral-300 hover:text-amber-400 font-bold tracking-widest uppercase transition-colors flex items-center space-x-1 cursor-pointer focus:outline-none focus:underline"
                      >
                        <Info className="h-4 w-4 mr-1 text-amber-500/90" aria-hidden="true" />
                        <span>Specifications</span>
                      </button>

                      <button
                        id={`addcart-txt-btn-${p.id}`}
                        onClick={() => onAddToCart(p)}
                        className="px-4 py-2 bg-neutral-900 hover:bg-amber-500 hover:text-neutral-950 border border-neutral-800 text-neutral-200 text-[10px] sm:text-xs font-bold tracking-wider rounded uppercase transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>

              </motion.div>
            ); })}
          </div>
        ) : (
          <div className="py-20 text-center text-neutral-400 border border-dashed border-neutral-800 rounded-xl">
            <p>No timepieces found matching your filters.</p>
          </div>
        )}

      </section>

      {/* 3. Product Features highlights catalog segment */}
      <section className="py-20 bg-neutral-950 border-t border-b border-neutral-805">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500 font-bold">Uncompromising Quality Controls</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-white mt-1.5">
              Product Features & Quality Standards
            </h2>
            <div className="h-0.5 w-16 bg-amber-500 mx-auto rounded mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {specHighlights.map((hl, idx) => (
              <div
                key={hl.title}
                className="p-5 rounded-lg bg-neutral-900/60 border border-neutral-850 hover:bg-neutral-900 transition-all text-center flex flex-col items-center"
              >
                {/* Visual marker */}
                <div className="bg-amber-500/10 p-3 rounded-full mb-4">
                  <Check className="h-5 w-5 text-amber-400" aria-hidden="true" />
                </div>
                <h4 className="font-semibold text-white text-xs tracking-wide mb-2">
                  {hl.title}
                </h4>
                <p className="text-neutral-300 text-[11px] leading-relaxed font-light">
                  {hl.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Elegant SEO text section for keyword density */}
          <div className="mt-16 pt-12 border-t border-neutral-800/60 max-w-4xl mx-auto text-center space-y-4">
            <span className="text-[10px] tracking-widest text-amber-500 uppercase font-mono font-bold">
              Premium Horological Brand Selection
            </span>
            <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
              Our curated boutique directory includes detailed style references for iconic brands. Whether you are seeking robust, trend-forward <span className="text-white font-medium">Fossil watches for men</span> for weekend wear, highly energetic and durable <span className="text-white font-medium">Fastrack watches for men</span> for active lifestyles, or investments in time-tested masterpieces like vintage <span className="text-white font-medium">Rolex watches for men</span>, PrestigeTime provides the catalog and guidance to make an informed, timeless selection.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Quick View Specification detail Modal overlay Overlay block */}
      <AnimatePresence>
        {selectedProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            id="product-detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-product-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xs"
            />

            {/* Modal Body card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-25 grid grid-cols-1 md:grid-cols-12"
            >
              <button
                id="modal-close-btn"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors cursor-pointer z-30 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Close details"
              >
                ✕
              </button>

              {/* Left visual column */}
              <div className="col-span-12 md:col-span-5 bg-neutral-950 border-b md:border-b-0 md:border-r border-neutral-800 h-96 md:h-auto min-h-[300px]">
                <img
                  src={selectedProduct.image}
                  loading="lazy"
                  decoding="async"
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover filter brightness-[0.95]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right descriptions specifications column */}
              <div className="col-span-12 md:col-span-7 p-8 space-y-6 flex flex-col justify-between">
                
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-amber-400 font-bold bg-amber-500/10 px-2 py-1 rounded">
                      {selectedProduct.category} COLLECTION
                    </span>
                    <h2 id="modal-product-title" className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2 leading-tight">
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
                    id={`modal-addcart-btn-${selectedProduct.id}`}
                    onClick={() => {
                      onAddToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 py-3.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs tracking-widest rounded-md uppercase transition-all duration-300 cursor-pointer text-center focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  >
                    ADD TO CART
                  </button>
                  <button
                    id="modal-keepbrowse-btn"
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 py-3.5 bg-neutral-950 border border-neutral-800 hover:bg-neutral-850 text-neutral-350 text-xs tracking-wider rounded uppercase transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50"
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

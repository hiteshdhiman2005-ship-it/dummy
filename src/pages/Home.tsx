import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Shield, Sparkles, Award, Truck, ShieldCheck, Star, ArrowRight, Gem, Settings, Sliders, Check, ChevronDown, BookOpen, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { REVIEWS } from '../reviews';
import HomeHero from './HomeHero';

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

function DeferredSection({
  children,
  minHeight = '60vh',
}: {
  children: () => ReactNode;
  minHeight?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!('IntersectionObserver' in window)) {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} style={isNearViewport ? undefined : { minHeight }}>
      {isNearViewport ? children() : null}
    </div>
  );
}

interface HomeProps {
  setSelectedCategory: (category: 'All' | 'Luxury' | 'Sports' | 'Smart' | 'Classic') => void;
}

export default function Home({ setSelectedCategory }: HomeProps) {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Interactive Live Customizer States
  const [selectedCase, setSelectedCase] = useState<'Gold' | 'Titanium' | 'Steel' | 'Obsidian'>('Gold');
  const [selectedDial, setSelectedDial] = useState<'Emerald' | 'Sapphire' | 'Alabaster' | 'Onyx'>('Emerald');
  const [selectedStrap, setSelectedStrap] = useState<'Cognac' | 'Gilded' | 'BlackRubber' | 'SteelLoop'>('Cognac');
  const [isConfigAdded, setIsConfigAdded] = useState(false);

  // Dynamic SEO Configuration using high-volume, low-difficulty keywords requested by user
  useSEO({
    title: 'Watches for Men | Independent Watchmaking Brands & Custom Automatic Watches',
    description: 'Shop premium watches for men, featuring independent watchmaking brands and custom automatic watches. Explore stylish, durable, and precise timepieces crafted for collectors.',
    keywords: [
      'watches for men',
      'independent watchmaking brands',
      'custom automatic watches',
      'luxury brand comparison',
      'affordable Swiss automatic watches',
      'buy watches online store',
      'authentic luxury watches'
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Store',
        'name': 'PrestigeTime',
        'url': typeof window !== 'undefined' ? window.location.origin : 'https://prestigetime.com',
        'image': 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=600',
        'description': 'Shop premium watches for men, featuring independent watchmaking brands and custom automatic watches. Explore stylish, durable, and precise timepieces crafted for collectors.',
        'priceRange': '$$$',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'PrestigeTime Headquarters, 5th Avenue',
          'addressLocality': 'New York City',
          'addressRegion': 'NY',
          'postalCode': '10001',
          'addressCountry': 'US'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What are the best entry level luxury watches for new collectors?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'When launching your collection, the best entry level luxury watches combine reliable movements, premium materials, and brand heritage. Options like the Prestige Elite series offer classic dress Watch aesthetics, scratch-resistant sapphire crystal surfaces, and robust calibers that serve as the ideal foundational piece for any growing collection without requiring a master collector\'s budget.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Are automatic watches worth it in terms of longevity?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Absolutely. When asking are automatic watches worth it, consider that unlike battery-powered quartz models, an automatic caliber runs on kinetic energy from your natural wrist movements. Crafted with precision jewels and complex gears, a mechanical or automatic watch can literally outlast generations when properly cared for, preserving historical value.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I find high-quality, affordable Swiss automatic watches?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'To secure real affordable Swiss automatic watches, look for key watchmaker signatures such as a genuine mechanical caliber, rich water-resistance, and polished synthetic sapphire glass. By purchasing directly from boutique designers, you bypass middleman markups while keeping structural perfection.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Why should I consider the best watch microbrands over heritage giants?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The best watch microbrands offer high-end specifications (such as premium custom straps, customized dials, and rare stainless steel cases) directly to collectors. By scaling down marketing budgets and bypassing retail markup, these smaller studios deliver exquisite, limited-run color customized watches that stand out.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What are the most essential mechanical watch maintenance tips (and how to clean keys at home)?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'To keep your watch performing flawlessly, follow these mechanical watch maintenance tips: wind your crown manually once a month if not worn, keep it clear of magnetic fields (laptops, electronic systems), and store in dry cases. To clean a mechanical watch at home, wipe down cases gently with a damp microfiber cloth, use soft-bristled utility brushes on linked straps, and strictly ensure your crown is locked down tight.'
            }
          }
        ]
      },
      {
        '@context': 'https://schema.org/',
        '@type': 'Product',
        'name': 'watches',
        'image': '',
        'description': 'Elevate your wrist game with PrestigeTime’s [Model Name]. Crafted with attention to detail and premium materials, this watch delivers a seamless blend of classic style and modern accuracy. The perfect statement piece for any collection.',
        'brand': {
          '@type': 'Brand',
          'name': 'PrestigeTime'
        },
        'review': {
          '@type': 'Review',
          'name': 'Timeless design, excellent quality',
          'reviewBody': 'The craftsmanship of this PrestigeTime watch is truly impressive. It feels substantial on the wrist, and the aesthetic fits perfectly in both my professional and casual wardrobe. Highly recommended for anyone looking for quality.',
          'datePublished': '2026-05-05',
          'author': { '@type': 'Person', 'name': 'Taylor M' },
          'publisher': { '@type': 'Organization', 'name': 'PrestigeTime' }
        }
      }
    ]
  });

  const categories = [
    {
      title: 'Luxury Watches',
      slug: 'Luxury' as const,
      desc: 'Premium watches designed for professionals and collectors.',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Sports Watches',
      slug: 'Sports' as const,
      desc: 'Built for adventure, durability, and performance.',
      image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Smart Watches',
      slug: 'Smart' as const,
      desc: 'Modern technology combined with elegant design.',
      image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Classic Watches',
      slug: 'Classic' as const,
      desc: 'Timeless designs that never go out of fashion.',
      image: 'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&q=80&w=600',
    }
  ];

  const lifestyleGallery = [
    {
      title: 'Luxury watch for evening wear',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=900',
      alt: 'Luxury men’s watch with leather strap for formal evening wear',
    },
    {
      title: 'Sport watch for daily performance',
      image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=900',
      alt: 'Men’s sports watch for active daily performance and travel',
    },
    {
      title: 'Minimal timepiece for business style',
      image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&q=80&w=900',
      alt: 'Minimal luxury watch for men with a refined business look',
    },
    {
      title: 'Classic automatic watch close-up',
      image: 'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&q=80&w=900',
      alt: 'Classic automatic watch close-up showing premium craftsmanship',
    },
    {
      title: 'Luxury wristwear with metallic finish',
      image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&q=80&w=900',
      alt: 'Luxury men’s wristwatch with metallic case and premium bracelet',
    },
    {
      title: 'Luxury watch with refined modern styling',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=900',
      alt: 'Luxury wristwatch for men with a refined modern design',
    },
  ];

  const valueProps = [
    {
      title: 'Premium Quality Materials',
      desc: 'We select marine-grade steel, fine gold alloys, and aerospace titanium paired with double-domed sapphire.',
      icon: <Gem className="h-6 w-6 text-amber-500" />,
    },
    {
      title: 'International Warranty',
      desc: 'Sleep easy knowing your luxury timepiece is backed by a worldwide, comprehensive 5-year guarantee.',
      icon: <Award className="h-6 w-6 text-amber-500" />,
    },
    {
      title: 'Secure Online Shopping',
      desc: 'Your transaction is guarded by military-grade 256-bit SSL encryption and robust checkout routing.',
      icon: <ShieldCheck className="h-6 w-6 text-amber-500" />,
    },
    {
      title: 'Fast Worldwide Shipping',
      desc: 'Insured parcel delivery straight to your doorstep, custom-wrapped in double-padded mahogany gift boxes.',
      icon: <Truck className="h-6 w-6 text-amber-500" />,
    },
    {
      title: 'Trusted by Thousands',
      desc: 'With over 10,000 positive reviews, our history of precision and support remains absolutely verified.',
      icon: <Star className="h-6 w-6 text-amber-500" />,
    }
  ];

  const handleCategoryClick = (category: 'Luxury' | 'Sports' | 'Smart' | 'Classic') => {
    setSelectedCategory(category);
    navigate('/services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-page-container" className="bg-neutral-900 text-neutral-100 font-sans min-h-screen">
      <HomeHero setSelectedCategory={setSelectedCategory} />

      {/* 2. Featured Categories */}
      <DeferredSection minHeight="70vh">
      {() => (
      <section className="py-20 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-white mb-4">
              Featured Collections
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded mb-4" />
            <p className="text-neutral-400 text-sm sm:text-base">
              Explore our curated lines built individually for collectors, active dynamic training, smart convenience, and traditional styles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.slug}
                className="group relative h-96 rounded-xl overflow-hidden cursor-pointer shadow-2xl border border-neutral-800/80 bg-neutral-900 flex flex-col justify-end"
                onClick={() => handleCategoryClick(cat.slug)}
              >
                <div className="absolute inset-0">
                  <img
                    src={getOptimizedUnsplashUrl(cat.image, 400)}
                    srcSet={`${getOptimizedUnsplashUrl(cat.image, 300)} 300w, ${getOptimizedUnsplashUrl(cat.image, 500)} 500w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                    decoding="async"
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.4] group-hover:brightness-[0.45]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                
                <div className="relative p-6 z-10 space-y-2">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                    {cat.title} for Men
                  </h3>
                  <p className="text-neutral-300 text-xs font-light line-clamp-2">
                    {cat.desc}
                  </p>
                  <div className="pt-2 flex items-center space-x-1.5 text-xs text-amber-500 font-bold uppercase tracking-wider group-hover:text-amber-400">
                    <span>Explore</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
      </DeferredSection>

      <DeferredSection minHeight="50vh">
      {() => (
      <section className="py-20 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-amber-500 font-bold">Watch Story</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-white mt-4 mb-3">
              Crafted for every moment
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded mb-4" />
            <p className="text-neutral-400 text-sm sm:text-base">
              Discover premium watch styling inspiration for formal occasions, performance days, and modern everyday wear.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifestyleGallery.map((item) => (
              <figure key={item.title} className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={getOptimizedUnsplashUrl(item.image, 900, 78)}
                    alt={item.alt}
                    width={900}
                    height={1125}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="border-t border-neutral-800 bg-neutral-950/80 px-4 py-4 text-sm font-medium text-neutral-200">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      )}
      </DeferredSection>

      {/* 3. Why Choose PrestigeTime */}
      <DeferredSection>
      {() => (
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column Left (Intro) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest text-amber-500 font-bold border-l-2 border-amber-500 pl-3">
                Uncompromising Values
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Why Choose Us
              </h2>
              <div className="h-0.5 w-16 bg-amber-500 rounded" />
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                Every timepiece in our collections—from independent watchmaking brands to custom automatic watches—represents an investment in meticulous calibration. We hand-select premium watch designers globally to provide an unparalleled ownership experience.
              </p>
              <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-5 text-sm text-neutral-300">
                <div className="text-center">
                  <span className="font-serif text-3xl font-bold text-amber-400 block mb-0.5">PT-100</span>
                  <span className="text-xs uppercase tracking-wider text-neutral-300 font-medium">Calibrated Movement</span>
                </div>
              </div>
            </div>

            {/* Column Right (Value points grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valueProps.map((value) => (
                <div
                  key={value.title}
                  className="p-5 rounded-lg bg-neutral-950/40 border border-neutral-800/80 hover:bg-neutral-950/80 hover:border-amber-500/20 transition-all duration-300"
                >
                  <div className="p-2 w-fit bg-neutral-800 rounded-lg mb-3">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-white text-sm tracking-wide mb-1.5 flex items-center">
                    <span className="text-amber-500 mr-2">✔</span>
                    {value.title}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed font-light">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      )}
      </DeferredSection>

      {/* 4. Active Watch Customizer - Independent Custom Studio */}
      <DeferredSection minHeight="80vh">
      {() => (
      <section className="py-20 bg-neutral-810 border-t border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-amber-600 bg-amber-500/10 px-3.5 py-1.5 rounded-full inline-block">
              Interactive Showroom
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-wide text-white mt-4 mb-3">
              Bespoke Studio
            </h2>
            <div className="h-0.5 w-16 bg-amber-500 mx-auto rounded mb-4" />
            <p className="text-neutral-400 text-xs sm:text-sm font-light uppercase tracking-widest">
              Design & Configure Your Masterpiece Custom Automatic Watch or Independent Watchmaking Brand Piece
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-950/20 p-6 sm:p-10 rounded-2xl border border-neutral-800/60 shadow-inner">
            
            {/* Live Watch Rendering Board (Left 5 columns) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-sapphire-900/95 rounded-xl border border-sapphire-500/30 relative min-h-[450px] overflow-hidden shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(247,245,238,0.05),transparent_60%)] pointer-events-none" />
              
              {/* Outer dial platform ring shadow */}
              <div className="absolute w-72 h-72 rounded-full border border-neutral-800/15 animate-ping opacity-5" />
              
              {/* Live Styled Watch Case */}
              <div className="relative flex flex-col items-center select-none z-10 scale-90 sm:scale-100">
                
                {/* Upper Strap segment */}
                <div 
                  className={`w-14 h-24 rounded-t-lg shadow-inner transition-all duration-500 ${
                    selectedStrap === 'Cognac' ? 'bg-amber-800 border-x-4 border-amber-900' :
                    selectedStrap === 'Gilded' ? 'bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 border-x-2 border-amber-700' :
                    selectedStrap === 'BlackRubber' ? 'bg-neutral-800 border-x-4 border-neutral-900' :
                    'bg-gradient-to-r from-neutral-400 via-neutral-300 to-neutral-400 border-x-2 border-neutral-500'
                  }`}
                />

                {/* Main Dial Bezel Group */}
                <div 
                  className={`w-52 h-52 rounded-full absolute top-[10px] z-20 flex items-center justify-center transition-all duration-500 shadow-2xl ${
                    selectedCase === 'Gold' ? 'border-[6px] border-amber-400 bg-amber-500/10 ring-2 ring-amber-300/30' :
                    selectedCase === 'Titanium' ? 'border-[6px] border-neutral-500 bg-neutral-600/10 ring-2 ring-neutral-400/20' :
                    selectedCase === 'Steel' ? 'border-[6px] border-neutral-300 bg-neutral-400/10 ring-2 ring-neutral-200/20' :
                    'border-[6px] border-neutral-800 bg-neutral-900/10 ring-2 ring-neutral-700/30'
                  }`}
                >
                  
                  {/* Outer Bezel Ticks */}
                  <div className="absolute inset-1 rounded-full border border-dashed border-neutral-500/30 flex items-center justify-center">
                    
                    {/* Dial Face Body */}
                    <div 
                      className={`w-[172px] h-[172px] rounded-full relative flex items-center justify-center shadow-inner transition-all duration-500 ${
                        selectedDial === 'Emerald' ? 'bg-gradient-to-tr from-emerald-950 via-teal-900 to-emerald-900' :
                        selectedDial === 'Sapphire' ? 'bg-gradient-to-tr from-sapphire-900 via-sapphire-500 to-[#2c4c6f]' :
                        selectedDial === 'Alabaster' ? 'bg-gradient-to-tr from-amber-50 via-amber-50 to-neutral-200/60' :
                        'bg-gradient-to-tr from-neutral-950 via-neutral-900 to-neutral-950'
                      }`}
                    >
                      
                      {/* Brand Logo & Watch Markings */}
                      <div className="absolute top-[32px] text-center">
                        <span className={`text-[8px] font-semibold tracking-[0.25em] uppercase pointer-events-none block ${
                          selectedDial === 'Alabaster' ? 'text-neutral-800/80' : 'text-amber-400/80'
                        }`}>CUSTOM</span>
                        <span className={`text-[5px] tracking-widest font-mono pointer-events-none ${
                          selectedDial === 'Alabaster' ? 'text-neutral-500' : 'text-neutral-400/70'
                        }`}>CHRONO</span>
                      </div>

                      {/* Chronograph Mini Dial */}
                      <div className={`absolute bottom-[36px] w-[34px] h-[34px] rounded-full border flex items-center justify-center ${
                        selectedDial === 'Alabaster' ? 'border-neutral-300' : 'border-amber-500/20'
                      }`}>
                        <div className={`w-[22px] h-[22px] rounded-full border border-dotted ${
                          selectedDial === 'Alabaster' ? 'border-neutral-400' : 'border-amber-500/10'
                        }`} />
                        {/* Mini Dial Hand */}
                        <div className={`absolute bottom-[17px] w-[1px] h-[10px] transform origin-bottom rotate-45 ${
                          selectedDial === 'Alabaster' ? 'bg-neutral-800' : 'bg-amber-400'
                        }`} />
                      </div>

                      {/* Roman Numerals Hour Indicators */}
                      <span className={`absolute top-2 text-[10px] font-sans font-medium ${selectedDial === 'Alabaster' ? 'text-neutral-900' : 'text-amber-400'}`}>XII</span>
                      <span className={`absolute right-2.5 text-[10px] font-sans font-medium ${selectedDial === 'Alabaster' ? 'text-neutral-900' : 'text-amber-400'}`}>III</span>
                      <span className={`absolute bottom-2 text-[10px] font-sans font-medium ${selectedDial === 'Alabaster' ? 'text-neutral-900' : 'text-amber-400'}`}>VI</span>
                      <span className={`absolute left-2.5 text-[10px] font-sans font-medium ${selectedDial === 'Alabaster' ? 'text-neutral-900' : 'text-amber-400'}`}>IX</span>

                      {/* Gold Hour Tick Accents */}
                      <div className={`absolute top-[22px] left-[45px] w-1.5 h-1.5 rounded-full ${selectedDial === 'Alabaster' ? 'bg-neutral-600/30' : 'bg-amber-400/20'}`} />
                      <div className={`absolute top-[22px] right-[45px] w-1.5 h-1.5 rounded-full ${selectedDial === 'Alabaster' ? 'bg-neutral-600/30' : 'bg-amber-400/20'}`} />
                      <div className={`absolute bottom-[22px] left-[45px] w-1.5 h-1.5 rounded-full ${selectedDial === 'Alabaster' ? 'bg-neutral-600/30' : 'bg-amber-400/20'}`} />
                      <div className={`absolute bottom-[22px] right-[45px] w-1.5 h-1.5 rounded-full ${selectedDial === 'Alabaster' ? 'bg-neutral-600/30' : 'bg-amber-400/20'}`} />

                      {/* Watch Hands - Rigorous 10:10 Photoshoot Layout */}
                      {/* Hour Hand */}
                      <div className="absolute w-[2px] h-[34px] transform origin-bottom -rotate-[115deg] bottom-[86px] rounded-full shadow-md z-30 transition-transform">
                        <div className={`w-full h-full rounded ${selectedDial === 'Alabaster' ? 'bg-neutral-800' : 'bg-amber-400'}`} />
                      </div>

                      {/* Minute Hand */}
                      <div className="absolute w-[1.5px] h-[48px] transform origin-bottom rotate-[58deg] bottom-[86px] rounded-full shadow-md z-30 transition-transform">
                        <div className={`w-full h-full rounded ${selectedDial === 'Alabaster' ? 'bg-neutral-800' : 'bg-amber-300'}`} />
                      </div>

                      {/* Fine Sweep Second Hand */}
                      <div className="absolute w-[1px] h-[58px] transform origin-bottom rotate-[142deg] bottom-[86px] z-40 transition-transform">
                        <div className={`w-full h-full rounded ${selectedDial === 'Alabaster' ? 'bg-red-600' : 'bg-amber-200'}`} />
                      </div>

                      {/* Center Pin Jewel */}
                      <div className={`absolute w-[7px] h-[7px] rounded-full z-50 border outline outline-offset-1 transition-all ${
                        selectedDial === 'Alabaster' ? 'bg-neutral-900 border-neutral-400 outline-neutral-300' : 'bg-amber-400 border-amber-600 outline-amber-500/40'
                      }`} />
                    </div>
                  </div>
                </div>

                {/* Lower Strap segment */}
                <div 
                  className={`w-14 h-24 rounded-b-lg shadow-inner mt-[158px] transition-all duration-500 ${
                    selectedStrap === 'Cognac' ? 'bg-amber-800 border-x-4 border-amber-900' :
                    selectedStrap === 'Gilded' ? 'bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 border-x-2 border-amber-700' :
                    selectedStrap === 'BlackRubber' ? 'bg-neutral-800 border-x-4 border-neutral-900' :
                    'bg-gradient-to-r from-neutral-400 via-neutral-300 to-neutral-400 border-x-2 border-neutral-500'
                  }`}
                />

              </div>

              {/* Dynamic Status Badges */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[10px] font-mono text-neutral-400 font-light border-t border-neutral-800/60 pt-3">
                <span>MODEL: REGAL-X</span>
                <span className="text-amber-500 uppercase font-semibold">100% Calibrated</span>
                <span>SWISS CALIBRE</span>
              </div>
            </div>

            {/* Customizer Slider Control Dashboard (Right 7 columns) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-semibold tracking-wider text-amber-500/80 uppercase block mb-1">
                  PRESTIGE BESPOKE SYSTEM
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-black tracking-wide text-white">
                  Refine Every Precision Part
                </h3>
                <p className="mt-2 text-neutral-400 text-xs sm:text-sm font-light">
                  Tailor the core materials of our master-crafted timepiece. Feel the prestige of Swiss-level physical aesthetics matched with independent craftsmanship and custom automatic movement design.
                </p>
              </div>

              {/* Step 1: Case Options */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-neutral-300">
                  <span>1. Case Material & Metal</span>
                  <span className="text-amber-500 font-mono text-[10px]">Active: {selectedCase}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'Gold', label: 'Burnished Gold', desc: 'Satin gold plated 18K', borderClass: 'border-amber-500/30 hover:border-amber-500', color: 'bg-amber-500' },
                    { id: 'Titanium', label: 'Brushed Titanium', desc: 'Ultra lightweight Grade 5', borderClass: 'border-neutral-500/30 hover:border-neutral-500', color: 'bg-neutral-500' },
                    { id: 'Steel', label: 'Polished Steel', desc: 'Marine grade 316L', borderClass: 'border-neutral-300/30 hover:border-neutral-300', color: 'bg-neutral-300' },
                    { id: 'Obsidian', label: 'Obsidian Onyx', desc: 'Diamond-like DLC', borderClass: 'border-neutral-800/30 hover:border-neutral-700', color: 'bg-neutral-800' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => { setSelectedCase(opt.id as any); setIsConfigAdded(false); }}
                      className={`text-left p-3.5 rounded-lg border text-xs transition-all relative ${
                        selectedCase === opt.id 
                          ? 'border-amber-500 bg-amber-500/5 shadow-md shadow-amber-500/5' 
                          : 'border-neutral-800 hover:bg-neutral-900/40 bg-neutral-950/20'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1.5">
                        <div className={`w-3 h-3 rounded-full ${opt.color}`} />
                        <span className="font-semibold text-white truncate">{opt.label}</span>
                      </div>
                      <p className="text-[10px] text-neutral-400 leading-tight block">{opt.desc}</p>
                      {selectedCase === opt.id && (
                        <Check className="h-3.5 w-3.5 text-amber-500 absolute top-2 right-2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Dial Embellishments */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-neutral-300">
                  <span>2. Dial Face & Hand Accent</span>
                  <span className="text-amber-500 font-mono text-[10px]">Active: {selectedDial}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'Emerald', label: 'Regal Emerald', desc: 'Prestige forest green sunburst', borderClass: 'border-emerald-500', color: 'bg-emerald-950' },
                    { id: 'Sapphire', label: 'Deep Sapphire', desc: 'Rich midnight Prussian blue', borderClass: 'border-sapphire-500', color: 'bg-sapphire-500' },
                    { id: 'Alabaster', label: 'Pearl Alabaster', desc: 'Textured luxury ivory white', borderClass: 'border-neutral-200', color: 'bg-amber-50/50' },
                    { id: 'Onyx', label: 'Obsidian Onyx', desc: 'Gloss solid stardust black', borderClass: 'border-neutral-900', color: 'bg-neutral-950' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => { setSelectedDial(opt.id as any); setIsConfigAdded(false); }}
                      className={`text-left p-3.5 rounded-lg border text-xs transition-all relative ${
                        selectedDial === opt.id 
                          ? 'border-amber-400 bg-amber-400/5 shadow-md shadow-amber-400/5' 
                          : 'border-neutral-800 hover:bg-neutral-900/40 bg-neutral-950/20'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1.5">
                        <div className={`w-3 h-3 rounded-full border border-neutral-700 ${opt.color}`} />
                        <span className="font-semibold text-white truncate">{opt.label}</span>
                      </div>
                      <p className="text-[10px] text-neutral-400 leading-tight block">{opt.desc}</p>
                      {selectedDial === opt.id && (
                        <Check className="h-3.5 w-3.5 text-amber-400 absolute top-2 right-2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Strap Selection */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-neutral-300">
                  <span>3. Luxury Strap & Metal Link</span>
                  <span className="text-amber-500 font-mono text-[10px]">Active: {selectedStrap}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'Cognac', label: 'Cognac Leather', desc: 'Full grain Italian hand stitched', color: 'bg-amber-800' },
                    { id: 'Gilded', label: 'Gilded Links', desc: '18K Gold presidential link', color: 'bg-amber-400' },
                    { id: 'BlackRubber', label: 'Sporty Rubber', desc: 'Reinforced custom weather-safe', color: 'bg-neutral-900' },
                    { id: 'SteelLoop', label: 'Oyster Loop', desc: 'Interlinked stainless chainmesh', color: 'bg-neutral-300' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => { setSelectedStrap(opt.id as any); setIsConfigAdded(false); }}
                      className={`text-left p-3.5 rounded-lg border text-xs transition-all relative ${
                        selectedStrap === opt.id 
                          ? 'border-amber-500 bg-amber-500/5 shadow-md shadow-amber-500/5' 
                          : 'border-neutral-800 hover:bg-neutral-900/40 bg-neutral-950/20'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1.5">
                        <div className={`w-3 h-3 rounded-full ${opt.color}`} />
                        <span className="font-semibold text-white truncate">{opt.label}</span>
                      </div>
                      <p className="text-[10px] text-neutral-400 leading-tight block">{opt.desc}</p>
                      {selectedStrap === opt.id && (
                        <Check className="h-3.5 w-3.5 text-amber-500 absolute top-2 right-2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Quick Summary */}
              <div className="bg-neutral-950/30 p-5 rounded-xl border border-neutral-800 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-450 font-bold">Estimated Cost</div>
                  <div className="flex items-baseline space-x-2 mt-1">
                    <span className="text-xl sm:text-2xl font-serif font-black text-amber-500">$4,850</span>
                    <span className="text-[9px] text-neutral-500 uppercase tracking-widest">including gold upgrades</span>
                  </div>
                </div>
                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2">
                  <button
                    id="save-studio-config-btn"
                    onClick={() => {
                      setIsConfigAdded(true);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`px-6 py-3.5 text-xs font-bold tracking-widest uppercase rounded cursor-pointer transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isConfigAdded 
                        ? 'bg-emerald-600 text-white hover:bg-emerald-500' 
                        : 'bg-amber-400 hover:bg-amber-300 text-neutral-950'
                    }`}
                  >
                    {isConfigAdded ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span>CONFIG SAVED!</span>
                      </>
                    ) : (
                      <>
                        <Settings className="h-4 w-4 animate-spin-slow text-neutral-950" />
                        <span>SAVE CONFIGURATION</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      )}
      </DeferredSection>

      {/* 5. Customer Reviews */}
      <DeferredSection>
      {() => (
      <section className="py-20 bg-neutral-950 border-t border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-white mb-2">
              Reviews
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-neutral-900 border border-neutral-800/85 p-6 rounded-xl flex flex-col justify-between text-left h-full"
              >
                <div>
                  <div className="flex items-center space-x-1.5 text-amber-400 mb-3.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-neutral-600" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2 font-mono">
                    {review.date}
                  </span>
                  <p className="text-neutral-300 text-xs italic font-serif leading-relaxed mb-4">
                    "{review.comment}"
                  </p>
                </div>
                
                <div className="border-t border-neutral-800 pt-3 flex items-center justify-between">
                  <div>
                    <span className="text-white text-xs font-semibold block">{review.name}</span>
                    <span className="text-amber-500 text-[10px] font-mono">Verified Buyer</span>
                  </div>
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" title="Purchase Confirmed" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
      </DeferredSection>

      {/* SEO Knowledge Hub: Interactive Buyer's Guide & FAQs targeting high-volume / low-difficulty keywords */}
      <DeferredSection>
      {() => (
      <section className="py-24 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-[0.24em] text-blue-400 font-semibold block mb-2">
              Horology Education Hub
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-white mb-4">
              Buyer’s Guide
            </h2>
            <div className="h-0.5 w-16 bg-blue-500 mx-auto rounded mb-4" />
            <p className="text-neutral-400 text-sm max-w-lg mx-auto font-sans leading-relaxed">
              New to collecting? Explore verified dynamic knowledge from master watchmakers on movements, preservation, and high-value choices.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What makes independent watchmaking brands and custom automatic watches stand out for collectors?",
                answer: "Independent watchmaking brands stand out through handcrafted finishing, limited production runs, and unique design details. Custom automatic watches offer owners a tailored movement, rare materials, and a personalized dial experience that combines mechanical precision with artisanal character.",
                tag: "High Volume, Low Difficulty Search Topic",
                keywords: ["independent watchmaking brands", "custom automatic watches", "luxury brand comparison"]
              },
              {
                question: "What are the best entry level luxury watches for new collectors?",
                answer: "When launching your collection, the best entry level luxury watches combine reliable movements, premium materials, and brand heritage. Options like the Prestige Elite series offer classic dress Watch aesthetics, scratch-resistant sapphire crystal surfaces, and robust calibers that serve as the ideal foundational piece for any growing collection without requiring a master collector's budget.",
                tag: "High Volume, Low Difficulty Search Topic",
                keywords: ["best entry level luxury watches", "luxury watch collection", "affordable timepieces"]
              },
              {
                question: "Are automatic watches worth it in terms of longevity?",
                answer: "Absolutely. When asking are automatic watches worth it, consider that unlike battery-powered quartz models, an automatic caliber runs on kinetic energy from your natural wrist movements. Crafted with precision jewels and complex gears, a mechanical or automatic watch can literally outlast generations when properly cared for, preserving historical value.",
                tag: "High Volume, Low Difficulty Search Topic",
                keywords: ["are automatic watches worth it", "automatic caliber longevity", "mechanical watch value"]
              },
              {
                question: "How do I find high-quality, affordable Swiss automatic watches?",
                answer: "To secure real affordable Swiss automatic watches, look for key watchmaker signatures such as a genuine mechanical caliber, rich water-resistance, and polished synthetic sapphire glass. By purchasing directly from boutique designers, you bypass middleman markups while keeping structural perfection.",
                tag: "High Volume, Low Difficulty Search Topic",
                keywords: ["affordable Swiss automatic watches", "Swiss mechanical movements", "sapphire glass watches"]
              },
              {
                question: "Why should I consider the best watch microbrands over heritage giants?",
                answer: "The best watch microbrands offer high-end specifications (such as premium custom straps, customized dials, and rare stainless steel cases) directly to collectors. By scaling down marketing budgets and bypassing retail markup, these smaller studios deliver exquisite, limited-run color customized watches that stand out.",
                tag: "High Volume, Low Difficulty Search Topic",
                keywords: ["best watch microbrands", "custom dial watches", "boutique watchmakers"]
              },
              {
                question: "What are the most essential mechanical watch maintenance tips (and how to clean your watch at home)?",
                answer: "To keep your watch performing flawlessly, follow these mechanical watch maintenance tips: wind your crown manually once a month if not worn, keep it clear of magnetic fields (laptops, electronic systems), and store in dry cases. To clean a mechanical watch at home, wipe down cases gently with a damp microfiber cloth, use soft-bristled utility brushes on linked straps, and strictly ensure your crown is locked down tight.",
                tag: "High Volume, Low Difficulty Search Topic",
                keywords: ["mechanical watch maintenance tips", "clean mechanical watch at home", "watch cleaning guide"]
              }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-neutral-950/80 border border-neutral-800/80 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/30"
                >
                  <button
                    id={`faq-btn-${idx}`}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="space-y-2">
                      <h3 className="font-serif text-base sm:text-lg font-medium text-white tracking-wide pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`p-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400 border-blue-500/20' : ''}`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                    {isOpen && (
                      <div>
                        <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-0 border-t border-neutral-900">
                          <p className="text-neutral-300 text-sm leading-relaxed mt-4 mb-4 font-sans max-w-3xl">
                            {faq.answer}
                          </p>
                          <div className="flex flex-wrap gap-2 items-center">
                            <span className="text-[10px] text-neutral-500 font-mono">Index keywords:</span>
                            {faq.keywords.map((kw, i) => (
                              <span key={i} className="text-[9px] bg-neutral-900 text-neutral-400 border border-neutral-800/80 px-2 py-0.5 rounded font-mono">
                                #{kw}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      )}
      </DeferredSection>

      {/* 5. Call to Action */}
      <DeferredSection minHeight="60vh">
      {() => (
      <section className="relative py-24 bg-neutral-950 text-white overflow-hidden text-center flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,134,64,0.12),transparent_48%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-white uppercase">
            Time Is Precious. <span className="text-amber-500">Wear It With Prestige.</span>
          </h2>
          <div className="h-0.5 w-24 bg-amber-500 mx-auto rounded" />
          <p className="text-neutral-300 text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed">
            Explore our exclusive collection and find the perfect watch today. Enjoy secure checkout, authentic luxury items, and global premium express handling.
          </p>
          <div className="pt-2">
            <button
              id="cta-shop-collection-btn"
              onClick={() => {
                setSelectedCategory('All');
                navigate('/services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-10 py-4 bg-amber-500 hover:bg-amber-400 text-neutral-950 hover:text-neutral-900 text-xs font-bold tracking-widest rounded transition-all duration-300 cursor-pointer shadow-lg shadow-amber-500/10 inline-flex items-center space-x-2"
            >
              <span>EXPLORE WATCHES TODAY</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
      )}
      </DeferredSection>

    </div>
  );
}

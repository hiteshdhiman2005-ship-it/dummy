import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Award, Truck, ShieldCheck, Star, ArrowRight, Gem, Settings, Sliders, Check, ChevronDown, BookOpen, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { PageType } from '../types';
import { REVIEWS } from '../data';

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
    title: 'Watches for Men | Titan Watch for Men & Fossil Watch for Men',
    description: 'Shop premium watches for men, including Titan watch for men and Fossil watch for men. Explore stylish, durable, and affordable timepieces for every occasion.',
    keywords: [
      'watches for men',
      'titan watch for men',
      'rado watches for men',
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
        'image': 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=600',
        'description': 'Shop premium watches for men, including Titan watch for men and Fossil watch for men. Explore stylish, durable, and affordable timepieces for every occasion.',
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
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Sports Watches',
      slug: 'Sports' as const,
      desc: 'Built for adventure, durability, and performance.',
      image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Smart Watches',
      slug: 'Smart' as const,
      desc: 'Modern technology combined with elegant design.',
      image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Classic Watches',
      slug: 'Classic' as const,
      desc: 'Timeless designs that never go out of fashion.',
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=600',
    }
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
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-neutral-800 bg-[#11100e]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(184,134,64,0.16),transparent_34%),linear-gradient(115deg,#11100e_0%,#17130e_48%,#0b0b0a_100%)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-138px)] max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8 lg:py-16">
          <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-300"
          >
            <span className="h-px w-10 bg-amber-500" />
            <Sparkles className="h-3.5 w-3.5" />
            <span>Independent watchmaking, considered daily</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-6 max-w-2xl font-serif text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Time, <span className="text-amber-400">well made.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10 max-w-lg text-left text-base font-light leading-relaxed tracking-wide text-neutral-300 sm:text-lg"
          >
            Thoughtful proportions, dependable movements, and materials chosen to age beautifully. Find the piece that becomes part of your story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <button
              id="hero-shop-collection-btn"
              onClick={() => {
                setSelectedCategory('All');
                navigate('/services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-fit min-w-[190px] cursor-pointer rounded-sm bg-amber-500 px-7 py-4 text-sm font-bold tracking-[0.16em] text-neutral-950 shadow-lg shadow-amber-900/20 transition-all duration-300 hover:bg-amber-400 hover:shadow-amber-500/20"
            >
              SHOP COLLECTION
            </button>
            <button
              id="hero-explore-arrivals-btn"
              onClick={() => {
                setSelectedCategory('Luxury');
                navigate('/services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex w-fit min-w-[190px] cursor-pointer items-center justify-center space-x-2 rounded-sm border border-neutral-600 bg-white/[0.03] px-7 py-4 text-sm font-bold tracking-[0.16em] text-neutral-200 transition-all duration-300 hover:bg-white/[0.08] hover:text-white"
            >
              <span>EXPLORE NEW ARRIVALS</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
          </div>
          <div className="relative flex min-h-[390px] items-center justify-center lg:min-h-[560px]">
            <div className="absolute h-[72%] w-[72%] rounded-full bg-amber-500/10 blur-3xl" />
            <div className="absolute right-0 top-1/2 h-[78%] w-[86%] -translate-y-1/2 overflow-hidden rounded-[45%_45%_8%_8%] border border-amber-200/20 bg-neutral-950/40 shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=85&w=1200"
                srcSet="https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=85&w=1200 1200w"
                sizes="(max-width: 1024px) 90vw, 50vw"
                fetchPriority="high"
                alt="Close-up of a PrestigeTime mechanical watch"
                className="h-full w-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0c0b09]/45 via-transparent to-amber-100/10" />
            </div>
            <div className="absolute bottom-4 left-0 z-10 border-l-2 border-amber-500 bg-neutral-950/80 px-4 py-3 backdrop-blur-sm sm:bottom-10 sm:left-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-amber-300">PT / 01</p>
              <p className="mt-1 text-xs text-neutral-300">The automatic collection</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Categories */}
      <section className="py-20 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-white mb-4">
              Featured Watches for Men Curation: Titan Watch for Men & Rado Watches for Men
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded mb-4" />
            <p className="text-neutral-400 text-sm sm:text-base">
              Explore our curated lines built individually for collectors, active dynamic training, smart convenience, and traditional styles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.35, delay: Math.min(idx, 3) * 0.02 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose PrestigeTime */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column Left (Intro) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest text-amber-500 font-bold border-l-2 border-amber-500 pl-3">
                Uncompromising Values
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Why Choose Our Titan Watch for Men & Rado Watches for Men?
              </h2>
              <div className="h-0.5 w-16 bg-amber-500 rounded" />
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                Every timepiece in our collections—from the innovative Titan watch for men line to the executive prestige of Rado watches for men—represents an investment in meticulous calibration. We hand-select premium watch manufacturers globally to provide an unparalleled ownership experience.
              </p>
              <div className="relative rounded-xl overflow-hidden h-48 border border-neutral-800">
                <img
                  src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80&w=800"
                  loading="lazy"
                  decoding="async"
                  alt="Precision gears Close-Up"
                  className="w-full h-full object-cover filter brightness-[0.5] grayscale hover:brightness-[0.6] transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="text-center">
                    <span className="font-serif text-3xl font-bold text-amber-400 block mb-0.5">PT-100</span>
                    <span className="text-xs uppercase tracking-wider text-neutral-300 font-medium">Calibrated Movement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column Right (Value points grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valueProps.map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: Math.min(idx, 3) * 0.02 }}
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
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Active Watch Customizer - Titan Prestige Studio */}
      <section className="py-20 bg-neutral-810 border-t border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-amber-600 bg-amber-500/10 px-3.5 py-1.5 rounded-full inline-block">
              Interactive Showroom
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-wide text-white mt-4 mb-3">
              Bespoke Watches for Men: Titan Watch for Men & Rado Watches for Men
            </h2>
            <div className="h-0.5 w-16 bg-amber-500 mx-auto rounded mb-4" />
            <p className="text-neutral-400 text-xs sm:text-sm font-light uppercase tracking-widest">
              Design & Configure Your Masterpiece Titan Watch for Men or Elegant Rado Watches for Men
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
                        }`}>TITAN</span>
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
                  Tailor the core materials of our master-crafted timepiece. Feel the prestige of Swiss-level physical aesthetics matching Titan's premium craftsmanship.
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

      {/* 5. Customer Reviews */}
      <section className="py-20 bg-neutral-950 border-t border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-white mb-2">
              Customer Reviews for Titan Watch for Men & Rado Watches for Men
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: Math.min(idx, 3) * 0.02 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Knowledge Hub: Interactive Buyer's Guide & FAQs targeting high-volume / low-difficulty keywords */}
      <section className="py-24 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-[0.24em] text-blue-400 font-semibold block mb-2">
              Horology Education Hub
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-white mb-4">
              Titan Watch for Men & Rado Watches for Men: Buyer’s Guide
            </h2>
            <div className="h-0.5 w-16 bg-blue-500 mx-auto rounded mb-4" />
            <p className="text-neutral-400 text-sm max-w-lg mx-auto font-sans leading-relaxed">
              New to collecting? Explore verified dynamic knowledge from master watchmakers on movements, preservation, and high-value choices.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How do Titan watch for men and Rado watches for men compare in quality and style?",
                answer: "Titan watch for men configurations represent excellent craftsmanship, stylistic versatility, and daily durability, making them a superb choice for practical modern wearers. Meanwhile, Rado watches for men are widely renowned for their high-tech scratch-resistant ceramic casings, Swiss mechanical mastery, and legendary endurance. Both brands offer incredible value within their respective classes, ensuring premium statement style for any collector's wardrobe.",
                tag: "High Volume, Low Difficulty Search Topic",
                keywords: ["titan watch for men", "rado watches for men", "luxury brand comparison"]
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
                question: "What are the most essential mechanical watch maintenance tips (and how to clean keys at home)?",
                answer: "To keep your watch performing flawlessly, follow these mechanical watch maintenance tips: wind your crown manually once a month if not worn, keep it clear of magnetic fields (laptops, electronic systems), and store in dry cases. To clean a mechanical watch at home, wipe down cases gently with a damp microfiber cloth, use soft-bristled utility brushes on linked straps, and strictly ensure your crown is locked down tight.",
                tag: "High Volume, Low Difficulty Search Topic",
                keywords: ["mechanical watch maintenance tips", "clean mechanical watch at home", "watch cleaning guide"]
              }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: Math.min(idx, 3) * 0.01 }}
                  className="bg-neutral-950/80 border border-neutral-800/80 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/30"
                >
                  <button
                    id={`faq-btn-${idx}`}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="space-y-2">
                      <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full text-[9px] bg-blue-500/10 text-blue-400 font-mono tracking-wider">
                        <Sparkles className="h-2.5 w-2.5" />
                        <span>SEO Topic</span>
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-medium text-white tracking-wide pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`p-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400 border-blue-500/20' : ''}`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="relative py-24 bg-neutral-950 text-white overflow-hidden text-center flex items-center justify-center">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=75&w=1200"
            srcSet="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=70&w=640 640w,
                    https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=75&w=1200 1200w"
            sizes="100vw"
            loading="lazy"
            decoding="async"
            alt="Macro watch dial mechanics"
            className="w-full h-full object-cover filter contrast-125 select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950" />
        
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

    </div>
  );
}

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Map, Compass, Watch, Tag, Landmark, BookOpen, Mail, Heart, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function Sitemap() {
  useSEO({
    title: 'Site Map & Directory | PrestigeTime',
    description: 'Explore the complete directory of PrestigeTime. Navigate through our collections, custom services, brand heritages, and expert horological guides.',
    keywords: [
      'sitemap',
      'website directory',
      'prestige time directory',
      'site index',
      'luxury watch directory'
    ],
  });

  const mainPages = [
    { name: 'Home Page', path: '/', desc: 'Our premium storefront featuring the Titan custom studio, Rado spotlights, and featured curators.', icon: <Compass className="h-4 w-4 text-amber-500" /> },
    { name: 'Products Catalog', path: '/products', desc: 'Browse and filter our comprehensive catalog of sports, luxury, classic, and smart calibers.', icon: <Watch className="h-4 w-4 text-amber-500" /> },
    { name: 'Services & Calibration', path: '/services', desc: 'Expert restoration, mechanical timing calibration, and personalized collection advisory.', icon: <Tag className="h-4 w-4 text-amber-500" /> },
    { name: 'About Our Story', path: '/about', desc: 'Learn about our legacy, certified authentic luxury standards, and brand heritage.', icon: <Landmark className="h-4 w-4 text-amber-500" /> },
    { name: 'My Wishlist', path: '/wishlist', desc: 'Your saved items and custom-selected luxury sets ready for secure order checkout.', icon: <Heart className="h-4 w-4 text-amber-500" /> },
    { name: 'Horology Blog', path: '/blog', desc: 'Deep-dive editorials, mechanical maintenance guides, and trending watch style reviews.', icon: <BookOpen className="h-4 w-4 text-amber-500" /> },
    { name: 'Contact Concierge', path: '/contact', desc: 'Reach our master watchmakers, view our physical store coordinates, or contact support.', icon: <Mail className="h-4 w-4 text-amber-500" /> },
  ];

  const seoTopics = [
    {
      category: 'Storefront & Highlights',
      items: [
        { label: 'titan watch for men', target: '/', desc: 'Explore customized layouts, configure bespoke dials, and browse our Titan Prestige highlights.' },
        { label: 'watches for men', target: '/', desc: 'Browse professional men’s curations, daily executive wear, and high-precision quartz pieces.' },
        { label: 'rado watches for men', target: '/', desc: 'Discover high-tech ceramic mastery, classic Swiss engineering, and luxurious scratch-resistant watches.' },
      ]
    },
    {
      category: 'Boutique Directory',
      items: [
        { label: 'fossil watches for men', target: '/products', desc: 'Filter contemporary styles, sturdy chronographs, and trend-setting daily wear options.' },
        { label: 'fastrack watches for men', target: '/products', desc: 'Shop sport-oriented, highly energetic design elements engineered for active lifestyles.' },
        { label: 'rolex watches for men', target: '/products', desc: 'Invest in certified, masterfully finished vintage and contemporary mechanical icons.' },
      ]
    },
    {
      category: 'Store Location & Customer Care',
      items: [
        { label: 'watch store near me', target: '/contact', desc: 'Access interactive maps, physical showroom hours, and private viewing appointments.' },
        { label: 'buy watches online store', target: '/contact', desc: 'Discover safe 256-bit payment pipelines, express courier insurance, and tracking protocols.' },
        { label: 'contact watch customer service', target: '/contact', desc: 'Submit personalized inquiries directly to our live certified mechanical watchmakers.' },
      ]
    },
    {
      category: 'Legacy & Authentication',
      items: [
        { label: 'authentic luxury watches', target: '/about', desc: 'Read about our meticulous verification checks, original serial validation, and certifications.' },
        { label: 'heritage watch brand', target: '/about', desc: 'Understand our legacy, historical watchmaker tools, and dedication to timeless horological art.' },
        { label: 'about our watch store', target: '/about', desc: 'Meet our visionaries, learn our core values, and understand our customer-centric ethos.' },
      ]
    },
    {
      category: 'Editorials & Maintenance',
      items: [
        { label: 'best automatic watches under 1000', target: '/blog', desc: 'Compare entry-level mechanical pieces that deliver elite precision and structural integrity.' },
        { label: 'trending watch styles', target: '/blog', desc: 'Stay updated with integrated steel bracelets, unique dial colors, and micro-size trends.' },
        { label: 'how to maintain mechanical watch', target: '/blog', desc: 'Learn to avoid strong magnetic fields, clean your bracelet, and check water gaskets.' },
      ]
    }
  ];

  return (
    <div id="sitemap-page-container" className="bg-neutral-900 text-neutral-100 font-sans min-h-screen">
      
      {/* Header section with sitemap background accent */}
      <section className="relative py-20 bg-neutral-950 border-b border-neutral-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=75&w=1200"
            srcSet="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=70&w=640 640w,
                    https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=75&w=1200 1200w"
            sizes="100vw"
            fetchPriority="high"
            alt="Mechanical gear setup"
            className="w-full h-full object-cover object-center scale-105 filter blur-xs"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/80 to-neutral-950" />
        
        <div className="relative text-center z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-mono mb-4">
            <Map className="h-3.5 w-3.5" />
            <span>XML & HTML Navigation Engine</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-black tracking-wide text-white mb-3">
            WEBSITE <span className="text-amber-500">SITEMAP</span>
          </h1>
          <div className="h-0.5 w-16 bg-amber-500 mx-auto rounded" />
          <p className="mt-4 text-neutral-400 text-xs sm:text-sm font-light tracking-wide uppercase max-w-xl mx-auto leading-relaxed">
            A comprehensive, high-density index mapping out pages, key luxury catalogs, store information, and expert maintenance guides.
          </p>
        </div>
      </section>

      {/* Main Sitemap Content Grid */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Main Website Pages Index */}
          <div className="space-y-8">
            <div className="text-center md:text-left space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-500 font-bold font-mono">
                Primary Paths
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                Main Navigational Directory
              </h2>
              <p className="text-neutral-400 text-sm max-w-2xl font-light">
                Direct access routes to PrestigeTime's primary single-view screens, services, collections, and custom design labs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page, index) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(index, 3) * 0.02 }}
                  className="bg-neutral-950 p-6 rounded-xl border border-neutral-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-neutral-900 rounded-lg group-hover:bg-amber-500/10 transition-colors">
                        {page.icon}
                      </div>
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-500 transition-colors">
                        {page.name}
                      </h3>
                    </div>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                      {page.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-neutral-500 tracking-wider">
                      Path: {page.path}
                    </span>
                    <Link
                      to={page.path}
                      className="text-amber-500 hover:text-amber-400 text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Visit</span>
                      <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Search Term and Brand Highlights Section (Crucial SEO Density Map) */}
          <div className="space-y-8 pt-12 border-t border-neutral-800/40">
            <div className="text-center md:text-left space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-500 font-bold font-mono">
                Topic Mapping & Key Search Curations
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                Brand & Horological Subject Index
              </h2>
              <p className="text-neutral-400 text-sm max-w-2xl font-light">
                Discover specific curated entries for high-demand collector searches, luxury Swiss manufacturer spotlights, and practical care methodologies.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {seoTopics.map((group, groupIdx) => (
                <div
                  key={group.category}
                  className="bg-neutral-950/60 p-6 sm:p-8 rounded-2xl border border-neutral-800/50 space-y-6"
                >
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-500/90 border-b border-neutral-800/60 pb-3 flex items-center justify-between">
                    <span>{group.category}</span>
                    <span className="text-[10px] px-2 py-0.5 bg-neutral-900 text-neutral-400 rounded-md">
                      {group.items.length} Entries
                    </span>
                  </h3>

                  <div className="space-y-6">
                    {group.items.map((item) => (
                      <div key={item.label} className="space-y-1.5 group">
                        <Link
                          to={item.target}
                          className="text-sm font-semibold text-white hover:text-amber-400 transition-colors flex items-center space-x-1.5 cursor-pointer decoration-dotted underline-offset-4 group-hover:underline"
                        >
                          <span className="capitalize">{item.label}</span>
                        </Link>
                        <p className="text-neutral-400 text-xs font-light leading-relaxed">
                          {item.desc}
                        </p>
                        <div className="flex items-center space-x-1 text-[9px] font-mono text-neutral-500 uppercase tracking-widest pt-1">
                          <span>Targets:</span>
                          <span className="text-neutral-450 font-bold">{item.target}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Technical Links to Raw Files */}
          <div className="bg-neutral-950 p-8 rounded-xl border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-serif text-lg font-bold text-white">
                Looking for the search engine XML sitemap?
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-xl leading-relaxed">
                We maintain a fully synchronized static XML file containing structured metadata, priorities, and change frequencies designed explicitly for Google Search Console indexing.
              </p>
            </div>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-neutral-900 hover:bg-neutral-850 text-amber-500 border border-neutral-800 hover:border-amber-500/30 text-xs font-bold tracking-widest uppercase rounded transition-colors whitespace-nowrap cursor-pointer shrink-0"
            >
              Open sitemap.xml File
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

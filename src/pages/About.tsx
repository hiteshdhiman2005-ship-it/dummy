import { motion } from 'motion/react';
import { Eye, Target, Compass, HardHat, Heart, Shield, Award, CheckCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

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

export default function About() {
  useSEO({
    title: 'Authentic Luxury Watches & Heritage Watch Brand | About PrestigeTime',
    description: 'Read about our watch store and our long legacy as a classic heritage watch brand offering certified authentic luxury watches directly to collectors.',
    keywords: [
      'authentic luxury watches',
      'heritage watch brand',
      'about our watch store',
      'prestigetime legacy',
      'watch certification',
      'original serial validation'
    ],
  });

  const missionPoints = [
    'Deliver high-quality timepieces of certified origin',
    'Offer competitive pricing without sacrificing artisan finish',
    'Ensure customer satisfaction through responsive lifetime service',
    'Promote timeless elegance and high product innovation'
  ];

  const valuesList = [
    {
      title: 'Excellence',
      desc: 'We strive for perfection in every product we offer. From micro-mechanical accuracy to pristine bezel polishing.',
      icon: <Award className="h-5 w-5 text-amber-500" />
    },
    {
      title: 'Integrity',
      desc: 'Honesty and transparency guide our business. Certified warranties, clear origins, and fair, flat pricing models.',
      icon: <Shield className="h-5 w-5 text-amber-500" />
    },
    {
      title: 'Innovation',
      desc: 'We embrace modern technology while respecting traditional watchmaking, matching modern wear capabilities with historic movements.',
      icon: <Compass className="h-5 w-5 text-amber-500" />
    },
    {
      title: 'Customer First',
      desc: 'Our customers are at the heart of everything we do. Professional guides help you select, secure, and service your collection.',
      icon: <Heart className="h-5 w-5 text-amber-500" />
    }
  ];

  return (
    <div id="about-page-container" className="bg-neutral-900 text-neutral-100 font-sans min-h-screen">
      
      {/* Page Header banner */}
      <section className="relative py-20 bg-neutral-950 border-b border-neutral-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={getOptimizedUnsplashUrl("https://images.unsplash.com/photo-1509048191080-d2984bad6ae5", 1200, 75)}
            srcSet={`${getOptimizedUnsplashUrl("https://images.unsplash.com/photo-1509048191080-d2984bad6ae5", 640, 70)} 640w,
                    ${getOptimizedUnsplashUrl("https://images.unsplash.com/photo-1509048191080-d2984bad6ae5", 1200, 75)} 1200w`}
            sizes="100vw"
            fetchPriority="high"
            decoding="async"
            alt="Watchmaker background"
            className="w-full h-full object-cover object-center scale-105 filter blur-xs"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/80 to-neutral-950" />
        
        <div className="relative text-center z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-black tracking-wide text-white mb-3">
            ABOUT <span className="text-amber-500">PRESTIGETIME</span>
          </h1>
          <div className="h-0.5 w-16 bg-amber-500 mx-auto rounded" />
          <p className="mt-4 text-neutral-400 text-sm sm:text-base font-light tracking-wide uppercase">
            Precision, integrity, and timeless luxury watchmaking
          </p>
        </div>
      </section>

      {/* About Description Block */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text column */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-amber-500 font-bold font-mono">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-white">
                Exceptional Timepieces That Combine Style & Precision
              </h2>
              <div className="h-0.5 w-16 bg-amber-500 rounded" />
              
              <div className="space-y-4 text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                <p>
                  To learn more <span className="text-white font-medium">about our watch store</span>, one must understand our long-standing dedication to precision. PrestigeTime was founded with a simple mission: to provide certified <span className="text-white font-medium">authentic luxury watches</span> that seamlessly combine classic style, micro-mechanical engineering, and ultimate reliability.
                </p>
                <p>
                  Over the years, our house has grown from a specialized workshop into a highly respected <span className="text-white font-medium">heritage watch brand</span>, serving watch enthusiasts, professional collectors, and modern style curators who appreciate the finest calibers.
                </p>
                <p>
                  Our carefully selected catalog spans a diverse array of masterfully finished timepieces, from high-complication mechanical pieces to modern, resilient sport watches.
                </p>
              </div>
            </div>

            {/* Right: Immersive Picture Panel */}
            <div className="relative rounded-xl overflow-hidden aspect-video lg:aspect-square group shadow-2xl border border-neutral-800">
              <img
                src={getOptimizedUnsplashUrl("https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3", 600, 75)}
                srcSet={`${getOptimizedUnsplashUrl("https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3", 400, 70)} 400w,
                        ${getOptimizedUnsplashUrl("https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3", 800, 75)} 800w`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                loading="lazy"
                decoding="async"
                alt="Finely finished chronograph watch closeup"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.6] grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-950/20" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-neutral-950/80 border border-neutral-800 rounded-lg backdrop-blur-xs">
                <p className="text-neutral-400 text-xs italic font-serif">
                  "A watch is not merely a dial to read the hours; it is a mechanical ecosystem that records your journey through destiny."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Sections */}
      <section className="py-20 bg-neutral-950 border-t border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Vision block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 bg-amber-500/10 rounded-lg w-fit mb-5">
                <Eye className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                To become a globally recognized destination for premium watches and outstanding customer service, uniting historic watch craftsmanship with modern luxury access.
              </p>
            </div>
            <div className="mt-8 border-t border-neutral-800/80 pt-4">
              <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-mono">Globally Recognized Excellence</span>
            </div>
          </motion.div>

          {/* Mission block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 bg-amber-500/10 rounded-lg w-fit mb-5">
                <Target className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Our Mission</h3>
              
              <ul className="space-y-3">
                {missionPoints.map((point) => (
                  <li key={point} className="flex items-start space-x-3 text-sm text-neutral-300">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 border-t border-neutral-800/80 pt-4">
              <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-mono">Driven by values and customer trust</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold font-mono block mb-2">Our Foundation</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-white">Our Values</h2>
            <div className="h-0.5 w-12 bg-amber-500 mx-auto rounded mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesList.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: Math.min(idx, 3) * 0.02 }}
                className="bg-neutral-950 p-6 rounded-lg border border-neutral-800/80 hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/2"
              >
                <div className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-lg w-fit mb-4">
                  {value.icon}
                </div>
                <h3 className="text-base font-semibold text-white tracking-wide mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed font-light">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data';

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

export default function Blog() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  useSEO({
    title: 'Best Automatic Watches Under 1000 & Trending Styles | PrestigeTime Blog',
    description: 'Read custom insights on the best automatic watches under 1000, learn about trending watch styles, and find out how to maintain mechanical watch movements.',
    keywords: [
      'best automatic watches under 1000',
      'trending watch styles',
      'how to maintain mechanical watch',
      'automatic caliber longevity',
      'horology blog',
      'watch maintenance'
    ],
  });

  return (
    <div id="blog-page-container" className="bg-neutral-900 text-neutral-100 font-sans min-h-screen">
      
      {/* Page Header banner */}
      <section className="relative py-20 bg-neutral-950 border-b border-neutral-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={getOptimizedUnsplashUrl("https://images.unsplash.com/photo-1547996160-81dfa63595aa", 1200, 75)}
            srcSet={`${getOptimizedUnsplashUrl("https://images.unsplash.com/photo-1547996160-81dfa63595aa", 640, 70)} 640w,
                    ${getOptimizedUnsplashUrl("https://images.unsplash.com/photo-1547996160-81dfa63595aa", 1200, 75)} 1200w`}
            sizes="100vw"
            fetchPriority="high"
            decoding="async"
            alt="Time gears background"
            className="w-full h-full object-cover object-center scale-105 filter blur-xs"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/80 to-neutral-950" />
        
        <div className="relative text-center z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-black tracking-wide text-white mb-3">
            LATEST <span className="text-amber-500">ARTICLES</span>
          </h1>
          <div className="h-0.5 w-16 bg-amber-500 mx-auto rounded" />
          <p className="mt-4 text-neutral-400 text-sm sm:text-base font-light tracking-wide uppercase">
            Stories of Horology, curation advice, and maintenance tips
          </p>
        </div>
      </section>

      {/* Blog Feed Grid Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(idx, 3) * 0.02 }}
              onClick={() => setActivePost(post)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActivePost(post);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Read article: ${post.title}`}
              className="group bg-neutral-950 border border-neutral-800/80 rounded-xl overflow-hidden hover:border-amber-500/20 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              <div>
                {/* Article Card Image */}
                <div className="relative aspect-video overflow-hidden bg-neutral-900 border-b border-neutral-800">
                  <img
                    src={getOptimizedUnsplashUrl(post.image, 500)}
                    srcSet={`${getOptimizedUnsplashUrl(post.image, 380)} 380w, ${getOptimizedUnsplashUrl(post.image, 600)} 600w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    decoding="async"
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.8]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                </div>

                {/* Article Card Details */}
                <div className="p-6 space-y-3.5">
                  {/* Metadata line */}
                  <div className="flex items-center space-x-4 text-neutral-500 text-[10px] sm:text-xs">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-3.5 w-3.5 text-amber-500" />
                      <span>{post.publishedDate}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3.5 w-3.5 text-amber-500" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-neutral-400 text-xs font-light line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Read button card bottom */}
              <div className="p-6 pt-0 border-t border-neutral-900/60 mt-4 flex items-center justify-between">
                <span className="text-neutral-500 text-xs font-mono font-medium flex items-center space-x-1">
                  <User className="h-3 px-0.5 text-amber-500" />
                  <span>By {post.author.split(' ')[0]}</span>
                </span>
                
                <span className="text-[10px] sm:text-xs text-amber-500 font-bold uppercase tracking-widest flex items-center space-x-1 group-hover:text-amber-400 transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* Article Detail Reading Overlay Modal */}
      <AnimatePresence>
        {activePost && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            id="blog-reading-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-blog-title"
          >
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePost(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xs"
            />

            {/* Modal Box content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              className="relative bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-30 flex flex-col"
            >
              <button
                id="blog-modal-close"
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 p-2 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors cursor-pointer z-30 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Close article"
              >
                ✕
              </button>

              {/* Large Image header */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0 border-b border-neutral-800">
                <img
                  src={getOptimizedUnsplashUrl(activePost.image, 800, 75)}
                  srcSet={`${getOptimizedUnsplashUrl(activePost.image, 400, 70)} 400w,
                          ${getOptimizedUnsplashUrl(activePost.image, 800, 75)} 800w`}
                  sizes="(max-width: 640px) 100vw, 800px"
                  loading="lazy"
                  decoding="async"
                  alt={activePost.title}
                  className="w-full h-full object-cover filter brightness-[0.7]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                
                {/* Meta block absolute overlay bottom */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-4 text-amber-400 text-xs font-mono font-semibold uppercase mb-2">
                    <span className="px-2 py-0.5 bg-neutral-950/80 rounded border border-neutral-800">{activePost.publishedDate}</span>
                    <span className="px-2 py-0.5 bg-neutral-950/80 rounded border border-neutral-800">{activePost.readTime}</span>
                  </div>
                  <h2 id="modal-blog-title" className="font-serif text-xl sm:text-3xl font-bold text-white drop-shadow-md">
                    {activePost.title}
                  </h2>
                </div>
              </div>

              {/* Article Content Area */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto leading-relaxed">
                <div className="flex items-center space-x-2 border-b border-neutral-800 pb-4 text-xs text-neutral-400">
                  <span className="font-semibold text-neutral-300">Author:</span>
                  <span className="font-mono text-amber-500 font-bold">{activePost.author}</span>
                  <span className="text-neutral-600">•</span>
                  <span>PrestigeTime Editorial Guild</span>
                </div>

                <div className="space-y-4 text-neutral-300 text-xs sm:text-sm font-light">
                  {activePost.content.map((p, i) => (
                    <p key={i} className="leading-relaxed indent-4 first:indent-0">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Conclusion footer panel */}
                <div className="p-4 bg-neutral-950 border border-neutral-850 rounded-lg text-neutral-400 text-xs italic font-serif">
                  "At PrestigeTime, we believe behind every fine tick is an appreciation for micro-engineering history. Continue your journey with us and discover watches that tell much more than time."
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-end">
                  <button
                    id="blog-modal-back-btn"
                    onClick={() => setActivePost(null)}
                    className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold tracking-widest rounded transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  >
                    RETURN TO ARTICLES
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

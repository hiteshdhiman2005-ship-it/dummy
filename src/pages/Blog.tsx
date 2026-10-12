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
      
      {/* Blog Feed Grid Section */}
      <section className="pt-16 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-black tracking-wide text-white mb-3">
            LATEST <span className="text-amber-500">ARTICLES</span>
          </h1>
          <div className="h-0.5 w-16 bg-amber-500 mx-auto rounded" />
          <p className="mt-4 text-neutral-400 text-sm sm:text-base font-light tracking-wide uppercase">
            Stories of Horology, curation advice, and maintenance tips
          </p>
        </div>
      </section>

      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-950 shadow-[0_18px_50px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-[0_25px_80px_rgba(217,149,60,0.12)] focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral-800 bg-neutral-900">
                  <img
                    src={getOptimizedUnsplashUrl(post.image, idx === 0 ? 1200 : 800, idx === 0 ? 90 : 85)}
                    srcSet={`${getOptimizedUnsplashUrl(post.image, idx === 0 ? 480 : 360, idx === 0 ? 90 : 85)} ${idx === 0 ? 480 : 360}w, ${getOptimizedUnsplashUrl(post.image, idx === 0 ? 800 : 600, idx === 0 ? 90 : 85)} ${idx === 0 ? 800 : 600}w, ${getOptimizedUnsplashUrl(post.image, idx === 0 ? 1200 : 800, idx === 0 ? 90 : 85)} ${idx === 0 ? 1200 : 800}w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    fetchPriority={idx === 0 ? 'high' : undefined}
                    decoding="async"
                    width={idx === 0 ? 1200 : 800}
                    height={idx === 0 ? 750 : 500}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.9]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/15 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-amber-500/30 bg-neutral-950/75 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-amber-400 backdrop-blur-sm">
                    Editorial
                  </span>
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-amber-500" />
                      <span>{post.publishedDate}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-amber-500" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-amber-400">
                    {post.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-neutral-400 line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-neutral-900/80 px-6 py-4">
                <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                  <User className="h-3.5 w-3.5 text-amber-500" />
                  <span>{post.author.split(' ')[0]}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 transition-colors duration-300 group-hover:text-amber-300">
                  <span>Read</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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
                  src={getOptimizedUnsplashUrl(activePost.image, 1400, 90)}
                  srcSet={`${getOptimizedUnsplashUrl(activePost.image, 600, 85)} 600w,
                          ${getOptimizedUnsplashUrl(activePost.image, 1000, 90)} 1000w,
                          ${getOptimizedUnsplashUrl(activePost.image, 1400, 92)} 1400w`}
                  sizes="(max-width: 640px) 100vw, 1000px"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={1400}
                  height={900}
                  alt={activePost.title}
                  className="w-full h-full object-cover brightness-[0.75]"
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

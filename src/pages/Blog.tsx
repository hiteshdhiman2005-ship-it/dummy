import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data';

function getOptimizedUnsplashUrl(url: string, width: number, quality = 75) {
  if (!url || !url.includes('unsplash.com')) return url;
  const baseUrl = url.split('?')[0];
  return `${baseUrl}?auto=format&fit=crop&q=${quality}&w=${width}`;
}

function BlogMetadata({
  title,
  description,
  canonical,
  image,
  type = 'website',
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  type?: 'website' | 'article';
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="PrestigeTime" />
      <meta property="og:url" content={canonical} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </>
  );
}

export default function Blog() {
  const { slug } = useParams();
  const location = useLocation();
  const post = slug ? BLOG_POSTS.find((item) => item.slug === slug) : undefined;
  const canonical = `${window.location.origin}${location.pathname}`;

  if (slug && !post) {
    return <Navigate to="/blog" replace />;
  }

  if (post) {
    return <BlogArticle post={post} canonical={canonical} />;
  }

  const title = 'Luxury Watch Blog & Horology Guides | PrestigeTime';
  const description =
    'Explore the PrestigeTime luxury watch blog for horology guides, watch history, buying advice, style trends, and practical timepiece care.';

  return (
    <div id="blog-page-container" className="min-h-screen bg-neutral-900 font-sans text-neutral-100">
      <BlogMetadata title={title} description={description} canonical={canonical} />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-3 font-serif text-4xl font-black tracking-wide text-white sm:text-5xl">
            Latest Luxury Watch Articles &amp; Horology Guides
          </h1>
          <div className="mx-auto h-0.5 w-16 rounded bg-amber-500" />
          <p className="mt-4 text-sm font-light uppercase tracking-wide text-neutral-400 sm:text-base">
            Stories of horology, curation advice, and maintenance tips
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(idx, 3) * 0.02 }}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-950 shadow-[0_18px_50px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-[0_25px_80px_rgba(217,149,60,0.12)]"
            >
              <Link
                to={`/blog/${item.slug}`}
                aria-label={`Read article: ${item.title}`}
                className="flex h-full flex-col justify-between focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral-800 bg-neutral-900">
                    <img
                      src={getOptimizedUnsplashUrl(item.image, idx === 0 ? 1200 : 800, idx === 0 ? 90 : 85)}
                      srcSet={`${getOptimizedUnsplashUrl(item.image, idx === 0 ? 480 : 360, idx === 0 ? 90 : 85)} ${idx === 0 ? 480 : 360}w, ${getOptimizedUnsplashUrl(item.image, idx === 0 ? 800 : 600, idx === 0 ? 90 : 85)} ${idx === 0 ? 800 : 600}w, ${getOptimizedUnsplashUrl(item.image, idx === 0 ? 1200 : 800, idx === 0 ? 90 : 85)} ${idx === 0 ? 1200 : 800}w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      fetchPriority={idx === 0 ? 'high' : undefined}
                      decoding="async"
                      width={idx === 0 ? 1200 : 800}
                      height={idx === 0 ? 750 : 500}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover brightness-[0.9] transition-transform duration-700 ease-out group-hover:scale-105"
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
                        <span>{item.publishedDate}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-amber-500" />
                        <span>{item.readTime}</span>
                      </span>
                    </div>

                    <h2 className="font-serif text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-amber-400">
                      {item.title}
                    </h2>
                    <p className="line-clamp-3 text-sm leading-relaxed text-neutral-400">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-neutral-900/80 px-6 py-4">
                  <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                    <User className="h-3.5 w-3.5 text-amber-500" />
                    <span>{item.author.split(' ')[0]}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 transition-colors duration-300 group-hover:text-amber-300">
                    <span>Read</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function BlogArticle({ post, canonical }: { post: BlogPost; canonical: string }) {
  const image = getOptimizedUnsplashUrl(post.image, 1400, 90);

  return (
    <article className="min-h-screen bg-neutral-900 font-sans text-neutral-100">
      <BlogMetadata
        title={`${post.title} | PrestigeTime`}
        description={post.summary}
        canonical={canonical}
        image={image}
        type="article"
      />

      <header className="relative mx-auto flex min-h-[360px] max-w-7xl items-end overflow-hidden border-b border-neutral-800 sm:min-h-[480px]">
        <img
          src={image}
          srcSet={`${getOptimizedUnsplashUrl(post.image, 600, 85)} 600w, ${getOptimizedUnsplashUrl(post.image, 1000, 90)} 1000w, ${image} 1400w`}
          sizes="(max-width: 640px) 100vw, 1280px"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1400}
          height={900}
          alt={post.imageAlt}
          className="absolute inset-0 h-full w-full object-cover brightness-[0.55]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/35 to-neutral-900/10" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-10 sm:px-6 sm:pb-14">
          <Link
            to="/blog"
            className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 hover:text-amber-300"
          >
            <BookOpen className="h-4 w-4" />
            All articles
          </Link>
          <div className="mb-3 flex items-center gap-4 text-xs font-mono font-semibold uppercase text-amber-300">
            <span>{post.publishedDate}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="max-w-3xl font-serif text-3xl font-bold text-white sm:text-5xl">
            {post.title}
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex items-center gap-2 border-b border-neutral-800 pb-5 text-sm text-neutral-400">
          <User className="h-4 w-4 text-amber-500" />
          <span>By {post.author}</span>
          <span className="text-neutral-600">|</span>
          <span>PrestigeTime Editorial Guild</span>
        </div>

        <div className="space-y-5 text-sm font-light leading-relaxed text-neutral-300 sm:text-base">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="rounded-lg border border-neutral-850 bg-neutral-950 p-5 font-serif text-sm italic text-neutral-400">
          At PrestigeTime, we believe behind every fine tick is an appreciation for
          micro-engineering history. Continue your journey with us and discover
          watches that tell much more than time.
        </div>

        <Link
          to="/blog"
          className="inline-flex items-center gap-2 border-t border-neutral-800 pt-6 text-xs font-bold uppercase tracking-widest text-amber-400 hover:text-amber-300"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          Return to articles
        </Link>
      </div>
    </article>
  );
}

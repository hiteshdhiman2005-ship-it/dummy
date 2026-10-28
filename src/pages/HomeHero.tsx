import { Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HomeHeroProps {
  setSelectedCategory: (category: 'All' | 'Luxury' | 'Sports' | 'Smart' | 'Classic') => void;
}

export default function HomeHero({ setSelectedCategory }: HomeHeroProps) {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden border-b border-neutral-800 bg-[#11100e]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(184,134,64,0.16),transparent_34%),linear-gradient(115deg,#11100e_0%,#17130e_48%,#0b0b0a_100%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:min-h-[calc(100vh-138px)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8 lg:py-16">
        <div className="relative z-10 max-w-xl">
          <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-300">
            <span className="h-px w-10 bg-amber-500" />
            <Sparkles className="h-3.5 w-3.5" />
            <span>Independent watchmaking, considered daily</span>
          </div>

          <h1 className="mb-6 max-w-2xl font-serif text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Time, <span className="text-amber-400">well made.</span>
          </h1>

          <p className="mb-10 max-w-lg text-left text-base font-light leading-relaxed tracking-wide text-neutral-300 sm:text-lg">
            Thoughtful proportions, dependable movements, and materials chosen to age beautifully. Find the piece that becomes part of your story.
          </p>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <button
              id="hero-shop-collection-btn"
              onClick={() => {
                setSelectedCategory('All');
                navigate('/services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full min-w-[190px] cursor-pointer rounded-sm bg-amber-500 px-5 py-4 text-sm font-bold tracking-[0.12em] text-neutral-950 shadow-lg shadow-amber-900/20 transition-all duration-300 hover:bg-amber-400 hover:shadow-amber-500/20 sm:w-fit sm:px-7 sm:tracking-[0.16em]"
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
              className="flex w-full min-w-[190px] cursor-pointer items-center justify-center space-x-2 rounded-sm border border-neutral-600 bg-white/[0.03] px-5 py-4 text-sm font-bold tracking-[0.12em] text-neutral-200 transition-all duration-300 hover:bg-white/[0.08] hover:text-white sm:w-fit sm:px-7 sm:tracking-[0.16em]"
            >
              <span>EXPLORE NEW ARRIVALS</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative flex min-h-[240px] items-center justify-center sm:min-h-[300px] lg:min-h-[560px]">
          <div className="absolute inset-0 rounded-[2rem] border border-amber-500/10 bg-neutral-950/30" />
          <div className="relative z-10 w-full max-w-md rounded-[1.75rem] border border-neutral-800 bg-neutral-900/75 p-4 shadow-2xl shadow-black/30 sm:p-6">
            <div className="pointer-events-none absolute inset-x-8 top-4 h-28 rounded-full bg-amber-500/10 blur-3xl" />
            <img
              src="/luxury-watch-men-cut.svg"
              alt="Luxury watch for men"
              className="relative z-10 mx-auto w-full max-w-[320px] drop-shadow-[0_26px_40px_rgba(0,0,0,0.45)]"
            />
            <div className="relative z-10 mt-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-amber-400">PT / 01</p>
              <h3 className="mt-4 font-serif text-2xl text-white sm:text-3xl">The automatic collection</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Precision engineered for collectors who value subtle luxury, enduring craftsmanship, and refined everyday wear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

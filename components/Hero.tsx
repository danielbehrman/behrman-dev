import FadeUp from '@/components/FadeUp'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-56px)] flex items-center relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-accent/[0.04] blur-[140px]" />
      </div>

      <div className="max-w-content mx-auto px-6 py-24 relative z-10 w-full">
        <FadeUp>
          <p className="section-label mb-6">Shipyard</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary leading-[1.1] tracking-tight mb-8">
            Hi, I&rsquo;m Dan Behrman&nbsp;&mdash;<br />
            welcome to Shipyard,<br />
            where I build things.
          </h1>
          <a
            href="#work"
            className="inline-block px-6 py-3 bg-accent text-background font-heading font-semibold text-sm rounded-lg hover:bg-accent/90 transition-colors"
          >
            See what I&rsquo;m building
          </a>
        </FadeUp>
      </div>
    </section>
  )
}

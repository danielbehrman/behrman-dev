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
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary leading-[1.1] tracking-tight mb-6">
            Marketer. Writer. Builder.<br />
            I&rsquo;ve been told to pick one. I haven&rsquo;t.
          </h1>
          <p className="text-secondary text-lg leading-relaxed mb-10 max-w-[600px]">
            AI marketing strategy for companies that want more than a chatbot. A physics Substack with my 7-year-old. Products that won&rsquo;t leave me alone. All of it lives here.
          </p>
          <a
            href="#consulting"
            className="inline-block px-6 py-3 bg-accent text-primary font-heading font-semibold text-sm rounded-lg hover:bg-accent/90 transition-colors"
          >
            See what I&rsquo;m working on
          </a>
        </FadeUp>
      </div>
    </section>
  )
}

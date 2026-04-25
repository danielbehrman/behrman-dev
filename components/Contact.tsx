import FadeUp from '@/components/FadeUp'

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-content mx-auto px-6">
        <FadeUp>
          <p className="section-label mb-10">Contact</p>
          <div className="space-y-5">
            <a
              href="mailto:dan@behrman.dev"
              className="flex items-center gap-3.5 text-primary hover:text-accent transition-colors group"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="text-[15px]">dan@behrman.dev</span>
            </a>

            <a
              href="https://substack.com/@danandari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 text-primary hover:text-accent transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
              </svg>
              <span className="text-[15px]">Subscribe on Substack</span>
            </a>

            <a
              href="https://www.linkedin.com/in/dan-behrman/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 text-primary hover:text-accent transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-[15px]">LinkedIn</span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

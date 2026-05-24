import FadeUp from '@/components/FadeUp'

export default function Marketing() {
  return (
    <section id="marketing" className="py-24 border-t border-border">
      <div className="max-w-content mx-auto px-6">
        <FadeUp>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy leading-tight tracking-tight mb-10">
            Marketing &times; Engineering
          </h2>
          <div className="space-y-6 text-primary/90 text-[17px] leading-[1.75]">
            <p>
              Most marketing teams using AI have noisy output they&rsquo;re cleaning up by hand.
              Nobody is thinking about hallucination rates, input design, synthesis architecture,
              or process QA. That is an engineering problem wearing a marketing hat, and most
              rooms have nobody who can see it for what it is.
            </p>
            <p>I can.</p>
            <p>
              I work with late-stage startups and growing marketing teams on what AI-first actually
              means at the process level. Not GPT wrappers. Not chatbots bolted onto the workflows
              you already had. The actual infrastructure that lets a team operate differently:
              multi-agent pipelines, automated research and synthesis, marketing that runs without
              a senior person in every room for every decision.
            </p>
            <p>
              My background is an odd one on paper. Structural analysis on the Boeing 787. Rides
              at Walt Disney Imagineering. Then 20 years in product and marketing at Amazon, Meta,
              T-Mobile, Grammarly, and Highspot. I started my business career in consulting at
              Accenture. I&rsquo;ve been doing this longer than the job title existed.
            </p>
            <p>
              That instinct is why this work fits. I still write code. I maintain an active
              personal stack. I understand the dev cycle, the model behavior, and the positioning
              simultaneously. Most people in this space can do one or two of those. Not all three.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

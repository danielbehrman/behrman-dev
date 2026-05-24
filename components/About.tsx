import FadeUp from '@/components/FadeUp'

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-content mx-auto px-6">
        <FadeUp>
          <p className="section-label mb-10">About</p>
          <div className="space-y-6 text-primary/90 text-[17px] leading-[1.75]">
            <p>
              My first job out of engineering school was designing rides at Walt Disney Imagineering.
              Later, structural analysis on the Boeing 787. Somewhere along the way I realized the
              build wasn&rsquo;t the interesting part. Making people understand why it mattered was.
              That turned into 20 years in product and marketing at Amazon, Meta, T-Mobile,
              Grammarly, and Highspot.
            </p>
            <p>
              I&rsquo;ve been building things since I was five years old, drawing up plans
              for roller coasters and dreaming about becoming a Disney Imagineer. That
              dream stuck. I became a mechanical engineer, spent time at Imagineering
              designing experiences meant to make people genuinely happy, and realized
              somewhere in there that&rsquo;s just who I am. I build things because making
              someone&rsquo;s life a little better is the best feeling I know.
            </p>
            <p>
              My son Ari brought me back to something I&rsquo;d always loved but never made
              enough time for. We started exploring physics together. The cosmos, how
              things work, why the universe behaves the way it does. Watching him get
              excited about it reminded me why I fell in love with it in the first place.
              It&rsquo;s one of the best things we do together.
            </p>
            <p>
              My younger son Joshy has anaphylactic food allergies (dairy, eggs, sesame,
              peanuts) and we&rsquo;re deep in an allergy program that has made our whole
              family hyper-aware of what that life actually looks like. The separate lunch
              tables. The birthday parties where we bring our own food or leave early. The
              way a kid can feel like an outsider just because of what they can&rsquo;t eat.
              I&rsquo;m writing a children&rsquo;s book because I haven&rsquo;t found one that makes
              those kids, and their parents, feel truly seen. I want to change that.
            </p>
            <p>
              This is Shipyard. It&rsquo;s where I build the things I can&rsquo;t stop thinking
              about.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Consulting from '@/components/Consulting'
import Building from '@/components/Building'
import Writing from '@/components/Writing'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Consulting />
        <Building />
        <Writing />
        <About />
        <Contact />
      </main>
    </>
  )
}

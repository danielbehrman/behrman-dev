import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marketing from '@/components/Marketing'
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
        <Marketing />
        <Building />
        <Writing />
        <About />
        <Contact />
      </main>
    </>
  )
}

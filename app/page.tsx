import Hero from '@/components/Hero'
import ValueProposition from '@/components/ValueProposition'
import Experience from '@/components/Experience'
import Services from '@/components/Services'
import SuccessStories from '@/components/SuccessStories'
import WhyWorkTogether from '@/components/WhyWorkTogether'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ValueProposition />
      <Experience />
      <Services />
      <SuccessStories />
      <WhyWorkTogether />
      <Contact />
      <Footer />
    </main>
  )
}

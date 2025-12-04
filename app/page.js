import About from '@/components/About'
import Hero from '@/components/Hero'
import HowWeHelp from '@/components/HowWeHelp'
import LogoCarousel from '@/components/LogoCarousel'
import Testimonials from '@/components/Testimonials'
import WhatWeDo from '@/components/WhatWeDo'
import WorkSection from '@/components/WorkSection'

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <LogoCarousel />
      <WhatWeDo />
      <HowWeHelp />
      <About />
      <Testimonials />
    </>
  )
}
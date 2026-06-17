import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { TrustBar } from "@/components/sections/TrustBar"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { Services } from "@/components/sections/Services"
import { Membership } from "@/components/sections/Membership"
import { Trainers } from "@/components/sections/Trainers"
import { Transformations } from "@/components/sections/Transformations"
import { Reviews } from "@/components/sections/Reviews"
import { Gallery } from "@/components/sections/Gallery"
import { FAQ } from "@/components/sections/FAQ"
import { CTASection } from "@/components/sections/CTASection"
import { Contact } from "@/components/sections/Contact"
import { FloatingCTAs } from "@/components/FloatingCTAs"

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhyChooseUs />
        <Services />
        <Membership />
        <Trainers />
        <Transformations />
        <Reviews />
        <Gallery />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <FloatingCTAs />
    </div>
  )
}

export default App

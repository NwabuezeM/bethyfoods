import AboutSection from "./aboutSection"
import FeaturedDelicacies from "./featuredProducts"
import HappyHour from "./happyHour"
import HeroSection from "./heroSection"
import Testimonials from "./testimonials"


function Home() {
  return (
    <main>
      <section>
        <HeroSection />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <FeaturedDelicacies />
      </section>
      <section>
        <HappyHour />
      </section>
      <section>
        <Testimonials />
      </section>
    </main>
  )
}

export default Home
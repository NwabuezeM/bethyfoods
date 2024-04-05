import ContactForm from "./contactForm"
import ContactHeroSection from "./heroSection"
import OurNumbers from "./ourNumbers"


function Contact() {
  return (
    <main>
      <section>
        <ContactHeroSection />
      </section>
      <section>
        <OurNumbers />
      </section>
      <section>
        <ContactForm />
      </section>
    </main>
  )
}

export default Contact
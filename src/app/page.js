import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Portfolio from "@/components/Portfolio/Portfolio";
import Awards from "@/components/Awards/Awards";
import CTA from "@/components/CTA/CTA";
import Process from "@/components/Process/Process";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Experience />
      <Portfolio />
      <Awards />
      <CTA />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AlertSigns from "@/components/AlertSigns";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <AlertSigns />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

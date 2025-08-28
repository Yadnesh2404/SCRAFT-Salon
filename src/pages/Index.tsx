import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AnimationTest } from "@/components/AnimationTest";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="font-body scroll-smooth">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Gallery />
        <AnimationTest />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;

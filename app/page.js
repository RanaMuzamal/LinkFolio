import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Services />
      <Portfolio />
      <Experience />
      <Education />
      <Testimonials />
      <Footer />
    </>
  );
}

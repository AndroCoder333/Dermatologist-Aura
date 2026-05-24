import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import DoctorsSection from "@/components/DoctorsSection";
import Testimonials from "@/components/Testimonials";
import AppointmentForm from "@/components/AppointmentForm";
import MapSection from "@/components/MapSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <BeforeAfterSlider />
        <DoctorsSection />
        <Testimonials />
        <AppointmentForm />
        <MapSection />
        {/* <BlogSection /> */}
      </main>
      <Footer />
    </>
  );
}

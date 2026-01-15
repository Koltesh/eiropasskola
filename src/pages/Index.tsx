import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyETV from "@/components/WhyETV";
import HowLearningWorks from "@/components/HowLearningWorks";
import Programs from "@/components/Programs";
import Events from "@/components/Events";
import Accreditation from "@/components/Accreditation";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyETV />
        <HowLearningWorks />
        <Programs />
        <Events />
        <Accreditation />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

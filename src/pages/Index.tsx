import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import CommitteesSection from "@/components/CommitteesSection";
import TeamSection from "@/components/TeamSection";
import OpportunitiesSection from "@/components/OpportunitiesSection";
import ApplySection from "@/components/ApplySection";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/components/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventDetailsSection />
      <CommitteesSection />
      <TeamSection />
      <OpportunitiesSection />
      <ApplySection />
      <Footer />
    </div>
  );
};

export default Index;

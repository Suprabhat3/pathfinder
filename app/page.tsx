import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundAmbience from "@/components/landing/BackgroundAmbience";
import Hero from "@/components/landing/Hero";
import FeatureGrid from "@/components/landing/FeatureGrid";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans overflow-hidden">
      <BackgroundAmbience />
      <Navbar />
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}

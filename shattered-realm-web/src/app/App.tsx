import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { StorySection } from "./components/StorySection";
import { RealmsSection } from "./components/RealmsSection";
import { CharactersSection } from "./components/CharactersSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { TrailerSection } from "./components/TrailerSection";
import { DeveloperFeedbackSection } from "./components/DeveloperFeedbackSection";
import { DownloadSection } from "./components/DownloadSection";
import { Footer } from "./components/Footer";
import { TrailerComingPage } from "./components/TrailerComingPage";

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  if (pathname === "/trailer") {
    return <TrailerComingPage />;
  }

  return (
    <div className="min-h-screen" style={{ background: "#08060f", fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RealmsSection />
      <CharactersSection />
      <StorySection />
      <TrailerSection />
      <DeveloperFeedbackSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
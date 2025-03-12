import React from "react";
import PagesLayouts from "../layouts/PagesLayouts";
import HeroSection from "../components/HeroSection";
import WelcomeSection from "../components/WelcomeSection";

const Landing = () => {
  return (
    <PagesLayouts>
      <HeroSection />
      <WelcomeSection />
    </PagesLayouts>
  );
};

export default Landing;

import React from "react";
import PagesLayouts from "../layouts/PagesLayouts";
import HeroSection from "../components/HeroSection";
import WelcomeSection from "../components/WelcomeSection";
import EventsAndPrograms from "../components/EventsAndPrograms";

const Landing = () => {
  return (
    <PagesLayouts>
      <HeroSection />
      <WelcomeSection />
      <EventsAndPrograms />
    </PagesLayouts>
  );
};

export default Landing;

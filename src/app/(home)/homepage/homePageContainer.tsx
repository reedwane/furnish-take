"use client";

import AboutTDNS from "./about";
import HomeHero from "./hero";
import EventSchedule from "./schedule";

const HomePageContainer = () => {
  return (
    <main>
      <HomeHero />
      <AboutTDNS />
      <EventSchedule />
    </main>
  );
};

export default HomePageContainer;

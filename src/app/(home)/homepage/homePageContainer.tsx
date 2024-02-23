"use client";

import AboutTDNS from "./about";
import BookPreview from "./book-launch-preview";
import HomeHero from "./hero";
import MeetSpeakers from "./meet-speakers";
import MeetSponsors from "./meet-sponsors";
import EventSchedule from "./schedule";

const HomePageContainer = () => {
  return (
    <main>
      <HomeHero />
      <AboutTDNS />
      <EventSchedule />
      <BookPreview />
      <MeetSpeakers />
      <MeetSponsors />
    </main>
  );
};

export default HomePageContainer;

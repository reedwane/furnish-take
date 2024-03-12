"use client";

import { Button, FancyHeader, Maxwidth } from "@/components";
import PersonCard from "@/components/PersonCard";
import { routePaths } from "@/utils/routepaths";
import Link from "next/link";
import { speakers } from "@/utils/People";

const MeetSpeakers = () => {
  return (
    <Maxwidth tw="py-6 lg:py-14 flex flex-col">
      <FancyHeader primary="MEET OUR" secondary="SPEAKERS" />


      
      <ul tw="flex gap-7 overflow-x-auto pt-10 pr-10 pb-3 md:(gap-10 pb-7) lg:(pt-16)">
        {speakers.map((person, index)=>(
          <li key={index} >
            <PersonCard person={person} />
          </li>
        ))}
      </ul>

      <Button
        as={Link}
        href={routePaths.speakers.path}
        $shadow="dark"
        tw="mt-8 lg:(mt-14)"
      >
        VIEW ALL SPEAKERS
      </Button>
    </Maxwidth>
  );
};

export default MeetSpeakers;

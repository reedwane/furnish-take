"use client";

import { FancyHeader, Maxwidth } from "@/components";
import Image from "next/image";
import logo from "/public/logo.png";

const MeetSponsors = () => {
  return (
    <Maxwidth tw="py-6 lg:(py-14 pt-20) flex flex-col">
      <FancyHeader primary="MEET OUR" secondary="SPONSORS & PARTNERS" />

      <ul tw="flex gap-7 overflow-x-auto pt-10 pb-3 md:(gap-10 pb-7) lg:(pt-16)">
        {[...Array(5)].map((_, index) => (
          <li key={index}>
            <Image
              src={logo}
              alt="partner"
              tw="max-w-[58px] lg:(max-w-[132px])"
            />
          </li>
        ))}
      </ul>
    </Maxwidth>
  );
};

export default MeetSponsors;

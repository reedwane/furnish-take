"use client";

import { FancyHeader, Maxwidth } from "@/components";
import Image from "next/image";
import logo from "/public/logo.png";

const MeetSponsors = () => {
  const sponsors = [
    {
      image: "/logo.png",
      name: "",
      url: "/",
    },
    {
      image: "/partners/rifaaq-fav.png",
      name: "Rifaaq",
      url: "https://rifaaq.com",
    },
    {
      image: "/logo.png",
      name: "",
      url: "/",
    },
  ];
  return (
    <Maxwidth tw="py-6 lg:(py-14 pt-20) flex flex-col">
      <FancyHeader primary="MEET OUR" secondary="SPONSORS & PARTNERS" />

      <ul tw="flex gap-7 overflow-x-auto pt-10 pb-3 md:(gap-10 pb-7) lg:(pt-16)">
        {sponsors.map((sponsor, index) => (
          <li key={index}>
            <a
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              tw="flex flex-col items-center"
            >
              <div tw="relative w-[58px] h-[58px]  max-w-[58px] lg:(max-w-[132px])">
                <Image
                  src={sponsor.image}
                  alt="partner"
                  fill
                  tw="object-contain"
                />
              </div>
              {sponsor.name ? <p>{sponsor.name}</p> : null}
            </a>
          </li>
        ))}
      </ul>
    </Maxwidth>
  );
};

export default MeetSponsors;

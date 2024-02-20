"use client";

import { Heading, Logo, Maxwidth, Paragraph } from "@/components";
import { FancyHeader, afterUnderline } from "@/components/heading";
import tw from "twin.macro";

const AboutTDNS = () => {
  const expectations = [
    "Keynote presentations on the event theme",
    "Panel discussions",
    "Business exhibitions and networking",
    "Fireside chat with the author of Before you fall in love",
    "Book Launch",
    "Games and fun",
  ];
  return (
    <Maxwidth tw="py-8 px-5 md:(px-8) lg:(pt-20 pb-16)">
      <div tw="pb-8 lg:(pb-14 flex justify-between gap-36)">
        <div>
          <FancyHeader primary="ABOUT THE DEEN" secondary="NETWORKING SUMMIT" />

          <section tw="flex flex-col gap-4 pt-4 lg:(pt-14 gap-8)">
            <Paragraph>
              In a world where everyone is virtually connected but humanly
              disconnected.
            </Paragraph>
            <Paragraph>
              The Deen Networking Summit is where you will be presented with the
              Islamic panacea to contemporary escapism.
            </Paragraph>
            <Paragraph>
              You are about to experience a unique curation of value. One which
              aims to foster spiritually productive and socially profitable
              connections between you and your brethren.
            </Paragraph>
            <Paragraph>
              We see this as our contribution to your prosperity in both worlds
              – we hope you also see it as such.
            </Paragraph>
          </section>
        </div>

        <Logo tw="hidden lg:(block w-full max-w-[342px]) [img]:(w-full)" />
      </div>

      <FancyHeader
        secondary="EXPECTATIONS"
        headingStyles={tw`pb-6 lg:(pb-14)`}
        $variant="h3"
      />

      <ul tw="grid gap-6 md:(grid-cols-2 gap-x-16 gap-y-10) lg:(grid-cols-3 gap-x-28 gap-y-20)">
        {expectations.map((expectation) => (
          <Paragraph
            as={"li"}
            key={expectation}
            tw="flex items-center gap-6 font-semibold lg:(gap-10 text-xl)"
          >
            <div tw="w-5 min-w-[20px] h-5 rounded-lg bg-secondary shadow-[4px_4px_0px_0px] shadow-primaryLight lg:(shadow-[8px_8px_0px_0px] shadow-primaryLight border border-primaryLight min-w-[54px] h-[54px] rounded-xl)" />{" "}
            {expectation}
          </Paragraph>
        ))}
      </ul>
    </Maxwidth>
  );
};

export default AboutTDNS;

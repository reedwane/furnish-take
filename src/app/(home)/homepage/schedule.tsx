"use client";

import { FancyHeader, Maxwidth, Paragraph } from "@/components";
import { Heading, primaryShadow } from "@/components/heading";

const EventSchedule = () => {
  return (
    <Maxwidth tw="py-8 px-5 md:(px-8) lg:(pt-20 pb-16)">
      <FancyHeader primary="EVENT" secondary="SCHEDULE" />

      <div tw="pt-6 md:(pt-10) lg:(pt-14) flex overflow-x-auto gap-8 pb-4 lg:(pb-8)">
        {schedule.map((item, idx) => {
          const { time, type, venue, title, sub } = item;
          return (
            <div
              key={idx}
              tw="bg-secondary rounded-xl p-6 text-white min-w-[300px] lg:(min-w-[493px])"
              css={[primaryShadow]}
            >
              <Paragraph tw="text-[8px] pb-3 lg:(text-sm)">
                {type} | {time} | {venue}
              </Paragraph>

              <Heading $variant="h4" as={"h4"}>
                {title}
              </Heading>

              <Paragraph tw="text-xs pt-7 lg:(text-base)">{sub}</Paragraph>
            </div>
          );
        })}
      </div>
    </Maxwidth>
  );
};

const schedule = [
  {
    time: "9:30AM-10:00AM",
    type: "PANEL",
    venue: "ADEBISI HALL",
    title:
      "The Deen Networking Summit: a gathering for cross-disciplinary connection and idea sharing.",
    sub: "This panel will delve into the deen networking summit which is a gathering for cross disciplinary connection and idea sharing.",
  },
  {
    time: "9:30AM-10:00AM",
    type: "PANEL",
    venue: "ADEBISI HALL",
    title:
      "The Deen Networking Summit: a gathering for cross-disciplinary connection and idea sharing.",
    sub: "This panel will delve into the deen networking summit which is a gathering for cross disciplinary connection and idea sharing.",
  },
  {
    time: "9:30AM-10:00AM",
    type: "PANEL",
    venue: "ADEBISI HALL",
    title:
      "The Deen Networking Summit: a gathering for cross-disciplinary connection and idea sharing.",
    sub: "This panel will delve into the deen networking summit which is a gathering for cross disciplinary connection and idea sharing.",
  },
  {
    time: "9:30AM-10:00AM",
    type: "PANEL",
    venue: "ADEBISI HALL",
    title:
      "The Deen Networking Summit: a gathering for cross-disciplinary connection and idea sharing.",
    sub: "This panel will delve into the deen networking summit which is a gathering for cross disciplinary connection and idea sharing.",
  },
];

export default EventSchedule;

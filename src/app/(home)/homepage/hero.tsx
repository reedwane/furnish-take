"use client";

import { Button, Heading, Maxwidth, Paragraph } from "@/components";
import useCountdown from "@/utils/hooks/useCountdown";
import { zonedTimeToUtc } from "date-fns-tz";

const HomeHero = () => {
  const targetTimeZone = "Africa/Lagos"; // WAT is Africa/Lagos time zone
  const watDateTime = zonedTimeToUtc(
    new Date(2024, 3, 20, 9, 0, 0),
    targetTimeZone
  );
  const { days, hours, minutes, seconds } = useCountdown(watDateTime);

  const countDownMap = [
    { value: days ?? 0, label: "DAYS" },
    { value: hours ?? 0, label: "HOURS" },
    { value: minutes ?? 0, label: "MINUTES" },
    { value: seconds ?? 0, label: "SECONDS" },
  ];

  return (
    <section tw="bg-secondary bg-[url('/hero.png')] bg-center bg-cover relative -mt-52 pt-52 text-white">
      <div tw="absolute top-0 left-0 w-full h-full bg-secondary/70 z-[0]" />

      <Maxwidth tw="z-[1] relative">
        <div tw="xl:(px-20) pb-[73px] lg:(pb-[110px])">
          <div tw="relative w-fit">
            <Heading tw="max-sm:text-4xl">
              THE DEEN <span tw="block text-primaryLight">NETWORKING</span>{" "}
              SUMMIT
            </Heading>
            <Paragraph tw="text-xs min-[428px]:(absolute bottom-0 -right-20) md:(right-8 bottom-8) lg:(right-20) text-primaryLight lg:text-xl">
              THEME: <br />
              Paths to lasting connections
            </Paragraph>
          </div>

          <Paragraph tw="pt-4 pb-6 lg:(pt-5 pb-14)">
            A gathering that explores the essence of meaningful <br />{" "}
            connections guided by Islamic principles.
          </Paragraph>

          <div tw="flex flex-col gap-6 md:(flex-row) lg:(gap-[88px])">
            <Button $shadow="light">GET TICKETS</Button>
            <Button $shadow="light">BECOME A SPONSOR</Button>
          </div>
        </div>
      </Maxwidth>

      <div tw="py-4 xl:(px-20 py-9) bg-gradient-to-r from-primary to-secondary relative z-[1]">
        <Maxwidth tw="flex justify-between gap-2 items-center">
          <div tw="w-fit font-semibold">
            <Paragraph tw="max-sm:text-[8px] w-full border-b-2 border-primaryLight">
              SEE YOU ON
            </Paragraph>
            <Paragraph tw="max-sm:text-[8px]">
              April 20, Adebisi Hall, Ibadan, Nigeria.
            </Paragraph>
          </div>

          <div tw="flex flex-1 justify-end gap-3.5 flex-wrap xl:(gap-12)">
            {countDownMap.map((entry, idx) => (
              <div key={idx}>
                <Heading
                  $variant="h2"
                  tw="max-sm:text-lg font-medium md:pb-2 w-full text-center"
                >
                  {entry.value}
                </Heading>
                <Heading $variant="h4" tw="max-sm:text-[8px] font-medium">
                  {entry.label}
                </Heading>
              </div>
            ))}
          </div>
        </Maxwidth>
      </div>
    </section>
  );
};

export default HomeHero;

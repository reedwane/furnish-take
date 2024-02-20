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
    <section tw="bg-secondary bg-[url('/hero.png')] bg-center bg-cover bg-blend-overlay -mt-52 pt-52 text-white">
      <Maxwidth tw="">
        <div tw="px-5 lg:(px-20) pb-[73px] lg:(pb-[110px])">
          <div tw="relative w-fit">
            <Heading>
              THE DEEN <span tw="block text-primary">NETWORKING</span> SUMMIT
            </Heading>
            <Paragraph tw="text-xs absolute bottom-0 -right-8 md:(right-8 bottom-8) lg:(right-20) text-primary lg:text-xl">
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

      <div tw="py-4 px-5 lg:(px-20 py-9) bg-gradient-to-r from-primary to-secondary">
        <Maxwidth tw="flex justify-between items-center">
          <div tw="w-fit font-semibold">
            <Paragraph tw="w-full border-b-2 border-primaryLight">
              SEE YOU ON
            </Paragraph>
            <Paragraph>April 20, Adebisi Hall, Ibadan, Nigeria.</Paragraph>
          </div>

          <div tw="flex gap-3.5 flex-wrap xl:(gap-12)">
            {countDownMap.map((entry, idx) => (
              <div key={idx}>
                <Heading $variant="h2" tw="font-medium pb-2 text-center">
                  {entry.value}
                </Heading>
                <Heading $variant="h4" tw="font-medium">
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

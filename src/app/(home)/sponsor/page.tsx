"use client";

import { Button, Heading, Maxwidth, Paragraph } from "@/components";
import { primaryShadow } from "@/components/heading";
import Link from "next/link";

const SponsorshipPage = () => {

  const sponsorship_plans = [
    {
      title : "Bronze",
      price : "N100,000",
      features : [
        "Social media mention as one of our sponsors",
        "Quarter-page advert of your services within the event programme",
        "Placement of your logo on the red carpet backdrop",
        "Recognition from the stage during the event, thanking you for your support",
        "Relevant event photography to be presented post-event"
      ]
    },
    {
      title : "Silver",
      price : "N200,000",
      features : [
        "Social media mention as one of our sponsors",
        "Half-page advert of your services within the event programme",
        "Placement of your logo on the red carpet backdrop",
        "Recognition from the stage during the event, thanking you for your support",
        "One display of your company logo or video (either supplied by you or designed by us)",
        "Relevant event photography to be presented post-event",
        "Appearance in all post-event graphics and audiovisuals"
      ]
    },
    {
      title : "Gold",
      price : "N300,000",
      features : [
        "Placement of your brand identity on the event website",
        "Social media mention as one of our sponsors",
        "Full-page advert of your services within the event programme",
        "Placement of your logo on the red carpet backdrop",
        "Positioning of your brand’s quill flag or roll-up banner at the event venue (if supplied)",
        "Recognition from the stage during the event, thanking you for your support",
        "Up to 2 dynamic displays of your company logo or videos (either supplied by you or designed by our branding team)",
        "Special mention in all press releases to trade media.",
        "Relevant event photography to be presented post-event",
        "Appearance in all post-event graphics and audiovisuals"
      ]
    },
  ]

  return (
    <div>
      <div tw="bg-secondary text-white border-b-2 border-b-secondary bg-[url('/waves.png')] bg-cover bg-center">
        <Maxwidth tw="py-12 px-5 md:(flex-row justify-start gap-20) xl:(px-0) uppercase">
          <Heading $variant="h4" as="h1">
            <span className="heading-title">Sponsorship</span>
            <br />
            <span className="heading-subtitle">Oppurtunities</span>
          </Heading>
        </Maxwidth>
      </div>
      <section>
        <Maxwidth tw="py-8 space-y-8">
          <Paragraph>
            You can join the train whichever way you like. Discover how you can contribute to the success of The Deen Networking Summit
          </Paragraph>
          <div tw="grid md:grid-cols-3 gap-8 items-start">
            {sponsorship_plans.map((plan, idx)=>(
            <div
              key={idx}
              tw="bg-secondary rounded-xl p-6 text-white min-w-[300px] space-y-8 pb-12"
              css={[primaryShadow]}
            >
              <Heading $variant="h4" as={"h2"}>
                {plan.title}
              </Heading>
                <Heading $variant="h4" as="p">
                  {plan.price}
                </Heading>
                <ul tw="space-y-2">
                  {plan.features.map((feature, index)=>(
                  <li key={index}>
                      <div tw="flex items-start gap-2">
                        <img src="/icons/charm_tick.svg" tw="mt-1" />
                        <Paragraph> {feature} </Paragraph>
                      </div>
                    </li>
                  ))}
                </ul>

                <div>
                  <Button as={Link} href="mailto:info.deennetworkingsummit@gmail.com" $shadow="light">
                    BECOME A SPONSOR
                  </Button>
                </div>
            </div>
            ))}

          </div>
        </Maxwidth>
      </section>
    </div>
  );
};

export default SponsorshipPage;

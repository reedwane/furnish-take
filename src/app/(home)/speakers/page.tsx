"use client";

import { Button, Heading, Maxwidth, Paragraph } from "@/components";


const SpeakersPage = () => {
  return (
    <div>
      <div tw="bg-secondary text-white border-b-2 border-b-secondary bg-[url('/waves.png')] bg-cover bg-center">
        <Maxwidth tw="p-8 px-5 md:(flex-row justify-start gap-20) xl:(px-0) uppercase">
          <Heading $variant="h4" as="h1">
            <span tw="text-primaryLight">Meet our</span>
            <br/>
            <span tw="text-4xl">
              Speakers
            </span>
          </Heading>
        </Maxwidth>
      </div>
      <section>
        <Maxwidth tw="py-8 space-y-8">
          <Paragraph>
            From visionary founders to accomplished business leaders and esteemed Islamic scholars. TDNS gathers an exceptional lineup of speakers, each offering unique insights and expertise.
          </Paragraph>
          <div tw="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(12)].map(()=>(
              <Button as="div" tw='p-0 w-full max-md:max-w-[300px] mx-auto divide-y divide-secondary border border-secondary rounded-lg'>
                <div tw="bg-primary rounded-t-lg min-h-[200px] text-secondary space-y-2 text-left">

                </div>
                <div tw="bg-lightGrey rounded-b-lg text-secondary p-8 space-y-2 text-left">
                  <Heading $variant="h4" as="h2"> Abbas Shukurah </Heading>
                  <p>Project Manager</p>
                </div>
              </Button>

            ))}
          </div>
        </Maxwidth>
      </section>
    </div>

  )
};

export default SpeakersPage;

"use client";

import { Heading, Maxwidth, Paragraph } from "@/components";
import PersonCard from "@/components/PersonCard";


const OurTeamPage = () => {
  return (
    <div>
      <div tw="bg-secondary text-white border-b-2 border-b-secondary bg-[url('/waves.png')] bg-cover bg-center">
        <Maxwidth tw="p-8 px-5 md:(flex-row justify-start gap-20) xl:(px-0) uppercase">
          <Heading $variant="h4" as="h1">
            <span tw="text-primaryLight">Meet our</span>
            <br/>
            <span tw="text-4xl">
              Team
            </span>
          </Heading>
        </Maxwidth>
      </div>
      <section>
        <Maxwidth tw="py-8 space-y-8">
          <Paragraph>
            Meet our diverze team of  designers, developers, writers, event managers working together to make the  Deen Networking Summit a success.
          </Paragraph>
          <ul tw="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(12)].map((_, index)=>(
              <li key={index} >
                <PersonCard />
              </li>
            ))}
          </ul>
        </Maxwidth>
      </section>
    </div>

  )
};

export default OurTeamPage;

'use client'

import { Heading, Maxwidth, Paragraph } from "@/components";
import PersonCard from "@/components/PersonCard";
import { team_members } from "@/utils/People";

const OurTeamPage = () => {
  return (
    <div>
      <div tw="bg-secondary text-white border-b-2 border-b-secondary bg-[url('/waves.png')] bg-cover bg-center">
        <Maxwidth tw="py-12 px-5 md:(flex-row justify-start gap-20) xl:(px-0) uppercase">
          <Heading $variant="h4" as="h1">
            <span className="heading-title">Meet our</span>
            <br />
            <span className="heading-subtitle">Team</span>
          </Heading>
        </Maxwidth>
      </div>
      <section>
        <Maxwidth tw="py-8 space-y-8">
          <Paragraph>
            Meet our diverse team of designers, developers, writers, event
            managers working together to make the Deen Networking Summit a
            success.
          </Paragraph>
          <ul tw="grid md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4">
            {team_members.map((team_member, index) => (
              <li key={index}>
                <PersonCard person={team_member} />
              </li>
            ))}
          </ul>
        </Maxwidth>
      </section>
    </div>
  );
};

export default OurTeamPage;

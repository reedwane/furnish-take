"use client";

import { Button, Heading, Maxwidth, Paragraph } from "@/components";
import PersonCard from "@/components/PersonCard";


const SpeakersPage = () => {
  const speakers = [
    {
      "name": "Dr. Sanusi Lafiagi",
      position: "Writer, Teacher, Counselor, and Brand Influencer",
      image: "/speakers/Dr. Sanusi Lafiagi.png"
    },
    {
      "name": "Chief Saheed Oladele",
      position: "Chairman at Erudite Group, and The Baameko of Ibadan Land",
      image: "/speakers/Chief Saheed Oladele.png"
    },
    {
      "name": "Sanni Hassan",
      position: "Bespoke Tailor and Professional Event Host",
      image: "/speakers/Sanni Hassan.png"
    },
  ]
  return (
    <div>
      <div tw="bg-secondary text-white border-b-2 border-b-secondary bg-[url('/waves.png')] bg-cover bg-center">
        <Maxwidth tw="py-12 px-5 md:(flex-row justify-start gap-20) xl:(px-0) uppercase">
          <Heading $variant="h4" as="h1">
            <span className="heading-title">Meet our</span>
            <br/>
            <span className="heading-subtitle">
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
          <ul tw="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {speakers.map((person, index)=>(
              <li key={index} >
                <PersonCard person={person} />
              </li>
            ))}
          </ul>
        </Maxwidth>
      </section>
    </div>

  )
};

export default SpeakersPage;

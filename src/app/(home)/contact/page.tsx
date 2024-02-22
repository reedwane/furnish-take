"use client";

import { Button, FancyHeader, Heading, Maxwidth, Paragraph } from "@/components";
import PersonCard from "@/components/PersonCard";


const ContactPage = () => {
  return (
    <div tw="space-y-12 pb-12">
      <div tw="bg-secondary text-white border-b-2 border-b-secondary bg-[url('/waves.png')] bg-cover bg-center">
        <Maxwidth tw="p-8 px-5 md:(flex-row justify-start gap-20) xl:(px-0) uppercase">
          <Heading $variant="h4" as="h1">
            <span tw="text-4xl text-primaryLight">Contact us</span>
            <br/>
            <span tw="text-lg">Any question or remarks? Just write us a message!</span>
          </Heading>
        </Maxwidth>
      </div>
      <Maxwidth >
      <div>
        <div tw="grid md:grid-cols-2 gap-12">
            <div
              tw="bg-secondary rounded-xl p-6 text-white space-y-6"
            >
              <Heading $variant="h4" as={"h2"}>
                Contact Information
              </Heading>

              <ul tw="space-y-4">
                <li tw="flex gap-4 items-start">
                  <p>icon</p>
                  <p> Info.deennetworkingsummit@gmail.com </p>
                </li>
                <li tw="flex gap-4 items-start">
                  <p>icon</p>
                  <div>
                    <p>Abass: 08133547909</p>
                    <p>Oluwaseun: 09054568760</p>
                    <p>Ridwan: 08186012349</p>
                    <p>Hassanat: 07038785836</p>
                  </div>
                </li>
                <li tw="flex gap-4 items-start">
                  <p>icon</p>
                  <p>Otunba Subomi Balogun Conference hall, UI Hotels,University of Ibadan,Ibadan, Oyo State.</p>
                </li>
              </ul>

            </div>
            <div>
              <form tw="space-y-4">
                <Paragraph>Care to share with us your experience at The Deen Networking Summit? Fill out the feedback form below</Paragraph>

                <input type="text" name="name" required placeholder="Name" tw="px-4 py-4 rounded-xl border border-secondary text-secondary placeholder:text-secondary w-full" />
                <input type="email" name="email" required placeholder="Email" tw="px-4 py-4 rounded-xl border border-secondary text-secondary placeholder:text-secondary w-full" />

                <textarea name="message" required placeholder="Write message" tw="px-4 py-4 rounded-xl border border-secondary text-secondary placeholder:text-secondary w-full min-h-[200px]" />
                <Button >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
        </div>
      </div>
      </Maxwidth>
    </div>
  )
};

export default ContactPage;

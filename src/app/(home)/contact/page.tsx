"use client";

import {
  Button,
  FancyHeader,
  Heading,
  Maxwidth,
  Paragraph,
} from "@/components";
import PersonCard from "@/components/PersonCard";
import { socials } from "@/utils/routepaths";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";

const socialLinks = [
  {
    title: "instagram",
    icon: FaInstagram,
    link: socials.instagram.path,
  },
  {
    title: "twitter",
    icon: FaXTwitter,
    link: socials.twitter.path,
  },
  {
    title: "facebook",
    icon: SlSocialFacebook,
    link: socials.facebook.path,
  },
];

const ContactPage = () => {
  return (
    <div tw="space-y-12 pb-12">
      <div tw="bg-secondary text-white border-b-2 border-b-secondary bg-[url('/waves.png')] bg-cover bg-center">
        <Maxwidth tw="py-12 px-5 md:(flex-row justify-start gap-20) xl:(px-0) uppercase">
          <Heading $variant="h4" as="h1">
            <span className="heading-subtitle" tw="text-primaryLight">
              Contact us
            </span>
            <br />
            <span>Any question or remarks? Just write us a message!</span>
          </Heading>
        </Maxwidth>
      </div>
      <Maxwidth>
        <div>
          <div tw="grid md:grid-cols-2 gap-12">
            <div tw="bg-secondary rounded-xl p-6 break-all  text-white space-y-6 flex flex-col justify-between">
              <div tw="space-y-12">
                <Heading $variant="h4" as={"h2"}>
                  Contact Information
                </Heading>

                <ul tw="space-y-8">
                  <li tw="flex gap-4 items-start">
                    <img src="/icons/mail.svg" alt="" />
                    <p>
                      {" "}
                      <a href="mailto:Info.deennetworkingsummit@gmail.com">
                        Info.deennetworkingsummit@gmail.com
                      </a>{" "}
                    </p>
                  </li>
                  <li tw="flex gap-4 items-start">
                    <img src="/icons/phone.svg" alt="" />
                    <div>
                      <p>
                        Abass: <a href="tel:08133547909">08133547909</a>
                      </p>
                      <p>
                        Oluwaseun: <a href="tel:09054568760">09054568760</a>
                      </p>
                      <p>
                        Ridwan: <a href="tel:08186012349">08186012349</a>
                      </p>
                      <p>
                        Hassanat: <a href="tel:07038785836">07038785836</a>
                      </p>
                    </div>
                  </li>
                  <li tw="flex gap-4 items-start">
                    <img src="/icons/map.svg" alt="" />
                    <p>
                      New Lecture Theater, Department of Nursing, UI, Ibadan,
                      Oyo state.
                    </p>
                  </li>
                </ul>
              </div>
              <nav>
                <ul tw="flex items-center gap-2 lg:(gap-4)">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <li
                        key={link.title}
                        tw="flex items-center justify-center rounded-full bg-primary w-12 aspect-square p-1"
                      >
                        <a target="_blank" href={link.link}>
                          <Icon size={20} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div>
              <form tw="space-y-4">
                <Paragraph>
                  Care to share with us your experience at The Deen Networking
                  Summit? Fill out the feedback form below
                </Paragraph>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  tw="px-4 py-4 rounded-xl border border-secondary text-secondary placeholder:text-secondary w-full"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  tw="px-4 py-4 rounded-xl border border-secondary text-secondary placeholder:text-secondary w-full"
                />

                <textarea
                  name="message"
                  required
                  placeholder="Write message"
                  tw="px-4 py-4 rounded-xl border border-secondary text-secondary placeholder:text-secondary w-full min-h-[200px]"
                />
                <Button>SEND MESSAGE</Button>
              </form>
            </div>
          </div>
        </div>
      </Maxwidth>
    </div>
  );
};

export default ContactPage;

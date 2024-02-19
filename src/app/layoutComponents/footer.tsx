"use client";

import { Heading, Logo, Maxwidth, Paragraph } from "@/components";
import { footerLinks, socials } from "@/utils/routepaths";
import Link from "next/link";
import { usePathname } from "next/navigation";
import tw from "twin.macro";

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { BsSend } from "react-icons/bs";

const Footer = () => {
  const pathName = usePathname();
  return (
    <footer tw="bg-secondary text-white border-b-2 border-b-secondary bg-[url('/waves.png')] bg-cover bg-center">
      <Maxwidth tw="flex gap-8 justify-between px-5 pt-11 pb-20 md:(flex-row justify-start gap-20) xl:(px-0)">
        <Logo $light />

        <div tw="flex flex-col flex-1 gap-2 lg:(gap-5)">
          <div tw="border-b border-[white] pb-4 flex flex-col gap-4 w-full lg:(pb-6 flex-row justify-between)">
            <div tw="max-w-[700px] lg:(flex-1)">
              <Heading $variant="h4" tw="pb-2">
                Subscribe to newsletter
              </Heading>

              <form tw="w-full h-[30px] bg-white rounded flex gap-2 lg:(h-[60px] rounded-xl)">
                <input
                  type="text"
                  tw="outline-none hocus:outline-none text-black w-full m-2 lg:(m-4)"
                />
                <button
                  title="subscribe"
                  tw="bg-primary rounded-r w-full h-full max-w-[45px] flex items-center justify-center lg:(max-w-[90px] rounded-r-xl)"
                >
                  <BsSend />
                </button>
              </form>
            </div>

            <div tw="flex gap-4 justify-start flex-wrap lg:(grid grid-cols-2 gap-6)">
              {footerLinks.map((link) => {
                return (
                  <Link
                    href={link.href}
                    key={link.title}
                    title={link.title}
                    css={[
                      tw`hover:(text-primary) text-[8px] lg:(px-2 text-base)`,
                      link.href === pathName && tw`text-primary`,
                    ]}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <div tw="flex items-center justify-between flex-wrap">
            <Paragraph tw="text-[8px] md:(text-base)">
              Copyright &copy; The Deen Networking Summit
            </Paragraph>

            <nav>
              <ul tw="flex items-center gap-2 lg:(gap-4)">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <li
                      key={link.title}
                      tw="flex items-center justify-center rounded-full bg-primary w-7 h-7 p-1"
                    >
                      <Icon size={20} />
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </Maxwidth>
    </footer>
  );
};

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

export default Footer;

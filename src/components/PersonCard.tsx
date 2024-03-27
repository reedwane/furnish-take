"use client";

import { HTMLProps } from "react";
import { Heading, secondaryShadow } from "./heading";
import Image from "next/image";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";

interface IPersonCard extends HTMLProps<HTMLDivElement> {
  person?: {
    name: string;
    position: string;
    image: string;
    instagram?: string;
    x?: string;
    linkedin?: string;
  };
}

const _person = {
  name: "Oladimeji Hassan",
  position: "",
  image: "",
  instagram: "",
  x: "",
  linkedin: "",
};

const PersonCard = ({ css, person = _person, ...props }: IPersonCard) => {
  return (
    <>

      <div
        tw="!p-0 min-w-[300px] w-full max-w-[300px] aspect-square md:(max-w-[493px]) mx-auto divide-y divide-secondary border border-secondary rounded-lg flex flex-col"
        css={[secondaryShadow, css]}
        {...props}
        >
        <div tw="rounded-t-lg min-h-[200px] text-secondary space-y-2 text-left flex-1 relative">
          <Image
            src={person?.image || "/avatar.png"}
            alt={person?.name}
            fill
            tw="object-contain"
          />

          <div tw="flex flex-col gap-4 m-4 justify-center relative h-full mb-6">
            {"instagram, x, linkedin".split(", ").map((social, index) => {
              const Icon =
                social === "instagram"
                  ? FaInstagram
                  : social === "x"
                  ? FaXTwitter
                  : SlSocialLinkedin;

              //@ts-ignore
              if (person?.[social]) {
                return (
                  //@ts-ignore
                  <a
                    //@ts-ignore
                    href={person[social]}
                    target="_blank"
                    tw="hover:opacity-50"
                    key={index}
                  >
                    <Icon size={20} />
                  </a>
                );
              }
            })}
          </div>
        </div>

        <div tw="bg-lightGrey rounded-b-lg text-secondary p-4 space-y-2 text-left min-h-[73px] md:(min-h-[120px])">
          <Heading $variant="h4" as="h2">
            {person?.name}
          </Heading>
          <p>{person?.position}</p>
        </div>
      </div>
    </>
  );
};

export default PersonCard;

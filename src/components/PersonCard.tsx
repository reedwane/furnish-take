"use client";

import { HTMLProps } from "react";
import { Heading, secondaryShadow } from "./heading";
import Image from "next/image";

interface IPersonCard extends HTMLProps<HTMLDivElement> {}

const PersonCard = ({ css, ...props }: IPersonCard) => {
  return (
    <>
      <div
        as="div"
        tw="!p-0 w-full max-w-[300px] aspect-square md:(max-w-[493px]) mx-auto divide-y divide-secondary border border-secondary rounded-lg flex flex-col"
        css={[secondaryShadow, css]}
        {...props}
      >
        <div tw="bg-primary rounded-t-lg min-h-[200px] text-secondary space-y-2 text-left flex-1 relative">
          <Image src={"/avatar.png"} alt="" fill tw="object-contain" />
        </div>

        <div tw="bg-lightGrey rounded-b-lg text-secondary p-8 space-y-2 text-left min-h-[73px] md:(min-h-[169px])">
          <Heading $variant="h4" as="h2">
            {" "}
            Abbas Shukurah{" "}
          </Heading>
          <p>Project Manager</p>
        </div>
      </div>
    </>
  );
};

export default PersonCard;

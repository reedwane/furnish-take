"use client";

import { HTMLProps } from "react";
import { Heading, secondaryShadow } from "./heading";
import Image from "next/image";

interface IPersonCard extends HTMLProps<HTMLDivElement> {
  person?: {
    name: string;
    position: string;
    image: string;
    instagram: string;
    x: string;
    linkedin: string;
  }
}


    const _person = {name:"Oladimeji Hassan", position:"", image:"", instagram:"", x:"", linkedin:""}

const PersonCard = ({ css, person=_person, ...props }: IPersonCard) => {
  return (
    <>
      <div
        as="div"
        tw="!p-0 w-full max-w-[300px] aspect-square md:(max-w-[493px]) mx-auto divide-y divide-secondary border border-secondary rounded-lg flex flex-col"
        css={[secondaryShadow, css]}
        {...props}
      >
        <div tw="bg-primary rounded-t-lg min-h-[200px] text-secondary space-y-2 text-left flex-1 relative">
          <Image src={person?.image || "/avatar.png"} alt={person?.name} fill tw="object-contain" />
          <div tw="flex flex-col gap-4 m-4 justify-center relative h-full mb-6 w-max">
          {"instagram, x, linkedin".split(", ").map((social,index)=>{
              //@ts-ignore
              if (person?.[social]){
                return (
              //@ts-ignore
                  <a href={person[social]} target="_blank" tw="hover:opacity-50" key={index}>
                    <Image src={`/icons/${social}.svg`} width={30} height={30} alt={`${social} icon`}/>
                  </a>
                )
              }
            })}
          </div>
        </div>

        <div tw="bg-lightGrey rounded-b-lg text-secondary p-8 space-y-2 text-left min-h-[73px] md:(min-h-[120px])">
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

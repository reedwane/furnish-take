
"use client";

import Button from "./Button";
import { Heading } from "./heading";
const PersonCard = () => {

  return (
    <>
      <Button as="div" tw='!p-0 w-full max-md:max-w-[300px] mx-auto divide-y divide-secondary border border-secondary rounded-lg'>
        <div tw="bg-primary rounded-t-lg min-h-[200px] text-secondary space-y-2 text-left">

        </div>
        <div tw="bg-lightGrey rounded-b-lg text-secondary p-8 space-y-2 text-left">
          <Heading $variant="h4" as="h2"> Abbas Shukurah </Heading>
          <p>Project Manager</p>
        </div>
      </Button>
    </>
  );
};

export default PersonCard;

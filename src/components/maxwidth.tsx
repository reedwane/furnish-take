"use client";

import tw, { styled } from "twin.macro";

const Maxwidth = styled.div(() => [
  tw`w-full px-6 max-w-[1280px] mx-auto xl:(px-0)!`,
]);

export const MinHeight = tw.div`h-full min-h-[80vh]`;

export default Maxwidth;

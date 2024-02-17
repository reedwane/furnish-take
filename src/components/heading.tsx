"use client";

import { HTMLProps } from "react";
import tw, { TwStyle, styled } from "twin.macro";

type HeadingVariant = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  $variant?: HeadingVariant;
}

const headingVariants: Record<HeadingVariant, TwStyle> = {
  h1: tw`text-5xl font-bold md:(text-7xl leading-[6.75rem]) lg:(text-9xl leading-[9.75rem])`,
  h2: tw`text-2xl md:text-4xl lg:(text-[4rem] leading-[3rem])`,
  h3: tw`text-base md:text-2xl lg:text-4xl`,
  h4: tw`text-base lg:text-2xl`,
};

export const Heading = styled.h1<HeadingProps>(({ $variant = "h1" }) => [
  tw`font-semibold`,
  headingVariants[$variant],
]);

interface IFancyHeader extends HTMLProps<HTMLHeadingElement> {
  ordinary: string;
  colored: string;
}

export const FancyHeader = ({ ordinary, colored, ...rest }: IFancyHeader) => {
  return (
    <Heading $variant="h2" as="h2" {...rest}>
      {ordinary} <span tw="text-primary">{colored}</span>
    </Heading>
  );
};

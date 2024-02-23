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
  tw`font-semibold w-fit`,
  headingVariants[$variant],
]);

export const afterUnderline = tw`after:(block content-[''] relative -bottom-2 w-6/12 h-1 md:(-bottom-4 h-[6px]) bg-primaryLight)`;

export const primaryShadow = tw`shadow-[4px_4px_0px_0px] shadow-primaryLight lg:(shadow-[8px_8px_0px_0px] shadow-primaryLight)`;

export const secondaryShadow = tw`shadow-[4px_4px_0px_0px] shadow-secondary lg:(shadow-[8px_8px_0px_0px] shadow-secondary)`;

interface IFancyHeader extends HTMLProps<HTMLHeadingElement>, HeadingProps {
  primary?: string;
  secondary: string;
  primaryStyles?: TwStyle;
  secondaryStyles?: TwStyle;
  headingStyles?: TwStyle;
}

export const FancyHeader = ({
  primary,
  secondary,
  as = "h2",
  $variant = "h2",
  headingStyles,
  primaryStyles,
  secondaryStyles,
  css,
  ...rest
}: IFancyHeader) => {
  return (
    <Heading $variant={$variant} as={as} css={[css, headingStyles]} {...rest}>
      {primary ? (
        <span
          tw="text-primary block pb-3 lg:(pb-6)"
          css={[headingVariants["h3"], primaryStyles]}
        >
          {primary}
        </span>
      ) : null}

      <span
        tw="text-secondary block w-fit"
        css={[afterUnderline, secondaryStyles]}
      >
        {secondary}
      </span>
    </Heading>
  );
};

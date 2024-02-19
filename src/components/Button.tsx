"use client";

import React, { ComponentPropsWithoutRef, ElementType } from "react";
import tw, { styled, css } from "twin.macro";
import { LoadingSvg } from "./loading";
import Link from "next/link";

type ButtonMod<T extends ElementType> = {
  as?: keyof React.JSX.IntrinsicElements;
  href?: string;
} & ComponentPropsWithoutRef<T>;

export const Button = styled.button<ButtonProps>(
  ({ $variant, $isSmall, $shadow = "dark", $disabled }) => [
    // The common button styles added with the tw import
    tw`p-4 lg:px-6 text-center w-fit rounded-[0.75rem] font-semibold text-xs md:(text-base) transform duration-75 bg-primary text-white hover:(bg-primaryLight) active:(bg-primaryLight) shadow-[4px_4px_0px_0px_#fff] lg:shadow-[8px_8px_0px_0px_#fff]`,

    css`
      &[type="submit"],
      [type="button"],
      [type="reset"],
      [type="submit"] {
        background-color: var(--color-primary);
      }
    `,

    $variant === "secondary" && tw`bg-secondary`,
    $variant === "danger" && tw`bg-customRed`,

    $disabled && tw`bg-primaryLight pointer-events-none`,

    $shadow === "dark" ? tw`shadow-secondary!` : tw`shadow-[white]!`,

    $isSmall && tw`text-sm`,
  ]
);

export const FormButton = <T extends ElementType = "button">({
  as,
  $isLoading,
  children,
  ...props
}: ButtonProps & ButtonMod<T>) => {
  return (
    <Button as={as} disabled={$isLoading} {...props}>
      {$isLoading ? <LoadingSvg tw="mx-auto w-5 h-5" /> : <>{children}</>}
    </Button>
  );
};

export const LinkButton = <T extends ElementType = "button">({
  as,
  $isLoading,
  href,
  children,
  ...props
}: ButtonProps & ButtonMod<T>) => {
  return (
    <Button as={Link} href={href!} disabled={$isLoading} {...props}>
      {$isLoading ? <LoadingSvg tw="mx-auto w-5 h-5" /> : <>{children}</>}
    </Button>
  );
};
export default Button;

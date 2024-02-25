"use client";

import Image from "next/image";
import logo from "/public/logo.png";
import logoLight from "/public/logo-light.png";
import { HTMLProps } from "react";
import Link from "next/link";
import tw, { TwStyle } from "twin.macro";

interface LogoProps extends HTMLProps<HTMLDivElement> {
  $asHomeNav?: boolean;
  $light?: boolean;
  containerStyles?: TwStyle;
}

const Logo = ({
  $asHomeNav,
  $light,
  css,
  containerStyles,
  ...props
}: LogoProps) => {
  const RenderComp = () => (
    <div
      css={[
        tw`w-[54px] min-w-[54px] sm:min-w-[60px] lg:w-[93px]`,
        containerStyles,
        css,
      ]}
      {...props}
    >
      <Image src={$light ? logoLight : logo} alt="tdns-logo" />
    </div>
  );

  return (
    <>
      {$asHomeNav ? (
        <Link href={"/"} tw="inline-block w-fit">
          <RenderComp />
        </Link>
      ) : (
        <RenderComp />
      )}
    </>
  );
};

export default Logo;

"use client";

import Image from "next/image";
import logo from "/public/logo.png";
import logoLight from "/public/logo-light.png";
import { HTMLProps } from "react";
import Link from "next/link";
import tw from "twin.macro";

interface LogoProps extends HTMLProps<HTMLDivElement> {
  $asHomeNav?: boolean;
  $light?: boolean;
}

const Logo = ({ $asHomeNav, $light, css, ...props }: LogoProps) => {
  const RenderComp = () => (
    <div css={[tw`w-[93px] min-w-[60px] h-[118px]`, css]} {...props}>
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

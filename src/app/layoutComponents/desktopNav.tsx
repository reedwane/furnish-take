"use client";

import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { headerLinks } from "@/utils/routepaths";
import { usePathname } from "next/navigation";
import Link from "next/link";
import tw from "twin.macro";

const DesktopNav = ({ isScrolled }: IHeaderProps) => {
  const path = usePathname();
  const isHome = path === "/";

  return (
    <nav
      tw="hidden lg:flex relative items-center flex-1 justify-between"
      css={[isHome && tw`text-white`]}
    >
      <Link href="/">
        <Logo $light={isHome || isScrolled} />
      </Link>

      <ul tw="flex flex-row gap-[2rem] xl:gap-[3rem]">
        {headerLinks.map((link) => {
          let href = link.href,
            isActive = path === link.href;
          return (
            <li
              key={link.title}
              css={[
                tw`hocus:(text-primary)`,
                isActive &&
                  tw`text-primary font-semibold underline decoration-2 underline-offset-[1.5rem]`,
                isScrolled && isActive && tw`text-white`,
              ]}
            >
              <a href={href}>{link.title}</a>
            </li>
          );
        })}
      </ul>

      <Button as="a" target="_blank" href="https://tix.africa/buy/the-deen-networking-summit" $shadow={isHome ? "light" : "dark"}>GET TICKETS</Button>
    </nav>
  );
};

export default DesktopNav;

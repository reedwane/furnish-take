"use client";

import { Button, FancyHeader, Maxwidth, Paragraph } from "@/components";
import Image from "next/image";
import byfil from "/public/book-launch.png";
import Link from "next/link";
import { routePaths } from "@/utils/routepaths";

const BookPreview = () => {
  return (
    <Maxwidth tw="pt-6 lg:pt-14">
      <FancyHeader primary="BOOK LAUNCH:" secondary="BEFORE YOU FALL IN LOVE" />

      <div tw="py-6">
        <div>
          <div tw="flex gap-2 items-center md:(gap-20)">
            <div>
              <Paragraph tw="flex-1 max-md:min-w-[50%]">
                Love is one of the most important connections in a Muslim's
                life, which is why The Deen Networking Summit is featuring the
                launch learn event for{" "}
                <span tw="text-lg text-secondary font-semibold">
                  Before You Fall in Love: A Brief Guide to Falling in Love the
                  Islamic Way.
                </span>{" "}
                <span tw="hidden md:inline">
                  It is a comprehensive guide for young people who want to
                  navigate the journey of love with caution.
                </span>
              </Paragraph>

              <Paragraph tw="hidden md:block pt-4">
                How to get the Book: Obtain the ticket for The Deen Networking
                Summit and your copy of the book will be........
              </Paragraph>

              <Button
                $shadow="dark"
                tw="mt-6 hidden md:block"
                as={Link}
                href={routePaths.bookLaunch.path}
              >
                READ MORE...
              </Button>
            </div>

            <Image alt="before you fall in love" tw="max-w-[50%]" src={byfil} />
          </div>

          <Paragraph tw="pt-6 pb-6 block md:hidden">
            <span tw="">
              It is a comprehensive guide for young people who want to navigate
              the journey of love with caution.
            </span>
            How to get the Book: Obtain the ticket for The Deen Networking
            Summit and your copy of the book will be........
          </Paragraph>

          <Button
            tw="md:hidden"
            $shadow="dark"
            as={Link}
            href={routePaths.bookLaunch.path}
          >
            READ MORE...
          </Button>
        </div>
      </div>
    </Maxwidth>
  );
};

export default BookPreview;

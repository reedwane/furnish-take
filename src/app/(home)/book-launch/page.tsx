"use client";

import { Button, FancyHeader, Heading, Maxwidth, Paragraph } from "@/components";
import PersonCard from "@/components/PersonCard";


const BookLaunch = () => {
  return (
    <div tw="space-y-12">
      <div tw="bg-secondary text-white border-b-2 border-b-secondary bg-[url('/waves.png')] bg-cover bg-center">
        <Maxwidth tw="p-8 px-5 md:(flex-row justify-start gap-20) xl:(px-0) uppercase">
          <Heading $variant="h4" as="h1">
            <span tw="text-primaryLight">Book Launch</span>
            <br/>
            <span tw="text-4xl">
              BEFORE YOU FALL IN LOVE
            </span>
          </Heading>
        </Maxwidth>
      </div>
      <section>
        <Maxwidth tw="py-8 space-y-8">
          <div tw="grid md:grid-cols-3 gap-12 items-center">
            <div tw="md:col-span-2 space-y-12">
              <div>
                <FancyHeader primary="THE" secondary="BOOK" />
              </div>
              <div tw="max-md:grid grid-cols-2 gap-6">
                <Paragraph tw="">
                  Love is one of the most important connections in a Muslim's life, which is why The Deen Networking Summit is featuring the launch learn event for <span tw="text-2xl text-secondary font-bold">Before You Fall in Love: A Brief Guide to Falling in Love the Islamic Way</span>. <span tw="max-md:hidden">
                    It is a comprehensive guide for young people who want to navigate the journey of love with caution.
                  </span>
                </Paragraph>
                <div tw="md:hidden">
                  <div tw="max-w-[286px] py-12 grid place-items-center bg-[url('/Stars.png')]">
                    <img  src="/Book cover.png" alt="Before you fall in love book cover" />
                  </div>
                </div>
              </div>
              <span tw="md:hidden">
                It is a comprehensive guide for young people who want to navigate the journey of love with caution.
              </span>
              <Paragraph>
                How to get the Book: Obtain the ticket for The Deen Networking Summit and your copy of the book will be........
              </Paragraph>
              <Paragraph>
                Before You Fall in Love is a book that takes all your questions about the business of LOVE and answers them with a polite mannerism.
              </Paragraph>
              <Paragraph>
                It listens to you and talk back at you accordingly. It's a hearty conversation with everyone who's read it so far.
              </Paragraph>
              <Paragraph>
                You can become one of the pioneer readers to experience the print version of the book in by getting your ticket for The Deen Networking Summit.
              </Paragraph>
            </div>
            <div tw="max-md:hidden max-w-[286px] py-12 grid place-items-center bg-[url('/Stars.png')]">
              <img  src="/Book cover.png" alt="Before you fall in love book cover" />
            </div>
          </div>
        </Maxwidth>
      </section>
      <section>
        <Maxwidth tw="py-8 space-y-8">
          <div tw="grid md:grid-cols-3 gap-32 items-center">
            <div tw="md:col-span-2 space-y-12">
              <div>
                <FancyHeader primary="ABOUT" secondary="THE AUTHOR" />
              </div>
              <div tw="max-md:grid grid-cols-2 gap-6">
                <Paragraph tw="max-md:text-justify">
                  Abass is a Nigerian writer and published author. A graduate of Surveying and Geoinformatics from the Federal University of Technology Akure. He's an award-winning writer and public speaker who has a strong flair for clear communication and result-oriented messaging.
                </Paragraph>
                <div tw="md:hidden">
                  <PersonCard />
                </div>
              </div>
              <Paragraph>
                He is always on the look out for opportunities to make real life impact with his writing and public speaking.
              </Paragraph>
              <Paragraph>
                Dynamism and creativity are among the best adjectives he likes to be described with.
              </Paragraph>
            </div>
            <div tw="max-md:hidden max-w-[256px] mx-auto">
              <PersonCard/>
            </div>
          </div>
        </Maxwidth>
      </section>
    </div>
  )
};

export default BookLaunch;

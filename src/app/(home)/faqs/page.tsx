"use client";

import { Button, FancyHeader, Heading, Maxwidth, Paragraph } from "@/components";
import PersonCard from "@/components/PersonCard";

const faqs = [
  {
    question: "Is there opportunity for exhibition at the event?",
    answer: "lorem",
    is_opne: false
  },
  {
    question: "Is there opportunity for exhibition at the event?",
    answer: "lorem",
    is_opne: false
  },
]



const FAQsPage = () => {
  return (
    <div tw="space-y-12 pb-12">
      <div tw="bg-secondary text-white border-b-2 border-b-secondary bg-[url('/waves.png')] bg-cover bg-center">
        <Maxwidth tw="p-8 px-5 md:(flex-row justify-start gap-20) xl:(px-0) uppercase">
          <Heading $variant="h4" as="h1">
            <span tw="text-lg text-primaryLight">FREQUENTLY </span>
            <br/>
            <span tw="text-4xl">ASKED QUESTIONS</span>
          </Heading>
        </Maxwidth>
      </div>
      <Maxwidth >
      <div>
        <div tw="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul tw="space-y-8">
                {faqs.map(faq=>(
                <li tw="pb-8 border-b-2 border-secondary text-secondary">
                    <button tw="flex items-center justify-between w-full">
                      <p>
                        {faq.question} 
                      </p>
                      <span>&times;</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div tw="max-md:hidden grid place-items-center">
              <img src="/chat.svg" alt="" />

            </div>
        </div>
      </div>
      </Maxwidth>
    </div>
  )
};
export default FAQsPage;

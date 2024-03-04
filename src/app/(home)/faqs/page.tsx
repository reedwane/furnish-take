"use client";

import { Button, FancyHeader, Heading, Maxwidth, Paragraph } from "@/components";
import PersonCard from "@/components/PersonCard";
import { useState } from "react";
import tw from "twin.macro";

const FAQsPage = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Is there opportunity for exhibition at the event?",
      answer: "lorem",
      is_open: false
    },
    {
      question: "Is The Deen Networking Summit holding physically or virtually?",
      answer: "lorem",
      is_open: false
    },
    {
      question: "Do you say I will get a match at The Deen Networking Summit?",
      answer: "lorem",
      is_open: false
    },
    {
      question: "When and where is The Deen Networking Summit holding?",
      answer: "lorem",
      is_open: false
    },
    {
      question: "Is The Deen Networking Summit a paid event?",
      answer: "lorem",
      is_open: false
    }
  ])

function toggleFaq(index:number){
  const _faqs = [ ...faqs ]
  _faqs[index].is_open = !_faqs[index].is_open
  setFaqs(_faqs)
}


  return (
    <div tw="space-y-12 pb-12">
      <div tw="bg-secondary text-white border-b-2 border-b-secondary bg-[url('/waves.png')] bg-cover bg-center">
        <Maxwidth tw="py-12 px-5 md:(flex-row justify-start gap-20) xl:(px-0) uppercase">
          <Heading $variant="h4" as="h1">
            <span className="heading-title">FREQUENTLY </span>
            <br/>
            <span className="heading-subtitle">ASKED QUESTIONS</span>
          </Heading>
        </Maxwidth>
      </div>
      <Maxwidth >
      <div>
        <div tw="grid md:grid-cols-2 gap-12 items-center relative">
            <div tw="relative">
              <ul tw="space-y-8">
                {faqs.map((faq,index)=>(
                <li tw="pb-8 border-b-2 border-secondary text-secondary" key={index}>
                    <button tw="text-left flex items-center justify-between w-full" onClick={()=>toggleFaq(index)}>
                      <p>
                        {faq.question}  
                      </p>
                      <img src="/icons/arrow-down.svg" alt="" css={[!faq.is_open&& tw`rotate-180`]} tw="transition-transform" />
                    </button>
                    <p css={[!faq.is_open&& tw`max-h-0`]} tw="font-semibold mt-2 overflow-hidden transition-all">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div tw="max-md:pointer-events-none max-md:absolute inset-0 grid place-items-center max-md:opacity-10">
              <img src="/chat.svg" alt="" />
            </div>
        </div>
      </div>
      </Maxwidth>
    </div>
  )
};
export default FAQsPage;

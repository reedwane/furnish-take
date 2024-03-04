"use client";

import { Heading, Maxwidth, Paragraph } from "@/components";
import PersonCard from "@/components/PersonCard";


const OurTeamPage = () => {
  const team_members = [
    {name:"Abass Abdul-Azeez", position: "Convener", image:"", instagram:"test", x:"test", linkedin:"test"},
    {name:"Sheriffdeen Oladimeji", position:"Communications Team", image:"/team-members-images/Sheriffdeen Oladimeji.png", instagram:"", x:"", linkedin:""},
    {name:"Yusuf Adua", position:"Sponsorship& Budgeting Team", image:"/team-members-images/Yusuf Adua.png", instagram:"", x:"", linkedin:""},
    {name:"Afolabi Maryam", position:"UI/UX Designer & Community Manager", image:"", instagram:"", x:"", linkedin:""},
    {name:"Ridwan Abdulkareem", position:"Curation Team & Web Developer", image:"", instagram:"", x:"", linkedin:""},
    {name:"Abulaleem Lateef", position:"Event Manager", image:"", instagram:"", x:"", linkedin:""},
    {name:"Oyero Abiodun", position:"Sponsorship", image:"/team-members-images/Oyero Abiodun.png", instagram:"", x:"", linkedin:""},
    {name:"Hasanah Bolaji", position:"Communications Team", image:"/team-members-images/Hasanah Bolaji.png", instagram:"", x:"", linkedin:""},
    {name:"Summayyah Adenle", position:"Curation Team", image:"/team-members-images/Summayyah Adenle.png", instagram:"", x:"", linkedin:""},
    {name:"Oluwaseun Ojo", position:"Event Manager", image:"", instagram:"", x:"", linkedin:""},
    {name:"Mojeed Abiola", position:"Event Manager", image:"", instagram:"", x:"", linkedin:""},
    {name:"Rasheed Mudashir", position:"Web Developer", image:"", instagram:"", x:"", linkedin:""},
    {name:"Jaiye Abdul", position:"brand Designer", image:"", instagram:"", x:"", linkedin:""},
  ]

  return (
    <div>
      <div tw="bg-secondary text-white border-b-2 border-b-secondary bg-[url('/waves.png')] bg-cover bg-center">
        <Maxwidth tw="p-8 px-5 md:(flex-row justify-start gap-20) xl:(px-0) uppercase">
          <Heading $variant="h4" as="h1">
            <span tw="text-primaryLight">Meet our</span>
            <br/>
            <span tw="text-4xl">
              Team
            </span>
          </Heading>
        </Maxwidth>
      </div>
      <section>
        <Maxwidth tw="py-8 space-y-8">
          <Paragraph>
            Meet our diverze team of  designers, developers, writers, event managers working together to make the  Deen Networking Summit a success.
          </Paragraph>
          <ul tw="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {team_members.map((team_member, index)=>(
              <li key={index} >
                <PersonCard person={team_member} />
              </li>
            ))}
          </ul>
        </Maxwidth>
      </section>
    </div>

  )
};

export default OurTeamPage;

"use client"

import clsx from "clsx";

import { PhonesContacts } from "@/components/Contact/phones";
import LocationMap from "@/components/Contact/location";
import Header from "@/components/Header/header";

function Contact() {

  const contactContainer = clsx(
    "flex items-center flex-col gap-20 overflow-x-hidden ",
    " md:gap-10 md:mb-20",
    `xl:flex xl:flex-row xl-justify-center xl:items-center
     xl:w-[70%] xl:ml-auto xl:mr-auto`,
  );

  return (
    <>
      <main className={contactContainer}>
        <Header>Contato</Header>
        <PhonesContacts />
        <LocationMap />
      </main>
    </>
  );
}

export default Contact;
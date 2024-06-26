"use client"

import Link from "next/link"

import { ZillaFont } from "@/assets/fonts"

function Header() {
  const menuItems = [
    { title: "Pagina inicial", link: "/", isSelected: false },
    { title: "Nossa História", link: "/nossa-historia", isSelected: false },
    { title: "Ajude-nos", link: "/ajude-nos", isSelected: false },
    { title: "Contato", link: "/contato", isSelected: false },
    { title: "Grupo Simios", link: "/grupo-simios", isSelected: false },
  ];

  return (
    <>
      <header className={`${ZillaFont.className} bg-navbar-Yellow`}>
        <div className={"flex justify-around md:flex  md:justify-endxl:justify-around 1xl:justify-between max-w-[1320px] m-auto"}>
          <Link href="/" className="flex items-center justify-center font-semibold xl:flex px-8 w-fit h-fit self-center xl:w-auto">ASSOCIAÇÃO ALIMENTANDO COM AMOR</Link>
          <nav className="flex md:w-[90%] xl:w-[60%]" role="navigation" aria-label="Navegaçao do menu">

            {menuItems.map(({ link, title }, index) => (

              <Link
                aria-label={link}
                key={index}
                className="
                  w-[20%] text-center h-14 grid place-content-center hover:bg-yellow-primary-hover
                  text-primary-black-text text-base font-semibold hover:text-[#edfaee] rounded-b-[8px]
                  last:bg-navbar-newblue last:text-[#edfaee] last:hover:bg-[#092934] last:rounded-b-[8px]
                  md:px-4 xl:px-2 xl:w-[18%]"
                href={link}
              >
                <div>{title}</div>
              </Link>

            ))}
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header;
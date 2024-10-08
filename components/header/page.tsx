"use client";
import Image from "next/image";
import { useState } from "react";
import "../../app/globals.css";

export default function Header() {
  const sections = ["INÍCIO", "SOBRE"];
  const listSection = sections.map((section) => (
    <li
      className="hover:text-rose-400 hover:translate-y-1 duration-300 font-extralight transition-all"
      key={section}
    >
      <a href={`#${section}`}>{section}</a>
    </li>
  ));

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full flex justify-between items-center px-[5vw] py-3">
      <Image
        src="/logo.jpg"
        alt="logo bem que te fiz"
        width={130}
        height={40}
        className="mix-blend-multiply"
      />
      <button
        className="absolute top-1 rounded-full right-5 sm:hidden h-12 w-12 shadow-md hover:shadow-rose-300 duration-300 grid place-items-center p-2"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <div
          id={openMenu ? "topbar" : ""}
          className="bg-gray-800  h-[1px] w-5 rounded-full transition-all duration-300"
        ></div>
        <div
          id={openMenu ? "hidebar" : ""}
          className="bg-gray-800  h-[1px] w-5 rounded-full transition-all duration-300"
        ></div>
        <div
          id={openMenu ? "bottombar" : ""}
          className="bg-gray-800  h-[1px] w-5 rounded-full transition-all duration-300"
        ></div>
      </button>
      <div
        id={openMenu ? "openmenu" : "closemenu"}
        className="sm:contents clear-both transition-all duration-500"
      >
        <ul
          className={`mt-1 mr-12 sm:flex sm:space-x-3 grid ${
            openMenu ? "grid-cols-[1fr]" : "grid-cols-[0fr]"
          } transition-[grid-template-rows] duration-500`}
        >
          {listSection}
        </ul>
      </div>
    </header>
  );
}

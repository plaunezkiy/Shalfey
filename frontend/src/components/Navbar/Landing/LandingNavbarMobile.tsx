"use client";
import Link from "next/link";
import { useState } from "react";

const LandingNavbarMobile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const genericHamburgerLine =
    "h-[2.5px] w-6 my-[2px] rounded-full transition ease transform duration-300 bg-primary-white group-hover:bg-primary-main";
  return (
    <div className="z-10 flex md:!hidden items-center justify-between px-4 w-full text-primary-white text-lg font-semibold h-16 bg-primary-main/50">
      <Link href="/home">
        <p className="group cursor-pointer duration-150">
          Магазин
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-white"></span>
        </p>
      </Link>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-1 text-primary-white border border-primary-white rounded group hover:bg-primary-white hover:text-primary-main duration-300"
      >
        <div className="flex flex-col h-10 w-10 justify-center items-center">
          <div
            className={`${genericHamburgerLine} ${
              open ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${open ? "opacity-0" : ""}`}
          />
          <div
            className={`${genericHamburgerLine} ${
              open ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </div>
      </button>

      {open && (
        <div className="z-10 absolute top-16 left-0 flex flex-col gap-6 items-center py-4 bg-primary-main/50 text-primary-white text-lg w-full">
          {["О нас", "А как это?", "Прайсинг"].map((link) => (
            <p
              key={link}
              className="group cursor-pointer duration-150 text-center"
            >
              {link}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-white"></span>
            </p>
          ))}
          <p className="group cursor-pointer rounded-lg">
            Войти
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-white"></span>
          </p>
          <p className="group py-1 px-6 bg-primary-white text-black rounded-lg cursor-pointer">
            Регистрация
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-white"></span>
          </p>
        </div>
      )}
    </div>
  );
};

export default LandingNavbarMobile;

import LandingNavbarMobile from "@/components/Navbar/Landing/LandingNavbarMobile";
import { getMenu } from "@/lib/getMenu";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LandingLayout = async ({ children }: Props) => {
  const menu = await getMenu();

  return (
    <div className="flex flex-col font-hagrid-bold items-center">
      <LandingNavbarMobile />
      {/* navbar */}
      <div className="hidden md:!flex justify-between w-full xl:!w-2/3 px-4 md:!px-12 xl:px-0 mt-8 z-10 text-primary-white text-md lg:text-xl font-semibold">
        <div className="flex gap-6 md:gap-12 items-center">
          <Link href="/home">
            <p className="group cursor-pointer duration-150">
              Магазин
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-white"></span>
            </p>
          </Link>
          {["О нас", "А как это?", "Прайсинг"].map((link) => (
            <p className="group cursor-pointer duration-150 text-center">
              {link}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-white"></span>
            </p>
          ))}
        </div>
        <div className="flex gap-6 items-center">
          <p className="px-4 pt-2 pb-3 cursor-pointer hover:outline outline-2 outline-primary-white rounded-lg">
            Войти
          </p>
          <p className="group pt-2 pb-3 px-6 bg-primary-white text-black rounded-lg hover:outline outline-2 outline-primary-white outline-offset-4 cursor-pointer">
            Регистрация
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-white"></span>
          </p>
        </div>
      </div>
      {/* /navbar */}
      {children}
    </div>
  );
};

export default LandingLayout;

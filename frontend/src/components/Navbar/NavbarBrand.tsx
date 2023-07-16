"use client";
import Link from "next/link";
import Image from "next/image";
import { MEDIA_URL } from "@/lib/const";
import ShalfeyIcon from "./icons/ShalfeyIcon";

const NavbarBrand = () => {
  // return (
  //   <Link
  //     href={`/home`}
  //     className="relative flex gap-4 items-center w-48 h-16 bg-primary-main rounded"
  //   >
  //     <Image
  //       className="p-1"
  //       loader={({ src, width, quality }) => {
  //         return MEDIA_URL + src;
  //       }}
  //       src={"variants/logo_title.png"}
  //       alt=""
  //       style={{ objectFit: "contain" }}
  //       fill
  //     />
  //   </Link>
  // );
  return (
    <Link href={`/home`} className="flex gap-3 items-center">
      {/* <Image
          loader={({ src, width, quality }) => {
            return MEDIA_URL + src;
          }}
          src={"variants/logo.png"}
          alt=""
          style={{ objectFit: "fill" }}
          fill
          // objectFit="cover"
          className=""
        /> */}
      <ShalfeyIcon className="fill-primary-main w-16" />

      <p className="w-36 h-full -pt-2 leading-none font-medium cursor-pointer text-primary-main">
        маркет плейс нетрадиционной медицины
      </p>
    </Link>
  );
};

export default NavbarBrand;

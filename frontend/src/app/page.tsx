"use client";
import React, { ReactElement } from "react";

import { Variant } from "@/lib/types";
// import  from "@heroicons/react/solid";
import {
  StarIcon,
  HeartIcon as HeartSolidIcon,
} from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const getVariants = async () => {
  const resp = await fetch("http://127.0.0.1:8003/api/variants/", {
    method: "GET",
  });
  const variants = await resp.json();

  return variants;
};

async function Home() {
  const variants = await getVariants();

  return (
    <>
      <div className="py-10">
        <header className="mb-4">
          <div className="container" />
        </header>
        <main>
          <div className="container flex flex-col gap-16">
            {/* {menuData?.menu?.items?.map((m) => {
              if (!m) {
                return null;
              }
              return <HomepageBlock key={m.id} menuItem={m} />;
            })} */}
            {/*  */}
            {["Хиты продаж", "Новинки", "Акции", "Товары недели"].map(
              (rubric, index) => (
                <div className="text-xl" key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-2xl hover:text-blue-500 cursor-pointer duration-150 font-semibold">
                      {rubric}
                    </p>
                    {/* icon */}
                    <div className="flex gap-1 items-center hover:text-blue-500 cursor-pointer duration-150">
                      <p className="text-md pb-[2px]">Смотреть все</p>
                      <ArrowRightCircleIcon className="w-7" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {variants.slice(0, 5).map((variant: Variant) => (
                      <div
                        className="w-[250px] card border shadow hover:shadow-xl rounded-lg p-2 duration-300 group/provider-card cursor-pointer"
                        key={variant.id}
                      >
                        <div className="relative text-center flex flex-col items-center gap-2 h-full">
                          {/*  */}
                          <div className="p-2 duration-150">
                            <p className="absolute right-1 top-1 z-10 p-1 border border-1 rounded-lg text-red-400 hover:text-white bg-white hover:bg-red-400 shadow-modal">
                              <HeartSolidIcon className="w-8" />
                            </p>
                            <Image
                              className="group-hover/provider-card:scale-105 duration-300 h-72"
                              // onClick={() => setExpandedImage(media)}
                              loader={({ src, width, quality }) => {
                                return "http://localhost:8003/media/" + src;
                              }}
                              src={variant.image_url}
                              alt=""
                              // layout="fill"
                              // objectFit="cover"
                              // className="w-20 h-20"
                              width={150}
                              height={100}
                              quality={80}
                            />
                          </div>
                          {/*  */}
                          <p className="border-t w-full flex flex-grow text-lg items-center justify-center hover:text-blue-500 hover:underline">
                            <Link href={`vendors/${variant.vendor.slug}/products/${variant.slug}`}>
                              {variant.name}
                            </Link>
                          </p>
                          <p className="border-t w-full text-center text-lg items-center hover:text-blue-500 hover:underline">
                            <Link href={`vendors/` + variant.vendor.slug}>
                              {variant.vendor.name}
                            </Link>
                          </p>

                          <div className="border-t w-full flex justify-around py-2">
                            <p className="text-lg font-medium after:content-['руб.']">
                              {variant.price}
                            </p>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((r_index) => (
                                <StarIcon
                                  key={r_index}
                                  className={`w-5 ${
                                    r_index <= 3
                                      ? "text-yellow-400"
                                      : "text-gray-400"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          {/* add to cart */}
                          <p
                            // onClick={() => onAddToCart(provider)}
                            className="w-full py-2 text-lg bg-blue-500 text-white hover:bg-white hover:text-blue-500 border border-blue-500 rounded-lg"
                          >
                            Купить
                          </p>
                        </div>
                      </div>

                      // <div className="aspect-square w-96 border" key={variant.id}>
                      //   <p className="text-lg">{variant.name}</p>
                      // </div>
                    ))}
                  </div>
                </div>
              )
            )}

            {/*  */}
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;

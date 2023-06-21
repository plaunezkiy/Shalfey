import React, { ReactElement } from "react";

import { Variant } from "@/lib/types";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { ProductCard } from "@/components/Product/ProductCard";
import { getVariants } from "@/lib/getVariants";

const HomePage = async () => {
  const variants = await getVariants();
  return (
    <>
      <div className="">
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
                    {variants?.slice(0, 5).map((variant: Variant) => (
                      <ProductCard key={variant.id} variant={variant} />
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
};

export default HomePage;

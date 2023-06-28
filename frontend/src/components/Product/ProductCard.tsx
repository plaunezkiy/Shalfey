"use client";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";
import { Variant } from "@/lib/types";
import AddToCartBtn from "../Buttons/AddToCartBtn";
import { MEDIA_URL } from "@/lib/const";
import AddToLikedBtn from "../Buttons/AddToLikedBtn";

interface Props {
  variant: Variant;
}

export const ProductCard = (props: Props) => {
  return (
    <div className="w-56 card border shadow hover:shadow-modal rounded-lg p-2 duration-300 group/provider-card cursor-pointer">
      <div className="relative text-center flex flex-col items-center gap-2 h-full">
        {/*  */}
        <div className="w-full h-36 relative p-2">
          <div className="absolute right-1 top-1 z-10 ">
            <AddToLikedBtn variant={props.variant} />
          </div>

          <Image
            className="group-hover/provider-card:scale-105 duration-300"
            loader={({ src, width, quality }) => {
              return MEDIA_URL + src;
            }}
            src={props.variant.image_url}
            alt=""
            style={{ objectFit: "scale-down" }}
            fill
            // className="w-full w-20 h-20"
          />
        </div>
        {/*  */}
        <p className="border-t w-full flex flex-grow items-center justify-center hover:text-blue-500 hover:underline">
          <Link
            href={`/vendors/${props.variant.vendor.slug}/products/${props.variant.slug}`}
          >
            {props.variant.name}
          </Link>
        </p>
        <p className="border-t w-full text-center items-center hover:text-blue-500 hover:underline">
          <Link href={`/vendors/` + props.variant.vendor.slug}>
            {props.variant.vendor.name}
          </Link>
        </p>

        <div className="border-t w-full flex justify-around py-2">
          <p className="font-medium after:content-['руб.']">
            {props.variant.price}
          </p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((r_index) => (
              <StarIcon
                key={r_index}
                className={`w-5 ${
                  r_index <= 3 ? "text-yellow-400" : "text-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
        {/* add to cart */}
        <AddToCartBtn variant={props.variant} />
        {/* <p
          // onClick={() => onAddToCart(provider)}
          className="w-full py-2 text-lg bg-blue-500 text-white hover:bg-white hover:text-blue-500 border border-blue-500 rounded-lg"
        >
          В корзину
        </p> */}
      </div>
    </div>
  );
};

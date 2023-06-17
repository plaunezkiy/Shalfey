"use client";
import Image from "next/image";
import Link from "next/link";
import {
  StarIcon,
  HeartIcon as HeartSolidIcon,
} from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/24/outline";
import { Variant } from "@/lib/types";
import AddToCartBtn from "../Buttons/AddToCartBtn";
import { useAppDispatch, useAppSelector } from "@/lib/store/store";
import {
  addToLiked,
  // totalLikedItemSelector,
  variantLikedSelector,
} from "@/lib/store/features/likedSlice";
import { MEDIA_URL } from "@/lib/const";

interface Props {
  variant: Variant;
}

export const ProductCard = (props: Props) => {
  const liked = useAppSelector((state) =>
    variantLikedSelector(state, props.variant.id)
  );
  const dispatch = useAppDispatch();

  return (
    <div className="w-[250px] card border shadow hover:shadow-modal rounded-lg p-2 duration-300 group/provider-card cursor-pointer">
      <div className="relative text-center flex flex-col items-center gap-2 h-full">
        {/*  */}
        <div className="p-2">
          <button
            onClick={() => dispatch(addToLiked(props.variant))}
            className="absolute right-1 top-1 z-10 p-1 border border-1 border-red-400 rounded-lg text-red-400 hover:text-white bg-white hover:bg-red-400 shadow  duration-300"
          >
            {liked ? (
              <HeartSolidIcon className="w-8" />
            ) : (
              <HeartOutlineIcon className="w-8" />
            )}
          </button>
          <Image
            className="group-hover/provider-card:scale-105 duration-300 h-54"
            // onClick={() => setExpandedImage(media)}
            loader={({ src, width, quality }) => {
              return MEDIA_URL + src;
            }}
            src={props.variant.image_url}
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
          <Link
            href={`vendors/${props.variant.vendor.slug}/products/${props.variant.slug}`}
          >
            {props.variant.name}
          </Link>
        </p>
        <p className="border-t w-full text-center text-lg items-center hover:text-blue-500 hover:underline">
          <Link href={`vendors/` + props.variant.vendor.slug}>
            {props.variant.vendor.name}
          </Link>
        </p>

        <div className="border-t w-full flex justify-around py-2">
          <p className="text-lg font-medium after:content-['руб.']">
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

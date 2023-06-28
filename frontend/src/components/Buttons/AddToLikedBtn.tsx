"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/store";
import {
  addToLiked,
  variantLikedSelector,
} from "@/lib/store/features/likedSlice";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/24/outline";
import { Variant } from "@/lib/types";

interface Props {
  variant: Variant;
  children?: React.ReactNode;
}

const AddToLikedBtn = ({ variant, children }: Props) => {
  const liked = useAppSelector((state: any) =>
    variantLikedSelector(state, variant.id)
  );
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(addToLiked(variant))}
      className="flex items-center gap-1 p-1 px-2 border border-1 border-red-400 rounded-lg text-red-400 hover:text-white bg-white hover:bg-red-400 shadow  duration-300"
    >
      {children}
      {liked ? (
        <HeartSolidIcon className="w-8" />
      ) : (
        <HeartOutlineIcon className="w-8" />
      )}
    </button>
  );
};

export default AddToLikedBtn;

"use client";
import { totalLikedItemSelector } from "@/lib/store/features/likedSlice";
import { useAppSelector } from "@/lib/store/store";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const LikedButton = () => {
  const likedCounter = useAppSelector((state) => totalLikedItemSelector(state));

  return (
    <Link href={`liked/`} className="">
      {/* <NavIconButton icon="bag" />{" "} */}
      <div className="relative">
        <HeartIcon className="w-12 text-emerald-700 p-2 border border-emerald-700 rounded hover:bg-emerald-700 hover:text-white duration-150 cursor-pointer" />
        {!!likedCounter && (
          <span
            key={likedCounter}
            className="animate-pingOnce absolute px-1 font-semibold -top-1 -right-1 text-sm text-white border border-blue-500 bg-blue-500 flex justify-center items-center rounded"
            data-testid="likedCounter"
          >
            {likedCounter}
          </span>
        )}
      </div>
    </Link>
  );
};

export default LikedButton;

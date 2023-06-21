"use client";
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const RateReviewButton = () => {
  const [reviewed, setReviewed] = useState(false);

  return (
    <div className="pt-1 flex flex-col gap-1">
      {reviewed ? (
        <div className="flex flex-col items-center text-sm text-slate-500">
          <p>Вы делаете нас лучше</p>
          <div className="flex gap-1 items-center">
            <p>Спасибо</p>
            <HeartIcon className="w-5 text-red-500" />
          </div>
        </div>
      ) : (
        <>
          <p className="text-sm text-center text-slate-500">
            Был ли отзыв полезным?
          </p>
          <div className="flex gap-8 justify-center">
            <HandThumbUpIcon
              onClick={() => setReviewed(true)}
              className="w-10 hover:bg-green-600 p-1 border border-green-600 text-green-600 hover:text-white rounded-full shadow duration-100"
            />
            <HandThumbDownIcon
              onClick={() => setReviewed(true)}
              className="w-10 hover:bg-red-400 p-1 border border-red-400 text-red-400 hover:text-white rounded-full shadow duration-100"
            />
          </div>
        </>
      )}
    </div>
  );
};

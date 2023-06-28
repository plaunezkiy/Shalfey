"use client";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";

const RatingStars = () => {
  const totalStars = 5;
  const [activeStars, setActiveStars] = useState(5);
  // const [finalStars, setFinalStars] = useState(3);

  return (
    <div className="flex cursor-pointer">
      {[...new Array(totalStars)].map((arr, index) => {
        return (
          <StarIcon
            onMouseEnter={() => setActiveStars(index)}
            key={index}
            className={`w-7 ${
              index <= activeStars ? "text-yellow-400" : "text-gray-400"
            }`}
          />
        );
      })}
    </div>
  );
};

export default RatingStars;

import { StarIcon } from "@heroicons/react/24/solid";
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { RateReviewButton } from "./RateReviewButton";

const ReviewCard = () => {
  return (
    <div className="border border-gray-300 rounded-lg shadow w-42 p-3 hover:shadow-modal duration-150 cursor-pointer flex flex-col">
      <div className="flex items-center gap-1">
        <p className="text-lg font-medium">Елена</p>
        <p className="text-sm text-slate-500 before:content-['('] after:content-[')']">
          Новгород
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="py-2 flex">
          {[1, 2, 3, 4, 5].map((r_index) => (
            <StarIcon
              key={r_index}
              className={`w-5 ${
                r_index <= 3 ? "text-yellow-400" : "text-gray-400"
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-slate-500">12 марта 2023</p>
      </div>
      <p className="border-y py-2 text-sm">
        Прекрасный продукт, часто покупаю и пользуюсь каждый день. Спасибо
        продавцам за такое качество!
      </p>
      <RateReviewButton />
    </div>
  );
};

export default ReviewCard;

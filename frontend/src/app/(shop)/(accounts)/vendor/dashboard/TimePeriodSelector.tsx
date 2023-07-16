"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/common/Dropdown";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type Period = {
  title: string;
  slug: string;
};
const periods: Period[] = [
  { title: "Неделя", slug: "weekly" },
  { title: "Месяц", slug: "monthly" },
  { title: "Год", slug: "yearly" },
];

const TimePeriodSelector = () => {
  const [activePeriod, setActivePeriod] = useState<Period>(periods[0]);

  return (
    <>
      <div className="p-2 border rounded-lg shadow">
        <p className="text-xs">Промежуток:</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="group flex gap-1 items-center justify-center cursor-pointer hover:text-emerald-600">
              <p className="text-sm font-medium">{activePeriod.title}</p>
              <ChevronDownIcon className={`w-5 group-data-[state=open]:rotate-180 duration-200`} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white p-0" align="center">
            {periods.map((period) => (
              <DropdownMenuItem asChild key={period.title}>
                <p onClick={() => setActivePeriod(period)} className="p-1">
                  {period.title}
                </p>
              </DropdownMenuItem>
            ))}

            {/* <DropdownMenuSeparator /> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default TimePeriodSelector;

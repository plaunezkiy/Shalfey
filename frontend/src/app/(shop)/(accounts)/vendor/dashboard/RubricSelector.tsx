// "use client";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/common/Dropdown";
// import { API_URL } from "@/lib/const";
// import { Branch } from "@/lib/types";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";

// type Category = {
//   title: string;
//   slug: string;
// };
// const categories: Category[] = [
//   { title: "Неделя", slug: "weekly" },
//   { title: "Месяц", slug: "monthly" },
//   { title: "Год", slug: "yearly" },
// ];

// const getCategories = async () => {
//   const data = await fetch(API_URL + "/categories");
//   return;
// };

// const RubricSelector = async () => {
//   // const categories =
//   const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
//   const [activeBranch, setActiveBranch] = useState<Branch>()

//   return (
//     <>
//       <div className="p-2 border rounded-lg shadow">
//         <p className="text-xs">Категория:</p>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <div className="flex gap-1 items-center justify-center cursor-pointer hover:text-emerald-600">
//               <p className="text-sm font-medium">{activeCategory.title}</p>
//               <ChevronDownIcon className="w-5" />
//             </div>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="bg-white p-0" align="center">
//             {periods.map((period) => (
//               <DropdownMenuItem asChild>
//                 <p
//                   key={period.title}
//                   onClick={() => setActiveCategory(period)}
//                   className="p-1"
//                 >
//                   {period.title}
//                 </p>
//               </DropdownMenuItem>
//             ))}

//             {/* <DropdownMenuSeparator /> */}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </>
//   );
// };

// export default RubricSelector;

"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { ReactNode, Suspense } from "react";
import Spinner from "@/components/Loaders/Spinner";
import Link from "next/link";

const ProfilePage = ({ children }: { children: ReactNode }) => {
  const tabStyle =
    "p-2 border border-gray-300 shadow rounded-lg text-center hover:shadow-lg hover:text-green-500 cursor-pointer duration-150 data-[state=active]:text-green-500 data-[state=active]:shadow-xl data-[state=active]:border-green-500";
  return (
    <div className="flex-grow flex p-4 border border-gray-300 rounded-lg shadow-lg">
      <div className="w-full grid grid-cols-4 gap-8">
        <div className="col-span-1 flex flex-col gap-4">
          <Link href="/account/profile" className={tabStyle}>
            Профиль
          </Link>
          <Link href="/account/profile/address" className={tabStyle}>
            Адреса
          </Link>
          <Link href="/account/profile/orders" className={tabStyle}>
            Заказы
          </Link>
          <Link href="/account/profile/settings" className={tabStyle}>
            Настройки
          </Link>
        </div>
        <div className="h-full col-span-3 py-4 px-6 border border-gray-300 rounded-lg shadow">
          {children}
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="flex-grow flex p-4 border border-gray-300 rounded-lg shadow-lg">
  //     <Tabs.Root
  //       className="w-full grid grid-cols-4 gap-8"
  //       defaultValue="herbset"
  //     >
  //       <Tabs.List
  //         className="col-span-1 flex flex-col gap-4"
  //         aria-label="Manage your account"
  //       >
  //         {tabs.map((tab) => (
  //           <Tabs.Trigger className={tabStyle} value={tab.key} key={tab.key}>
  //             {tab.title}
  //           </Tabs.Trigger>
  //         ))}
  //       </Tabs.List>

  //       {tabs.map((tab) => (
  //         <Tabs.Content
  //           className="h-full col-span-3 py-4 px-6 border border-gray-300 rounded-lg shadow"
  //           value={tab.key}
  //           key={tab.key}
  //         >
  //           <Suspense fallback={<Spinner />}>{tab.component}</Suspense>
  //         </Tabs.Content>
  //       ))}
  //     </Tabs.Root>
  //   </div>
  // );
};

export default ProfilePage;

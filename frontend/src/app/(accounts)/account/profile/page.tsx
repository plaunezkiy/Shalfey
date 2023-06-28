"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { ReactNode, Suspense } from "react";
import Spinner from "@/components/Loaders/Spinner";
import Link from "next/link";

const ProfilePage = () => {
  return <></>;

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
  //           <Suspense fallback={}>{tab.component}</Suspense>
  //         </Tabs.Content>
  //       ))}
  //     </Tabs.Root>
  //   </div>
  // );
};

export default ProfilePage;

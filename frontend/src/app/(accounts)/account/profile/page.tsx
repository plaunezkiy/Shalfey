"use client";
import * as Tabs from "@radix-ui/react-tabs";
import AddressTab from "./tabs/addressTab/AddressTab";
import AuthTab from "./tabs/authTab/AuthTab";
import OrdersTab from "./tabs/ordersTab/OrdersTab";
import { Suspense } from "react";
import Spinner from "@/components/Loaders/Spinner";

const ProfilePage = () => {
  const tabs = [
    {
      key: "address",
      title: "Адреса",
      component: <AddressTab />,
    },
    {
      key: "orders",
      title: "Заказы",
      component: <OrdersTab />,
    },
    {
      key: "account",
      title: "Ваш аккаунт",
      component: <AuthTab />,
    },
  ];
  const tabStyle =
    "p-2 border border-gray-300 shadow rounded-lg text-center hover:shadow-lg hover:text-green-500 cursor-pointer duration-150 data-[state=active]:text-green-500 data-[state=active]:shadow-xl data-[state=active]:border-green-500";

  return (
    <div className="flex-grow flex p-4 border border-gray-300 rounded-lg shadow-lg">
      <Tabs.Root
        className="w-full grid grid-cols-4 gap-8"
        defaultValue="herbset"
      >
        <Tabs.List
          className="col-span-1 flex flex-col gap-4"
          aria-label="Manage your account"
        >
          {tabs.map((tab) => (
            <Tabs.Trigger className={tabStyle} value={tab.key} key={tab.key}>
              {tab.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {tabs.map((tab) => (
          <Tabs.Content
            className="h-full col-span-3 py-4 px-6 border border-gray-300 rounded-lg shadow"
            value={tab.key}
            key={tab.key}
          >
            <Suspense fallback={<Spinner />}>{tab.component}</Suspense>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
};

export default ProfilePage;

"use client";
import { useAuthContext } from "@/lib/auth/AuthProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import VendorHeader from "./VendorHeader";

interface Props {
  children: React.ReactNode;
}
const VendorLayout = async ({ children }: Props) => {
  const { user } = useAuthContext();
  const path = usePathname();
  const baseUrl = "/vendor";
  const tabs = [
    { title: "Аналитика", href: baseUrl + "/dashboard" },
    { title: "Заказы", href: baseUrl + "/orders" },
    { title: "Товары", href: baseUrl + "/products" },
    { title: "Реклама", href: baseUrl + "/advertise" },
    { title: "Настройки", href: baseUrl + "/settings" },
  ];
  const tabStyle = "";
  return (
    <div className="flex-grow flex p-4 border border-gray-300 rounded-lg shadow-lg">
      <div className="w-full grid grid-cols-4 gap-8">
        <div className="col-span-1 flex flex-col gap-4">
          <VendorHeader />
          {tabs.map((tab) => (
            <Link
              key={tab.title}
              href={tab.href}
              className={`p-2 border shadow rounded-lg text-center hover:shadow-lg hover:text-green-500 cursor-pointer duration-150 ${
                path === tab.href
                  ? "text-green-500 shadow-lg border-green-500"
                  : "border-gray-300"
              }`}
            >
              {tab.title}
            </Link>
          ))}
        </div>
        <div className="h-full col-span-3 py-4 px-6 border border-gray-300 rounded-lg shadow">
          {children}
        </div>
      </div>
    </div>
  );
};

export default VendorLayout;

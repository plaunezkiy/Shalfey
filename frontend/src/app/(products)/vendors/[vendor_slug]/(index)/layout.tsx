"use client";
import { API_URL, MEDIA_URL } from "@/lib/const";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Vendor } from "@/lib/types";
import { usePathname } from "next/navigation";

const getVendor = async (vendorSlug: string): Promise<Vendor> => {
  const resp = await fetch(API_URL + `vendors/${vendorSlug}`);
  const vendor = await resp.json();
  return vendor;
};

const VendorIndexLayout = async ({
  children,
  params: { vendor_slug },
}: {
  children: React.ReactNode;
  params: { vendor_slug: string };
}) => {
  const path = usePathname();
  const vendorBaseUrl = `/vendors/${vendor_slug}`;
  const tabs = [
    { title: "О магазине", href: vendorBaseUrl },
    { title: "Товары", href: vendorBaseUrl + "/products" },
    { title: "Блог", href: vendorBaseUrl + "/blog" },
  ];
  const vendor = await getVendor(vendor_slug);

  return (
    <main className="grid grid-cols-1 gap-[3rem] min-h-full overflow-auto md:overflow-hidden container pt-8 px-8 md:grid-cols-3">
      <div className="relative col-span-1 bg-green-300 border rounded-lg overflow-hidden shadow">
        <Image
          // className=""
          // onClick={() => setExpandedImage(media)}
          loader={({ src, width, quality }) => {
            return MEDIA_URL + src;
          }}
          src={vendor.image_url}
          alt=""
          style={{ objectFit: "cover" }}
          fill
          // objectFit="cover"
          className="w-20 h-20"
          // width={350}
          // height={100}
          // quality={80}
        />
        {/* <ProductGallery product={product} selectedVariant={selectedVariant} /> */}
      </div>
      <div className="col-span-2 space-y-5 mt-10 md:mt-0">
        <div>
          <Link
            href={vendor.website}
            className="text-5xl font-bold tracking-tight text-gray-800 mb-4"
            data-testid="productName"
          >
            {vendor.name}
          </Link>
          <p>{vendor.description}</p>
        </div>
      </div>
      {/* Отзывы */}
      <div className="col-span-3 border rounded shadow-lg flex flex-col gap-4">
        <div className="w-full flex justify-around shadow-lg">
          {tabs.map((tab) => (
            <Link
              key={tab.title}
              href={tab.href}
              className={`w-full p-2 py-4 flex items-center justify-center font-medium bg-gray-100 hover:bg-white border-b-2 duration-150 ${
                path === tab.href
                  ? "bg-white border-green-500"
                  : "hover:border-green-200"
              }`}
            >
              {tab.title}
            </Link>
          ))}
        </div>
        <div className="p-4">{children}</div>
      </div>
    </main>
  );
};

export default VendorIndexLayout;

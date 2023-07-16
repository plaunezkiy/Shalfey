"use client";
import { useAuthContext } from "@/lib/auth/AuthProvider";
import React from "react";
import Image from "next/image";
import { MEDIA_URL } from "@/lib/const";

const VendorHeader = () => {
  const { user } = useAuthContext();
  if (user && "shop" in user)
    return (
      <div className="relative h-16 flex gap-4 justify-center items-center px-4 border rounded-lg">
        <div className="absolute w-12 h-12 left-3">
          <Image
            // className="w-12 h-12"
            loader={({ src, width, quality }) => {
              return MEDIA_URL + src;
            }}
            src={user.shop.image_url}
            alt=""
            style={{ objectFit: "scale-down" }}
            fill
          />
        </div>

        <p className="text-xl font-medium justify-self-center">
          {user.shop.name}
        </p>
      </div>
    );
};

export default VendorHeader;

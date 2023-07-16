"use client";
import { ProductCard } from "@/components/Product/ProductCard";
import { API_URL } from "@/lib/const";
import { Variant } from "@/lib/types";

interface Props {
  params: {
    vendor_slug: string;
  };
}

const VendorIndex = async ({ params: { vendor_slug } }: Props) => {
  return <></>;
};

export default VendorIndex;

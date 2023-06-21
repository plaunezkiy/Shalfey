"use client";
import { ProductCard } from "@/components/Product/ProductCard";
import { API_URL, MEDIA_URL } from "@/lib/const";
import { Variant, Vendor } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const getVendor = async (vendorSlug: string): Promise<Vendor> => {
  const resp = await fetch(API_URL + `vendors/${vendorSlug}`);
  const vendor = await resp.json();
  return vendor;
};

const getVariants = async (vendorSlug: string): Promise<Variant[]> => {
  const resp = await fetch(API_URL + `vendors/${vendorSlug}/products/`);
  const variants = await resp.json();
  return variants;
};

interface Props {
  params: {
    vendor_slug: string;
  };
}

const VendorIndex = async ({ params: { vendor_slug } }: Props) => {
  const vendor = await getVendor(vendor_slug);
  const vendor_products = await getVariants(vendor_slug);

  return (
    <>
      {/* <ProductPageSeo product={product} /> */}
      <main className="grid grid-cols-1 gap-[3rem] min-h-full overflow-auto md:overflow-hidden container pt-8 px-8 md:grid-cols-3">
        <div className="col-span-1 bg-green-300 border rounded-lg overflow-hidden">
          {/* <Image
            className="h-72"
            // onClick={() => setExpandedImage(media)}
            loader={({ src, width, quality }) => {
              return MEDIA_URL + src;
            }}
            src={vendor.image_url}
            alt=""
            // layout="fill"
            // objectFit="cover"
            // className="w-20 h-20"
            width={150}
            height={100}
            quality={80}
          /> */}
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
        <div className="col-span-3 border rounded shadow-lg p-4 flex flex-col gap-6">
          <p className="font-medium text-xl text-center">Товары:</p>
          {/*  */}
          <div className="card-container grid grid-cols-5 gap-3 auto-rows-fr">
            {vendor_products.map((item) => (
              <ProductCard variant={item} key={item.id} />
            ))}
            {/* {product.variants?.map((provider) => (
          <div
            className="card border shadow hover:shadow-xl rounded-lg p-2 duration-300 group/provider-card h-full"
            key={provider.id}
          >
            <div className="text-center flex flex-col items-center gap-2 h-full">
              <div className="relative p-2 border-b duration-150">
                <p className="absolute right-1 top-1 z-10 p-1 border border-1 rounded-lg text-red-400 hover:text-white bg-white shadow-modal">
                  <HeartOutlineIcon className="w-8 hover:fill-red-400" />
                </p>
                <Image
                  className="group-hover/provider-card:scale-105 duration-300"
                  // onClick={() => setExpandedImage(media)}
                  loader={({ src, width, quality }) => {
                    return src;
                  }}
                  src={provider.image}
                  alt=""
                  // layout="fill"
                  // objectFit="cover"
                  // className="w-20 h-20"
                  width={400}
                  height={400}
                  quality={80}
                />
              </div>
              <p className="flex flex-grow text-lg hover:text-blue-500 hover:underline line-clamp-3 cursor-pointer">
                {provider.name}
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((r_index) => (
                  <StarIcon
                    className={`w-8 ${
                      r_index <= provider.rating
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                  />
                ))}
              </div>
              <p className="text-lg">{provider.price}</p>

              <button
                onClick={() => onAddToCart(provider)}
                type="submit"
                // disabled={isAddToCartButtonDisabled}
                className={clsx(
                  "w-full py-2 flex items-center justify-center text-lg bg-blue-500 text-white disabled:bg-disabled hover:bg-white border-2 rounded-lg"
                  // !isAddToCartButtonDisabled && "hover:border-blue-500 hover:text-blue-500"
                )}
                data-testid="addToCartButton"
              >
                {loadingAddToCheckout
                  ? t.formatMessage(messages.adding)
                  : t.formatMessage(messages.addToCart)}
              </button>
              
            </div>
          </div>
        ))} */}
          </div>
        </div>
      </main>
    </>
  );
};

export default VendorIndex;

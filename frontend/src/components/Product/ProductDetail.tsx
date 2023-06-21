"use client";
import { API_URL, MEDIA_URL } from "@/lib/const";
import { Variant } from "@/lib/types";
import Image from "next/image";
import ReviewCard from "../Review/ReviewCard";
import Link from "next/link";
import AddToCartBtn from "../Buttons/AddToCartBtn";
import AddToLikedBtn from "../Buttons/AddToLikedBtn";

const getVariant = async (vendorSlug: string, variantSlug: string) => {
  const resp = await fetch(
    API_URL + `variants/${variantSlug}?vendor=${vendorSlug}`
  );
  const variant = await resp.json();
  return variant;
};

interface Props {
  vendor_slug: string;
  product_slug: string;
}

const ProductDetail = async ({ vendor_slug, product_slug }: Props) => {
  const product: Variant = await getVariant(vendor_slug, product_slug);

  return (
    <>
      {/* <ProductPageSeo product={product} /> */}
      <main className="grid grid-cols-1 gap-[3rem] min-h-full overflow-auto md:overflow-hidden container pt-8 px-8 md:grid-cols-3">
        <div className="col-span-1 bg-green-300 border rounded-lg overflow-hidden shadow">
          <Image
            className=""
            // onClick={() => setExpandedImage(media)}
            loader={({ src, width, quality }) => {
              return MEDIA_URL + src;
            }}
            src={product.image_url}
            alt=""
            // layout="fill"
            // objectFit="cover"
            // className="w-20 h-20"
            width={150}
            height={100}
            quality={80}
          />
          {/* <ProductGallery product={product} selectedVariant={selectedVariant} /> */}
        </div>
        <div className="col-span-2 space-y-5 mt-10 md:mt-0">
          <div>
            <h1
              className="text-5xl font-bold tracking-tight text-gray-800 mb-2"
              data-testid="productName"
            >
              {product.name}
            </h1>
            <Link
              href={`/vendors/${vendor_slug}`}
              className="text-blue-500 text-lg mb-4"
            >
              {product.vendor.name}
            </Link>
            <div className="flex gap-4">
              <AddToCartBtn variant={product} />
              <AddToLikedBtn variant={product}>В избранное</AddToLikedBtn>
            </div>
            <p>{product.description}</p>
            {/* {shouldDisplayPrice && (
            <h2 className="text-xl font-bold tracking-tight text-gray-800">
            {formatPrice(price)}
            </h2>
          )} */}
            {/* {!!product.category?.slug && (
              <Link
                href={paths.category._slug(product?.category?.slug).$url()}
                passHref
                legacyBehavior
              >
                <a>
                  <p className="text-blue-500 text-md mt-2 font-medium cursor-pointer">
                    {translate(product.category, "name")}
                  </p>
                </a>
              </Link>
            )} */}
          </div>

          {/* <VariantSelector product={product} selectedVariantID={selectedVariantID} /> */}

          {/* <button
          onClick={onAddToCart}
          type="submit"
          disabled={isAddToCartButtonDisabled}
          className={clsx(
            "w-full py-3 px-8 flex items-center justify-center text-base bg-action-1 text-white disabled:bg-disabled hover:bg-white border-2 border-transparent  focus:outline-none",
            !isAddToCartButtonDisabled && "hover:border-action-1 hover:text-action-1"
          )}
          data-testid="addToCartButton"
        >
          {loadingAddToCheckout
            ? t.formatMessage(messages.adding)
            : t.formatMessage(messages.addToCart)}
        </button> */}

          {/* {!selectedVariant && (
            <p className="text-base text-yellow-600">
              {t.formatMessage(messages.variantNotChosen)}
            </p>
          )} */}

          {/* {selectedVariant?.quantityAvailable === 0 && (
            <p className="text-base text-yellow-600" data-testid="soldOut">
              {t.formatMessage(messages.soldOut)}
            </p>
          )} */}
          {/* {selectedVariant?.quantityAvailable} */}

          {/* {!!addToCartError && <p>{addToCartError}</p>} */}

          {/* {description && (
            <div className="space-y-6">
              <RichText jsonStringData={description} />
            </div>
          )} */}

          {/* <AttributeDetails product={product} selectedVariant={selectedVariant} /> */}
        </div>
        {/* Отзывы */}
        <div className="col-span-3 border rounded shadow-lg p-4 flex flex-col gap-6">
          <div>
            <p className="mb-4 font-medium text-xl text-center">
              Последние Отзывы:
            </p>
            {/*  */}
            <div className="card-container grid grid-cols-5 gap-3 auto-rows-fr">
              {[1, 2, 3, 4, 5].map((review) => (
                <ReviewCard key={review} />
              ))}
            </div>
          </div>
          <div>
            <p className="font-medium text-xl text-center">Похожие товары:</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;

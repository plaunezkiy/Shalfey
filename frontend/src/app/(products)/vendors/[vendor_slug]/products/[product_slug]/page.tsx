import ProductDetail from "@/components/Product/ProductDetail";
// import { API_URL, MEDIA_URL } from "@/lib/const";
// import { Variant } from "@/lib/types";
import Image from "next/image";

const VendorProduct = async ({
  params,
}: {
  params: { vendor_slug: string; product_slug: string };
}) => {
  // const product: Variant = await getVariant(
  //   params.vendor_slug,
  //   params.product_slug
  // );

  return (
    <>
      {/* <ProductPageSeo product={product} /> */}
      <ProductDetail
        vendor_slug={params.vendor_slug}
        product_slug={params.product_slug}
      />
    </>
  );
};

export default VendorProduct;

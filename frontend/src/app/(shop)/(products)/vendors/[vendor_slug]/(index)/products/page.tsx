import { ProductCard } from "@/components/Product/ProductCard";
import { API_URL } from "@/lib/const";
import { Variant } from "@/lib/types";

interface Props {
  params: {
    vendor_slug: string;
  };
}

const getVariants = async (vendorSlug: string): Promise<Variant[]> => {
  const resp = await fetch(API_URL + `vendors/${vendorSlug}/products/`);
  const variants = await resp.json();
  return variants;
};

const VendorProducts = async ({ params: { vendor_slug } }: Props) => {
  const vendor_products = await getVariants(vendor_slug);

  return (
    <>
      {/* <ProductPageSeo product={product} /> */}

      {/* Отзывы */}
      <p className="font-medium text-xl text-center mb-4">Товары:</p>
      {/*  */}
      <div className="card-container grid grid-cols-5 gap-3 auto-rows-fr">
        {vendor_products.map((item) => (
          <ProductCard variant={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default VendorProducts;

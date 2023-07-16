"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/common/Dropdown";
import { useAuthContext } from "@/lib/auth/AuthProvider";
import { API_URL } from "@/lib/const";
import { Variant, VendorOwner } from "@/lib/types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const getProducts = async (slug: string) => {
  const resp = await fetch(API_URL + `vendors/${slug}/products`);
  return await resp.json();
};

const ProductSelector = async () => {
  const { user } = useAuthContext();
  const [selectedProducts, setSelectedProducts] = useState<Variant[]>([]);
  let products: Variant[] = [];
  if (user && "shop" in user) {
    products = await getProducts(user.shop.slug);
  }

  const productCheckHandler = (product: Variant) => {
    if (selectedProducts.some((p) => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  return (
    <>
      <div className="p-2 border rounded-lg shadow">
        <p className="text-xs text-center">Товар:</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="group flex gap-1 items-center justify-center cursor-pointer hover:text-emerald-600">
              <p className="text-sm font-medium">
                {selectedProducts.length
                  ? `${selectedProducts.length} Позиций`
                  : "Не выбрано"}
              </p>
              <ChevronDownIcon className="w-5 group-data-[state=open]:rotate-180 duration-200" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white p-0" align="center">
            {products.map((product: Variant) => (
              <DropdownMenuItem asChild key={product.id}>
                <div
                  className="flex items-center gap-1"
                  onClick={() => productCheckHandler(product)}
                >
                  <input
                    type="checkbox"
                    defaultChecked={selectedProducts.some(
                      (p) => p.id === product.id
                    )}
                    className="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 cursor-pointer"
                  />
                  <p key={product.id} className="p-1 truncate">
                    {product.name}
                  </p>
                </div>
              </DropdownMenuItem>
            ))}

            {/* <DropdownMenuSeparator /> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default ProductSelector;

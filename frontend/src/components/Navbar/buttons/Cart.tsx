"use client";
import { setCart, totalCartItemSelector } from "@/lib/store/features/cartSlice";
import loadFromLocalstorage from "@/lib/store/loadFromLocalstorage";
import { useAppDispatch, useAppSelector } from "@/lib/store/store";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect } from "react";

const CartButton = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCart(loadFromLocalstorage("cart", "[]")));
  }, []);
  const cartCounter = useAppSelector((state) => totalCartItemSelector(state));

  return (
    <Link href={`/checkout/`} className="">
      {/* <NavIconButton icon="bag" />{" "} */}
      <div className="relative">
        <ShoppingCartIcon className="w-12 text-primary-main p-2 border border-primary-main rounded hover:bg-primary-main hover:text-primary-white duration-150 cursor-pointer" />
        {!!cartCounter && (
          <span
            key={cartCounter}
            className="animate-pingOnce absolute px-1 font-semibold -top-1 -right-1 text-sm text-white border border-blue-500 bg-blue-500 flex justify-center items-center rounded"
            data-testid="cartCounter"
          >
            {cartCounter}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartButton;

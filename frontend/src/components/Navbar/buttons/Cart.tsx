"use client";
import { totalCartItemSelector } from "@/lib/store/features/cartSlice";
import { useAppSelector } from "@/lib/store/store";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const CartButton = () => {
  const cartCounter = useAppSelector((state) => totalCartItemSelector(state));

  return (
    <Link href={`checkout/`} className="">
      {/* <NavIconButton icon="bag" />{" "} */}
      <div className="relative">
        <ShoppingCartIcon className="w-12 text-emerald-700 p-2 border border-emerald-700 rounded hover:bg-emerald-700 hover:text-white duration-150 cursor-pointer" />
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

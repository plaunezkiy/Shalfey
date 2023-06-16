"use client";
import { useAppDispatch, useAppSelector } from "@/lib/store/store";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "@/lib/store/features/cartSlice";
import { Variant } from "@/lib/types";
import QtyButton from "./QtyButton";

interface Props {
  variant: Variant;
}

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.variant.id)
  );

  const dispatch = useAppDispatch();

  if (!qty)
    return (
      <button
        onClick={() => dispatch(increment(props.variant))}
        className="w-full py-2 text-lg bg-blue-500 text-white hover:bg-white hover:text-blue-500 border border-blue-500 rounded-lg"
      >
        В корзину
      </button>
    );
  return (
    <QtyButton
      onIncrease={() => dispatch(increment(props.variant))}
      onDecrease={() => dispatch(decrement(props.variant))}
      qty={qty}
    />
  );
};

export default AddToCartBtn;

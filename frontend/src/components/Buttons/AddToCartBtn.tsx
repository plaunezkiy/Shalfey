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
        className="w-full py-2 text-lg font-semibold bg-primary-white text-primary-dark hover:bg-primary-dark hover:text-primary-white border-2 border-primary-dark rounded-lg shadow hover:shadow-lg duration-150"
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

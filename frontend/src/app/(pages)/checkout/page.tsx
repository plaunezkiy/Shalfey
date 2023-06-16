"use client";
import {
  decrement,
  increment,
  totalPriceSelector,
} from "@/lib/store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/store";
import Image from "next/image";
import CheckoutForm from "./CheckoutForm";
import QtyButton from "@/components/Buttons/QtyButton";

const CheckoutPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const cartTotal = useAppSelector((state) => totalPriceSelector(state));
  const dispatch = useAppDispatch();

  return (
    <section>
      <h1 className="sr-only">Checkout</h1>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x rounded-lg shadow-xl border border-gray-300">
        <div className="py-12 md:py-16 md:col-span-2">
          <div className="mx-auto px-20 space-y-4">
            {/* <div className="flex flex-col gap-4"> */}
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 rounded-full bg-emerald-600"></span>
              <h2 className="font-medium text-gray-900">Шалфей</h2>
            </div>
            {/* </div> */}

            <div>
              <p className="text-2xl font-medium tracking-tight text-gray-900 after:content-['_₽']">
                {cartTotal}
              </p>

              <p className="mt-1 text-lg text-gray-600">Товары в корзине:</p>
            </div>

            <div>
              <div className="flow-root">
                <div className="header flex gap-4 px-4">
                  <p className="w-36 text-center">Кол-во</p>
                  <p className="flex-grow text-center">Товар</p>
                  <p className="w-16 text-center">Цена</p>
                </div>
                <div className="my-2 flex flex-col gap-2">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-4 p-4 rounded-lg shadow border border-gray-300"
                    >
                      <QtyButton
                        className="w-32"
                        onIncrease={() => dispatch(increment(item.product))}
                        onDecrease={() => dispatch(decrement(item.product))}
                        qty={item.qty}
                      />
                      <div className="w-full flex gap-2">
                        <Image
                          className="h-16 w-16 rounded"
                          // onClick={() => setExpandedImage(media)}
                          loader={({ src, width, quality }) => {
                            return "http://localhost:8000/media/" + src;
                          }}
                          src={item.product.image_url}
                          alt=""
                          style={{ objectFit: "cover" }}
                          // objectFit="cover"
                          // className="w-20 h-20"
                          width={150}
                          height={100}
                          quality={80}
                        />
                        <div className="flex-grow">
                          <h3 className="text-lg text-gray-900 line-clamp-1">
                            {item.product.name}
                          </h3>

                          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                            <div>
                              <dt className="inline">Size:</dt>
                              <dd className="inline">XXS</dd>
                            </div>

                            <div>
                              <dt className="inline">Color:</dt>
                              <dd className="inline">White</dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                      <p className="ml-auto w-24 flex items-center font-medium justify-center after:content-['_₽']">
                        {item.qty * item.product.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 md:py-24">
          <CheckoutForm />
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;

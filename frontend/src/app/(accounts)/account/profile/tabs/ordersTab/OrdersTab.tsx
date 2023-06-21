"use client";
import { client } from "@/lib/api";
import { API_URL } from "@/lib/const";
import { CartItem } from "@/lib/types";

type Order = {
  id: number;
  price: number;
  created: string;
  modified: string;
  status: string;
  items: CartItem[];
};

const getOrders = async () => {
  return client.get(API_URL + "users/me/orders/").then((resp) => resp.json());
};

const OrdersTab = async () => {
  const orders = await getOrders();
  //   const orders = [];

  return (
    <div className="w-full flex flex-col">
      {orders.map((order: Order) => (
        <div
          key={order.id}
          className="w-full p-4 rounded-lg border border-gray-300 shadow flex justify-around hover:shadow-modal duration-150 cursor-pointer"
        >
          <p>{order.id}</p>
          <p>{order.status}</p>
          <p>{order.modified}</p>
          <p className="after:content-['_₽']">{order.price}</p>
        </div>
      ))}
    </div>
  );
};

export default OrdersTab;

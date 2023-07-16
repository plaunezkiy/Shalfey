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
  return client.get(API_URL + "users/me/orders/").then(async (resp) => {
    const data = await resp.json();
    if (resp.ok) return data;
    console.error(data);
    return [];
    // resp.json();
  });
};

const OrdersTab = async () => {
  // const orders = await getOrders();

  const orders: Order[] = [
    {
      id: 2,
      price: 250.0,
      created: "2023-06-20T14:17:20.783494Z",
      modified: "2023-06-20T14:29:53.051402Z",
      status: "placed",
      items: [
        {
          product: {
            id: 3983,
            name: "Васакот Сироп, от респираторных заболеваний, 100 мл",
            description:
              "Сироп Васакот - средство для тонизации дыхательной системы и лечения респираторных заболеваний. Данный сироп входит в число лучших средств от кашля и болезней дыхательной системы. Курильщики, астматики, жители больших городов и просто простудившиеся люди знают, как много беспокойств доставляют проблемы с дыханием. Этот сироп смягчит раздражённое горло и снимет воспаление дыхательных путей, воздействует как отхаркивающее. Способствует прекращению кашля. Подходит для детей.\r\n\r\nАюрведические сиропы обладают способностью быстро оказывать лечебное действие. Представленный препарат от Коттаккал Аюрведы не является исключением. По цене он сопоставим с недорогими сиропами отечественного производства, а его эффективность и безопасность — гораздо выше.",
            slug: "gasex-syrop-200-ml-himalaya",
            url: "https://mahabazar.club/ayurveda/ayurvedic-remedies/gasex-syrop-200-ml-himalaya/",
            image_url: "/api/media/media/gasex.jpg",
            quantity: 25,
            price: 10.0,
            vendor: {
              id: 3,
              name: "Dom Ayurveda",
              description:
                "Наш интернет-магазин Дом Аюрведа является надежным поставщиком товаров из Индии. Многолетний опыт работы позволил нам отобрать наиболее эффективные и востребованные Вами препараты и лечебную косметику.\r\nВ каталоге представлены натуральные целебные масла, массажные масла, созданные по древним формулам;  уходовая косметика различных производителей (крема, маски, тоники, гидролаты, скрабы) с добавлением трав и природных экстрактов; средства гигиены с натуральными компонентами— зубные пасты, шампуни, гели, мыло, натуральная хна и краски для волос.",
              slug: "dom-ayurveda",
              website: "https://domayurveda.ru",
              image_url: "a123/image.jpeg",
              owner: 1,
            },
          },
          qty: 5,
        },
      ],
    },
  ];

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

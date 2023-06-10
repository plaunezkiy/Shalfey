"use client";
import React, { ReactElement } from "react";

import { Variant } from "@/lib/types";
// import  from "@heroicons/react/solid";
import {
  StarIcon,
  HeartIcon as HeartSolidIcon,
} from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const getVariants = async () => {
  const resp = await fetch("http://127.0.0.1:8003/api/variants/", {
    method: "GET",
  });
  const variants = await resp.json();

  return variants;
};

const variants: Variant[] = [
  {
    id: 137,
    vendor: {
      id: 3,
      name: "",
      description: null,
      slug: "",
      website: "https://domayurveda.ru",
      owner: null,
    },
    image_url: "media/Baidyanath-Mahyograj-Guggulu.jpg",
    name: "Махайогарадж гуггул",
    description:
      "Препарат укрепляет иммунную систему, повышает защитные функции организма, стимулирует отток токсинов и шлаков, очищает лимфу, нормализует работу важнейших органов и систем. В тоже время, Махайогарадж Гуггул действует как эффективное лечебное средство для профилактики и исцеления от целого ряда недугов и болезней.\r\n\r\nМахайогарадж Гуггул – эффективное средство против любого вида болевых ощущений в теле, которое провоцирует запуск внутренних процессов саморегуляции, устраняя блоки, вызванные повышенной зашлакованностью и некорректной работой важных внутренних органов. Препарат выводит из организма нерастворимые соли, нормализует функцию почек, значительно снижает уровень холестерина, помогает при кожных воспалениях, нарушениях гормонального и менструального цикла у женщин.",
    slug: "mahajogaradzh-guggul",
    url: "https://domayurveda.ru/magazin/product/mahajogaradzh-guggul-mahayogaraj-guggulu-oporno-dvigatelnaya-sistema-sri-sri-tattva-30-tab",
    quantity: 5,
    price: 15.0,
    product: null,
  },
  {
    id: 3976,
    vendor: {
      id: 6,
      name: "Mahabazar",
      description:
        "Mahabazar.club — первый международный маркетплейс в сфере аюрведы, здоровья, красоты и саморазвития. Мы стремимся собрать на своем сайте как можно больше интересных, уникальных товаров и услуг, которые найдут отклик наших пользователей и их высокую оценку.\r\nК вашим услугам наша служба поддержки, работающая на английском, русском и испанском языках, удобные способы оплаты, а также привлекательные цены на все товары.\r\nМы осуществляем доставку более чем в 150 стран.",
      slug: "mahabazar",
      website: "https://mahabazar.club",
      owner: null,
    },
    image_url: "media/мускальт.jpg",
    name: "Мускалт Форте, восстановление суставов, 30 таб",
    description:
      "Мускалт Форте - современная эффективная разработка в мире БАДов, действие которой фокусируется на сохранении и восстановлении здоровья суставов.\r\nПрепарат помогает решить проблему хронических болей в суставах, при этом его целью является не снятие поверхностных симптомов боли, а решение глубоких причин недуга.\r\nСредство хорошо подходит как для лечения, так и для предотвращения запущенных случаев дегенеративных заболеваний суставов, решения проблемы буквально на корню.\r\n\r\nДействие Мускалт форте основано на мощной комбинации высокоэффективных натуральных экстрактов из проверенных временем трав, обеспечивающих естественный противовоспалительный и антиоксидантный эффект. Таким образом, средство способствует защите хрящевой ткани от повреждения свободными радикалами и возвращению уровня антиоксидантных ферментов почти до естественной нормы.",
    slug: "muscalt-forte-30-tabs-aimil",
    url: "https://mahabazar.club/ayurveda/muscalt-forte-30-tabs-aimil/",
    quantity: 79,
    price: 159.0,
    product: null,
  },
  {
    id: 3977,
    vendor: {
      id: 6,
      name: "Mahabazar",
      description:
        "Mahabazar.club — первый международный маркетплейс в сфере аюрведы, здоровья, красоты и саморазвития. Мы стремимся собрать на своем сайте как можно больше интересных, уникальных товаров и услуг, которые найдут отклик наших пользователей и их высокую оценку.\r\nК вашим услугам наша служба поддержки, работающая на английском, русском и испанском языках, удобные способы оплаты, а также привлекательные цены на все товары.\r\nМы осуществляем доставку более чем в 150 стран.",
      slug: "mahabazar",
      website: "https://mahabazar.club",
      owner: null,
    },
    image_url: "media/аюш.jpg",
    name: "Аюш Кватх, иммунитет, 90 г",
    description:
      "Аюш Кватх от Аимил - комплексная формула с мощным противомикробным и иммуностимулирующим действием. Обогащена растениями с научно подтвержденными целебными свойствами, такими как туласи, имбирь, корица, чёрный перец в чистом виде.\r\n\r\nПомимо своих основных свойств по борьбе с вирусами и микробами, состав препарата способствует повышению общей ежедневной активности и стабилизации эмоций, так как обладает свойствами адаптогена, что помогает поддержанию качества жизни в целом.\r\n\r\nБиохимически действие препарата заключается в увеличении выработки антител, что ведёт к укреплению иммунной системы и её способности давать мощный ответ вирусным и бактериальным инфекциям.\r\n\r\nАюш Кватх быстро снимает симптомы простуды, такие как кашель и насморк. Это происходит за счёт увеличения скорости уничтожения различных микроорганизмов, а убивая бактерии и вирусы, препарат также подавляет и дальнейший рост микробов.",
    slug: "ayush-kwath-90-g-aimil",
    url: "https://mahabazar.club/ayurveda/ayush-kwath-90-g-aimil/",
    quantity: 79,
    price: 27.0,
    product: null,
  },
  {
    id: 3978,
    vendor: {
      id: 6,
      name: "Mahabazar",
      description:
        "Mahabazar.club — первый международный маркетплейс в сфере аюрведы, здоровья, красоты и саморазвития. Мы стремимся собрать на своем сайте как можно больше интересных, уникальных товаров и услуг, которые найдут отклик наших пользователей и их высокую оценку.\r\nК вашим услугам наша служба поддержки, работающая на английском, русском и испанском языках, удобные способы оплаты, а также привлекательные цены на все товары.\r\nМы осуществляем доставку более чем в 150 стран.",
      slug: "mahabazar",
      website: "https://mahabazar.club",
      owner: null,
    },
    image_url: "media/фифатрол.jpg",
    name: "Фифатрол таблетки, 30 таб",
    description:
      "Фифатрол - эффективная запатентованная формула от Аимил, обеспечивающая быстрое облегчение при вирусных инфекциях верхних дыхательных путей и их симптомах, таких как насморк, боли в горле, лихорадка, кашель и заложенность в груди. Это натуральный антибиотик и бронхолитик без побочных эффектов.\r\n\r\nРитм нашей повседневной жизни таков, что требует стремительных решений в выполнении задач. Современная медицина также преследует эти цели - создание продуктов, которые давали бы быстрое решение возникшей проблеме в виде простуды или гриппа. Фифатрол - первоклассный пример такого решения!",
    slug: "fifatrol-30-tab-aimil",
    url: "https://mahabazar.club/ayurveda/fifatrol-30-tab-aimil/",
    quantity: 30,
    price: 25.0,
    product: null,
  },
  {
    id: 3979,
    vendor: {
      id: 6,
      name: "Mahabazar",
      description:
        "Mahabazar.club — первый международный маркетплейс в сфере аюрведы, здоровья, красоты и саморазвития. Мы стремимся собрать на своем сайте как можно больше интересных, уникальных товаров и услуг, которые найдут отклик наших пользователей и их высокую оценку.\r\nК вашим услугам наша служба поддержки, работающая на английском, русском и испанском языках, удобные способы оплаты, а также привлекательные цены на все товары.\r\nМы осуществляем доставку более чем в 150 стран.",
      slug: "mahabazar",
      website: "https://mahabazar.club",
      owner: null,
    },
    image_url: "media/Вагитон_пенка.jpg",
    name: "Вагитон, пенка для интимной гигиены, 180 мл",
    description:
      "Вагитон, пенка для интимной гигиены - гигиеническое средство для женщин со сбалансированным рН (от 2.5 до 4.5), оптимальным для поддержания здоровой вагинальной микрофлоры и ощущения чистоты и свежести в течение всего дня.\r\n\r\nВагитон - это не косметический продукт! Он обладает настоящими терапевтическими свойствами. Состав средства тщательно разрабатывался с применением секретов Аюрведы.\r\n\r\nОдним из основных ингредиентов средства является классический аюрведический препарат для оздоровления кожи - сфатика бхасма. Её целебное воздействие вкупе с растительными компонентами зеленого чая, алоэ вера, амлы лодхры и др. успокаивает, восстанавливает, сохраняет чистоту и свежесть самой нежной и чувствительной области тела женщины. Предотвращает распространение инфекции, грибка. Устраняет неприятный запах, раздражение и зуд, поддерживает оптимальный щелочной баланс микрофлоры влагалища и естественным путём борется с вредными бактериями.",
    slug: "vagitone-wash-180-ml-aimil",
    url: "https://mahabazar.club/ayurveda/vagitone-wash-180-ml-aimil/",
    quantity: 1,
    price: 35.0,
    product: null,
  },
  {
    id: 3980,
    vendor: {
      id: 6,
      name: "Mahabazar",
      description:
        "Mahabazar.club — первый международный маркетплейс в сфере аюрведы, здоровья, красоты и саморазвития. Мы стремимся собрать на своем сайте как можно больше интересных, уникальных товаров и услуг, которые найдут отклик наших пользователей и их высокую оценку.\r\nК вашим услугам наша служба поддержки, работающая на английском, русском и испанском языках, удобные способы оплаты, а также привлекательные цены на все товары.\r\nМы осуществляем доставку более чем в 150 стран.",
      slug: "mahabazar",
      website: "https://mahabazar.club",
      owner: null,
    },
    image_url: "media/вагитон.jpg",
    name: "Вагитон, вагинальный гель, 50 г",
    description:
      "Вагитон гель - увлажняющее и дезодорирующее средство на водной основе для ежедневного ухода за интимной женской зоной. Сочетает в себе формулу двойного действия - противомикробного и тонизирующего средства. Настоящий эликсир, дарящий комфорт и свежесть Вашей самой чувствительной зоне!\r\n\r\nВ ходе гинекологического тестирования средство показало потрясающе позитивное влияние на слизистые стенки влагалища. Вагитон быстро и эффективно снимает симптомы вагинальных инфекций: увлажняет и успокаивает кожу, снимает сухость, зуд и раздражение, регенерирует слизистую, оказывая выраженный восстанавливающий эффект, а также предотвращает появление неприятного запаха из-за нежелательных выделений.\r\n\r\nВ целом Вагитон гель оказывает укрепляющее, тонизирующее, антиоксидантное и противовоспалительное действие на ткани. Помогает контролировать секрецию и усиливает кровообращение в тканях влагалища, улучшает эластичность и укрепляет мышечную стенку влагалища, что благотворно сказывается на интимной жизни женщины и её физиологическом благополучии.",
    slug: "vagitone-vaginal-gel-50-g-aimil",
    url: "https://mahabazar.club/ayurveda/vagitone-vaginal-gel-50-g-aimil/",
    quantity: 2,
    price: 25.0,
    product: null,
  },
];

async function Home() {
  // const variants = await getVariants();

  return (
    <>
      <div className="py-10">
        <header className="mb-4">
          <div className="container" />
        </header>
        <main>
          <div className="container flex flex-col gap-16">
            {/* {menuData?.menu?.items?.map((m) => {
              if (!m) {
                return null;
              }
              return <HomepageBlock key={m.id} menuItem={m} />;
            })} */}
            {/*  */}
            {["Хиты продаж", "Новинки", "Акции", "Товары недели"].map(
              (rubric, index) => (
                <div className="text-xl" key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-2xl hover:text-blue-500 cursor-pointer duration-150 font-semibold">
                      {rubric}
                    </p>
                    {/* icon */}
                    <div className="flex gap-1 items-center hover:text-blue-500 cursor-pointer duration-150">
                      <p className="text-md pb-[2px]">Смотреть все</p>
                      <ArrowRightCircleIcon className="w-7" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {variants?.slice(0, 5).map((variant: Variant) => (
                      <div
                        className="w-[250px] card border shadow hover:shadow-xl rounded-lg p-2 duration-300 group/provider-card cursor-pointer"
                        key={variant.id}
                      >
                        <div className="relative text-center flex flex-col items-center gap-2 h-full">
                          {/*  */}
                          <div className="p-2 duration-150">
                            <p className="absolute right-1 top-1 z-10 p-1 border border-1 rounded-lg text-red-400 hover:text-white bg-white hover:bg-red-400 shadow-modal">
                              <HeartSolidIcon className="w-8" />
                            </p>
                            <Image
                              className="group-hover/provider-card:scale-105 duration-300 h-72"
                              // onClick={() => setExpandedImage(media)}
                              loader={({ src, width, quality }) => {
                                return "http://localhost:8003/media/" + src;
                              }}
                              src={variant.image_url}
                              alt=""
                              // layout="fill"
                              // objectFit="cover"
                              // className="w-20 h-20"
                              width={150}
                              height={100}
                              quality={80}
                            />
                          </div>
                          {/*  */}
                          <p className="border-t w-full flex flex-grow text-lg items-center justify-center hover:text-blue-500 hover:underline">
                            <Link
                              href={`vendors/${variant.vendor.slug}/products/${variant.slug}`}
                            >
                              {variant.name}
                            </Link>
                          </p>
                          <p className="border-t w-full text-center text-lg items-center hover:text-blue-500 hover:underline">
                            <Link href={`vendors/` + variant.vendor.slug}>
                              {variant.vendor.name}
                            </Link>
                          </p>

                          <div className="border-t w-full flex justify-around py-2">
                            <p className="text-lg font-medium after:content-['руб.']">
                              {variant.price}
                            </p>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((r_index) => (
                                <StarIcon
                                  key={r_index}
                                  className={`w-5 ${
                                    r_index <= 3
                                      ? "text-yellow-400"
                                      : "text-gray-400"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          {/* add to cart */}
                          <p
                            // onClick={() => onAddToCart(provider)}
                            className="w-full py-2 text-lg bg-blue-500 text-white hover:bg-white hover:text-blue-500 border border-blue-500 rounded-lg"
                          >
                            Купить
                          </p>
                        </div>
                      </div>

                      // <div className="aspect-square w-96 border" key={variant.id}>
                      //   <p className="text-lg">{variant.name}</p>
                      // </div>
                    ))}
                  </div>
                </div>
              )
            )}

            {/*  */}
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;

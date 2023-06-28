"use client";
import { API_URL, MEDIA_URL } from "@/lib/const";
import { Variant } from "@/lib/types";
import Image from "next/image";
import ReviewCard from "../Review/ReviewCard";
import Link from "next/link";
import AddToCartBtn from "../Buttons/AddToCartBtn";
import AddToLikedBtn from "../Buttons/AddToLikedBtn";
import { ShareIcon, StarIcon } from "@heroicons/react/24/outline";
import { ProductCard } from "./ProductCard";
import * as Tabs from "@radix-ui/react-tabs";
import { useAuthContext } from "@/lib/auth/AuthProvider";
import { RateReviewButton } from "../Review/RateReviewButton";
import RatingStars from "../common/RatingStars";
import { useRef } from "react";

const getVariant = async (vendorSlug: string, variantSlug: string) => {
  const resp = await fetch(
    API_URL + `variants/${variantSlug}?vendor=${vendorSlug}`
  );
  const variant = await resp.json();
  return variant;
};

interface Props {
  vendor_slug: string;
  product_slug: string;
}

const ProductDetail = async ({ vendor_slug, product_slug }: Props) => {
  const { isAuthenticated } = useAuthContext();
  const tabsRef = useRef();
  const product: Variant = await getVariant(vendor_slug, product_slug);
  // const isAuthenticated = true;
  const tabStyle =
    "w-full p-2 py-4 flex items-center justify-center font-medium data-[state=inactive]:bg-gray-100 hover:bg-white hover:border-gray-300 border-b-2 data-[state=active]:bg-white data-[state=active]:border-green-500 border-transparent duration-150";
  const tabContent = "p-4";

  return (
    <>
      {/* <ProductPageSeo product={product} /> */}
      <main className="grid grid-cols-1 gap-[3rem] min-h-full overflow-auto md:overflow-hidden container pt-8 px-8 md:grid-cols-3">
        <div className="relative col-span-1 bg-green-300 border rounded-lg overflow-hidden shadow">
          <Image
            // className=""
            // onClick={() => setExpandedImage(media)}
            loader={({ src, width, quality }) => {
              return MEDIA_URL + src;
            }}
            src={product.image_url}
            alt=""
            style={{ objectFit: "cover" }}
            fill
            // objectFit="cover"
            className="w-20 h-20"
            // width={350}
            // height={100}
            // quality={80}
          />
          {/* <ProductGallery product={product} selectedVariant={selectedVariant} /> */}
        </div>
        <div className="col-span-2 space-y-5 mt-10 md:mt-0">
          <div>
            <div className="flex gap-2 divide-x justify-start">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((r_index) => (
                  <StarIcon
                    key={r_index}
                    className={`w-5 ${
                      r_index <= 3 ? "text-yellow-400" : "text-gray-400"
                    }`}
                  />
                ))}
              </div>
              <p className="pl-2 cursor-pointer underline">123 Отзывов</p>
            </div>
            <h1
              className="text-3xl font-semibold tracking-tight text-gray-800 mb-2"
              data-testid="productName"
            >
              {product.name}
            </h1>
            <Link
              href={`/vendors/${vendor_slug}`}
              className="text-blue-500 text-lg mb-4"
            >
              {product.vendor.name}
            </Link>
            <div className="flex gap-1 items-center">
              <p className="font-medium mr-1">Категории:</p>
              {["Бальзамы и растворы", "Суспензии", "Капсулы"].map(
                (category, index) => (
                  <p
                    key={index}
                    className="after:content-[','] last:after:content-none text-blue-500 hover:text-blue-800 hover:underline cursor-pointer"
                  >
                    {category}
                  </p>
                )
              )}
            </div>
            <div className="flex gap-1 items-center mb-1">
              <p className="font-medium mr-1">Сборы трав:</p>
              {["Антистресс", "Для печени", "Мужские сборы"].map(
                (category, index) => (
                  <p
                    key={index}
                    className="after:content-[','] last:after:content-none text-blue-500 hover:text-blue-800 hover:underline cursor-pointer"
                  >
                    {category}
                  </p>
                )
              )}
            </div>
            <p>{product.description}</p>
            <div className="mt-4 flex ml-auto w-2/3 gap-4">
              <button className="p-2 flex items-center gap-2 border border-black hover:bg-black hover:text-white shadow rounded-lg duration-300">
                <ShareIcon className="w-5" />
                <p>Поделиться</p>
              </button>
              <AddToCartBtn variant={product} />
              <AddToLikedBtn variant={product}>Избранное</AddToLikedBtn>
            </div>
          </div>
        </div>
        {/* Отзывы */}
        <Tabs.Root
          // ref={tabsRef}
          className="col-span-3 border rounded shadow-lg flex flex-col"
          defaultValue="reviews"
        >
          <Tabs.List className="w-full flex justify-around shadow-lg">
            <Tabs.Trigger value="instructions" className={tabStyle}>
              <p>Инструкция</p>
            </Tabs.Trigger>
            <Tabs.Trigger value="reviews" className={tabStyle}>
              <p>Отзывы</p>
            </Tabs.Trigger>
            <Tabs.Trigger value="similar" className={tabStyle}>
              <p>Похожие товары</p>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="instructions" className={tabContent}>
            <div>
              <p className="w-full text-lg font-medium text-center">
                Инструкции:
              </p>
              <p>
                Инструкция Производитель California Gold Nutrition Тип препарата
                БАД Вид витамина C (аскорбиновая кислота) Вид добавки
                гиалуроновая кислота Назначение улучшение состояния кожи, волос
                и ногтей, восстановление суставов, улучшение состояния кожи
                Органы и системы волосы, ногти, кожа, опорно-двигательная
                система Минимальный возраст от 18 лет Форма выпуска порошки,
                гранулы Рецептурный препарат нет Страна-производитель США Тип
                препарата Тип препарата БАД Назначение восстановление суставов,
                улучшение состояния кожи, улучшение состояния кожи, волос и
                ногтей Органы и системы волосы, кожа, ногти, опорно-двигательная
                система Показания к применению В качестве биологически активной
                добавки к пище, дополнительного источника витамина C и
                гиалуроновой кислоты. Противопоказания индивидуальная
                непереносимость компонентов БАД. Состав пептиды гидролизованного
                рыбьего коллагена, витамин C (в виде аскорбата кальция),
                гиалуроновая кислота (в виде пищевого гиалуроната натрия).
                Способ применения и дозы Взрослым по 1 пакетику (5,16 г.) 1 раз
                в день во время еды, предварительно растворив в 200 мл воды,
                сока, чая комнатной температуры Продолжительность приема: 1
                месяц. При необходимости прием можно повторить. Форма выпуска
                порошок для приготовления раствора для приема внутрь Способ
                применения/введения пероральный Минимальный возраст применения
                от 18 лет Дополнительно Условия хранения В сухом, защищённом от
                прямых солнечных лучей, недоступном для детей месте, при
                температуре от 20°С до 25°С. Особые указания Перед применением
                рекомендуется проконсультироваться с врачом или фармацевтом.
                Заявитель на государственную регистрацию California Gold
                Nutrition Страна бренда США Страна-производитель США Номер
                документа о соответствии AM.01.48.01.003.R.000321.12.21 Дата
                документа о соответствии 28.12.2021 Название препарата
                California Gold Nutrition
              </p>
            </div>
          </Tabs.Content>
          <Tabs.Content value="reviews" className={tabContent}>
            <div>
              <p className="mb-4 font-medium text-xl text-center">
                Последние Отзывы:
              </p>
              {/*  */}
              <div className="card-container grid grid-cols-5 gap-3 auto-rows-fr">
                {isAuthenticated && (
                  <div className="border border-gray-300 rounded-lg shadow w-42 p-3 duration-150 flex flex-col">
                    <div className="flex items-center justify-center">
                      <p className="text-lg font-medium">Ваш отзыв:</p>
                      {/* <p className="text-sm text-slate-500 before:content-['('] after:content-[')']">
                        Новгород
                      </p> */}
                    </div>
                    <div className="flex justify-center items-center">
                      <RatingStars />
                      {/* <p className="text-xs text-slate-500">12 марта 2023</p> */}
                    </div>
                    <textarea className="border-y p-1 my-2 h-full text-sm rounded tracking-tight" />
                    <button className="p-2 border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white rounded">
                      Сохранить
                    </button>
                  </div>
                )}
                {[1, 2, 3, 4, 5].map((review) => (
                  <ReviewCard key={review} />
                ))}
              </div>
            </div>
          </Tabs.Content>
          <Tabs.Content value="similar" className={tabContent}>
            <div>
              <p className="mb-4 font-medium text-xl text-center">
                Похожие товары:
              </p>
              <div className="card-container grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((review) => (
                  <ProductCard key={review} variant={product} />
                ))}
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
        {/* <div className="flex justify-around"></div>

        <div className="col-span-3 border rounded shadow-lg p-4 flex flex-col gap-12"></div>
        <div className="col-span-3 border rounded shadow-lg p-4 flex flex-col gap-12"></div> */}
      </main>
    </>
  );
};

export default ProductDetail;

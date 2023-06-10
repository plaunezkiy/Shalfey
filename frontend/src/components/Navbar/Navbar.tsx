"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

import { BurgerButton } from "./BurgerButton";
import { Menu } from "./Menu";
import styles from "./Navbar.module.css";
import NavIconButton from "./NavIconButton";
import Stamp from "./Stamp";
import UserMenu from "./UserMenu";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  // const paths = usePaths();

  const [authenticated, setAuthenticated] = useState(false);
  // const { authenticated: actuallyAuthenticated } = useUser();

  // const saleorApiUrl = process.env.NEXT_PUBLIC_API_URI;
  // invariant(saleorApiUrl, "Missing NEXT_PUBLIC_API_URI");
  // const domain = new URL(saleorApiUrl).hostname;
  // const { checkout } = useCheckout();
  // const { currentLocale, currentChannel } = useRegions();

  const [showMenu, setShowMenu] = useState(false);

  // const checkoutParams = checkout
  //   ? new URLSearchParams({
  //       checkout: checkout.id,
  //       locale: currentLocale,
  //       channel: currentChannel.slug,
  //       saleorApiUrl,
  //       // @todo remove `domain`
  //       // https://github.com/saleor/saleor-dashboard/issues/2387
  //       // https://github.com/saleor/saleor-app-sdk/issues/87
  //       domain,
  //     })
  //   : new URLSearchParams();

  // const externalCheckoutUrl = checkout ? `/checkout/?${checkoutParams.toString()}` : "#";
  // const counter =
  //   checkout?.lines?.reduce(
  //     (amount: number, line?: CheckoutLineDetailsFragment | null) =>
  //       line ? amount + line.quantity : amount,
  //     0
  //   ) || 0;

  // Avoid hydration warning by setting authenticated state in useEffect
  // useEffect(() => {
  //   setAuthenticated(actuallyAuthenticated);
  // }, [actuallyAuthenticated]);
  return (
    <nav className="relative flex flex-col items-center shadow-lg h-16">
      <div className="px-8 w-full xl:w-[1250px] h-full flex ">
        {/* right of navbar */}
        <div className=" h-full flex gap-8 justify-around items-center">
          <Link href={`/`}>
            <p className="text-2xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-bl from-emerald-700 to-lime-700">
              АйХерб
            </p>
          </Link>
          <BurgerButton open={showMenu} reset={() => setShowMenu(!showMenu)} />
        </div>
        {/* left of navbar */}
        <div className="flex ml-auto items-center gap-4">
          <Link href={`checkout/`} className="">
            {/* <NavIconButton icon="bag" />{" "} */}
            <div className="relative">
              <HeartIcon className="w-12 text-emerald-700 p-2 border border-emerald-700 rounded hover:bg-emerald-700 hover:text-white duration-150 cursor-pointer" />
              {!!6 && (
                <span
                  className={styles["nav-icon-counter"]}
                  data-testid="cartCounter"
                >
                  6
                </span>
              )}
            </div>
          </Link>
          <Link href={`checkout/`} className="">
            {/* <NavIconButton icon="bag" />{" "} */}
            <div className="relative">
              <ShoppingCartIcon className="w-12 text-emerald-700 p-2 border border-emerald-700 rounded hover:bg-emerald-700 hover:text-white duration-150 cursor-pointer" />
              {!!4 && (
                <span
                  className={styles["nav-icon-counter"]}
                  data-testid="cartCounter"
                >
                  4
                </span>
              )}
            </div>
          </Link>
          {!authenticated ? (
            // <Link >
            <p
              className="text-lg font-medium text-emerald-700 p-2 border border-emerald-700 rounded hover:bg-emerald-700 hover:text-white duration-150 cursor-pointer"
              onClick={() => setAuthenticated(true)}
            >
              Войти
            </p>
          ) : (
            // </Link>
            <UserMenu onLogout={() => setAuthenticated(false)} />
          )}
        </div>
      </div>
    </nav>
  );
};
//   return (
//     <div className="relative flex flex-col items-center shadow-lg">
//       <div className="sm:container w-full h-16 flex gap-8 px-8 justify-between items-center">
//         {/* left of navbar */}
//         <div className="flex gap-8">
//           {/* brand logo */}
//           <Link href={`/`}>
//             <p className="text-xl font-medium cursor-pointer bg-clip-text text-transparent bg-gradient-to-bl from-emerald-700 to-lime-700">
//               АйХерб
//             </p>
//           </Link>
//           {/* menu toggle */}
//           <BurgerButton open={showMenu} reset={() => setShowMenu(!showMenu)} />
//         </div>
//         {/* right of navbar */}
//         <div className="flex gap-4">
//           <Link
//             href={`checkout/`}
//             className="hidden xs:flex"
//             data-testid="cartIcon"
//           >
//             {/* <NavIconButton icon="bag" />{" "} */}
//             <div className="relative">
//               <NavIconButton isButton={false} icon="heart" aria-hidden="true" />
//               {!!6 && (
//                 <span
//                   className={styles["nav-icon-counter"]}
//                   data-testid="cartCounter"
//                 >
//                   6
//                 </span>
//               )}
//             </div>
//           </Link>
//           <Link
//             href={"favourites/"}
//             className="hidden xs:flex"
//             data-testid="cartIcon"
//           >
//             {/* <NavIconButton icon="bag" />{" "} */}
//             <div className="relative">
//               <NavIconButton isButton={false} icon="cart" aria-hidden="true" />
//               {!!4 && (
//                 <span
//                   className={styles["nav-icon-counter"]}
//                   data-testid="cartCounter"
//                 >
//                   4
//                 </span>
//               )}
//             </div>
//           </Link>
//           {!authenticated ? (
//             <Link href={`login`}>
//               {/* <NavIconButton isButton={false} icon="user" aria-hidden="true" /> */}
//               <p className="text-lg p-2 px-4 border border-emerald-700 rounded-lg hover:bg-emerald-700 text-emerald-700 hover:text-white font-semibold">
//                 Login
//               </p>
//             </Link>
//           ) : (
//             <UserMenu />
//           )}
//         </div>
//       </div>
//       {/* menu */}
//       <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
//     </div>
//   );
// };

export default Navbar;

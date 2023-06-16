import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { BurgerButton } from "./BurgerButton";

import { Menu } from "@/lib/types";
import CartButton from "./buttons/Cart";
import LikedButton from "./buttons/Liked";
import UserMenu from "./UserMenu";

export const Navbar = (props: { menu: Menu }) => {
  const likedCounter = 0;
  const cartCounter = 0;
  // const paths = usePaths();

  // const { authenticated: actuallyAuthenticated } = useUser();

  // const saleorApiUrl = process.env.NEXT_PUBLIC_API_URI;
  // invariant(saleorApiUrl, "Missing NEXT_PUBLIC_API_URI");
  // const domain = new URL(saleorApiUrl).hostname;
  // const { checkout } = useCheckout();
  // const { currentLocale, currentChannel } = useRegions();

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
    <nav className="relative flex flex-col items-center shadow-modal h-16">
      <div className="px-8 w-full xl:w-[1250px] h-full flex ">
        {/* right of navbar */}
        <div className=" h-full flex gap-8 justify-around items-center">
          <Link href={`/`}>
            <p className="text-2xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-bl from-emerald-700 to-lime-700">
              Шалфей
            </p>
          </Link>
          <BurgerButton menu={props.menu} />
        </div>
        {/* left of navbar */}
        <div className="flex ml-auto items-center gap-4">
          <LikedButton />
          <CartButton />
          <UserMenu />
        </div>
      </div>
      {/* nav menu */}
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

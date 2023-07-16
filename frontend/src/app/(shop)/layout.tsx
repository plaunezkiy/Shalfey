import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getMenu } from "@/lib/getMenu";
import StoreProvider from "@/lib/store/StoreProvider";
import AuthProvider from "@/lib/auth/AuthProvider";
import { Toaster } from "@/components/common/Toaster";

export const metadata = {
  title: "Шалфей",
  description: "Маркетплейс нетрадиционной медицины",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = await getMenu();

  return (
    <div
      className="flex flex-col min-h-screen z-30 font-hagrid bg-repeat bg-primary-white"
      style={{
        backgroundImage: `url(
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><image width="150" height="150" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAADZCAYAAAANIf2YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAASgSURBVHja7N1Ncts6EIVRwsX9b1fDziiTVP7sMkT07XN2ABCfGtRz9FZVXUCm+/V62QXIVLc9+P3G2AIiJrgtEDMCFzUIXNAgcFGDwIUNAhc1hAYubAgMXNgQGLiw4RM+xA0muLBB4MIGV3Rxw8gJLmwImuAlbsid4EvYMGOCA0GBixtCAxc3063Ud/DyIOCPZ6s6B15ihve5xS1qBJ4Wt6gRuLBB4KcTNQIPnN7CZrwPcYMJ3iVuYcPGwEvYkHlFFzcMuKILG8ImeIkbMid4CRsyJ7i4YcAVXdwQFniJGzIDFze4oosbugVe4obMwMUNrujihm6Bl7jBBAeaBT51evsfNHxtzypsPW2d8K/J1uEPsbw+xH/wxX6Q3w8vfnmoArCu7Anuodona3so8KTpLWz7NO4MPDXBxe3wW9/DgZcHK25rM8FPnt7iNrVH+/BwxW198yb4rs1ZHq6Db40muIdrb6yxWeDLw3XwrfH5wG2Sg48JbnqL2zoF7uHaF44J3IEQt7Wa4Mddz3HgCb2iO8wQ/g7O3A88H/D/GfiOjXI9d9gxwR1oEDg+7Kz5mMBdzx10DgncAQETHNMbgQPRgXv/BhMc13MEDgjc6wYI3PWcUYE7KGCCAwIHogP3pZT3b0xwQOCAwAGBg8ABgQMCBwQOCBwQOCBwEDggcEDggMABgQMCB4EDAgcEDggcEDggcEDg7PaO38b32/ACB4EDAodjrucIHBA4Hae3L9gEDggc794Ch7FxL4Ej7vfx/i1wTDcETjemt8AxvfnptgUIO/eGYoLTJe4atl6B47AjcPrH7cu1Lz43gSPuYL5kw5U8eP0mOCcfbtNb4JhcuKLTLewathdb1muCI24THGGLW+AI294ctQ6BO7ymdzDv4OIWd/DaTXBhizv41UXgwhZ3MIGLWtx503sJXNjiHrAPAhe2uIP/s6HA+0YhbgTuCmcdw/ZkCVwM1jLgei5wIYjbFR1RW1fXPRK4gz91fYnTewncobfGQQTusE9c55hfihW4mKetN/WLtSVwIVv7sP0UeN8DLjzT+5/84APi7v+hvASOuAcSOAgcTO9u13OBI+7ecZvgiHvyGgWOuEOnt8ARdziBI+6e03sJHHGb4CDuxOl9Xf4WHWF3i9sER9zWLXB6H3L/yk/gBE+wNTDuT6/ZOziu5MHrFzjCDryau6Ij7uCruQmOsIMnt8ARdo+4l8ARtsktcEQ9bY8EjqgDr+YCR9TBV3OBI+Zz414CR8Tijg/cFzWI+y/8JRsEvXMLHM6Me8tt1Ds4PD+1t71qmuAQGrfAIeh9W+BwVtxL4LA/6Mi4r8uXbMz15A83vu3vN0xwTPDQuE1whB0ctwmOuIPjNsERdnDcAkfYwXELHGEHxy1whB1O4Ag7cHILHGGHxy1whB0ct8AR9ffGXSY45ET96+Q2wSEk6iODFjiCHhK3wBFycNy7Aq/L75WLN1O7c3174JAZ93X556IQG7d3cAgN2wSH8LhNcAgNW+AQHLbAIThs7+Aw4O81THBEbYKDuE1wELXAQdgCB2ELHEQtcEQtcBC1wEHQAgdBCxwhs8mPAQB1ItY8ltiQgQAAAABJRU5ErkJggg==" /></svg>'
      )`,
        // "--image-url":
        //   "url(`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100' height='40'><image width='40' height='40' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFVJREFUeNrs2EENgEAQBMGBoOOsgLQTgaB1dV9Cggf2Ua2g3r2te5xJrvSsjg83mwLnnuYBAgICAgICAgICAgICAgICAgICAgIC/tV7+St9L389AgwA9YgGfH7VrXwAAAAASUVORK5CYII='/></svg>`)",
      }}
    >
      <Navbar menu={menu} />
      <div className="flex-grow container my-12 align-middle flex-1 flex flex-col backdrop-blur-sm rounded-lg p-4">
        {children}
      </div>
      <Footer />
    </div>
  );
}

import "./globals.css";
import "./build.css";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getMenu } from "@/lib/getMenu";
import StoreProvider from "@/lib/store/StoreProvider";
import AuthProvider from "@/lib/auth/AuthProvider";
import { Toaster } from "@/components/common/Toaster";
import localFont from "next/font/local";
import Head from "next/head";

const hagrid = localFont({
  src: [
    {
      path: "../../public/fonts/Hagrid-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Hagrid-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Hagrid-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Hagrid-Semibold.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Hagrid-Heavy.otf",
      weight: "700",
    },
  ],
  variable: "--font-hagrid",
});

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
    <html lang="en" className={`${hagrid.variable} font-sans`}>
      <Head>
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <AuthProvider>
          <StoreProvider>
            <>{children}</>
            <Toaster />
          </StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import "./build.css";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getMenu } from "@/lib/getMenu";
import StoreProvider from "@/lib/store/StoreProvider";
import AuthProvider from "@/lib/auth/AuthProvider";

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
    <html lang="en">
      <body>
        <AuthProvider>
          <StoreProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar menu={menu} />
              <div className="flex-grow container my-12 align-middle flex-1 flex flex-col">
                {children}
              </div>
              <Footer />
            </div>
          </StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

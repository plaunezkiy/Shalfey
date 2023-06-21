"use client";
import { useAuthContext } from "@/lib/auth/AuthProvider";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const AccountLayout = ({ children }: Props) => {
  //   const router = useRouter();
  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    return () => {
      //   if (!isAuthenticated) router.replace("/account/login");
    };
  }, []);
  return <>{children}</>;
};

export default AccountLayout;

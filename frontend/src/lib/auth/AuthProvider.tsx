"use client";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { User } from "../store/features/userSlice";
import attemptLogin from "./login";
import { useRouter } from "next/navigation";
import attemptLogout from "./logout";
import verifySession from "./verify";
import getUser from "./getUser";
import attemptSignup from "./signup";
import { VendorOwner } from "../types";

export type Credentials = {
  email: string;
  password: string;
};

export interface AuthContextType {
  register: (credentials: Credentials) => void;
  login: (credentials: Credentials) => void;
  logout: () => void;
  user: User | VendorOwner | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const register = async (credentials: Credentials) => {
    // TODO: complete
    setIsLoading(true);
    attemptSignup(credentials)
      .then((resp) => {
        setIsLoading(false);
        if (resp.ok) {
          login(credentials);
          return;
        }
        return resp.json();
      })
      .then((data) => {
        if (data.error) setError(data.error);
      });
  };

  const login = async (credetials: Credentials) => {
    setIsLoading(true);
    attemptLogin(credetials).then((data) => {
      setUser(data);
      setIsLoading(false);
      router.replace("/home");
    });
  };

  const logout = async () => {
    setIsLoading(true);
    attemptLogout().then(() => {
      setUser(null);
      setIsLoading(false);
      router.replace("/home");
    });
  };

  const verify = async () => {
    // if the token is present, try to verify
    const token = JSON.parse(localStorage.getItem("access") || "null");
    if (token) {
      setIsLoading(true);
      await verifySession(token).then(async (resp) => {
        if (resp.ok) {
          // fetch user
          await getUser().then((data) => {
            setUser(data.user);
          });
        } else {
          // clear the session if the token expired
          setUser(null);
          localStorage.removeItem("access");
        }
        setIsLoading(false);
      });
    }
  };

  useEffect(() => {
    // try to fetch the user on page load
    verify();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        logout,
        isLoading,
        user,
        error,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);

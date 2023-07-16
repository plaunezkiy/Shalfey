"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { API_URL } from "@/lib/const";
import { useAuthContext } from "@/lib/auth/AuthProvider";

const user = {
  id: 1,
  email: "admin@test.com",
  first_name: "Админ",
  last_name: "Админов",
  is_active: true,
  role: "moderator",
};

const LoginPage = async () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const { login } = useAuthContext();

  const signIn = async () => {
    login({ email: emailRef.current, password: passRef.current });
  };

  return (
    <div className="bg-gray-200 rounded-lg shadow-xl border border-gray-300">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href={`/`}>
          <p className="text-3xl mb-6 font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-bl from-emerald-700 to-lime-700">
            Шалфей
          </p>
        </Link>
        {/* <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          Шалфей
        </a> */}
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  onChange={(e) => (emailRef.current = e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  onChange={(e) => (passRef.current = e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                onClick={signIn}
                className="w-full text-white border border-green-600 bg-green-600 hover:bg-white hover:text-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-150"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <Link
                  href={"/account/signup"}
                  className="font-medium text-primary-600 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

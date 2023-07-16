"use client";
import { useAuthContext } from "@/lib/auth/AuthProvider";
import Link from "next/link";
import { useRef } from "react";

const SignupPage = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const passConfirmRef = useRef("");
  const { register } = useAuthContext();

  const signup = () => {
    if (
      passRef.current === passConfirmRef.current &&
      passRef.current.trim().length
    ) {
      register({ email: emailRef.current, password: passRef.current });
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href={`/`}>
          <p className="text-3xl mb-6 font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-bl from-emerald-700 to-lime-700">
            Шалфей
          </p>
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
              Регистрация
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Ваш email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg"
                  placeholder="name@company.com"
                  onChange={(e) => (emailRef.current = e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Пароль
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg"
                  onChange={(e) => (passRef.current = e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Пароль еще раз
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="w-full py-2 px-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg"
                  onChange={(e) => (passConfirmRef.current = e.target.value)}
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500">
                    Я принимаю{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline"
                      href="#"
                    >
                      Условия Соглашения
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                onClick={signup}
                className="w-full py-2 text-green-600 border border-green-600 bg-primary-600 hover:bg-green-600 hover:text-white rounded"
              >
                Зарегистрироваться
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Уже зарегистрированы?{" "}
                <Link
                  href="/account/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Войти тут
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;

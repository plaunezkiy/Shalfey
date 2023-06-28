"use client";
import { toast } from "@/lib/hooks/useToast";

const AuthTab = () => {
  return (
    <div className="w-full flex flex-col text-sm text-blue-600 gap-2">
      <p
        className="cursor-pointer hover:text-blue-400 duration-150"
        onClick={() => {
          toast({ description: "Ваш пароль был успешно изменен" });
        }}
      >
        Сменить пароль
      </p>
      <p
        className="cursor-pointer hover:text-blue-400 duration-150"
        onClick={() => {
          toast({ description: "Ваш email был успешно изменен" });
        }}
      >
        Изменить email
      </p>
    </div>
  );
};

export default AuthTab;

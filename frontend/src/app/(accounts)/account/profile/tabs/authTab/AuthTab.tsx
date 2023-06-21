const AuthTab = () => {
  return (
    <div className="w-full flex flex-col text-sm text-blue-600 gap-2">
      <p className="cursor-pointer hover:text-blue-400 duration-150">
        Сменить пароль
      </p>
      <p className="cursor-pointer hover:text-blue-400 duration-150">
        Изменить email
      </p>
    </div>
  );
};

export default AuthTab;

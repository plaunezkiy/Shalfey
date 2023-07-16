const CheckoutForm = () => {
  return (
    <div className="mx-auto max-w-lg px-4 lg:px-8">
      <form className="grid grid-cols-6 gap-4">
        <div className="col-span-3">
          <label
            htmlFor="FirstName"
            className="block text-lg font-medium text-gray-700"
          >
            Имя
          </label>

          <input
            type="text"
            id="FirstName"
            placeholder="Иван"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-lg"
          />
        </div>

        <div className="col-span-3">
          <label
            htmlFor="LastName"
            className="block text-lg font-medium text-gray-700"
          >
            Фамилия
          </label>

          <input
            type="text"
            id="LastName"
            placeholder="Иванов"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-lg"
          />
        </div>

        <div className="col-span-6">
          <label
            htmlFor="Email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>

          <input
            type="email"
            id="Email"
            placeholder="ivanov@mail.ru"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-lg"
          />
        </div>

        <div className="col-span-6">
          <label
            htmlFor="Phone"
            className="block text-lg font-medium text-gray-700"
          >
            Номер Телефона
          </label>

          <input
            type="tel"
            id="Phone"
            placeholder="+7 (9XX)-XXX-XX-XX"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-lg"
          />
        </div>

        <fieldset className="col-span-6">
          <legend className="block text-lg font-medium text-gray-700">
            Оплата
          </legend>

          <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
            <div>
              <label htmlFor="CardNumber" className="sr-only">
                {" "}
                Card Number{" "}
              </label>

              <input
                type="text"
                id="CardNumber"
                placeholder="Номер Карты"
                className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-lg"
              />
            </div>

            <div className="flex">
              <div className="flex-1">
                <label htmlFor="CardExpiry" className="sr-only">
                  {" "}
                  Card Expiry{" "}
                </label>

                <input
                  type="text"
                  id="CardExpiry"
                  placeholder="Месяц/Год"
                  className="relative w-full rounded-es-md border-gray-200 focus:z-10 sm:text-lg"
                />
              </div>

              <div className="-ms-px flex-1">
                <label htmlFor="CardCVC" className="sr-only">
                  {" "}
                  Card CVC{" "}
                </label>

                <input
                  type="text"
                  id="CardCVC"
                  placeholder="CVC"
                  className="relative w-full rounded-ee-md border-gray-200 focus:z-10 sm:text-lg"
                />
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="col-span-6">
          <legend className="block text-lg font-medium text-gray-700">
            Адрес Доставки
          </legend>

          <div className="-space-y-px rounded-md bg-white shadow-sm">
            <div>
              <label htmlFor="Country" className="sr-only">
                Регион
              </label>

              <select
                id="Country"
                className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-lg"
              >
                <option>Москва</option>
                <option>Санкт-Петербург</option>
                <option>Новосибирск</option>
                <option>Омск</option>
                <option>Екатеринбург</option>
                <option>Якутск</option>
              </select>
            </div>
            <div>
              <label htmlFor="address" className="sr-only">
                {" "}
                Адрес{" "}
              </label>

              <input
                type="text"
                id="address"
                placeholder="Адрес"
                className="relative w-full border-gray-200 focus:z-10 sm:text-lg"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="PostalCode">
                {" "}
                Почтовый Индекс{" "}
              </label>

              <input
                type="text"
                id="PostalCode"
                placeholder="Почтовый Индекс"
                className="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-lg"
              />
            </div>
          </div>
        </fieldset>

        <div className="col-span-6">
          <button className="block w-full rounded-md bg-black p-2.5 text-lg text-white transition hover:shadow-lg">
            Оплатить
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;

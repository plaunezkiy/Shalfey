"use client";
import React, { useState } from "react";
import { AddressCard, AddressCardWrapper, Address } from "./AddressCard";
import { AddressCardDialog } from "./AddressCardDialog";

const AddressTab = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      name: "Домашний",
      apartment: "123",
      house: "1/4",
      street: "ул. Бертина",
      city: "Москва",
      postcode: "678900",
    },
  ]);

  return (
    <div className="h-full flex flex-wrap gap-8">
      <AddressCardWrapper>
        <AddressCardDialog>
          <div className="h-full flex flex-col items-center justify-center">
            <p className="text-xl font-semibold">Добавить новый</p>
          </div>
        </AddressCardDialog>
      </AddressCardWrapper>
      {addresses.map((address) => (
        <AddressCard key={address.id} address={address} />
      ))}
    </div>
  );
};

export default AddressTab;

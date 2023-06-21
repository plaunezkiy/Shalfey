import { AddressCardDialog } from "./AddressCardDialog";

export type Address = {
  id: number;
  name: string;
  apartment: string;
  house: string;
  street: string;
  city: string;
  postcode: string;
};

export const AddressCardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-56 h-64 px-2 py-4 justify-center rounded-lg border border-gray-300 shadow hover:shadow-modal duration-300 cursor-pointer hover:text-blue-500">
      {children}
    </div>
  );
};

export const AddressCard = ({ address }: { address: Address }) => {
  return (
    <>
      <AddressCardWrapper>
        <AddressCardDialog address={address}>
          <div className="h-full flex flex-col items-center justify-center">
            <p className="-mt-4 mb-4 text-xl font-semibold">{address.name}</p>
            <p>
              {address.house}, {address.street},
            </p>
            <p>
              {address.city}, {address.postcode}
            </p>
          </div>
        </AddressCardDialog>
      </AddressCardWrapper>
    </>
  );
};

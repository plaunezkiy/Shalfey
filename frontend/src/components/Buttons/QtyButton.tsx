import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
  className?: string;
}

const QtyButton = (props: Props) => {
  const butStyle = `w-16 px-2 border rounded-lg font-semibold text-lg`;

  return (
    <div
      className={`w-full font-medium text-2xl flex gap-2 items-center justify-around select-none ${props.className}`}
    >
      <button
        onClick={props.onDecrease}
        className={`${butStyle} border-primary-red text-primary-red hover:bg-primary-red hover:text-white`}
      >
        <MinusIcon />
      </button>
      <p className="w-10 text-center">{props.qty}</p>
      <button
        onClick={props.onIncrease}
        className={`${butStyle} border-primary-main text-primary-main hover:bg-primary-main hover:text-white`}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default QtyButton;

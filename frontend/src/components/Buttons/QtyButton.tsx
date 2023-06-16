interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
  className?: string;
}

const QtyButton = (props: Props) => {
  const butStyle = `w-16 p-2 border rounded-lg font-semibold text-lg`;

  return (
    <div
      className={`w-full flex gap-2 items-center justify-around select-none ${props.className}`}
    >
      <button
        onClick={props.onDecrease}
        className={`${butStyle} border-red-400 text-red-400 hover:text-white hover:bg-red-400`}
      >
        -
      </button>
      <p className="w-10 text-center font-medium">{props.qty}</p>
      <button
        onClick={props.onIncrease}
        className={`${butStyle} border-emerald-400 text-emerald-400 hover:text-white hover:bg-emerald-400`}
      >
        +
      </button>
    </div>
  );
};

export default QtyButton;

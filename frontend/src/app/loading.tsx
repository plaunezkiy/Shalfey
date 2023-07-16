import Spinner from "@/components/Loaders/Spinner";

const LoadingScreen = () => {
  return (
    <div className="w-full flex flex-col">
      <p>Loading</p>
      <span className="rounded-full text-gray-200 animate-spin"></span>
    </div>
  );
};

export default () => (
  <div className="flex flex-grow items-center justify-center">
    <Spinner />;
  </div>
);

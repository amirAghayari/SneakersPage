import AddBtn from "./AddBtn";
import Counter from "./Counter";

const Main: React.FC = () => {
  return (
    <main className="w-screen h-screen bg-gray-100 flex flex-col lg:flex-row items-center justify-center p-4">
      {/* Images */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center"></div>

      {/* Description */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center p-8">
        <p className="text-gray-500 text-sm">SNEAKER COMPANY</p>
        <h1 className="text-gray-800 font-bold text-2xl md:text-3xl mt-4 mb-6">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          These low-profile Sneaker are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex items-center mt-6">
          <h2 className="text-gray-800 font-extrabold text-2xl md:text-3xl">
            $125.00
          </h2>
          <span className="text-gray-200 font-bold bg-gray-800 px-2 ml-4 rounded-lg">
            50%
          </span>
        </div>
        <h3 className="text-gray-600 font-bold text-sm line-through mt-2">
          $250.00
        </h3>
        <div className="flex flex-row  items-center gap-4 mt-8">
          <Counter />
          <AddBtn />
        </div>
      </div>
    </main>
  );
};

export default Main;

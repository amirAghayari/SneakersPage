import { CiShoppingCart } from "react-icons/ci";

const AddBtn = () => {
  return (
    <button className="btn btn-wide sm:w-48 md:w-56 lg:w-64 h-12 md:h-14 !bg-orange-500 text-gray-800 font-extrabold rounded-lg shadow-md hover:!bg-orange-600 transition-colors duration-200 flex items-center justify-center gap-2 px-4">
      <CiShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
      <span className="text-sm md:text-base">Add to cart</span>
    </button>
  );
};

export default AddBtn;

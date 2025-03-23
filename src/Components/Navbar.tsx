import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-gray-100 shadow-md w-screen p-4 fixed top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo*/}
        <a className="text-xl font-extrabold !text-gray-800">SNEAKERS</a>

        {/* desktop items*/}
        <ul className="hidden md:flex space-x-6 text-gray-500">
          <li className="hover:text-primary cursor-pointer">Collections</li>
          <li className="hover:text-primary cursor-pointer">Men</li>
          <li className="hover:text-primary cursor-pointer">Women</li>
          <li className="hover:text-primary cursor-pointer">About</li>
          <li className="hover:text-primary cursor-pointer">Contact</li>
        </ul>

        {/* icons of avatar and cart*/}
        <div className="flex items-center space-x-4 "></div>
        <div className="flex-none  ">
          <div className="dropdown dropdown-end mr-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <CiShoppingCart className="text-gray-500 w-6 h-6" />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-gray-300 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold text-gray-700">8 Items</span>
                <span className="text-success">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary !bg-gray-100 text-neutral btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="./image-avatar.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-200  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between !text-neutral">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a className="!text-neutral">Settings</a>
              </li>
              <li>
                <a className="!text-neutral">Logout</a>
              </li>
            </ul>
          </div>
        </div>

        {/* menu btn on mobile */}
        <button
          className="md:hidden btn btn-ghost"
          onClick={() => setIsOpen(!isOpen)}
        >
          <TiThMenu />
        </button>
      </div>

      {/* mobile menu*/}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-gray-100 text-gray-600 shadow-lg p-4 space-y-4">
          <li className="hover:text-primary cursor-pointer">Collections</li>
          <li className="hover:text-primary cursor-pointer">Men</li>
          <li className="hover:text-primary cursor-pointer">Women</li>
          <li className="hover:text-primary cursor-pointer">About</li>
          <li className="hover:text-primary cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

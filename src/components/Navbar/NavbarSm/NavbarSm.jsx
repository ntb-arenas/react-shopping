import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import useToggle from "../../../hooks/useToggle";
import Navlinks from "./Navlinks";

const NavbarSm = ({ allProducts, filterProduct, cart, toggleCart }) => {
  const { value: isNavlinkOpen, toggleValue: toggleNavLinks } = useToggle(false);

  const productCategory = allProducts.map((product) => product.category);
  const filteredCategory = [...new Set(productCategory)];

  return (
    <div className="flex justify-end mx-10 my-2 md:hidden">
      <div className="flex">
        <button className="mr-5 text-2xl transition duration-200 hover:text-neutral-500" onClick={toggleNavLinks}>
          <RxHamburgerMenu />
        </button>
        <button className="flex text-2xl transition duration-200 hover:text-neutral-500" onClick={toggleCart}>
          <AiOutlineShoppingCart />
          <span className="relative text-base -top-3">{cart.length}</span>
        </button>
      </div>

      <div className={`${isNavlinkOpen ? "right-0" : "-right-full"} p-5 fixed top-0 z-10 transition-all duration-300 bg-gray-100  w-full h-full `}>
        <div className="flex justify-end ">
          <button onClick={() => toggleNavLinks(false)} className="text-red-500 text-[2rem]">
            <IoClose />
          </button>
        </div>

        <Navlinks filteredCategory={filteredCategory} filterProduct={filterProduct} toggleNavLinks={toggleNavLinks} />
      </div>
    </div>
  );
};

export default NavbarSm;

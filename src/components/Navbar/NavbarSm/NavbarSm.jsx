import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import useToggle from "../../../hooks/useToggle";
import useCheckMobile from "../../../hooks/useCheckMobile";

const NavbarMobile = ({ products, filterProduct, cart, toggleValue: toggleCart }) => {
  const { value: isOpen, toggleValue: toggleNavLinks } = useToggle(false);
  const { isMobile } = useCheckMobile(false);

  if (isOpen && isMobile) {
    // If navLink is open and device is mobile
    document.body.style.overflow = "hidden";
    // safari
    document.body.style.WebkitOverflowScrolling = "touch";
  } else {
    document.body.style.overflow = "auto";
    document.body.style.WebkitOverflowScrolling = "auto";
  }

  const productCategory = products.map((product) => product.category);
  const filteredCategory = [...new Set(productCategory)];

  return (
    <div className="flex justify-end mx-10 my-2">
      <div className="flex">
        <button className="mr-5 text-2xl transition duration-200 hover:text-neutral-500" onClick={toggleNavLinks}>
          <RxHamburgerMenu />
        </button>
        <button className="flex text-2xl transition duration-200 hover:text-neutral-500" onClick={toggleCart}>
          <AiOutlineShoppingCart />
          <span className="relative text-base -top-3">{cart.length}</span>
        </button>
      </div>

      <div className={`${isOpen ? "right-0" : "-right-full"} p-5 fixed top-0 z-10 transition-all duration-300 bg-gray-100  w-full h-full `}>
        <div className="flex justify-end ">
          <button onClick={() => toggleNavLinks(false)} className="text-red-500 text-[2rem]">
            <IoClose />
          </button>
        </div>

        <div className="flex flex-col justify-center mx-auto text-xl divide-y divide-gray-300 ">
          <button
            className="py-5 transition duration-200 hover:text-neutral-500"
            onClick={() => {
              filterProduct("all");
              toggleNavLinks(false);
            }}
          >
            ALL PRODUCTS
          </button>

          {filteredCategory.map((category, index) => (
            <button
              key={index}
              className="py-5 transition duration-200 hover:text-neutral-500"
              onClick={() => {
                filterProduct(`${category}`);
                toggleNavLinks(false);
              }}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;

import React from "react";
import NavbarLg from "./NavbarLg/NavbarLg";
import NavbarSm from "./NavbarSm/NavbarSm";

const Navbar = ({ allProducts, filterProduct, toggleCart, cart }) => {
  return (
    <React.Fragment>
      <NavbarSm filterProduct={filterProduct} allProducts={allProducts} cart={cart} toggleCart={toggleCart} />
      <NavbarLg filterProduct={filterProduct} allProducts={allProducts} cart={cart} toggleCart={toggleCart} />
    </React.Fragment>
  );
};

export default Navbar;

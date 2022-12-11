import React from "react";
import NavbarLg from "./NavbarLg/NavbarLg";
import NavbarSm from "./NavbarSm/NavbarSm";

const Navbar = ({ products, filterProduct, toggleValue, cart }) => {
  return (
    <React.Fragment>
      <NavbarSm filterProduct={filterProduct} products={products} cart={cart} toggleValue={toggleValue} />
      {/* <NavbarLg filterProduct={filterProduct} products={products} cart={cart} toggleValue={toggleValue} /> */}
    </React.Fragment>
  );
};

export default Navbar;

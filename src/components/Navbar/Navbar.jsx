import React from "react";
import NavbarLg from "./NavbarLg/NavbarLg";
import NavbarSm from "./NavbarSm/NavbarSm";
import useCheckMobile from "../../hooks/useCheckMobile";

const Navbar = ({ products, filterProduct, toggleValue, cart }) => {
  const { isMobile } = useCheckMobile(false);

  return (
    <React.Fragment>
      {isMobile ? (
        <NavbarSm filterProduct={filterProduct} products={products} cart={cart} toggleValue={toggleValue} />
      ) : (
        <NavbarLg filterProduct={filterProduct} products={products} cart={cart} toggleValue={toggleValue} />
      )}
    </React.Fragment>
  );
};

export default Navbar;

import { FaShoppingCart } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <div className="flex justify-between">
        <NavLink to="/">
        <img src='../logo.png' alt=""  className="h-14"/>
        </NavLink>
        <div>
          <NavLink>
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
 if (cart) {
  setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
 }
  }, [cart]);

  return (
    <div>
      {cart && cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, idx) => (
              <CartItem key={item.id} item={item} itemIdx={idx} />
            ))}
          </div>

          <div>
            <div>your Cart</div>
            <div>Summary</div>

            <p>
              <span>Total Items: {cart.length}</span>
            </p>
          </div>

          <div>
            <p>Total Amount : ${totalAmount}</p>
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart Empty</h1>
          <NavLink to={"/"}>
            <button>Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
